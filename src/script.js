testarea = document.querySelector("#testarea")
currentlyPressedKeys = []
releasedKeys = []
testarea.onkeyup = (e) => {
    const currentTime = Date.now()
    console.log(e.type, e.key, e.keyCode, e.ctrlKey, e.shiftKey, currentTime)
    // currentlyPressedKeys.find(keyPressInfo => keyPressInfo.keyCode === e.keyCode)?.
    for (let i = 0; i < currentlyPressedKeys.length; i++){
        const keyPressInfo = currentlyPressedKeys[i]
        if (keyPressInfo.keyCode === e.keyCode) {
            keyPressInfo.keyUpTime = currentTime
            keyPressInfo.keyPressedFor = keyPressInfo.keyUpTime - keyPressInfo.keyDownTime
            releasedKeys.push(keyPressInfo)
            currentlyPressedKeys.splice(i, 1)
            break
        }
    }
    console.log(releasedKeys)
}
testarea.onkeydown = (e) => {
    const currentTime = Date.now()
    const keyPressInfo = {
        key: e.key,
        keyCode: e.keyCode,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        keyDownTime: currentTime
    }
    console.log(e.type, e.key, e.keyCode, e.ctrlKey, e.shiftKey, currentTime)
    currentlyPressedKeys.push(keyPressInfo)
}
// document.createElement("textarea").onk