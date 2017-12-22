import * as React from 'react';
import { classes } from 'typestyle';
import { getTheme } from '../theme-util';
const TEXT_COMPONENTS = {
    div: React.createElement("div", null),
    h1: React.createElement("h1", null),
    h2: React.createElement("h2", null),
    h3: React.createElement("h3", null),
    h4: React.createElement("h4", null),
    h5: React.createElement("h5", null),
    h6: React.createElement("h6", null),
    p: React.createElement("p", null),
    span: React.createElement("span", null)
};
class Text extends React.Component {
    constructor(props) {
        super(props);
        this.theme = getTheme(this, 'text');
    }
    render() {
        const { type = 'div', children } = this.props;
        return (React.cloneElement(TEXT_COMPONENTS[type], {
            className: classes(this.theme.text.default, this.theme.text[type])
        }, [
            ...children
        ]));
    }
}
export default Text;
//# sourceMappingURL=text.js.map