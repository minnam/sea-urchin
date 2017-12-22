import Head from 'next/head'
import React, {Component} from 'react'
import {style} from 'typestyle'

import {
  Button,
  Checkbox,
  Checkboxes,
  Dropdown,
  FluidBox,
  Grid,
  InputField,
  NavSelect,
  RadioButton,
  Select,
  Text,
  Theme
} from '../src'

const fontFamily = {
  roboto: 'Roboto, sans-serif',
  arial: 'Arial' // etc
}



const STYLES = {
  grid: {
    selected: {
      style: {
        color: 'rgb(60,60,60)'
      }
    }
  }
}

const scroll = (target, from, to, done) => {
  const diff = to - from;  
  const duration = 500;
  const easing = (t) => { 
    return (--t) * t * t + 1; 
  };

  let start = 0;

  window.requestAnimationFrame(function render (timestamp) {
    if (!start) {
      start = timestamp;
    }

    let time = timestamp - start;
    let percent = Math.min(time / duration, 1);

    percent = easing(percent);

    target.scrollTop = from + diff * percent;

    if (time < duration) {
      window.requestAnimationFrame(render);
    } else {
      if (done) {
        done();
      }
    }
  });
};

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checkboxes1: [
        {name: 'A', toggled: true},
        {name: 'B', toggled: true},
        {name: 'C', toggled: true},
        {name: 'D', toggled: true},
        {name: 'E', toggled: true}
      ],
      checkboxes2: [
        {name: 'A', toggled: true},
        {name: 'B', toggled: true},
        {name: 'C', toggled: true},
        {name: 'D', toggled: true},
        {name: 'E', toggled: true}
      ]
    }
  }

  render () {
    return (
      <div ref = 'test'>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Head>
        <Grid
          container
          className = {style(fontFamily)}
          style = {{
            background: 'white',
            fontFamily: 'roboto'
          }}          
        >
          <Grid
            container
            xl = {{
              size: 12,
              alignItems: [
                'around',
                'center'
              ],
              style: {
                height: '100%'
              }
            }}
          >
            <Grid
              fuck = {true}
              container
              parallax = {{
                speed: 0.5
              }}
              gap = {100}
              style = {{
                height: 900,
                backgroundImage: 'url(/static/home-banner.png)'
              }}
              xl = {{
                size: 12,
                gap: 50,
                alignItems: [
                  'around',
                  'center'
                ]
              }}
              lg = {{
                gap: 10,
                size: 12,
                alignItems: [
                  'left',
                  'left'
                ]
              }}
              sm = {{
                gap: 200,
                size: 12
              }}

              xs = {{
                align: [
                  'center',
                  'center'
                ]
              }}
            >
            </Grid>
            <Grid
              container
              xl = {12}
              alignItems = {'center'}
              style = {{
                marginBottom: 30,
                paddingBottom: 60,
                borderBottom: '1px solid rgb(220,220,220)'
              }}
            >
              <Grid
                xl = {6}
                lg = {9.5}
              >
                <Text
                  theme = {'primary'}
                  type = 'h1'
                >
                  Getting Started
                </Text>
                <Text>
                  Hello World
                </Text>
              </Grid>
            </Grid>
            <Grid
              container
              xl = {12}
              alignItems = {'center'}
              style = {{
                marginBottom: 30,
                paddingBottom: 60,
                borderBottom: '1px solid rgb(220,220,220)'
              }}
            >
              {/* Grid System */}
              <Grid
                xl = {6}
                lg = {9.5}
              >
                <Text
                  theme = {'primary'}
                  type = 'h1'
                >
                  Grid System
                </Text>
                <Grid
                  container
                  xl = {{
                    size: 12,
                    gap: 20
                  }}
                  lg = {{
                    size: 12,
                    gap: 10
                  }}
                  style = {{
                    color: 'rgb(160,160,160)'
                  }}
                  alignItems = {'between'}
                >
                  {/* Row 1 */}
                  <Grid
                    xl = {7.5}
                    lg = {6}
                    style = {{
                      background: 'rgb(230,230,230)',
                      padding: 20
                    }}
                  >
                    <Grid
                      xl = {STYLES.grid.selected}
                    >
                      <Text
                        theme = {'primary'}
                        type = 'span'
                      >
                        {`xl = {7.5}`}
                      </Text>
                    </Grid>
                    <Grid
                      lg = {STYLES.grid.selected}
                    >
                      <Text
                        theme = {'primary'}
                        type = 'span'
                      >
                        {`lg = {6}`}
                      </Text>
                    </Grid>
                    <Grid
                      md = {STYLES.grid.selected}
                      sm = {STYLES.grid.selected}
                      xs = {STYLES.grid.selected}
                    >
                      <Text
                        theme = {'primary'}
                        type = 'span'
                      >
                        {`default = {12}`}
                      </Text>
                    </Grid>
                  </Grid>
                  <Grid
                    xl = {4.5}
                    lg = {6}
                    style = {{
                      background: 'rgb(230,230,230)',
                      padding: 20
                    }}
                  >
                    <Text
                      theme = {'primary'}
                      type = 'span'
                    >
                      {`xl = {4.5}`}
                    </Text>
                    <Text
                      theme = {'primary'}
                      type = 'span'
                    >
                      {`lg = {6}`}
                    </Text>
                  </Grid>
                  {/* Row 2 */}
                  <Grid
                    xl = {3}
                    lg = {6}
                    style = {{
                      background: 'rgb(230,230,230)',
                      padding: 20
                    }}
                  >
                    <Text
                      theme = {'primary'}
                      type = 'span'
                    >
                      {`xl = {4}`}
                    </Text>
                    <Text
                      theme = {'primary'}
                      type = 'span'
                    >
                      {`lg = {6}`}
                    </Text>
                  </Grid>
                  <Grid
                    xl = {3}
                    lg = {6}
                    style = {{
                      background: 'rgb(230,230,230)',
                      padding: 20
                    }}
                  >
                    <Text
                      theme = {'primary'}
                      type = 'span'
                    >
                      {`xl = {4}`}
                    </Text>
                    <Text
                      theme = {'primary'}
                      type = 'span'
                    >
                      {`lg = {6}`}
                    </Text>
                  </Grid>
                  <Grid
                    xl = {3}
                    lg = {6}
                    style = {{
                      background: 'rgb(230,230,230)',
                      padding: 20
                    }}
                  >
                    <Text
                      theme = {'primary'}
                      type = 'span'
                    >
                      {`xl = {4}`}
                    </Text>
                    <Text
                      theme = {'primary'}
                      type = 'span'
                    >
                      {`lg = {6}`}
                    </Text>
                  </Grid>
                  <Grid
                    xl = {3}
                    lg = {6}
                    style = {{
                      background: 'rgb(230,230,230)',
                      padding: 20
                    }}
                  >
                    <Text
                      theme = {'primary'}
                      type = 'span'
                    >
                      {`xl = {4}`}
                    </Text>
                    <Text
                      theme = {'primary'}
                      type = 'span'
                    >
                      {`lg = {6}`}
                    </Text>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              xl = {12}
              alignItems = {'center'}
              style = {{
                marginBottom: 30,
                paddingBottom: 60,
                borderBottom: '1px solid rgb(220,220,220)'
              }}
            >
              <Grid
                xl = {6}
                lg = {9.5}
              >
                <h1>Text Field</h1>
                <InputField
                  status = {false}
                  label = 'On the Way to Work?'
                  primaryIcon = 'business'
                  hint = 'wha'
                  value = {this.state.test ? this.state.test : ''}
                  onChange = {(event, target, value) => {
                    this.setState({test: value})
                  }}
                  onClear = {() => {
                    this.setState({test: ''})
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              xl = {12}
              alignItems = {'center'}
              style = {{
                marginBottom: 30,
                paddingBottom: 60,
                borderBottom: '1px solid rgb(220,220,220)'
              }}
            >
              <Grid
                xl = {6}
                lg = {9.5}
              >
                <h1>Smooth Box</h1>
                <FluidBox
                  style = {{
                    width: '100%'
                  }}
                >
                  <InputField
                    style = {{
                      width: '50%'
                    }}
                    label = 'Find Child Care Services'
                    primaryIcon = 'search'
                    default = '4523 Hudson Street, Vancouver, BC'
                    hint = 'Find a near by child care services by address'
                  />

                  <InputField
                    style = {{
                      width: '50%'
                    }}
                    status = {false}
                    label = 'On the Way to Work?'
                    primaryIcon = 'business'
                    hint = 'wha'
                  />
                </FluidBox>
              </Grid>
            </Grid>
            <Grid
              container
              xl = {12}
              alignItems = {'center'}
              style = {{
                marginBottom: 30,
                paddingBottom: 60,
                borderBottom: '1px solid rgb(220,220,220)'
              }}
            >
              <Grid
                xl = {6}
                lg = {9.5}
              >
                <h1>Select </h1>
                <Select
                  style = {{
                    float: 'left'
                  }}
                  status = {false}
                  label = 'Radius'
                  primaryIcon = 'search'
                  disableIcon = {true}
                  defaultValue = {2}
                  items = {[
                    {name: '5 km', value: 0},
                    {name: '15 km', value: 1},
                    {name: '20 km', value: 2},
                    {name: '25 km', value: 3},
                    {name: '25+ km', value: 4}
                  ]}
                />
                <Select
                  style = {{
                    float: 'left'
                  }}
                  status = {false}
                  label = 'Radius'
                  primaryIcon = 'search'
                  layout = {'vertical'}
                  disableIcon = {true}
                  defaultValue = {2}
                  items = {[
                    {name: '5 km', value: 0},
                    {name: '15 km', value: 1},
                    {name: '20 km', value: 2},
                    {name: '25 km', value: 3},
                    {name: '25+ km', value: 4}
                  ]}
                />
              </Grid>
            </Grid>
            <Grid
              container
              xl = {12}
              alignItems = {'center'}
              style = {{
                marginBottom: 30,
                paddingBottom: 60,
                borderBottom: '1px solid rgb(220,220,220)'
              }}
            >
              <Grid
                xl = {6}
                lg = {9.5}
              >
                <h1>Checkbox </h1>
                <Checkbox
                  label = {'Position Left'}
                  togglePosition = {'left'}
                  toggled = {this.state.test1}
                  onToggle = {() => {
                    this.toggleShit('test1')
                  }}
                />
                <Checkbox
                  label = {'Position Right'}
                  togglePosition = {'right'}
                  toggled = {true}
                  toggled = {this.state.test2}
                  onToggle = {() => {
                    this.toggleShit('test2')
                  }}
                />
                <h2>Multuple Checkboxes</h2>
                <Checkboxes
                  data = {this.state.checkboxes1}
                  togglePosition = {'left'}
                  onToggle = {(data) => {
                    this.setState({checkboxes1: data})
                  }}
                />
                <Checkboxes
                  data = {this.state.checkboxes2}
                  togglePosition = {'left'}
                  layout = 'horizontal'
                  onToggle = {(data) => {
                    this.setState({checkboxes2: data})
                  }}
                />
                <h2>Radio Button</h2>
                <RadioButton
                  data = {['Hey', 'Jude', 'Dont', 'Be', 'Afraid']}
                  togglePosition = {'left'}
                  defaultValue = {0}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            style = {{
              height: 1000
            }}
          >
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Index
