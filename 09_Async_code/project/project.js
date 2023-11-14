const insert = document.getElementById('insert')

window.addEventListener('keydown',(event)=>{
    const key = event.key
    const code = event.code
    const keyCode = event.keyCode
    if (document.getElementById('color') === null) {
         insert.innerHTML = `
        <div id="color" class="color" >
                <table>
                    <tr>
                        <th>Key</th>
                        <th>Keycode</th>
                        <th>Code</th>
                    </tr>
                    <tr>
                        <td>${key === ' ' ? 'Space' : key  }</td>
                        <td>${code}</td>
                        <td>${keyCode}</td>
                    </tr>
                </table>
        </div>`
    }else{
        const table = document.getElementById('color').getElementsByTagName('table')[0].firstChild.nextSibling
        const tr = document.createElement('tr')
        const keyTd = document.createElement('td')
        const codeTd = document.createElement('td')
        const keyCodeTd = document.createElement('td')

        keyTd.innerHTML = key
        codeTd.innerHTML = code
        keyCodeTd.innerHTML = keyCode

        tr.appendChild(keyTd)
        tr.appendChild(codeTd)
        tr.appendChild(keyCodeTd)

        // console.log(tr);
        console.log(table);
        table.appendChild(tr)
    }
   
})