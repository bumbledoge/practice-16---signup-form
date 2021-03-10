function isPasswordOk(c) {

    if(c.length < 8) {
        return 0;
    }
    return 1;
}

export default isPasswordOk;