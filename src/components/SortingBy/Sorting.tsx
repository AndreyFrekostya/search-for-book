import React, { useState } from 'react'
import { Box ,Typography,Select,MenuItem, SelectChangeEvent} from '@mui/material'
import sortingBy from '../../store/sortingBy'
import { observer } from 'mobx-react-lite'
const Sorting = observer(() => {
  return (
    <Box sx={{width:456 ,display: 'flex', alignItems: 'center', gap: '10px'}}>
        <Typography color="#fff" fontWeight='600' variant='h6'>Sorting</Typography>
        <Select value={sortingBy.sorting} displayEmpty 
          size='small' style={{backgroundColor: '#fff', width:'300px', boxShadow: '-1px 4px 8px 0px rgba(34, 60, 80, 0.2)'}}
          onChange={(event:SelectChangeEvent)=>sortingBy.changeSorting(event.target.value)}
        >
            <MenuItem value={'relevance'}>relevance</MenuItem>
            <MenuItem value={'newest'}>newest</MenuItem>
        </Select>
    </Box>
  )
})

export default Sorting