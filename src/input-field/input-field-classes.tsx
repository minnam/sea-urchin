import { style } from "typestyle"

const CLASSES = {
  hint: style({
    bottom: 0,
    boxSizing: 'border-box',
    color: 'rgb(180,180,180)',
    display: 'inline',
    height: 36,
    left: 9,
    lineHeight: '36px',
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    transition: 'all .25s',
    whiteSpace: 'nowrap',
    width: 'calc(100% - 18px)',
    zIndex: 0
  }),
  hintHide: style({
    display: 'none'
  }),
  input: style({
    background: 'none',
    border: 'none',
    bottom: 0,
    boxSizing: 'border-box',
    color: 'rgb(60,60,60)',
    float: 'left',
    fontSize: 15,
    height: 36,
    left: 0,
    marginLeft: 9,
    outline: 'none',
    position: 'absolute',
    width: 'calc(100% - 18px)',
    zIndex: 5
  })
}

export default CLASSES
