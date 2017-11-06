import React, {Component} from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import {style, classes} from 'typestyle';

import {getTheme} from '../theme-util';
import {InputBase} from '../base/';
import Dialog from '../dialog';


const STYLES = {
    parent: style({
        cursor: 'pointer',
    }),
    option: style({
        border: 'none',
        bottom: 0,
        boxSizing: 'border-box',
        color: 'rgb(60,60,60)',
        cursor: 'pointer',
        float: 'left',
        fontSize: 15,
        height: 40,
        lineHeight: '40px',
        outline: 'none',
        padding: '0 9px 0 9px',
        position: 'relative',
        transition: 'all .25s',
        width : '100%',
        zIndex : 5,
        background: 'white',
        $nest: {
            '&:hover': { background: 'rgb(238,238,238)' },
        }
    }),
    optionFocus : style({
        background: 'rgb(238,238,238)'
    }),
    optionOn : style({
        background: 'rgb(220,220,220)'
    }),
    input: style({
        opacity: 0,
        position: 'absolute'
    }),
    hide: style({
        opacity: 0
    }),
    vertical: {
        dialogReference: style({
            background: 'none',
            border: 'none',
            boxSizing: 'border-box',
            color: 'rgb(60,60,60)',
            float: 'left',
            fontSize: 13,
            height: 40,
            lineHeight: '40px',
            marginLeft: 9,
            marginRight: 9,
            outline: 'none',
            textAlign: 'left',
            top: 0,
            zIndex: 5,
        }),
    },
    horizontal: {
        dialogReference: style({
            background: 'none',
            border: 'none',
            bottom: 0,
            boxSizing: 'border-box',
            color: 'rgb(60,60,60)',
            float: 'left',
            fontSize: 15,
            height: 36,
            lineHeight: '36px',
            marginLeft: 9,
            outline: 'none',
            position: 'absolute',
            width: 'calc(100% - 18px)',
            zIndex: 5,
        }),
    },
    item: {

    }
}

function applyVars(dictionary: {}) {
    const el = document.body;
    for (var name in dictionary) {
        if (dictionary.hasOwnProperty) {
            el.style.setProperty(name, dictionary[name]);
        }
    }
}


class Select extends Component {

    static defaultProps = {
        items: []
    }

    constructor (props) {
        super(props);

        const {
            defaultValue = -1
        } = this.props;

        this.state = {
            value: defaultValue,
            hoveredItems: []
        };

        this.theme = getTheme(this, 'select');
        this.handleParentClick = this.handleParentClick.bind(this);
        this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
        this.handleInputOnFocus = this.handleInputOnFocus.bind(this);
        this.handleItemOnClick = this.handleItemOnClick.bind(this);
    }


    handleParentClick (event) {
        const {focused} = this.state;

        event.stopPropagation();

        if (!focused) {
            this.setState({focused: true});
            this.refs.select.focus();
        }
    }

    handleInputKeyDown (event) {
        const {items} = this.props;
        const {hoveredItems, value} = this.state;
        const itemsLength = items.length;
        const hoveredItemsLength = hoveredItems.length;

        switch (event.keyCode) {
            // On up arrow key
            case 38 : {
                event.preventDefault(); // We don't want to prevent all default
                if (hoveredItemsLength == 0) {
                    this.setState({hoveredItems: [value]});
                } else {
                    if ((hoveredItems[0] - 1) >= 0)
                        this.setState({hoveredItems: [hoveredItems[0] - 1]});
                    else
                        this.setState({hoveredItems: [itemsLength - 1]});
                }
                break;
            }
            // On down arrow key
            case 40 : {
                event.preventDefault();
                if (hoveredItemsLength == 0)
                    this.setState({hoveredItems: [value]});
                else
                    this.setState({hoveredItems: [(hoveredItems[0] + 1) % itemsLength]});
                break;
            }
            // On enter key
            case 13 : {
                event.preventDefault();
                if (hoveredItems[0] != null)
                    this.setState({value: hoveredItems[0]});
                this.blurInput(0);
            }
        }
    }

    handleInputOnFocus () {
        if (this.blurTimeout) {
            clearTimeout(this.blurTimeout);
            this.blurTimeout = null;
        }
        this.setState({focused: true});
    }

    handleItemOnClick (event, key) {
        event.stopPropagation();
        this.setState({value: key});
        this.refs.select.blur();
    }

    blurInput (timeout) {
        this.blurTimeout = setTimeout(() => {
            this.setState({focused: false});
            this.blurTimeout = null;
        }, timeout);
    }

    render () {
        const {
            dialogOffset,
            dialogReference,
            highlightOffset,
            items,
            layout,
            ...other
        } = this.props;
        const {
            value,
            focused,
            hoveredItems,
        } = this.state;

        let _layout = 'horizontal';

        if (layout) {
            _layout = layout;
        } else {
            if (this.theme.layout) {
                _layout = this.theme.layout
            }
        }

        let valueClass;
        switch (_layout) {
            case 'vertical' : {
                valueClass = STYLES.vertical.dialogReference;
                break;
            }
            case 'horizontal':
            default: {
                valueClass = STYLES.horizontal.dialogReference;
            }
        }

        return (
            <InputBase
                focus = {() => {this.setState({focused: true});}}
                focused = {focused}
                hintClass = {this.theme.hint}
                labelClass = {this.theme.label}
                layout = {_layout}
                onClick = {this.handleParentClick}
                parentClass = {classes(STYLES.parent, this.theme.style)}
                primaryIconClass = {this.theme.primaryIcon}
                value = {value > -1}
                {...other}
            >
                <span
                    ref = {(dialogReference) => {this.dialogReference = dialogReference;}}
                    className = {classes(valueClass, focused || value > -1 ? null : STYLES.hide, this.theme.value)}
                >
                    {value > -1 ? items[value].name : null}
                </span>
                <Dialog
                    focused = {focused}
                    blurred = {this.blurTimeout}
                    dialogReference = {dialogReference ? dialogReference() : () => {return (this.dialogReference.parentNode)} /* if specific reference is not given, reference is always the parentNode of the clicked element*/}
                    dialogOffset = {dialogOffset}
                >
                    {
                        items.map((item, key) => {
                            const itemHovered = hoveredItems.indexOf(key);

                            return (
                                <div
                                    key = {key}
                                    value = {key}
                                    className = {classes('noselect', STYLES.option, item.value == value ? STYLES.optionOn : null, itemHovered > -1 ? STYLES.optionFocus : null)}
                                    onClick = {(event) => {this.handleItemOnClick(event, key)}}
                                >
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </Dialog>
                <input
                    className = {STYLES.input}
                    onBlur = {() => {this.blurInput(250);}}
                    onFocus = {this.handleInputOnFocus}
                    onKeyDown = {this.handleInputKeyDown}
                    ref = 'select'
                    value = {''}
                />
            </InputBase>
        );
    }
}

export default Select;
