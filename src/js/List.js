import React from 'react'
import "./../styles/list.css"



export default function Lists(props){
    var list= props.list.map((item, i)=>{
        return<li style={{textDecoration: item.completed ? "line-through" : "none" }} className="list-item"  
        key={i} id={i}> {item.text} 
         <button className="b" onClick={_=>props.clearItem(i)}>Delete</button> 
        {
            item.completed
            ?
            null
            :
            <button type="button" className="a" onClick={_=> props.completed(i)}>Complete</button>
        }
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

