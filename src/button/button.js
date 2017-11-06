import React, {Component} from 'react';

class Button extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {

        const noFocusAndNoVal = !this.props.focused && this.props.value == '';
        const noFocusAndVal = this.props.focused && this.props.value == '' ;

        const labelFocusedStyle = noFocusAndNoVal ? {
            fontSize: 15,
            lineHeight: '60px',
            height: '100%',
        } : {
            ...this.props.labelFocusedStyle
        };

        const height = this.props.height ? this.props.height : 60;

        return (
            <div
                style = {{
                    border: '1px solid rgb(220,220,220)',
                    height: height,
                    boxSizing: 'border-box',
                    borderRadius: '0px 0px 0 0',
                    float: 'left',
                    position: 'relative',
                    transition: 'all .25s',
                    cursor: 'pointer',
                    ...this.props.style
                }}
                onMouseOver = {() => {
                    this.setState({
                        mouseOver: true
                    })
                }}
                onMouseLeave = {() => {
                    this.setState({
                        mouseOver: false
                    })
                }}
                onClick = {(event) => {
                    if (this.props.onClick)
                        this.props.onClick();
                }}
            >
                <div
                    className = 'noselect'
                    style = {{
                        width: '100%',
                        height: noFocusAndNoVal ? '100%' : 14,
                        ...this.props.labelParentStyle
                    }}
                >
                    <i
                        className="material-icons"
                        style = {{
                            fontSize: 15,
                            lineHeight: height + 'px',
                            height: '100%',
                            float: 'left',
                            transition: 'all .25s',
                            color: 'rgb(150,150,150)',
                        }}
                    >
                        {this.props.primaryIcon}
                    </i>
                    <span
                        style = {{
                            fontSize: 13,
                            lineHeight: height + 'px',
                            height: 14,
                            float: 'left',
                            marginLeft: 16,
                            marginRight: 16,
                            transition: 'all .25s',
                            fontSize: 15,
                            height: '100%',
                            width: 'calc(100% - 32px)',
                            textAlign: 'center',
                            boxSizing: 'border-box',
                            ...this.props.labelStyle,
                        }}
                    >
                        {this.props.label}
                    </span>
                </div>

                {
                    this.props.disableHighlight ? '' : <div
                        style = {{
                            width: this.state.mouseOver ? '100%' : 0,
                            height: height - 2,
                            top: this.props.highlightOffset ? this.props.highlightOffset : 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 0,
                            position: 'absolute',
                            borderBottom: '2px solid rgb(160,160,160)',
                            transition: 'all .25s'
                        }}
                    />
                }
                {this.props.children}
            </div>
        );

    }

}

export default Button;
