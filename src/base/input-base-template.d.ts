/// <reference types="react" />
import * as React from 'react';
import { IProps as IBaseProps } from './input-base';
import { ILayout } from './input-base-classes';
export interface IProps extends IBaseProps {
    [index: string]: any;
    children?: {};
    classNames?: ILayout;
    disableHoverEffect?: boolean;
    disableIcon?: boolean;
    fluidIndex?: number;
    focused?: boolean;
    height?: number;
    highlightOffset?: number;
    hint?: string;
    hintClass?: string;
    hintStyle?: React.CSSProperties;
    input?: HTMLInputElement;
    label?: string;
    labelClass?: string;
    labelFocusedClass?: string;
    labelFocusedStyle?: React.CSSProperties;
    labelParentStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    mouseOver?: boolean;
    parentClass?: string;
    postLabel?: any;
    postLabelClass?: string;
    postLabelParentClass?: string;
    preLabel?: any;
    preLabelClass?: string;
    preLabelParentClass?: string;
    primaryIcon?: any;
    primaryIconClass?: string;
    primaryIconStyle?: React.CSSProperties;
    value?: string;
    setFluidFocus: any;
    onMouseOver?: any;
}
declare class InputBaseTemplate extends React.Component<IProps> {
    private theme;
    constructor(props: IProps);
    render(): JSX.Element;
}
export default InputBaseTemplate;
