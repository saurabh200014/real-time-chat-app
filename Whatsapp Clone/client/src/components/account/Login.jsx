import { Box, Dialog ,withStyles,makeStyles, Typography, List, ListItem} from "@material-ui/core";

const useStyles=makeStyles({
    component:{
        display:'flex'
    },
    leftcomponent:{
        padding:'56px 0 56px 56px'
    },
    qrCode:{
        height:260,
        width:260,
        padding:'50px 0 0 50px'

    },
    title:{
        fontSize:26,
        marginBottom:25,
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight:400
    },
    list:{
        '&>*':{
            fontSize:19,
            padding:0,
            marginBottom:10,
            marginTop:15,
            lineHieght:'28px'
        }
    }
})

const style={
    dialogPaper:{
        height:'95%',
        width:'60%',
        marginTop:'12%',
        boxShadow:'none',
        borderRadius:'0',
        maxHeight:'100%',
        maxWidth:'100%'
    }
}
const Login=({classes})=>{
    const classname=useStyles();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';

    return(
        <Dialog open={true} classes={{paper:classes.dialogPaper}} BackdropProps={{style:{backgroundColor:'unset'}}}>
                <Box className={classname.component}>
                    <Box className={classname.leftcomponent}>
                        <Typography className={classname.title}>To use App on your computer:</Typography>
                        <List className={classname.list}>
                            <ListItem>
                                1.ABCD
                            </ListItem>
                            <ListItem>
                                1.ABCD
                            </ListItem>
                            <ListItem>
                                1.ABCD
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <img src={qrurl} alt='qr' className={classname.qrCode}/>
                    </Box>
                </Box>
        </Dialog>
    )
}
export default withStyles(style)(Login);