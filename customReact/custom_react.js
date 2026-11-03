
function customRender(reactElement,container){
    /*
    const curr=document.createElement(reactElement.type)
    curr.innerHTML=reactElement.children
    curr.setAttribute('href',reactElement.props.href)
    curr.setAttribute('target',reactElement.props.target)
    container.appendChild(curr)
    */
   const curr=document.createElement(reactElement.type)
   curr.innerHTML=reactElement.children
   for (const prop in reactElement.props){
    if (prop=='children') continue;
    curr.setAttribute(prop,reactElement.props[prop])
   }
   container.appendChild(curr)

}


const container=document.querySelector('#root')
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google.com'
}
customRender(reactElement,container)
