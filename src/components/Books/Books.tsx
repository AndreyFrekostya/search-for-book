import { Container, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React,{useEffect, useState} from 'react'
import books from '../../store/books'
import Loader from '../Loader/Loader'
import BookComponent from '../Book/BookComponent'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
const Books = observer(() => {
  const prepareLoading=()=>{
    books.plusIndex()
    books.fetchBooks()
  }
  return (
    <>
    {books.status==='error' ? (
      <Alert variant="filled" severity="warning" sx={{display: 'flex', justifyContent:'center', alignItems: 'center', borderRadius: 'none'}}>
      <AlertTitle>Error</AlertTitle>
        <strong>Something went wrong!</strong>
      </Alert>
      ) : (
      <>
        <h1 className={styles.resultsH}>{books.books.length==0 ?('Find any book...') : (`Found ${books.total} results`)}</h1>
        <h1 className={styles.resultsH}>{books.status==='nothing' ?('No results found for your search') : (null) }</h1>
        <div className={styles.container}>
          {books.books.map(book=>(
            <Link style={{textDecoration: 'none'}} to={`/${book.id}`} key={book.id}><BookComponent data={book}/></Link>
          ))}
        </div>
        {books.books.length!==0 ? (<h3 onClick={prepareLoading} className={styles.load}>Load More</h3>) : (null)}
        {books.status=='loading' ? (<Loader/>) : (null)}
      </>
    )}
    </>
  )
})

export default Books