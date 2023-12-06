//* you can also add onclick or any other method but this approach is generally avoided
// document.getElementById('owl').onclick = ()=>{
//     alert('Owl Clicked !!!')
// }

//* We use eventlistners because it has more features than general onclick(events) like event proprgation 
// document.getElementById('owl').addEventListener('click',(event)=>{
//     console.log(event.type);
    // type , timestamp, defaultPrevented
    // target, toElement, currentTarget, srcElement
    // clientX, clientY, screenX, screenY
    // altKey, ctrlkey, keyCode, shiftkey
// })

/*
*       Understanding Events and Event Handlers
?           Events are actions that happen when the user or browser manipulates a page. 
?           They play an important role as they can cause elements of a web page to change dynamically.
?           you need an event handler to detect when an event happens. 
?           This way, you can set up code to react to events as they happen on the fly.
todo        JavaScript provides an event handler in the form of the addEventListener() method. 

*           addEventListener() Syntax
*           target.addEventListener(event, function, useCapture)

todo        target: the HTML element you wish to add your event handler to. 
todo        event: a string that specifies the name of the event. We already mentioned load and click events.
todo        function: specifies the function to run when the event is detected. This is the magic that can allow your web pages to change dynamically.
todo        useCapture: an optional Boolean value (true or false) that specifies whether the event should be executed in the capturing or bubbling phase. 
todo        In the case of nested HTML elements (such as an img within a div) with attached event handlers, this value determines which event gets executed first. 
todo        By default, it's set to false which means that the innermost HTML event handler is executed first (bubbling phase).  

*           Bubbling
todo        The bubbling principle is simple.
todo        When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
todo        event order :=>  child to parent
!           to stop bubbling  use event.stopPropagation().

*           Capturing
todo        Changes the order of event handling 
todo        event order :=>  parent to child

todo        Default behavior(false) of an event listner is Bubbling
*/

// document.getElementById('images').addEventListener('click',(e)=>{
//     console.log('Click Inside Ul');
// },false)

// document.getElementById('owl').addEventListener('click',(event)=>{
//     // event.stopPropagation()
//     event.preventDefault()
//     console.log('Owl Clicked');
// },false)


//*   When bubbling
// Owl Clicked
// Click Inside Ul
//*   When Capturing
// Click Inside Ul
// Owl Clicked

document.getElementById('images').addEventListener('click',(event)=>{
    if (event.target.tagName === 'IMG') {
        let elem = event.target.parentNode
        elem.remove()
    }
},false)