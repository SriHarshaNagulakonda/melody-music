import React, { Component } from 'react'
import UserItem from './useritem'
import Spinner from '../layouts/Spinner'

function Users({loading,users}) {
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
