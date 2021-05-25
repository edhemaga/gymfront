import {makeStyles} from '@material-ui/core/styles';



export default makeStyles(()=>({
    appBar: {
        
        margin: '1% 0 2vh 0',
        display: 'flex',
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        boxShadow: 'none',
      },
      
      heading: {
        color: 'rgba(0,183,255, 1)',
        fontFamily: 'Roboto',
      },
      icon:{
        color: "#041593",
        marginTop: "12px"
      }
    
}));