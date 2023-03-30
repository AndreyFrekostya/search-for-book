import { Box } from '@mui/material'
import React,{FC} from 'react'
import { Book } from '../../store/books'
import styles from './styles.module.css'
interface IBook{
    data: Book,
}
const BookComponent:React.FC<IBook> = ({data}) => {
  return (
    <Box  sx={{width:300,height:400, backgroundColor: '#f3f2f0', display:'flex', flexDirection:'column', padding:'20px 30px 30px 30px', justifyContent:'space-between',cursor:'pointer',transition: '.1s ease-in-out', '&:hover':{backgroundColor:'#d1d1d1'}}}>
      <div className={styles.linkImg}>
        <img src={data.volumeInfo?.imageLinks && data.volumeInfo?.imageLinks.thumbnail} alt="" />
      </div>
      <div className={styles.info}>
        <h3 className={styles.categories}>{data.volumeInfo.categories && data.volumeInfo.categories[0]}</h3>
        <h4 className={styles.title}>{data.volumeInfo.title && data.volumeInfo.title}</h4>
        {data.volumeInfo.authors?.map(author=>(
          <h4 key={author} className={styles.author}>{author}</h4>
        ))}
      </div>
    </Box>
  )
}

export default BookComponent