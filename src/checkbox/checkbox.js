import React, {Component} from 'react';
import Theme from '../theme-provider';
import PropTypes from 'prop-types';
import {InputBase, SwitchBase} from '../base';
import {getTheme} from '../theme-util';

import {style as _style, classes} from 'typestyle';

import CLASSES from './checkbox-classes';

class Checkbox extends Component {
    static propTypes = {
        /** Id to parent component */
        id: PropTypes.string,
        /** Classname to parent component */
        className: PropTypes.string,
        /** Toggle Icon*/
        toggleIcon: PropTypes.node,
        /** Toggle container position*/
        togglePosition: PropTypes.oneOf(['left', 'right']),
        /** A label text for Toggle. Can be styled by labelStyle */
        label: PropTypes.string,
        /** An icon before a label */
        primaryIcon: PropTypes.node,
        /** An offset of highlight border in pixels */
        highlightOffset: PropTypes.number,
        /** A height of component that will affect both height and line-height in pixels */
        height: PropTypes.number,        
    };

    static defaultProps = {
        layout: 'vertical',
    };

    constructor (props) {
        super(props);

        this.theme = getTheme(this, 'toggle');
        this.state = {value: this.props.default};
    }

    handleClick = (event) => {
        const {onToggle = () => {}, onClick} = this.props;
        const {focused} = this.state;

        event.stopPropagation();

        if (!focused) {
            this.setState({focused: true});
            if (onClick) {
                onClick(true)
            }
            onToggle(true)
        } else {
            this.setState({focused: false});
            onToggle(false)
            if (onClick) {
                onClick(false)
            }
        }
    }

    handleMouseDown = () => {
        const {onMouseDown} = this.props;

        if (onMouseDown) {
            console.log('white');
            onMouseDown()
        }
    }

    handleMouseEnter = () => {
        const {dragFlag, onToggle = () => {}} = this.props;

        if (dragFlag) {
            onToggle()
        }

    }

    render () {
        const {
            id,
            className,
            disableIcon,
            height,
            highlightOffset,
            togglePosition,
            label,
            labelStyle,
            primaryIcon,
            primaryIconStyle,
            toggleIconStyle,
            onMouseMove,
            onMouseEnter,
            style,
            layout,
            toggled,
            onToggle = () => {}
        } = this.props;

        const {
            value,
            focused
        } = this.state;


        return (
            <SwitchBase
                onToggle = {onToggle}
                disableIcon = {disableIcon}
                togglePosition = {togglePosition}
                focus = {() => {this.setState({focused: true});}}
                focused = {focused}
                label = {label}
                toggled = {toggled}
                labelClass = {this.theme.label}
                layout = {layout}
                onClick = {this.handleClick}
                onMouseOver = {this.handleMouseOver}
                onMouseEnter = {this.handleMouseEnter}
                onMouseMove = {onMouseMove}
                onMouseDown = {this.handleMouseDown}
                parentClass = {classes(this.theme.style, CLASSES.parent)}
                primaryIcon = {primaryIcon}
                primaryIconClass = {this.theme.primaryIcon}
            />
        );
    }
}

export default Checkbox;
