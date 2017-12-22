import * as React from 'react'
import { classes } from 'typestyle'
import { getTheme } from '../theme-util'

export interface TextProps { 
  type: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: any
}

const TEXT_COMPONENTS = {
  div: <div/>,
  h1: <h1/>,
  h2: <h2/>,
  h3: <h3/>,
  h4: <h4/>,
  h5: <h5/>,
  h6: <h6/>,
  p: <p/>,
  span: <span/>
}

class Text extends React.Component<TextProps, {}> {
  props: TextProps
  theme: {
    text: {
      default?: string
    }
  }
  
  constructor (props) {    
    super(props)
    this.theme = getTheme(this, 'text')    
  }

  render () {
    const {type = 'div', children} = this.props

    return (
      React.cloneElement(TEXT_COMPONENTS[type], {
        className: classes(this.theme.text.default, this.theme.text[type])
      }, [
        ...children
      ])
    )
  }
}

export default Text
