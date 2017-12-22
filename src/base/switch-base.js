import React, {Component} from 'react';
import {style, classes} from 'typestyle';
import CLASSES from './input-base-classes';
import HoverEffect from '../hover-effect'

const _CLASSES = {
    base: style({
        cursor: 'pointer'
    }),
    left: {
        primaryIconParent: style({
            borderRight: '1px solid rgb(220,220,220)',
            height: '100%',
            width: 38,
            float: 'left',
            lineHeight: '40px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            float: 'left'
        }),
    },
    right: {
        primaryIconParent: style({
            borderLeft: '1px solid rgb(220,220,220)',
            height: '100%',
            width: 38,
            float: 'left',
            lineHeight: '40px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            float: 'right'
        }),
    },
    primaryIcon: style({
        fontSize: 22,
        opacity: 0,
        borderRadius: 2.5,
        transition: '.1s all',
    }),
    defaultIcon: style({
        width: 18,
        height: 18,
        background: 'rgb(240,240,240)',
        borderRadius: 2.5,
        transition: '.25s all'
    }),
    primaryIconMouseDown: style({
    }),
    primaryIconToggled: style({
        opacity: 1,
        background: 'none',
        color: 'rgb(60,60,60)'
    }),
    defaultIconMouseDown: style({
        width: 15,
        height: 15,
    }),
    defaultIconToggled: style({
        background: 'rgb(200,200,200)',
    }),
    label: style({
        width: 'calc(100% - 38px)',
        lineHeight: '40px',
        paddingLeft: 9,
        paddingRight: 9,
        float: 'left',
    })

};

class SwitchBase extends Component {

    constructor (props) {
        super(props);
        this.state = {}
    }

    handleClick = () => {
        const {onToggle = () => {}} = this.props;
        onToggle();
    }

    handleMouseMove = () => {
        const {onMouseMove} = this.props;

        if (onMouseMove)
            onMouseMove();
    }

    handleMouseOver = () => {
        this.setState({mouseOver: true});
    }

    handleMouseEnter = () => {
        const {onMouseEnter} = this.props;

        if (onMouseEnter) {
            onMouseEnter();
        }
    }

    handleMouseLeave = () => {
        this.setState({mouseOver: false});
        this.setState({mouseDown: false});
        this.setState({hoverEffect: false});
    }

    handleMouseDown = () => {
        const {onMouseDown} = this.props;

        if (onMouseDown)
            onMouseDown()

        this.setState({hoverEffect: true});
        if (!this.props.toggled)
            this.setState({mouseDown: true});
    }

    handleMouseUp = () => {
        this.setState({hoverEffect: false});
        this.setState({mouseDown: false});
    }

    render () {

        const {
            onClick = ()=>{},
            togglePosition = 'right',
            parentClass
        } = this.props;

        return (
            <div
                className = {classes(CLASSES.vertical.parent, _CLASSES.base, parentClass)}
                onClick = {this.handleClick}
                onMouseMove = {this.handleMouseMove}
                onMouseOver = {this.handleMouseOver}
                onMouseLeave = {this.handleMouseLeave}
                onMouseDown = {this.handleMouseDown}
                onMouseUp = {this.handleMouseUp}
                onMouseEnter = {this.handleMouseEnter}
            >
                <div
                    className = {_CLASSES[togglePosition].primaryIconParent}
                >
                    {
                        this.props.primaryIcon ? <i
                            className = {
                                classes(
                                    "material-icons",
                                    _CLASSES.primaryIcon,
                                    this.state.mouseDown? _CLASSES.primaryIconMouseDown : null,
                                    this.props.toggled ? _CLASSES.primaryIconToggled : null
                                )
                            }
                        >
                            {'check'}
                        </i> : <div
                            className = {
                                classes(
                                    _CLASSES.defaultIcon,
                                    this.state.mouseDown? _CLASSES.defaultIconMouseDown : null,
                                    this.props.toggled ? _CLASSES.defaultIconToggled : null
                                )
                            }
                        />
                    }

                    <HoverEffect mouseOver = {this.state.hoverEffect} />
                </div>
                <div className = {_CLASSES.label}>
                    {this.props.label}
                </div>
                <HoverEffect mouseOver = {this.state.hoverEffect} />
            </div>
        )
    }
}

export default SwitchBase;
