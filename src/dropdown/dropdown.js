import React, {Component} from 'react';


import {InputBase} from '../base/';
import Dialog from '../dialog';

import Theme from '../theme-provider';
import {checkPathValid} from '../theme-util';

const VERTICAL_DIALOG_REFERENCE_STYLE = {
    background: 'none',
    border: 'none',
    boxSizing: 'border-box',
    color: 'rgb(60,60,60)',
    cursor: 'pointer',
    float: 'left',
    fontSize: 13,
    height: 40,
    lineHeight: '40px',
    marginLeft: 9,
    marginRight: 9,
    outline: 'none',
    textAlign: 'left',
    top: 0,
    zIndex : 5,
}

const HORIZONTAL_DIALOG_REFERENCE_STYLE = {
    background: 'none',
    border: 'none',
    bottom: 0,
    boxSizing: 'border-box',
    color: 'rgb(60,60,60)',
    cursor: 'pointer',
    float: 'left',
    fontSize: 15,
    height: 36,
    lineHeight: '36px',
    marginLeft: 9,
    outline: 'none',
    position: 'absolute',
    width: 'calc(100% - 18px)',
    zIndex: 5,
}

const DIALOG_STYLE = {
    width: '100%',
    display: 'inline-block',
    boxSizing: 'border-box'
}

class Dropdown extends Component {

    constructor (props) {
        super(props);

        this.state = {
            value: this.props.default,
            itemsMouseOver: []
        };

    }

    render () {

        const {
            cancel,
            children,
            dialogReference,
            dialogOffset,
            dialogStyle,
            dialogSize = {
                width: 'initial',
                height: 'initial'
            },
            disableIcon,
            highlightOffset,
            hint,
            items = [],
            label,
            labelStyle,
            layout,
            popupOffset,
            primaryIcon,
            primaryIconStyle,
            style,
            submit,
            valueStyle,
            theme
        } = this.props;

        const {
            value,
            focused
        } = this.state;

        let defaultTheme = {},
        defaultThemeSize = {},
        defaultThemeStyle = {},
        specificThemeSize = {},
        specificThemeStyle = {};

        if (checkPathValid( Theme[theme], 'default' )) {
            defaultTheme = Theme[theme].default;
            defaultThemeStyle = Theme[theme].default.style;
        }

        if (checkPathValid( Theme[theme], 'select' )) {
            specificThemeStyle = Theme[theme].select.style;
        }

        return (
            <InputBase
                layout = {layout}
                hint = {hint}
                value = {value}
                focused = {focused}
                label = {label}
                focus = {() => {
                    this.setState({focused: true});
                }}
                style = {{
                    ...defaultThemeStyle,
                    ...style
                }}
                labelStyle = {{
                    ...defaultThemeStyle.label,
                    ...specificThemeStyle.label,
                    ...labelStyle
                }}
                primaryIcon = {primaryIcon}
                primaryIconStyle = {{
                    ...defaultThemeStyle.primaryIcon,
                    ...specificThemeStyle.primaryIcon,
                    ...primaryIconStyle
                }}
                highlightOffset = {highlightOffset ? highlightOffset : -2 }
                disableIcon = {disableIcon}
                onClick = {(event) => {
                    event.stopPropagation();
                    if (!focused) {
                        this.setState({
                            focused: true
                        });
                    }
                }}
            >

                    <span
                        ref = {(dialogReference) => {
                            this.dialogReference = dialogReference;
                        }}
                        style = {
                            layout == 'vertical' ? {
                                ...VERTICAL_DIALOG_REFERENCE_STYLE,
                                opacity: focused || value > -1 ? 1 : 0,
                                ...valueStyle,
                                display: items[value] ? '' : 'none'
                            } : {
                                ...HORIZONTAL_DIALOG_REFERENCE_STYLE,
                                opacity : focused || value > -1 ? 1 : 0,
                                ...valueStyle,
                                display: items[value] ? '' : 'none'
                            }
                        }
                    >
                        {items[value]}
                    </span>

                    <Dialog
                        focused = {focused}
                        dialogReference = {dialogReference ? dialogReference() : (this.dialogReference ? this.dialogReference.parentNode : window.body) /* if specific reference is not given, reference is always the parentNode of the clicked element*/}
                        dialogOffset = {dialogOffset}
                        size = {dialogSize}
                        style = {{
                            padding: '25px 25px 12.5px 25px',
                            ...dialogStyle
                        }}

                    >
                        <div
                            style = {{
                                position: 'relative'
                            }}
                        >
                            <div
                                style = {{
                                    ...DIALOG_STYLE,
                                    height: this.refs.actions ? `calc(100% - 40px)` : '90%',
                                }}
                            >
                                {children}
                            </div>
                            <div
                                ref = 'actions'
                                style = {{
                                    width: '100%',
                                    display: 'inline-block'
                                }}
                            >
                                {
                                    React.cloneElement(cancel, {
                                        ...cancel.props,
                                        onClick: () => {
                                            if (cancel.props.onClick) {
                                                cancel.props.onClick();
                                            }
                                            this.setState({focused: false});
                                        }
                                    })
                                }
                                {
                                    React.cloneElement(submit, {
                                        ...submit.props,
                                        onClick: () => {
                                            if (submit.props.onClick) {
                                                submit.props.onClick();
                                            }
                                            this.setState({focused: false});
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </Dialog>

            </InputBase>
        );
    }

}

export default Dropdown;
