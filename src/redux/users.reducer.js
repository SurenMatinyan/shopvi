const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";


const usersState = {
    users: [
        {id: 1, followed: false, fullname: "Suren", status: "online", location: {city: "Gyumri", country: "armenia"} },
        {id: 2, followed: true, fullname: "Armeni", status: "ofline", location: {city: "Gyumri", country: "armenia"} },
        {id: 3, followed: true, fullname: "Gevorg", status: "ofline", location: {city: "Gyumri", country: "armenia"} }
    ]
}

const userReducer = (state = usersState, action) => {
    switch(action.type){
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( el => {
                    if(el.id === action.userId)   return {...el, followed: true}
                        return el;
                } )
            }
            
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( el => {
                    if(el.id === action.userId)   return {...el, followed: false}
                        return el;
                } )
            }
        case SETUSERS: {
            return { ...state, users: [...state.users, action.users] }
        }
            
        default: 
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (user) => ({type: SETUSERS, user});

export default userReducer;