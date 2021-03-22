const SETITEM = "SETITEM";


const itemState = {
    items: {
        item: null,
        name: null,
        price: null,
        comment: null,
        imgURL: null,
        option: null
    }
}


const itemReducer = (state = itemState, action) => {
    switch(action.type){
        case SETITEM: {
            return { ...state, items: { ...action.items }}
        }

        default: 
            return state;
    }
}


export const setItemAC = (items) => ( {type: SETITEM, items} )

export default itemReducer;