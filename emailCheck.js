let bad = " ,)(*&^%$#!?";

function isCorrect (c) {
    
    let at = c.indexOf('@') === -1;
    let da = c.split("").every(checkChar);
    
    return (da && !at);
}
function checkChar(e) {
    return bad.indexOf(e) === -1 ? 1 : 0
}

export default isCorrect