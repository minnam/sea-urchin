import React, {Component} from 'react';

import {InputBase} from '../base';
import {getTheme} from '../theme-util';

class NavSelectItem extends Component {

    constructor (props) {
        super(props);

        this.theme = getTheme(this, 'textInput');
        this.state = {value: '', selected: 0};
    }

    render () {

        return (
            <InputBase
                value = {this.state.value}
                focused = {this.props.focused}
                label = {this.props.label}
                focus = {() => {
                    this.setState({focused: true});
                }}
                onClick = {() => {
                    if (this.props.onClick)
                        this.props.onClick();
                }}
                style = {{
                    width: 100,
                    border: 'none',
                    marginLeft: 0,
                    cursor: 'pointer'
                }}
                labelParentStyle = {{
                    marginLeft: 0
                }}
                labelStyle = {{
                    textAlign: 'center',
                    marginLeft: 0,
                    width: '100%'
                }}
                hintClass = {this.theme.hint}
                labelClass = {this.theme.label}
                parentClass = {this.theme.style}
                primaryIconClass = {this.theme.primaryIcon}
                primaryIcon = {this.props.primaryIcon}
                disableHoverEffect = {true}
                highlightOffset = {this.props.highlightOffset}
                labelFocusedStyle = {{
                    fontSize: 15,
                    lineHeight: '30px',
                    height: '100%',
                }}
                hintStyle = {{
                    left: 0
                }}
            />
        );
    }

}

export default NavSelectItem;
