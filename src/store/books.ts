import { makeAutoObservable, toJS } from "mobx";
import axios, { AxiosError, AxiosResponse } from 'axios'
import sortingBy from "./sortingBy";
import query from "./query";
import categories from "./categories";
export interface Book{
    id: string
    volumeInfo:{
        title:string,
        imageLinks:{smallThumbnail:string,thumbnail:string},
        categories:string[],
        authors?:string[],
        decription?:string
    }
}
type StatusFetching="init" | 'loading' | 'success' | 'error' | 'nothing'
class Books{
    books:Book[]=[]
    status:StatusFetching='init'
    total:number=0
    startIndex=0
    constructor(){
        makeAutoObservable(this)
    }
    fetchBooks(){
        this.status='loading'
        let api=''
        if(categories.category=='all'){
            api='https://www.googleapis.com/books/v1/volumes?q='+query.query+'&orderBy='+sortingBy.sorting+'&startIndex='+this.startIndex+'&maxResults=30&key=AIzaSyB0n2wee2AfWgrYMR7-tELHCROKa3HdNCY'
        }else{
            api='https://www.googleapis.com/books/v1/volumes?q=subject:'+categories.category+'+'+query.query+'&orderBy='+sortingBy.sorting+'&startIndex='+this.startIndex+'&maxResults=30&key=AIzaSyB0n2wee2AfWgrYMR7-tELHCROKa3HdNCY'
        }
        const res= axios.get(api)
        .then(res=>{
            if(res.data.items!==undefined){
                console.log(res.data.items)
                let set:Set<Book>=new Set(res.data.items)
                let items:Book[]=Array.from(set)
                this.books=this.books.concat(items)
                this.total=res.data.totalItems
                this.status='success'
            }
            else{
                this.status='nothing'
            }
        })
        .catch((error:AxiosError)=>{
            this.status='error'
            console.log(error)
        })
    }
    clearBook(){
        this.books=[]
    }
    plusIndex(){
        this.startIndex=this.startIndex+30
    }
}
export default new Books()