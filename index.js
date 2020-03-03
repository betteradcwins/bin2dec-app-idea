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

const removeChild = (selector, child) => document.querySelector(selector).removeChild(child) 

function convert(ids, regex, callback, message, value) {
    if (hasAlert()) removeChild('.container', hasAlert())
    
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
        parseInt(value, 2).toString(16).toUpperCase()], 
    'Please, only enter 0 or 1.', value)

const convertDec2BinAndHex = (value) => 
    convert(['binary','hexadecimal'],
    /^[0-9]+$/g,
    () => [parseInt(value, 10).toString(2),
        parseInt(value, 10).toString(16).toUpperCase()],
    'Please, only enter numbers.', value)

const convertHex2BinAndDec = (value) => 
    convert(['binary','decimal'], 
    /^([0-9]|[A-F]|[a-f])+$/g,
    () => [parseInt(value, 16).toString(2), 
        parseInt(value, 16).toString(10),],
    'Please, only enter numbers or letters between A to F.',
     value)

const setContent = (elem, innerHTML, className) => {
    elem.innerHTML = innerHTML
    elem.className = className
}

function changeTitle(elem) {
    const [strong1, strong2, strong3] = document.querySelectorAll('strong')

    if (elem.id === 'binary') {
        setContent(strong1, 'Binary', 'orange')
        setContent(strong2, 'decimal', 'blue')
        setContent(strong3, 'hexadecimal', 'green')
    } else if (elem.id === 'decimal') {
        setContent(strong1, 'Decimal', 'blue')
        setContent(strong2, 'binary', 'orange')
        setContent(strong3, 'hexadecimal', 'green')
    } else {
        setContent(strong1, 'Hexadecimal', 'green')
        setContent(strong2, 'decimal', 'blue')
        setContent(strong3, 'binary', 'orange')
    }
}
