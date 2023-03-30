import React,{useState,useMemo, useCallback} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.css'
import { observer } from 'mobx-react-lite';
import query from '../../store/query';
import books from '../../store/books';
const SearchInput:React.FC = observer(() => {
  const handlerSearch=(e?:React.KeyboardEvent<HTMLInputElement>)=>{
    if(query.query!==''){
      if(e!==undefined && e.code=='Enter'){
        books.clearBook()
        books.fetchBooks()
      }else if(e==undefined){
        books.clearBook()
        books.fetchBooks()
      }
    }
  }
  return (
    <div className={styles.wrap} >
      <input  onKeyPress={(e:React.KeyboardEvent<HTMLInputElement>)=>handlerSearch(e)} type="text" value={query.query} placeholder='Search' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>query.setQuery(e.target.value)} />
      <SearchIcon onClick={()=>handlerSearch()}/>
    </div>
  )
})

export default SearchInput