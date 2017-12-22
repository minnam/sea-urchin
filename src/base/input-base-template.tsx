import * as React from 'react'
import { style, classes } from 'typestyle'

import HoverEffect from '../hover-effect'
import Theme from '../theme-provider'
import { checkPathValid } from '../theme-util.js'

import { IProps as IBaseProps } from './input-base'
import { ILayout } from './input-base-classes'

export interface IProps extends IBaseProps {
  [index: string]: any
  children?: {}
  classNames?: ILayout
  disableHoverEffect?: boolean
  disableIcon?: boolean
  fluidIndex ?: number
  focused?: boolean
  height?: number
  highlightOffset?: number
  hint?: string
  hintClass?: string
  hintStyle?: React.CSSProperties
  input?: HTMLInputElement // need to check if dom input element
  label?: string
  labelClass?: string
  labelFocusedClass?: string
  labelFocusedStyle?: React.CSSProperties
  labelParentStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
  mouseOver?: boolean
  parentClass?: string
  postLabel?: any
  postLabelClass?: string
  postLabelParentClass?: string
  preLabel?: any
  preLabelClass?: string
  preLabelParentClass?: string
  primaryIcon?: any
  primaryIconClass?: string
  primaryIconStyle?: React.CSSProperties
  value?: string
  setFluidFocus?: any
}

class InputBaseTemplate extends React.Component<IProps> {
  private theme: object

  constructor (props: IProps) {
    super(props)

    if (checkPathValid(Theme, 'default')) {
      this.theme = Theme.default
    } else {
      this.theme = {}
    }
    this.state = {}
  }

  public render () {
    const {
      classNames,
      children,
      disableHoverEffect,
      disableIcon,
      focus, // Need to check if function
      focused,
      height = 60,
      highlightOffset = 0,
      hint,
      hintStyle,
      hintClass,
      input, // need to check if dom input element
      label,
      labelClass,
      labelFocusedClass,
      labelFocusedStyle,
      labelParentStyle,
      labelStyle,
      layout,
      onClick, // Need to check if function
      preLabel,
      primaryIcon,
      primaryIconStyle,
      primaryIconClass,
      value,
      parentClass,
      preLabelParentClass,
      preLabelClass,
      postLabel,
      postLabelClass,
      postLabelParentClass,
      mouseOver
    } = this.props

    const blurredAndEmpty = !focused && value === ''
    const focusedAndEmpty = focused && value === ''

    return (
      <div
        className = {
          classes(
            classNames.parent,
            parentClass,
            blurredAndEmpty ? classNames.parentFocused : null
          )
        }
        onMouseOver = {this.props.handleMouseOver}
        onMouseLeave = {this.props.handleMouseLeave}
        onClick = {this.props.handleClick}
        onTouchStart = {this.props.handleClick}
      >
        {/* PreLabel */}
        {
          preLabel ? <span
            className = {classes('noselect', classNames.preLabel, preLabelParentClass)}
            style = {
              height ? {
              } : {
                height,
                lineHeight: `${height}px`
              }
            }
          >
            {/* Hover Effect for PreLabel */}
            {disableHoverEffect ? '' : <HoverEffect mouseOver = {mouseOver}/>}
            {
              React.cloneElement(preLabel, {
                ...preLabel.props,
                className: classes(preLabel.props.className, classNames.preLabel, preLabelClass)
              })
            }
          </span> : ''
        }
        {/* PrimaryIcon and Label */}
        <div
          className = {
            classes(
              'noselect',
              classNames.labelParent,
              blurredAndEmpty ? null : classNames.labelParentFocused
            )
          }
        >
          <i
            className = {classes(
              'material-icons',
              classNames.primaryIcon,
              primaryIconClass,
              focused ? classNames.primaryIconFocused : null
            )}
            style = {{
              lineHeight: blurredAndEmpty ? `${height}px` : ''
            }}
          >
            {primaryIcon}
          </i>
          <span
            className = {
              classes(
                classNames.label,
                labelClass,
                focusedAndEmpty ? labelFocusedClass : null
              )
            }
            style = {{
              lineHeight: blurredAndEmpty ? `${height}px` : ''
            }}
          >
            {label}
          </span>
        </div>
        {/* PostLabel */}
        {
          postLabel ? <span
            className = {classes(
              classNames.postLabel,
              postLabelParentClass
            )}
            style = {
              height ? {
              } : {
                height,
                lineHeight: `${height}px`
              }
            }
          >
            {/* Hover Effect for PreLabel */}
            {disableHoverEffect ? '' : <HoverEffect mouseOver = {mouseOver}/>}
            {
              React.cloneElement(postLabel, {
                ...postLabel.props,
                className: classes(postLabel.props.className, classNames.preLabel, postLabelClass)
              })
            }
          </span> : ''
        }
        {/* Hover Effect */}
        { disableHoverEffect ? '' : <HoverEffect mouseOver = {mouseOver}/>}
        {/* Highlight */}
        <div
          className = {
            classes(
              classNames.highlight,
              focused ? classNames.highlightFocused : null
            )
          }
          style = {{
            height,
            top: highlightOffset
          }}
        />
        {/* Children */}
        {children}
      </div>
    )
  }
}

export default InputBaseTemplate
