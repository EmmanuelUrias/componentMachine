//Write a class that encapsultates the html elements and give that class methods to duplicate, change, and other things

// Remember we are not using this logic and code and putting it into our html but rather pulling the html into here and manipulating it through here.
// component class

class Component {
    constructor(parent, element, elemName) {
        this.parent = parent
        this.element = element
        this.elemName = elemName
        this.componentArr = []

    }
    initiate() {
        this.componentArr.push(this.element)

        let elemNum = 1
        for (let i = 0; i < this.componentArr.length; i++ ){
            elemNum++
        }
        this.element.setAttribute('id', `${this.elemName}-${elemNum}`)
    }
    duplicate() {
        // Get this.element and make another one under the same parent element
        let newElement = this.element
        
        this.parent.appendChild(newElement)

        this.componentArr.push(newElement)

        let elemNum = 1
        for (let i = 0; i < this.componentArr.length; i++ ){
            elemNum++
        }
        //newElement.setAttribute('id', `${name}-${elemNum}`)

        console.log(newElement)
        console.log(this.element)

        let newText = document.createElement('p')
        newText.innerHTML = 'This is the new component'
        newElement.appendChild(newText)
    }
}

let card = document.getElementById('card')
let cardParent = document.getElementById('card-container')

const cardComponent = new Component (cardParent, card, 'card')

let card2 = card

console.log(card)
console.log(card2)

console.log(cardComponent)

cardComponent.initiate()
console.log(cardComponent.componentArr)

cardComponent.duplicate()
//console.log(cardComponent.newDiv)



// let cardArray = [0, 1, 2, 3, 4, 5]

// for(i = 0; i < cardArray.length; i++){
//     let newCard = cardComponent.element
//     document.createElement('div').setAttribute('id', `card-${i}`)
//     document.getElementById(`card-${i}`).innerHTML = newCard
// }