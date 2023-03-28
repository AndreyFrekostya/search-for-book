import { Box ,Typography,Select,MenuItem, SelectChangeEvent} from '@mui/material'
import React, { useState } from 'react'

const Sorting = () => {
  const [sortingBy, setSortingBy]=useState<string>('relevance')
  return (
    <Box sx={{width:456 ,display: 'flex', alignItems: 'center', gap: '10px'}}>
        <Typography color="#fff" fontWeight='600' variant='h6'>Sorting</Typography>
        <Select value={sortingBy} displayEmpty 
          size='small' style={{backgroundColor: '#fff', width:'300px', boxShadow: '-1px 4px 8px 0px rgba(34, 60, 80, 0.2)'}}
          onChange={(event:SelectChangeEvent)=>setSortingBy(event.target.value)}
        >
            <MenuItem value={'relevance'}>relevance</MenuItem>
            <MenuItem value={'newest'}>newest</MenuItem>
        </Select>
    </Box>
  )
}

export default Sorting