import {AppBar,Toolbar,makeStyles,Box} from '@material-ui/core';
import React from 'react';
import Login from './account/Login';
const useStyles=makeStyles({
    loginHeader:{
        height:200,
        background:'#ff00ff',
        boxShadow:'none'
    },
    component:{
        background:'#ffe4c4',
        height:'100vh'
    }

})

const Messenger =()=>{
    const classes=useStyles();
    return(
        <Box className={classes.component}>
       <AppBar className={classes.loginHeader}>
           <Toolbar>

           </Toolbar>
       </AppBar>
       <Login/>
       </Box>
    )
}
export default Messenger;