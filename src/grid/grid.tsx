import * as React from 'react'
import * as _ from 'lodash'
import { classes, createTypeStyle, media, style as _style } from 'typestyle'
import { ALIGN, CLASSES, CONTAINER_TYPE, VIEW_WIDTHS, populateGridStyle } from './grid-classes'
import { ab, abc } from '../util'

export interface IColumn {
  size?: number
  gap?: number
  style?: object
}

export interface ISpacing {
  [key: string]: any
  gap: number
  lg?: ISpacing
  md?: ISpacing
  sm?: ISpacing
  xl?: ISpacing
  xs?: ISpacing
}

export interface IProps {
  [key: string]: any
  /** Column size or object for Large View */
  lg?: number | IColumn | null
  /** Column size or object for Medium View */
  md?: number | IColumn | null
  /** Column size or object for Small View */
  sm?: number | IColumn | null
  /** Column size or object for Extra Large View */
  xl?: number | IColumn | null
  /** Column size or object for Extra Small View */
  xs?: number | IColumn | null
  /** Align alignment for the grid itself */
  align?: string
  /** Align for children */
  alignItems?: string | string[]
  /** Either Row or Column */
  container?: boolean
  /** Gap between grids */
  gap?: number
  /** Turn on parallax effect on background image */
  parallax?: boolean | {speed: number}
  /** @ignore */
  spacing?: ISpacing
  /** Style properties for grid */
  style?: object
  /** Class name for grid */
  className?: string
  /** @ignore */
  children?: any
  /** Set true to disable */
  disabled?: boolean
}

export interface IStates {
  classNames: string
  alignClassName: string
}

class Grid extends React.Component<IProps, IStates> {
  /** Node for parallax effect */
  public parent: HTMLDivElement

  constructor (props: IProps) {
    super(props)

    this.state = {
      alignClassName: '',
      classNames: ''
    }
  }

  public render () {
    const { container, disabled } = this.props
    const { classNames, alignClassName } = this.state
    const defaultClassName = CLASSES[abc(container, CONTAINER_TYPE.row, CONTAINER_TYPE.column)]

    return (
      <div
        className = {classes(defaultClassName, classNames, alignClassName)}
        ref = {(parent) => {
          this.parent = parent
        }}
      >
        {this.display()}
        <div
          className = {classes(CLASSES.disableWrapper, disabled ? CLASSES.disableWrapperActive : null)}
        />
      </div>
    )
  }

  public componentDidMount () {
    const { parallax } = this.props
    const updatedClasses = this.updateClasses()

    if (parallax) {
      this.initParallax()
    }

    this.setState({
      alignClassName: _style(updatedClasses.alignStyles),
      classNames: _style(...updatedClasses.styles)
    })
  }

  public updateClasses (): {styles: object[], alignStyles: {}} {
    const { align, alignItems, container, spacing, style } = this.props
    const self = this
    const viewWidths = { ...VIEW_WIDTHS }
    /* Insert default styles and props.style first */
    const styles = style ? [style] : []

    /*
     * Iterate and stack styles in specific view width, larger column size
     * to smaller column size so that smaller style overrides bigger ones
     */
    for (const key in viewWidths) {
      if (viewWidths[key]) {
        const viewWidth = this.iterateViewWidth(viewWidths[key], key)
        const styleByViewWidth = this.createStyleByColumnName(key)

        if (styleByViewWidth) {
          styles.push(styleByViewWidth)
        }

        if (spacing) {
          if (spacing[key]) {
            styles.push(viewWidth)
          }
        }
      }
    }

    return {
      alignStyles: this.createAlignStyle(align, alignItems),
      styles
    }
  }

