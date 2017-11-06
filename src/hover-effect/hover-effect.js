import React, {Component} from 'react';

const HOVER_STYLE = {
    zIndex: 0,
    position: 'absolute',
}
const BORDER_STYLE = '1px solid rgba(160,160,160,0.5)';
const SEQ_LENGTH = .1;
const STYLE_IN_SEQ = [
    'transitionDelay: 0',
    `transitionDelay: .1`,
    'transitionDelay: .2',
    'transitionDelay: .3',
];

class HoverEffect extends Component {

    constructor (props) {
        super(props);

        const {transitionTime = .05} = this.props;

        this.state = {
            transitionTime,
            sequence: [
                '0s',
                `${transitionTime}s`,
                `${transitionTime * 2}s`,
                `${transitionTime * 3}s`,
            ]
        };
    }

    render () {

        const {mouseOver} = this.props;
        const {sequence, transitionTime} = this.state;

        return (
            <div
                style = {{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 5
                }}
            >
                <div
                    style = {{
                        ...HOVER_STYLE,
                        width: mouseOver ? '100%' : 0,
                        height: '100%',
                        right: 0,
                        borderBottom: BORDER_STYLE,
                        transition: `all ${transitionTime}s`,
                        transitionDelay: mouseOver ? sequence[0] : sequence[3]

                    }}
                />
                <div
                    style = {{
                        ...HOVER_STYLE,
                        width: '100%',
                        height: mouseOver ? '100%' : 0,
                        bottom: 0,
                        left: -1,
                        borderLeft: BORDER_STYLE,
                        transition: `all ${transitionTime}s`,
                        transitionDelay: mouseOver ? sequence[1] : sequence[2]
                    }}
                />
                <div
                    style = {{
                        ...HOVER_STYLE,
                        width: mouseOver ? '100%' : 0,
                        height: '100%',
                        top: -1,
                        left: 0,
                        borderTop: BORDER_STYLE,
                        transition: `all ${transitionTime}s`,
                        transitionDelay: mouseOver ? sequence[2] : sequence[1]
                    }}
                />
                <div
                    style = {{
                        ...HOVER_STYLE,
                        width: '100%',
                        height: mouseOver ? '100%' : 0,
                        top: 0,
                        right: -1,
                        borderRight: BORDER_STYLE,
                        transition: `all ${transitionTime}s`,
                        transitionDelay: mouseOver ? sequence[3] : sequence[0]
                    }}
                />
            </div>
        );
    }
}

export default HoverEffect;
