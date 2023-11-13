
interface IDoorProps{
    number: number
    present: boolean
    selected: boolean
    open: boolean
}

export default class Door<IDoorProps>{
    #number
    #present
    #selected
    #open

    constructor(number: number , present = false , selected = false , open = false){
        this.#number = number
        this.#present = present
        this.#selected = selected
        this.#open = open
    }

    get number(){
        return this.#number
    }

    get present(){
        return this.#present
    }

    get selected(){
        return this.#selected
    }

    get open(){
        return this.#open
    }

    deselect(){
        const seleted = false
        return new Door(this.number , this.present , seleted , this.open)
    }

    alterSelected(){
        const seleted = !this.selected
        return new Door(this.number , this.present , seleted , this.open)
    }

    openDoor(){
        const openDoor = true
        return new Door(this.number , this.present , this.selected , openDoor) 
    }

}
