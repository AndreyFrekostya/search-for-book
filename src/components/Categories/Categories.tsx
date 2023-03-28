import React, { useState } from 'react'
import { Box, Typography,Select,MenuItem, SelectChangeEvent } from '@mui/material'

const Categories = () => {
  const [category, setCategory]=useState<string>('all')
  return (
    <Box sx={{width:456 ,display: 'flex', alignItems: 'center', gap: '10px'}}>
        <Typography color="#fff" fontWeight='600' variant='h6'>Categories</Typography>
        <Select
          value={category} displayEmpty size='small'
          style={{backgroundColor: '#fff', width:'300px', boxShadow: '-1px 4px 8px 0px rgba(34, 60, 80, 0.2)'}}
          onChange={(event:SelectChangeEvent)=>setCategory(event.target.value)}
        >
            <MenuItem value={'all'}>all</MenuItem>
            <MenuItem value={'art'}>art</MenuItem>
            <MenuItem value={'biography'}>biography</MenuItem>
            <MenuItem value={'computers'}>computers</MenuItem>
            <MenuItem value={'history'}>history</MenuItem>
            <MenuItem value={'medical'}>medical</MenuItem>
            <MenuItem value={'poetry'}>poetry</MenuItem>
        </Select>
    </Box>
  )
}

export default Categories