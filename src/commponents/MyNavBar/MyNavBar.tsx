import React from 'react'
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ICategory } from '../../types/Category';
import { useCategorysActions } from '../../hooks/useCategorysActions';

const MyNavBar: React.FC = () => {

  const { categorys } = useTypedSelector(state => state.categorys);
  const { changeActive } = useCategorysActions();

  const changeCategory = (ellement: ICategory) => {
    changeActive(ellement.id);
  }

  return (
    <Box component='nav'>
      <AppBar sx={{ 
        position: 'static', 
        backgroundColor: 'white', 
        boxShadow: 'none'
      }}>
        <Toolbar>
          {categorys.map((ellement) => {
            if(ellement.active) {
              return <Button key={ellement.id} sx={{
                borderRadius: 0,
                borderBottom: '1px solid blue'
              }} onClick={() => changeCategory(ellement)}>{ellement.name.toUpperCase()}</Button>
            } else {
              return <Button key={ellement.id} sx={{
                color: 'gray',
                borderRadius: 0
              }} onClick={() => changeCategory(ellement)}>{ellement.name.toUpperCase()}</Button>
            }
          })}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MyNavBar;