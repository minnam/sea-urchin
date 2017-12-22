import * as React from 'react'
import { style, classes } from 'typestyle'
import { InputBase } from '../base/'
import { getTheme } from '../theme-util'
import CLASSES from './input-field-classes'
import { IProps as IBaseProps } from '../base/input-base-template'

export interface IProps extends IBaseProps {
  hint: string
  default: string
  fluidIndex: number
}

export interface IState {
  focused?: boolean
}

class InputField extends React.Component<IProps, IState> {
  public theme: any
  public input: HTMLInputElement

  constructor (props: IProps) {
    super(props)

    this.theme = getTheme(this, 'textInput')
    this.state = {}
  }

  public render () {
    const { 
      hint,
      value = '',
      onChange,
      onClear
    } = this.props
    const { focused } = this.state

    return (
      <InputBase
        focus = {this.focus}
        focused = {focused}
        value = {value}
        onClick = {this.handleClick}
        hintClass = {this.theme.hint}
        labelClass = {this.theme.label}
        parentClass = {this.theme.style}
        primaryIconClass = {this.theme.primaryIcon}
        postLabel = {
          <div
            style = {{
              fontWeight: 700,
              fontSize: 11,
              color: 'rgb(120,120,120)',
              paddingRight: 10,
              cursor: 'pointer',
              zIndex: 10,
              display: value !== '' ? 'inline' : 'none'
            }}
            onClick = {(event) => {
              event.stopPropagation()
              if (onClear) {
                onClear()
              }
              this.input.focus()
            }}
          >
            CLEAR
          </div>
        }
        {...this.props}
      >
        {/* Hint */}
        <div
          className = {
            classes(
              CLASSES.hint,
              this.theme.hint,
              focused && value === '' ? null : CLASSES.hintHide
            )
          }
        >
          {hint}
        </div>
        <input
          className = {CLASSES.input}
          ref = {(input): void => {
            this.input = input
          }}
          onBlur={this.blur}
          onChange={(event): void => {
            if (onChange) {
              onChange(event, event.target, event.target.value)
            }
          }}
          onClick={(event): void => {
            event.stopPropagation()
          }}
          onFocus={this.focus}
          value={value}
        />
      </InputBase>
    )
  }

  public componentDidMount () {
    this.theme = getTheme(this, 'textInput')
  }

  /**
   *   Following will force the text cursor to be at the end of the text when focused
   *   "event.stopPropagation()" is added on input onClick event.
   */
  public handleClick = (event: any) => {
    if (typeof this.input.selectionStart === 'number') {
      this.input.selectionStart = this.input.selectionEnd = this.input.value.length
    } else if (typeof this.input.createTextRange !== 'undefined') {
      const range = this.input.createTextRange()
      range.collapse(false)
      range.select()
    }

    this.input.focus()
  }

  public focus = (): void => {
    this.setState({ focused: true })
    if (this.props.setFluidFocus) {
      this.props.setFluidFocus(this.props.fluidIndex)
    }
  }

  public blur = (): void => {
    this.setState({ focused: false })
  }

  public handleMouseOver = () => {
    const { onMouseOver } = this.props

    if (onMouseOver) {
      onMouseOver()
    }
  }

}

export default InputField
