


setInterval(() => {
    if (document.getElementById('time') !== null) {
        document.getElementById('time').remove()
    }
    getTime()
}, 1000);

function getTime() {
    const newDate = new Date()
    // const dataStr = String(newDate).split(' ')[4]
    const str = newDate.toLocaleTimeString()
    const span = document.createElement('span')
    span.setAttribute('id','time')
    span.innerHTML = str

    document.getElementById('clock').appendChild(span)
}
