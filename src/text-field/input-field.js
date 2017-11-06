import React, {Component} from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import {style, classes} from "typestyle";

import {InputBase} from '../base/';
import {getTheme} from '../theme-util';

import CLASSES from './text-field-classes';

class InputField extends Component {

    static propTypes = {
        /** Id to parent component */
        id: PropTypes.string,
        /** Classname to parent component */
        className: PropTypes.string,
        /** A label text for TextInput. Can be styled by labelStyle */
        label: PropTypes.string,
        /** A hint text for TextInput. Can be styled by hintStyle */
        hint: PropTypes.string,
        /** An icon before a label */
        primaryIcon: PropTypes.node,
        /** An offset of highlight border in pixels */
        highlightOffset: PropTypes.number,
        /** A height of component that will affect both height and line-height in pixels */
        height: PropTypes.number,
        /** Classname that will be inserted to the most outer component */
        style: stylePropType,
        /** Style for label */
        labelStyle: stylePropType,
        /** Style for hint */
        hintStyle: stylePropType,
        /** Style for primary icon */
        primaryIconStyle: stylePropType
    };

    constructor (props) {
        super(props);

        this.theme = getTheme(this, 'textInput');        
        this.state = {value: this.props.default};
    }

    componentDidMount () {
        this.theme = getTheme(this, 'textInput');
    }

    /**
    *   Following will force the text cursor to be at the end of the text when focused
    *   "event.stopPropagation()" is added on input onClick event.
    */
    handleClick = (event) => {
        if (typeof this.input.selectionStart === "number") {
            this.input.selectionStart = this.input.selectionEnd = this.input.value.length;
        } else if (typeof this.input.createTextRange !== "undefined") {
            var range = this.input.createTextRange();
            range.collapse(false);
            range.select();
        }

        this.input.focus();
    }

    focus = () => {
        this.setState({focused: true});
        if (this.props.setFluidFocus)
            this.props.setFluidFocus(this.props.fluidIndex);
    }

    blur = () => {
        this.setState({focused: false});
    }

    handleMouseOver = () => {
        const {onMouseOver} = this.props;

        if (onMouseOver)
            onMouseOver();
    }

    render () {
        const {hint} = this.props;
        const {
            focused,
            value = ''
        } = this.state;

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
                {...this.props}
            >
                {/* Hint */}
                <div
                    className = {
                        classes(
                            CLASSES.hint,
                            this.theme.hint,
                            focused && value == '' ? null : CLASSES.hintHide
                        )
                    }
                >
                    {hint}
                </div>
                <input
                    className = {classes(CLASSES.input, this.test)}
                    ref = {(input) => {this.input = input;}}
                    onBlur = {this.blur}
                    onChange = {e => {this.setState({value: e.target.value});}}
                    onClick = {e => {e.stopPropagation();}}
                    onFocus = {this.focus}
                    value = {value}
                />
            </InputBase>
        );
    }
}

export default InputField;
