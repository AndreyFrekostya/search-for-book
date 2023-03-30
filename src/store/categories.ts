import {makeAutoObservable} from 'mobx' 
class Categories{
    category: string='all'
    constructor(){
        makeAutoObservable(this)
    }
    changeCategory(newCategory:string){
        this.category=newCategory
    }
}
export default new Categories()