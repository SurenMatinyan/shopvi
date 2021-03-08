const SETUSERS = "SETUSERS";


const usersState = {
    users: {
        name: null,
        lastname: null,
        email: null,
        password: null,
        isAuth: false
    }
}

const userReducer = (state = usersState, action) => {
    switch(action.type){
        case SETUSERS: {
            return { ...state, users: {...action.users}  }
        }
            
        default: 
            return state;
    }
}

export const setUsersAC = (users) => ({type: SETUSERS, users});

export default userReducer;