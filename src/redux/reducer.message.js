
const mass = {
  post: [
    {name: "suren", id: "1"}, {name: "armen", id: "2"},  {name: "suren", id: "3"}
  ],
  messag: [{message: "hi"}]
}

function addMessage(store = mass, action){
    if(action.type === "ADD-MESSAGE"){
        const newMess = {
          message: action.mess
        }
        store.messag.push(newMess);
        return store;
    }
    return store;
}

export default addMessage;

// this.state.messag  

