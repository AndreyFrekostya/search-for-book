import { Container, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React,{useEffect, useState} from 'react'
import books from '../../store/books'
import Loader from '../Loader/Loader'
import BookComponent from '../Book/BookComponent'
import styles from './styles.module.css'
const Books = observer(() => {
  const prepareLoading=()=>{
    books.plusIndex()
    books.fetchBooks()
  }
  return (
    <>
      <h1 className={styles.resultsH}>{books.books.length==0 ?('Найдите любую книгу...') : (`Found ${books.total} results`)}</h1>
      <h1 className={styles.resultsH}>{books.status==='nothing' ?('По запросу ничего не найдено') : (null) }</h1>
      <div className={styles.container}>
        {books.books.map(book=>(
          <BookComponent key={book.id} data={book}/>
        ))}
      </div>
      {books.books.length!==0 ? (<h3 onClick={prepareLoading} className={styles.load}>Load More</h3>) : (null)}
      {books.status=='loading' ? (<Loader/>) : (null)}
    </>
  )
})

export default Books