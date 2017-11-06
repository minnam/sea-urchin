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
    },
    secondary: {
        default: {
            size: {

            },
            layout: 'vertical',
            style: {
                label: {
                    color: 'rgb(220,220,220)'
                },
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
                },
            }
        }
    },
    third : {
        default: {
            style: {
                width: '100%',
                marginBottom: 10,
            }
        },
        toggle : {
            style: {
                label: {
                    fontSize: 15
                }
            }
        }
    }
}

export default Theme;
