import React, {Component} from 'react';
import InputBaseTemplate from './input-base-template';
import InputBaseHorizontalClasses from './input-base-horizontal-classes';
import InputBaseVerticalClasses from './input-base-vertical-classes';

class InputBase extends Component {

    constructor (props) {
        super(props);

        this.state = {};
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }    

    handleClick (event) {
        const {
            focus,
            focused,
            input,
            onClick,
        } = this.props;

        if (onClick) {
            onClick(event);
        } else {
            if (!focused) {
                focus();
                if (input) {
                    input.focus();
                }
            }
        }
    }

    handleMouseOver () {
        if (this.props.onMouseOver)
            this.props.onMouseOver();
        this.setState({mouseOver: true});
    }

    handleMouseLeave () {
        this.setState({mouseOver: false});
    }

    wrapper (classNames) {
        return (
            React.createElement(
                InputBaseTemplate,
                {
                    ...this.props,
                    mouseOver: this.state.mouseOver,
                    handleClick: this.handleClick,
                    handleMouseOver: this.handleMouseOver,
                    handleMouseLeave: this.handleMouseLeave,
                    classNames
                }
            )
        )
    }

    render () {
        const {layout} = this.props;

        switch (layout) {
            case 'vertical': {
                return this.wrapper(InputBaseVerticalClasses);
            }
            case 'horizontal':
            default: {
                return this.wrapper(InputBaseHorizontalClasses);
            }
        }
    }

}

export default InputBase;
