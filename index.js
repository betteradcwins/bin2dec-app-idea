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

function convert(id, regex, callback, message, value) {
    if (hasAlert()) document.querySelector('.container').removeChild(hasAlert())
    
    const num = document.getElementById(id)
    if (value.match(regex)) {
        const newValue = callback()
        num.value = newValue
    } else if(value === '') {
        num.value = ''
    } else {
        createAlert(message)
    }
}

const convertBin2Dec = (value) => 
    convert('decimal', /^[0-1]+$/g, 
    () => parseInt(value, 2), 
    'Please, only enter 0 or 1.', value)

const convertDec2Bin = (value) => 
    convert('binary', /^[0-9]+$/g,
    () => parseInt(value, 10).toString(2),
    'Please, only enter numbers between 0 and 9.', value)

function changeTitle(elem) {
    const strong1 = document.querySelector('[strong-1]')
    const strong2 = document.querySelector('[strong-2]')
    if (elem.id === 'binary') {
        strong1.innerHTML = 'Binary'
        strong2.innerHTML = 'decimal'
    } else {
        strong2.innerHTML = 'binary'
        strong1.innerHTML = 'Decimal'
    }
}
