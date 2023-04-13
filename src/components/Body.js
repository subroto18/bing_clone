import Container from '@mui/material/Container';
import styles from "../styles/body.module.css";
const Body  = (props) => {
      return  <div className={styles.body}>
                 <Container maxWidth="lg">
                    {props.children}
                 </Container>  
              </div>
   
}
export default Body;