import React, { Component, useState, useContext } from 'react'
import  SaavnContext  from '../../context/saavn/saavnContext'
import  AlertContext  from '../../context/alert/alertContext'

const Search = ({setAlert}) => {

    const saavnContext = useContext(SaavnContext)
    const alertContext = useContext(AlertContext)
    const [text, setText] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '' ){
            alertContext.setAlert('Please enter somethings','light')
        }
        else{
           saavnContext.searchSongs(text)
        //    setText("")
        }
    }

    const onChange = (e) => {
        setText(e.target.value)
        // onSubmit(e);
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" 
                value={text}
                onChange={onChange}
                    placeholder="Search Albums..." />
                <input type="submit" value="Search"
                    className="btn btn-dark btn-block" />
            </form>
            {saavnContext.songs.length>0 && (
             <button className="btn btn-light btn-block" onClick={saavnContext.clearSongs} >Clear</button>
                )
            }{saavnContext.songs.length==0 && (
                <h3></h3>
                )
               }
        </div>
    )
}


export default Search
