import React, { Component } from 'react'

export class useritem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { login,avatar_url,html_url } = this.props.user;

        return (
            <div className="card text-center">
                <img src={avatar_url} alt=""
                 className="round-img"
                 style={{width:'60px'}}
                 />
                 <h3>{login}</h3>
                 <div>
                     <a href={html_url} className="btn">more</a>
                 </div>
            </div>
        )
    }
}

export default useritem
