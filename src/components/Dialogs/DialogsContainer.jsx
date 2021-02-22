import Dialoge from './Dialoge/Dialoge';
import Message from './Dialogs';
import React from 'react';
import { connect } from 'react-redux';




   /// const dialogs = props.state.post.map(el => <Dialoge name={el.name} id={el.id} />);
   // const messag = props.state.messag.map(el => <Message message={el.message} />);
   

function data(state) {
    return { dialogs: state.messag }
 }

function addMessage(dispatch){
    return { 
        sendMessag: (text) => {
            dispatch({type: "ADD-MESSAGE", mess: text})
        }
     }

}


const sendMessagContiner = connect(data, addMessage)(Message);

export default sendMessagContiner;