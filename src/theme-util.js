import Theme from './theme-provider';
import _ from 'lodash';
import {style, classes} from "typestyle";

if (typeof global.seaurchin === undefined) {
  global.seaurchin = {};
}

const checkPathValid = (obj, path) => {
    const parts = path.split(".");
    let root = obj;

    if (!root) {
        return false;
    }

    for (let i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (root[part] && root.hasOwnProperty(part))
            root = root[part];
        else
            return false;
    }

    return true;
}

const getTheme = (obj = {}, type) => {
    const {theme, layout} = obj.props;

    const themeObj = {
        default: {
            style: {

            }
        }
    };
    themeObj[type] = {
        style: {

        }
    };

    if (checkPathValid( Theme[theme], 'default' )) {
        themeObj.default = {
            ...themeObj.default,
            ...Theme[theme].default
        };
    }

    if (checkPathValid( Theme[theme], type )) {
        themeObj[type] = {
            ...themeObj[type],
            ...Theme[theme][type]
        };
    }

    const {
        hintStyle,
        labelStyle,
        primaryIconStyle,
        valueStyle,
        preLabelStyle,
        preLabelParentStyle,
        preLabel,
        labelFocusedStyle
    } = obj.props;

    console.log({...Theme.default.style,});

    return (
        {
            style: style({
                ...Theme.default.style,
                ...themeObj.default.style,
                ...themeObj[type].style,
                ...obj.props.style
            }),
            primaryIcon: style({
                ...themeObj.default.style.primaryIcon,
                ...themeObj[type].style.primaryIcon,
                ...primaryIconStyle
            }),
            label: style({
                ...themeObj.default.style.label,
                ...themeObj[type].style.label,
                ...labelStyle
            }),
            hint: style({
                ...themeObj.default.style.hint,
                ...themeObj[type].style.hint,
                ...hintStyle
            }),
            valueStyle : style({
                ...themeObj.default.style.value,
                ...themeObj[type].style.value,
                ...valueStyle
            }),
            labelFocused: style({
                ...themeObj.default.style.labelFocused,
                ...themeObj[type].style.labelFocused,
                ...labelFocusedStyle
            }),
            preLabel : preLabel ? style({
                ...themeObj.default.style.preLabel,
                ...themeObj[type].style.preLabel,
                ...preLabel.props.style
            }) : null,
            preLabelParent : style({
                ...themeObj.default.style.preLabelParent,
                ...themeObj[type].style.preLabelParent,
                ...preLabelParentStyle
            }),
        }
    )
}

const getTheme2 = () => {

    const _theme = _.cloneDeepWith(Theme, function(a) {
        if (a.style)
            return { ...a, style: style({...a.style})}
    });

    if (!global.seaurchin) {
        global.seaurchin = {};
    }

    global.seaurchin.theme = _theme;
}

getTheme2();

export {checkPathValid, getTheme};
