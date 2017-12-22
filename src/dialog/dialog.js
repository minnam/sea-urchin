import React, {Component} from 'react';
import _ from 'lodash';

const DIALOG_STYLE = {
    position: 'fixed',
    background: 'white',
    boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.08)',
    zIndex: 10,
    boxSizing: 'border-box'
}

class Dialog extends Component {

    constructor (props) {
        super(props);
        this.getReferenceClientRect = this.getReferenceClientRect.bind(this);
        this.state = {mounted: false};
    }

    componentWillReceiveProps (newProps) {

        if (newProps.focused) {
            if (this.blurTimeout) {
                clearTimeout(this.blurTimeout);
                this.blurTimeout = null;
                this.setState({mounted: true, focused: true, referenceClientRect: this.getReferenceClientRect()});
            } else {
                this.setState({mounted: true, focused: true, referenceClientRect: this.getReferenceClientRect()});
            }

        } else {
            this.setState({mounted: newProps.focused, referenceClientRect: this.getReferenceClientRect() });
            this.blurTimeout = setTimeout(this.closeDialog.bind(this), 250)
        }
    }

    componentDidMount () {


        window.addEventListener('scroll', () => {
            this.setState({
                referenceClientRect: this.getReferenceClientRect()
            });
        })

        this.setState({
            referenceClientRect: this.getReferenceClientRect()
        });

    }

    closeDialog () {

        this.setState({
            focused: false
        });

    }

    getReferenceClientRect () {
        const {
            dialogReference,
            placement = ['bottomLeft', 'topLeft'],
            size = {}
        } = this.props;

        if (dialogReference) {

            const targetRect = dialogReference().getBoundingClientRect();
            const dialogRect = this.dialog.getBoundingClientRect();

            const test = {...this.setPlacement(placement[0], targetRect)};



            switch (placement[1]) {
                case 'bottomLeft' : {
                    return ({
                        top: test.top,
                        left: test.left,
                        width: test.width,
                        height: test.height - dialogRect.height
                    })
                }

                case 'bottomRight' : {
                    return ({
                        top: test.top,
                        left: test.left - dialogRect.width,
                        width: test.width,
                        height: test.height - dialogRect.height
                    })
                }

                case 'topLeft' : {
                    return ({
                        top: test.top,
                        left: test.left,
                        width: test.width,
                        height: test.height
                    })
                }

                case 'topRight' : {
                    return ({
                        top: test.top,
                        left: test.left - dialogRect.width,
                        width: test.width,
                        height: test.height
                    })
                }
            }

        } else {
            return ({
                top: 0,
                left: 0,
                width: 0,
                height: 0,
            })

        }
    }

    setPlacement (placement, clientRect) {

        const {
            size = {}
        } = this.props;

        let width = clientRect.width;
        let height = clientRect.height;

        if (size.width && size.width != 'initial') {
            width = size.width;
        }

        if (size.height && size.height != 'initial') {
            height = size.height;
        }

        switch (placement) {
            case 'bottomLeft' : {
                return ({
                    top: clientRect.top,
                    left: clientRect.left,
                    width,
                    height,
                })
            }

            case 'bottomRight' : {
                return ({
                    top: clientRect.top,
                    left: clientRect.left + (size.width ? size.width : clientRect.width),
                    width,
                    height,
                })
            }

            case 'topLeft' : {
                return ({
                    top: clientRect.top - (clientRect.height),
                    left: clientRect.left,
                    width,
                    height,
                })
            }

            case 'topRight' : {
                return ({
                    top: clientRect.top - (clientRect.height),
                    left: clientRect.left + (size.width ? size.width : clientRect.width),
                    width,
                    height,
                })
            }
        }
    }

    render () {
        const {
            dialogOffset = {top: 0, left: 0, ...this.props.dialogOffset},
            children,
            style
        } = this.props;

        const {
            mounted,
            focused,
            referenceClientRect = {}
        } = this.state;

        return (
            <div
                ref = {(dialog) => {
                    this.dialog = dialog
                }}
                style = {{
                    ...DIALOG_STYLE,
                    display: focused ? 'inline-block' : 'none',
                    marginTop: mounted ? 0 : -5,
                    opacity: mounted ? 1 : 0,
                    top: !_.isNaN(referenceClientRect.top + referenceClientRect.height + 1  + dialogOffset.top) ? referenceClientRect.top + referenceClientRect.height + 1  + dialogOffset.top : 0,
                    left: referenceClientRect.left,
                    width: referenceClientRect.width,
                    transition: 'marginTop .25s, opacity .25s',
                    ...style
                }}
            >
                {children}
            </div>
        )
    }

}

export default Dialog;
