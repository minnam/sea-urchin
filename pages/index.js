import React, {Component} from 'react';

import {style, cssRaw} from 'typestyle';

import {Checkbox, RadioButton, Checkboxes, Button, Dropdown, Theme, InputField, NavSelect, FluidBox, Select, Grid} from '../src';


cssRaw(`@import url('https://fonts.googleapis.com/css?family=Roboto'); @import url("https://fonts.googleapis.com/icon?family=Material+Icons");`);
const fontFamily = {
  roboto: 'Roboto, sans-serif',
  arial: 'Arial' // etc
}


class Index extends Component {
  constructor (props) {
    super(props);
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
            {
                name: 'B',
                toggled: true
            },
            {
                name: 'C',
                toggled: true
            },
            {
                name: 'D',
                toggled: true
            },
            {
                name: 'E',
                toggled: true
            }
        ]
    };
  }

  render () {
    return (
      <Grid
          container
          className = {style(fontFamily)}
          style = {{
              background: 'white'
          }}
      >
          {/*<Navigation />*/}

          <Grid
              container
              xl = {{
                  size: 12,
                  alignItems: [
                      'around',
                      'center'
                  ],
                  style: {
                      height: '100%',
                  }
              }}
          >
              <Grid
                  container
                  parallax
                  gap = {100}
                  style = {{
                      height: 900,
                      backgroundImage: 'url(/static/home-banner.png)',
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
                  >
                      <h1>Getting Started </h1>

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
                  >
                      <h1>Grid System </h1>
                      <Grid
                          container
                          xl = {{
                              size: 12,
                              gap: 10
                          }}
                          alignItems = {[
                              'between','center'
                          ]}
                      >
                          <Grid
                              xl = {6}
                              style = {{
                                  fontSize: 20,
                                  background: 'rgb(230,230,230)',
                                  padding: 20
                              }}
                          >
                              <div>{`xl = {6}`}</div>
                          </Grid>
                          <Grid
                              xl = {6}
                              style = {{
                                  fontSize: 20,
                                  background: 'rgb(230,230,230)',
                                  padding: 20
                              }}
                          >
                              <div>{`xl = {6}`}</div>
                          </Grid>
                          <Grid
                              xl = {4}
                              style = {{
                                  fontSize: 20,
                                  background: 'rgb(230,230,230)',
                                  padding: 20
                              }}
                          >
                              <div>{`xl = {4}`}</div>
                          </Grid>
                          <Grid
                              xl = {4}
                              style = {{
                                  fontSize: 20,
                                  background: 'rgb(230,230,230)',
                                  padding: 20
                              }}
                          >
                              <div>{`xl = {4}`}</div>
                          </Grid>
                          <Grid
                              xl = {4}
                              style = {{
                                  fontSize: 20,
                                  background: 'rgb(230,230,230)',
                                  padding: 20
                              }}
                          >
                              <div>{`xl = {4}`}</div>
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
                  >
                      <h1>Text Field</h1>
                      <InputField
                          status = {false}
                          label = 'On the Way to Work?'
                          primaryIcon = 'business'
                          hint = 'wha'
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
                              this.setState({checkboxes1: data});
                          }}
                      />
                      <Checkboxes
                          data = {this.state.checkboxes2}
                          togglePosition = {'left'}
                          layout = 'horizontal'
                          onToggle = {(data) => {
                              this.setState({checkboxes2: data});
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
    )
  }
}

export default Index
