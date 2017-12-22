/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    [key: string]: any;
    focus?: () => void;
    focused?: boolean;
    input?: HTMLInputElement;
    onClick?: (event: any) => void;
    onMouseOver?: () => {};
    layout?: 'vertical' | 'horizontal';
    handleClick?: (event: any) => void;
}
export interface IState {
    mouseOver: boolean;
}
declare class InputBase extends React.Component<IProps, IState> {
    constructor(props: IProps);
    wrap(classNames: object): any;
    render(): any;
    handleClick(event: any): void;
    handleMouseOver(): void;
    handleMouseLeave(): void;
}
export default InputBase;
