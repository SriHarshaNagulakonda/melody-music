import React,{Fragment} from 'react'

export const Alert = ({alert}) => {
    return (
        <Fragment>
            {alert &&  <div className={`alert alert-${alert.type}`}>
                    <i className="fas fa-info-circle"></i>
                    {alert.msg}
                </div>}            
        </Fragment>

    )
}

export default Alert