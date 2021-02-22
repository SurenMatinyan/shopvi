import Dialogs from "../Dialogs";
import classes from './Dialoge.module.css';
import { NavLink } from 'react-router-dom';


const Dialoge = (props) =>{
    return(
         <div className={classes.dialog}>
             <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
     </div>)
 }

 export default Dialoge;
 