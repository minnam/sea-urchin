/// <reference types="react" />
import * as React from 'react';
import IBaseProps from '../base/input-base-template';
export interface IProps extends IBaseProps {
    hint: string;
    default: string;
    onMouseOver: () => void;
    setFluidFocus: (a: number) => void;
    fluidIndex: number;
}
export interface IState {
    focused?: boolean;
    value: string;
}
declare class InputField extends React.Component<IProps, IState> {
    theme: object;
    input: HTMLInputElement;
    constructor(props: IProps);
    render(): JSX.Element;
    componentDidMount(): void;
    handleClick: (event: any) => void;
    focus: () => void;
    blur: () => void;
    handleMouseOver: () => void;
}
export default InputField;
