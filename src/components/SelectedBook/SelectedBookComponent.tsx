import React from 'react'
import books from '../../store/books'
import styles from './styles.module.css'
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { useNavigate } from 'react-router-dom';
const SelectedBookComponent = () => {
    const navigate=useNavigate()
    const goBack=()=>navigate(-1)
    
  return (
    <div className={styles.wrap}>
        <div className={styles.detailedImg}>
            <img src={books.choosedBook.volumeInfo?.imageLinks && books.choosedBook.volumeInfo?.imageLinks.thumbnail} alt="" />
        </div>
        <div className={styles.mainInfo}>
            <h3 className={styles.categories}>{books.choosedBook.volumeInfo?.categories && books.choosedBook.volumeInfo.categories}</h3>
            <h4 className={styles.title}>{books.choosedBook.volumeInfo?.title && books.choosedBook.volumeInfo?.title}</h4>
            <div className={styles.authors}>
                {books.choosedBook.volumeInfo?.authors?.map(author=>(
                <h5 key={author} className={styles.author}>{author}</h5>
                ))}
            </div>
            {books.choosedBook.volumeInfo?.description!==undefined &&
                <div className={styles.description}>
                    <p>{books.choosedBook.volumeInfo?.description && books.choosedBook.volumeInfo?.description}</p>
                </div>
            }
            <div className={styles.goBack} onClick={goBack}>
                <h1>Назад <EastRoundedIcon/></h1>
            </div>
        </div>
    </div>
  )
}

export default SelectedBookComponent