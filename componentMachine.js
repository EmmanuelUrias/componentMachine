//Write a class that encapsulates the html elements and give that class methods to duplicate, change, and other things

// Remember we are not using this logic and code and putting it into our html but rather pulling the html into here and manipulating it through here.

class Component {
    constructor(parent, element, elemName) {
        this.parent = parent
        this.element = element
        this.elemName = elemName
        this.componentArr = []

    }

    initiate() {
        this.componentArr.push(this.element)

        this.element.setAttribute('id', `${this.elemName}-${this.componentArr.length}`)
    }

    duplicate() {
        // Get this.element and make another one under the same parent element
        let newElement = this.element.cloneNode(true)
        
        newElement.setAttribute('id', `${this.elemName}-${this.componentArr.length + 1}`)

        this.componentArr.push(newElement)

        this.parent.appendChild(newElement)

    }

    change(arrPosition, componentToChangeTo) {
        this.componentArr[arrPosition] = componentToChangeTo

    }
}

let card = document.getElementById('card')
let cardParent = document.getElementById('card-container')

const cardComponent = new Component (cardParent, card, 'card')

cardComponent.initiate()

let btn = document.getElementById('btn')
let btnParent = document.getElementById('button-container')

const btnComponent = new Component(btnParent, btn, 'btn')

btnComponent.initiate()

cardComponent.change(3, btn)

for (let i = 0; i < 6; i++) {
    cardComponent.duplicate()
    btnComponent.duplicate()
}

