/// <reference types="react" />
import * as React from 'react';
export interface TextProps {
    type: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    children: any;
}
declare class Text extends React.Component<TextProps, {}> {
    props: TextProps;
    theme: {
        text: {
            default?: string;
        };
    };
    constructor(props: any);
    render(): React.ReactElement<any>;
}
export default Text;
