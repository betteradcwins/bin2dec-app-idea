const hasAlert = () => document.querySelector('.alert')

const createAlert = message => {
    if (!hasAlert()) {
        const div = document.createElement('div')
        div.className = 'alert'
        div.innerHTML = message
        document.querySelector('.container')
        .appendChild(div)
    }
}

function convert(ids, regex, callback, message, value) {
    if (hasAlert()) document.querySelector('.container').removeChild(hasAlert())
    
    ids.forEach((id, i) => {
        const num = document.getElementById(id)
        if (value.match(regex)) {
            const newValue = callback()[i]
            num.value = newValue.toString()
        } else if(value === '') {
            num.value = ''
        } else {
            createAlert(message)
        }
    })
}

const convertBin2DecAndHex = (value) => 
    convert(['decimal','hexadecimal'],
    /^[0-1]+$/g, 
    () => [parseInt(value, 2),
        parseInt(value, 2).toString(16)], 
    'Please, only enter 0 or 1.', value)

const convertDec2BinAndHex = (value) => 
    convert(['binary','hexadecimal'],
    /^[0-9]+$/g,
    () => [parseInt(value, 10).toString(2),
        parseInt(value, 10).toString(16)],
    'Please, only enter numbers.', value)

const convertHex2BinAndDec = (value) => 
    convert(['binary','decimal'], 
    /^([0-9]|[A-F]|[a-f])+$/g,
    () => [parseInt(value, 16).toString(2), 
        parseInt(value, 16).toString(10),],
    'Please, only enter numbers or letters between A to F.',
     value)


function changeTitle(elem) {
    const strongs = document.querySelectorAll('strong')
    if (elem.id === 'binary') {
        strongs[0].innerHTML = 'Binary'
        strongs[1].innerHTML = 'decimal'
        strongs[2].innerHTML = 'hexadecimal'
    } else if (elem.id === 'decimal'){
        strongs[0].innerHTML = 'Decimal'
        strongs[1].innerHTML = 'binary'
        strongs[2].innerHTML = 'hexadecimal'
    } else {
        strongs[0].innerHTML = 'Hexadecimal'
        strongs[1].innerHTML = 'binary'
        strongs[2].innerHTML = 'decimal'
    }
}
