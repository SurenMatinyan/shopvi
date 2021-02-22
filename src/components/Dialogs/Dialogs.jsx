import classes from './Dialogs.module.css'; 
import Dialoge from './Dialoge/Dialoge';
import Message from './Message/Message';
import React from 'react';
//
 //const dialogs = props.state.post.map(el => <Dialoge name={el.name} id={el.id} />);
// const messag = props.state.messag.map(el => <Message message={el.message} />);
// props.addMessage(elTextarea.current.value);


//
const elTextarea = React.createRef();

const Dialogs = (props) => {

    return(<div className={classes.bar}>

        <div>
           
       </div>

       <div>
           
       </div>

       <div>
           <textarea ref={elTextarea} cols="30" rows="10">  </textarea>
       </div>
       <button >submit</button>
      
      
      
       </div>
    )
}

export default Dialogs;