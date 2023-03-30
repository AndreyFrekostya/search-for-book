import React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import styles from './styles.module.css'
import { Typography,Container,Box } from '@mui/material';
import Categories from '../Categories/Categories';
import Sorting from '../SortingBy/Sorting';
import Books from '../Books/Books';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className={styles.header}>
        <Container sx={{width: 960, padding:3.5, textAlign: 'center'}}>
            <Typography variant="h3" color='#fff' fontWeight='600' letterSpacing="1px">Search for books</Typography>
            <SearchInput/>
            <div className={styles.row}>
              <Categories/>
              <Sorting/>
            </div>
        </Container>
    </div>
    <Outlet/>
    </>
  )
}

export default Header