/// <reference types="react" />
import * as React from 'react';
export interface IColumn {
    size?: number;
    gap?: number;
    style?: object;
}
export interface ISpacing {
    [key: string]: any;
    gap: number;
    lg?: ISpacing;
    md?: ISpacing;
    sm?: ISpacing;
    xl?: ISpacing;
    xs?: ISpacing;
}
export interface IProps {
    [key: string]: any;
    lg?: number | IColumn | null;
    md?: number | IColumn | null;
    sm?: number | IColumn | null;
    xl?: number | IColumn | null;
    xs?: number | IColumn | null;
    align?: string;
    alignItems?: string | string[];
    container?: boolean;
    gap?: number;
    parallax?: boolean | {
        speed: number;
    };
    spacing?: ISpacing;
    style?: object;
    className?: string;
    children?: any;
    disabled?: boolean;
}
export interface IStates {
    classNames: string;
    alignClassName: string;
}
declare class Grid extends React.Component<IProps, IStates> {
    parent: HTMLDivElement;
    constructor(props: IProps);
    render(): JSX.Element;
    componentDidMount(): void;
    updateClasses(): {
        styles: object[];
        alignStyles: {};
    };
    iterateViewWidth: (viewWidth: object, key: string) => any;
    createStyleByColumnName(name: string): any;
    private createAlignStyle;
    private initParallax;
    private updateParallax();
    private display;
}
export default Grid;
