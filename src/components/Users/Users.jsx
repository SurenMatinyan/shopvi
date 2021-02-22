
const Users =  function(props) {

    return (
            <div>
                  <div>{props.users.id}</div>
                {
                    props.users.map( el => <div key={el.id}>
                        <span>
                            <div>
                                <img />
                            </div>
                            <div>
                                {el.followed
                                ? <button onClick={ () => {props.unFollow(el.id)}}>UNFOLLOW</button> 
                                : <button onClick={ () => {props.follow(el.id)}}>FOLLOW</button> }    
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{el.fullname}</div>
                                <div>{el.status}</div>
                            </span>
                            <span>
                                <div>{el.location.city}</div>
                                <div>{el.location.country}</div>
                            </span>
                        </span>
                    </div>)
                }
                
            </div>
        )
}  
export default Users;