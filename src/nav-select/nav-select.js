import React, {Component} from 'react';
import NavSelectItem from './nav-select-item';

class NavSelect extends Component {

    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        const {
            style,
            items
        } = this.props;
        const {selected} = this.state;

        return (
            <div
                style = {style}
            >
                {
                    items.map((nav, key) => {

                        return (
                            <NavSelectItem
                                key = {key}
                                focused = {selected == key}
                                onClick = {() => {this.setState({selected: key})}}
                                status = {false}
                                label = {nav.name}
                                highlightOffset = {9}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default NavSelect;
