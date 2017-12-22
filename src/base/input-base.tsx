import * as React from 'react'
import InputBaseTemplate from './input-base-template'
import CLASSES from './input-base-classes'

export interface IProps {
  [key: string]: any
  focus?: () => void
  focused?: boolean
  input?: HTMLInputElement
  onClick?: (event: any) => void
  onMouseOver?: () => {}
  layout?: 'vertical' | 'horizontal'
  handleClick?: (event: any) => void
  onChange?: (event: any, target: any, value: any) => void
}

export interface IState {
  mouseOver: boolean
}

class InputBase extends React.Component<IProps, IState> {

  constructor (props: IProps) {
    super(props)

    this.state = { mouseOver: false }

    this.handleClick = this.handleClick.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  public wrap (classNames: object): any {
    const { mouseOver } = this.state
    return (
      React.createElement(
        InputBaseTemplate,
        {
          ...this.props,
          classNames,
          handleClick: this.handleClick,
          handleMouseLeave: this.handleMouseLeave,
          handleMouseOver: this.handleMouseOver,
          mouseOver
        }
      )
    )
  }

  public render (): any {
    const { layout } = this.props

    switch (layout) {
      case 'vertical': {
        return this.wrap(CLASSES.vertical)
      }
      case 'horizontal':
      default: {
        return this.wrap(CLASSES.horizontal)
      }
    }
  }

  public handleClick (event: any): void {
    const {
      focus,
      focused,
      input,
      onClick
    } = this.props

    if (onClick) {
      onClick(event)
    } else {
      if (!focused) {
        focus()
        if (input) {
          input.focus()
        }
      }
    }
  }

  public handleMouseOver (): void {
    const { onMouseOver } = this.props

    if (onMouseOver) {
      onMouseOver()
    }
    this.setState({ mouseOver: true })
  }

  public handleMouseLeave (): void {
    this.setState({ mouseOver: false })
  }

}

export default InputBase
