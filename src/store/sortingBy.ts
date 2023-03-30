import { makeAutoObservable } from "mobx"

class sortingBy{
    sorting:string='relevance'
    constructor(){
        makeAutoObservable(this)
    }
    changeSorting(option:string){
        this.sorting=option
    }
}
export default new sortingBy()