//Write a class that encapsultates the html elements and give that class methods to duplicate, change, and other things

// Remember we are not using this logic and code and putting it into our html but rather pulling the html into here and manipulating it through here.
// component class

class Component {
    constructor(element, name) {
        this.element = element
        this.name = name
        this.componentArr = []

    }
    initiate() {
        this.componentArr.push(this.element)

        let elemNum = 1
        for (let i = 0; i < this.componentArr.length; i++ ){
            elemNum++
        }
        this.element.setAttribute('id', `${name}-${elemNum}`)
    }
    duplicate() {
        // Get this.element and make another one under the same parent element
        let newDiv = document.createElement('div')
        let newElement = this.element
        newDiv.appendChild(newElement)

        this.componentArr.push(newDiv)

        let elemNum = 1
        for (let i = 0; i < this.componentArr.length; i++ ){
            elemNum++
        }
        newDiv.setAttribute('id', `${name}-${elemNum}`)

        console.log(newDiv)

        return newDiv
    }
}

let card = document.getElementById('card')

const cardComponent = new Component (card, 'card')

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