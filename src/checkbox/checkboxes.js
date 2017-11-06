import React, {Component} from 'react';
import Checkbox from './checkbox';

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

class Checkboxes extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: -1
        };
        this.dragFlag = false;
    }

    componentDidMount () {
        window.addEventListener('mouseup', this.handleMouseUp)
    }

    handleMouseUp = () => {
        this.setState({mouseDown: false, dragMoveFlag: false, selected: -1});
        this.dragFlag = false;
    }

    handleMouseDown = () => {
        this.setState({mouseDown: true});
        this.dragFlag = true;
    }

    handleMouseMove = () => {

        if (!this.state.dragMoveFlag) {

            if (this.state.selected > -1) {
                const data = this.props.data;

                console.log(data);

                data[this.state.selected].toggled = !data[this.state.selected].toggled;

                this.props.onToggle(data);
                this.setState({dragMoveFlag: true});
            }
        }
    }

    render () {
        const {layout = 'vertical'} = this.props;

        return (
            <div
                style = {CLASSES[layout].parent}
                onMouseDown = {this.handleMouseDown}
                onMouseUp = {this.handleMouseUp}
                onMouseMove = {this.handleMouseMove}
            >
                {
                    this.props.data.map((label, key) => {
                        return (
                            <Checkbox
                                key = {key}
                                label = {label.name}
                                togglePosition = {'left'}
                                toggled = {label.toggled}
                                onMouseEnter = {() => {
                                    console.log('hi?');
                                }}
                                onMouseDown = {() => {
                                    console.log('hello');
                                    this.setState({
                                        selected: key
                                    })
                                }}
                                dragMoveFlag = {this.state.dragMoveFlag}
                                dragFlag = {this.state.mouseDown}
                                onToggle = {() => {
                                    const data = this.props.data;

                                    data[key].toggled = !data[key].toggled;

                                    this.props.onToggle(data);
                                }}
                                style = {{
                                    width: layout == 'horizontal' ? '100%' : 'inital'
                                }}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Checkboxes;
