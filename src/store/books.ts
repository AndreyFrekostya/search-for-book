import { makeAutoObservable, runInAction, toJS } from "mobx";
import axios, { AxiosError, AxiosResponse } from 'axios'
import sortingBy from "./sortingBy";
import query from "./query";
import categories from "./categories";
export interface Book{
    id: string | null
    volumeInfo:{
        title:string,
        imageLinks:{smallThumbnail:string,thumbnail:string},
        categories:string[],
        authors?:string[],
        description?:string
    } | null
}
type StatusFetching="init" | 'loading' | 'success' | 'error' | 'nothing'
class Books{
    books:Book[]=[]
    choosedBook:Book={id:null, volumeInfo:null}
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
                runInAction(()=>{
                    const items = res.data.items.reduce((o:Book[], i:Book) => {
                        if (!o.find((v:Book) => v.id == i.id)) {
                            o.push(i);
                        }
                        return o;
                    }, []);
                    this.books=this.books.concat(items)
                    this.total=res.data.totalItems-(30-items.length)
                    this.status='success'  
                    //or instead of reduce - set:
                        //let set:Set<Book>=new Set(res.data.items)
                        //let items:Book[]=Array.from(set)
                })
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
    chooseBook(book:Book){
        //type guards
        if(book.id!==null && book.volumeInfo!==null){
            this.choosedBook=book
            //if you need to save the session:
                // sessionStorage.setItem('id', book.id)
                // sessionStorage.setItem('title', book.volumeInfo.title)
                // sessionStorage.setItem('description', book.volumeInfo.description)  
                //...
        }
    }
}
export default new Books()