const oList = document.querySelector('#list1')

//ul元素的第二个子元素节点
const oli = oList.firstElementChild.nextElementSibling

oli.style.backgroundColor  = 'red'
// oli.style.cssText = 'border : 1px solid red;'
oli.style.border = '4px solid blue'

const comStyle = window.getComputedStyle(oli)//只读
console.log(comStyle.borderStyle)