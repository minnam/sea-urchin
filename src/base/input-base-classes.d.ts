export interface ILayout {
    parent: string;
    parentFocused: string;
    labelParent: string;
    labelParentFocused: string;
    primaryIcon: string;
    label: string;
    highlight: string;
    highlightFocused: string;
    preLabel: string;
    postLabel: string;
    postLabelFocused: string;
    primaryIconFocused?: string;
}
export interface IClasses {
    horizontal: ILayout;
    vertical: ILayout;
}
declare const CLASSES: IClasses;
export default CLASSES;
