import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.css'
const SearchInput:React.FC = () => {
  const [text, setText]=useState<string>('')
  return (
    <div className={styles.wrap} >
      <input type="text" value={text} placeholder='Поиск' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setText(e.target.value)} />
      <SearchIcon/>
    </div>
    
  )
}

export default SearchInput