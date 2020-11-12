const myButton = document.querySelector('#myButton1')
const callback =() => {
    console.log('click1')
}

const callback1 =() => {
    console.log('click2')
}

const callback2 =() => {
    console.log('click3')
}

// myButton.onclick = callback,只能用一次（最早的事件绑定注册方式）
// myButton.onclick = null,取消绑定

myButton.addEventListener('click',callback)
myButton.addEventListener('click',callback1)
myButton.addEventListener('click',callback2)
//取消绑定
myButton.removeEventListener('click',callback1)
// myButton.removeEventListener('click',callback2)