import React, {Component} from 'react';
import Checkbox from './checkbox';
import {SwitchBase} from '../base'

const CLASSES = {
    vertical: {
        parent: {

        },
    },
    horizontal: {
        parent: {
            width: '100%'
        },
    }
}

class RadioButton extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {
        window.addEventListener('mouseup', this.handleMouseUp)
    }

    handleMouseUp = () => {
        this.setState({mouseDown: false});
    }

    toggleShit (name) {
        const state =  {...this.state};

        state[name] = !state[name];

        this.setState({...state});
    }

    render () {
        const {layout = 'vertical'} = this.props;

        return (
            <div>
                <SwitchBase
                    label = 'hello'
                    toggled = {this.state.hello}
                    onToggle = {() => {
                        this.toggleShit('hello');
                    }}
                    primaryIcon = {true}
                />
                <SwitchBase
                    label = 'hello2'
                    toggled = {this.state.hello2}
                    onToggle = {() => {
                        this.toggleShit('hello2');
                    }}
                />
                <SwitchBase
                    label = 'hello3'
                    toggled = {this.state.hello3}
                    onToggle = {() => {
                        this.toggleShit('hello3');
                    }}
                />
            </div>
        )
    }
}

export default RadioButton;
