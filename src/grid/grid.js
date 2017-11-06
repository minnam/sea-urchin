import React, {Component} from 'react'
import {style as _style, classes, media, createTypeStyle} from 'typestyle'
import _ from 'lodash'
import {CLASSES, ALIGN, work3, VIEW_WIDTHS, CONTAINER_TYPE} from './grid-classes'
import {ab, abc} from '../util';

class Grid extends Component {

    constructor (props) {
        super(props);

        this.state = {}
    }

    componentDidMount () {
        this.updateStyle();
        this.setParallax();
    }

    updateStyle () {
        const {align, alignItems, container, spacing, style} = this.props;
        const self = this,
        viewWidths = {
            ...VIEW_WIDTHS,
            [Symbol.iterator]: function () {
                let index = 0

                return {
                    next: () => {
                        return self.createViewWidthIterator(this, index++)
                    }
                }
            }
        }

        const styles = [CLASSES[abc(container, CONTAINER_TYPE.row, CONTAINER_TYPE.column)], style];

        for (let viewWidth of viewWidths) {
            const styleBySize = this.createStyleByColumnName(viewWidth.key);

            if (styleBySize) {
                styles.push(styleBySize);
            }

            if (spacing) {
                if (spacing[viewWidth.key]) {
                    styles.push(viewWidth.value);
                }
            }
        }

        this.setState({
            classNames: _style(...styles),
            alignClassName: _style(this.createAlignStyle(align, alignItems))
        });
    }

    createViewWidthIterator = (object, index) => {
        const {container, spacing = {}, style, ...other} = this.props;

        const keys = Object.keys(object),
        key = keys[index],
        gap = !_.isNil(spacing[key]) ? spacing[key] : spacing.gap,
        columnSize = _.isPlainObject(other[key]) ? other[key].size : other[key];

        return {
            value: {key, value: work3(key, {}, gap, columnSize)},
            done: (index >= keys.length)
        }
    }

    /**
    *   Takes name like 'lg', 'md', 'sm', etc. locate media query related to the name and returns style object
    */
    createStyleByColumnName (name) {
        const column = this.props[name];

        if (_.isNumber(column) ) {
            return work3(name, column.style, null, column)
        } else if (_.isPlainObject(column)) {
            const {align, alignItems} = column;
            const alignStyle = this.createAlignStyle(align, alignItems)

            if (column || column.style) {
                return work3(name, {...column.style, ...alignStyle}, null, column.size)
            } else {
                return null;
            }
        }
    }

    /**
    *   Align prop is either string or array. If string, it will fed to both 'justifyContnt' and 'alignItems'
    */
    createAlignStyle = (align, alignItems) => {
        let alignStyle = {};

        if (_.isString(alignItems)) {
            alignStyle = {
                justifyContent: ab(ALIGN[alignItems], ALIGN.left),
                alignItems: ab(ALIGN[alignItems], ALIGN.top)
            }
        } else if (_.isArray(alignItems)) {
            alignStyle = {
                justifyContent: ab(ALIGN[alignItems[0]], ALIGN.left),
                alignItems: ab(ALIGN[alignItems[1]], ALIGN.top)
            }
        }

        return {alignSelf: ALIGN[align], ...alignStyle}
    }

    setParallax = () => {
        const {
            parallax,
        } = this.props;

        if (this.parent && parallax) {
            this.renderParallax();

            window.onscroll = () => {
                this.renderParallax();
            };
        }
    }

    renderParallax () {
        const {
            parallaxSpeed = 0.2
        } = this.props;

        var yOffset = window.pageYOffset;
        this.parent.style.backgroundPosition = "50% " + (yOffset * parallaxSpeed) + "px";
    }

    display = () => {
        const {
            children,
            gap,
            lg = {},
            md = {},
            sm = {},
            xl = {},
            xs = {},
        } = this.props;

        if (!children) {
            return null
        } else if (_.isString(children)) {
            // Need to send warning
            return children
        }

        if (children.length) {
            return (
                children.map((child, key) => {
                    if (_.isString(child)) {
                        // Need to send warning
                        return child;
                    }

                    return (
                        React.cloneElement(child, {
                            key,
                            ...child.props,
                            spacing: {
                                gap: gap,
                                xl: xl.gap,
                                lg: lg.gap,
                                md: md.gap,
                                sm: sm.gap,
                                xs: xs.gap,
                            },
                            style: {...child.props.style}
                        })
                    )
                })
            )
        } else {
            return (
                React.cloneElement(children,{
                    ...children.props,
                    style: {...children.props.style}
                })
            )
        }
    }

    render () {
        const {classNames, alignClassName} = this.state;

        return (
            <div
                className = {classes(alignClassName, classNames)}
                ref = {(a) => {this.parent = a}}
            >
                {this.display()}
                <div
                    style = {{
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        position: 'absolute',
                        background: 'rgba(0,0,0,0.5)',
                        display: this.props.disabled ? 'inline' : 'none'
                    }}
                />
            </div>
        )
    }
}

export default Grid;
