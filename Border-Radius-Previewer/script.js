//box object
const box = document.querySelector('#box')

//input objects
const bottomLeft = document.querySelector('#border-bottom-left-radius')
const topLeft = document.querySelector('#border-top-left-radius')
const topRight = document.querySelector('#border-top-right-radius')
const bottomRight = document.querySelector('#border-bottom-right-radius')

const bottomLeft2 = document.querySelector('#border-bottom-left-radius2')
const topLeft2 = document.querySelector('#border-top-left-radius2')
const topRight2 = document.querySelector('#border-top-right-radius2')
const bottomRight2 = document.querySelector('#border-bottom-right-radius2')

const inputs = [bottomLeft, topLeft, topRight, bottomRight, bottomLeft2, topLeft2, topRight2, bottomRight2]
const primaryInputs = [bottomLeft, topLeft, topRight, bottomRight]
const secondaryInputs = [bottomLeft2, topLeft2, topRight2, bottomRight2]

//boder-radios config
function scale() {
    const select = document.querySelector('select')
    const options = document.querySelectorAll('select option')
    return options[select.selectedIndex].innerText
}

function equalValuesOfBlanks(inputElement) {
    let inputElement2 = document.querySelector(`#${inputElement.id}2`)
    inputElement2.value = inputElement.value

    
}

function setBoder() {
    function formater(inputValue) {
        if (inputValue) {
            return inputValue + scale()
        }
        else{
            return '0' + scale()
        }
    }
    
    box.style.borderRadius = 
    `${formater(topLeft.value)} ${formater(topRight.value)} ${formater(bottomRight.value)} ${formater(bottomLeft.value)}` + 
    ` / ${formater(topLeft2.value)} ${formater(topRight2.value)} ${formater(bottomRight2.value)} ${formater(bottomLeft2.value)}`
}

//Copiar CSS
function copyCSS() {
    navigator.clipboard.writeText(`border-radius: ${box.style.borderRadius};`);
    alert( 'border-radius copiado' )
}

//mudar modo de edição
var editMode = 0
function changeEditMode() {
    if (editMode == 1) {

        for (const key in secondaryInputs) {
            if (secondaryInputs.hasOwnProperty.call(secondaryInputs, key)) {
                const element = secondaryInputs[key];
                element.classList.add('disable')
                
            }
        }
        
        editMode = 0

    } else {

        for (const key in secondaryInputs) {
            if (secondaryInputs.hasOwnProperty.call(secondaryInputs, key)) {
                const element = secondaryInputs[key]
                element.classList.remove('disable')
                
            }
     
        }

        editMode = 1
    }
}

//verificar alterações no input
for (const key in inputs) { 
    if (inputs.hasOwnProperty.call(inputs, key)) {
        const element = inputs[key];
        element.addEventListener('change', function () {
            function equalValuesOfBlanksInCondicion() {
                console.log(editMode)
                if (editMode == 0) {
                    equalValuesOfBlanks(element)
                }
                else{
                    if (document.querySelector(`#${element.id}2`).value == '') {
                        equalValuesOfBlanks(element)
                    }
                }
            }
            equalValuesOfBlanksInCondicion()
            setBoder()
        })
    }
}