import {
  cssRaw
} from 'typestyle'

cssRaw(`@import url('https://fonts.googleapis.com/css?family=Roboto'); @import url("https://fonts.googleapis.com/icon?family=Material+Icons");`)

const Theme = {
  default: {
    size: {

    },
    style: {
      fontFamily: 'Roboto'
    }
  },
  primary: {
    default: {
      style: {
        label: {
          color: 'red'
        },
        primaryIcon: {
          color: 'blue'
        },
        hint: {
          color: 'purple'
        }
      }
    },
    text: {
      h1: {
        style: {
          letterSpacing: 1.2
        }
      },
      span: {
        style: {
          letterSpacing: 1.2,
          lineHeight: '30px'
        }
      }
    }
  },
  secondary: {
    default: {
      size: {

      },
      layout: 'vertical',
      style: {
        label: {
          color: 'rgb(220,220,220)'
        }
      }
    },
    select: {
      style: {
        primaryIcon: {
          color: 'rgb(220,220,220)'
        },
        value: {
          color: 'white'
        }
      }
    },
    toggle: {
      style: {
        primaryIcon: {
          color: 'rgb(220,220,220)'
        },
        toggleIcon: {
          color: 'rgb(220,220,220)'
        },
        value: {
          color: 'white'
        }
      }
    },
    dropdown: {
      style: {
        label: {
          color: 'rgb(220,220,220)'
        }
      }
    }
  },
  third: {
    default: {
      style: {
        width: '100%',
        marginBottom: 10
      }
    },
    toggle: {
      style: {
        label: {
          fontSize: 15
        }
      }
    }
  }
}

export default Theme
