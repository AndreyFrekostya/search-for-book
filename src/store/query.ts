import { makeAutoObservable } from "mobx";
class Query{
    query:string=''
    constructor(){
        makeAutoObservable(this)
    }
    setQuery(text:string){
        this.query=text
    }
}
export default new Query()