  /**
   * iterateViewWidth is a callback for iterating VIEW_WIDTH to create styles
   * for individual columns
   * @param {Object} viewWidth Object in VIEW_WIDTHS
   * @param {number} index index for iterator
   */
  public iterateViewWidth = (viewWidth: object, key: string) => {
    const {
      container,
      spacing,
      style,
      ...other
    } = this.props

    // const gap = !_.isNil(spacing[key]) ? spacing[key] : spacing.gap
    let gap

    if (spacing && typeof spacing[key.toString()] === 'number') {
      gap = spacing[key]
    } else {
      if (typeof spacing === 'object' && spacing.hasOwnProperty('gap')) {
        if (spacing.gap) {
          gap = spacing.gap
        }
      }
    }

    const columnSize = _.isPlainObject(other[key]) ? other[key].size : other[key]

    return populateGridStyle(key, {}, gap, columnSize)
  }

  /**
   * Takes column size like bootstrap, locate media query related to the size,
   * and returns style object
   * @param {string} name
   */
  public createStyleByColumnName (name: string) {
    const column = this.props[name]

    if (_.isNumber(column)) {
      return populateGridStyle(name, column, null, column)
    } else if (_.isPlainObject(column)) {
      const { align, alignItems } = column
      const alignStyle = this.createAlignStyle(align, alignItems)

      if (column || column.style) {
        return populateGridStyle(
          name, {
            ...column.style,
            ...alignStyle
          },
          null,
          column.size
        )
      } else {
        return false
      }
    }
  }

  /**
   *   Align prop is either string or array. If string, it will fed to both 'justifyContnt' and 'alignItems'
   */
  private createAlignStyle = (align?: string, alignItems?: string | string[]): object => {
    const alignStyle: {justifyContent: string, alignItems: string} = {
      alignItems: '',
      justifyContent: ''
    }

    if (typeof alignItems === 'string') {
      alignStyle.justifyContent = ab(ALIGN[alignItems], ALIGN.left)
      alignStyle.alignItems = ab(ALIGN[alignItems], ALIGN.top)
    } else if (_.isArray(alignItems)) {
      alignStyle.justifyContent = ab(ALIGN[alignItems ? alignItems[0] : ALIGN.left], ALIGN.left)
      alignStyle.alignItems = ab(ALIGN[alignItems ? alignItems[1] : ALIGN.top], ALIGN.top)
    }

    return {
      alignSelf: align ? ALIGN[align] : '',
      ...alignStyle
    }
  }

  private initParallax = (): void => {
    const { parallax } = this.props

    if (this.parent && parallax) {
      this.updateParallax()

      window.onscroll = () => {
        this.updateParallax()
      }
    }
  }

  private updateParallax (): void {
    const { parallax } = this.props
    const yOffset = window.pageYOffset

    if (this.parent) {

      const parent = this.parent

      if (typeof parallax === 'object' && parallax.speed) {
        parent.style.backgroundPosition = `50% ${yOffset * parallax.speed}px`
      } else {
        parent.style.backgroundPosition = `50% ${yOffset * 0.5}px`
      }
    }
  }

  private display = () => {
    const { children, gap, lg, md, sm, xl, xs } = this.props

    if (!children) {
      return null
    } else if (_.isString(children)) {
      // Need to send warning
      return children
    }

    return React.Children.map(
      children,
      (child) => {
        if (typeof child !== 'number' && typeof child !== 'string') {
          return (
            React.cloneElement(child, {
              spacing: {
                gap,
                lg: lg ? (typeof lg === 'number' ? lg : (lg.gap ? lg.gap : 0)) : 0,
                md: md ? (typeof md === 'number' ? md : (md.gap ? md.gap : 0)) : 0,
                sm: sm ? (typeof sm === 'number' ? sm : (sm.gap ? sm.gap : 0)) : 0,
                xl: xl ? (typeof xl === 'number' ? xl : (xl.gap ? xl.gap : 0)) : 0,
                xs: xs ? (typeof xs === 'number' ? xs : (xs.gap ? xs.gap : 0)) : 0
              },
              style: { ...child.props.style },
              ...child.props
            })
          )
        } else {
          return child
        }
      }
    )
  }
}

export default Grid
