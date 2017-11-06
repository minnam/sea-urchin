import React, {Component} from 'react';
import {style, classes} from "typestyle";
import Theme from '../theme-provider';
import {checkPathValid} from '../theme-util.js';

class FluidBox extends Component {

    constructor (props) {
        super(props);
        this.state = {selected: 0};
        this.setFluidFocus = this.setFluidFocus.bind(this);

        this.sizes = [];


    }

    setFluidFocus (selected) {
        this.setState({selected})
    }

    render () {
        const {children} = this.props;
        const {selected} = this.state;


        return(
            <div
                style = {{
                    ...this.props.style,
                    flex: 1
                }}
            >
                {
                    children.map((child, key) => {
                        return(
                            React.cloneElement(child,{
                                key,
                                fluidIndex: key,
                                ...child.props,
                                setFluidFocus: this.setFluidFocus,
                                parentClass: style({
                                    width: key == this.state.selected ? '60%' : '40%',
                                })
                            })
                        )
                    })
                }
            </div>
        )
    }

}

export default FluidBox;
