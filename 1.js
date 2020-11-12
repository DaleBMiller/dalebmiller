/*动态创建节点 */
const oList = document.querySelector('#list1')

const  oLiElement = document.createElement('li')
oLiElement.textContent = 'Swift'

// const oTextNode = document.createTextNode('Swift')
// oLiElement.appendChild(oTextNode)
// oList.appendChild(oLiElement)
// oList.append(oLiElement)
// oList.prepend(oLiElement)

//插入成第二个节点
// oList.firstElementChild.after(oLiElement)

//插入倒数第二个子节点
//oList.lastElementChild.before(oLiElement)

// oList.lastElementChild.remove()

//替换javascript节点
// oList.lastElementChild.previousElementSibling.replaceWith(oLiElement)

oList.lastElementChild.classList.add('list1')
oList.lastElementChild.previousElementSibling.classList.add('list')
oList.firstElementChild.classList.add('list')

oList.addEventListener('mouseover',(Event) =>{
    Event.target.classList.toggle('list1')
})