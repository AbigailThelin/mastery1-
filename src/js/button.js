import React from 'react'


export default function button(props){




    return(
        <div className="button-clickable" onClick={props.action} >
            {props.children}
        </div>
    )
}