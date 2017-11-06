/** a ? a : b */
const ab = (a,b) => {
    if (a)
        return a;

    return b;
}

/** a ? b : c */
const abc = (a,b,c) => {
    if(a)
        return b;
    else
        return c;
}

export {ab, abc}
