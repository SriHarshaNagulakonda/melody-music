import React, { Component, useState } from 'react'

const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {

    const [text, setText] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '' ){
            setAlert('Please enter somethings','light')
        }
        else{
           searchUsers(text)
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
            {showClear && (
             <button className="btn btn-light btn-block" onClick={clearUsers} >Clear</button>
                )
            }
        </div>
    )
}


export default Search
