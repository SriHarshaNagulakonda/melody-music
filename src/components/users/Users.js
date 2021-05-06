import React, { useContext } from 'react'
import UserItem from './useritem'
import Spinner from '../layouts/Spinner'
import  GithubContext  from '../../context/github/githubContext'


function Users() {
    const githubContext = useContext(GithubContext)

    const {loading,users} = githubContext;
    if(loading){
        return <Spinner />
    }
    else 
    return (
         <div style={userStyle}>
            {users.map((user) => {
                return <UserItem user={user} key={user.id} />
            })}
        </div>
    );
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

Users.propTypes = {
    
}

export default Users
