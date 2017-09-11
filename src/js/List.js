import React from 'react'
import "./../styles/list.css"


export default function Lists(props){
    var list= props.list.map((item, i)=>{
        return <li className="list-item"  
        key={i} id={i}> {item} 
         <button className="b" onClick={_=>props.clearItem(i)}>Delete</button> 
         <button className="a" onClick={_=> props.completed(i)} >Complete</button>
        </li>
    }
)



    return(
        <div>
            <h1>{props.title}</h1>
            <ul className="list" >
                {list}
            </ul>
        </div>
    )
}

