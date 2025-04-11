import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Third = () => {
    var data = [{name:"ganashyam",age:20,place:"thrissur"},
        {name:"snto",age:21,place:"thrissur"},
        {name:"ganaseh",age:23,place:"thrissur"},
        {name:"shyam",age:30,place:"thrissur"},
    
    ]
  return (
    <div>
        <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {data.map((v,i)=>{
                return(
            
    <TableRow >
             
            <TableCell align="right">icecreaamm</TableCell>
              <TableCell align="right">200</TableCell>
              <TableCell align="right">15</TableCell>
              <TableCell align="right">50</TableCell>
              <TableCell align="right">4</TableCell>
            </TableRow>
                )
            })}
        </TableBody>
      </Table>
    </TableContainer>
      
    </div>
  )
}

export default Third
