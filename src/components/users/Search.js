import React, { Component, useState, useContext } from 'react'
import  GithubContext  from '../../context/github/githubContext'
import  AlertContext  from '../../context/alert/alertContext'

const Search = ({setAlert}) => {

    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    const [text, setText] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '' ){
            alertContext.setAlert('Please enter somethings','light')
        }
        else{
           githubContext.searchUsers(text)
           setText("")
        }
    }

    const onChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" 
                value={text}
                onChange={onChange}
                    placeholder="Search Users..." />
                <input type="submit"
                    className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length>0 && (
             <button className="btn btn-light btn-block" onClick={githubContext.clearUsers} >Clear</button>
                )
            }{githubContext.users.length==0 && (
                <h3>No Results Found</h3>
                )
               }
        </div>
    )
}


export default Search
