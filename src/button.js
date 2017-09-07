import React from 'react'


export default function Button(props){




    return(
        <div className="button-clickable" onClick={props.action} >
            {props.children}
        </div>
    )
}