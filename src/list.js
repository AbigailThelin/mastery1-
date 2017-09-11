import React, {Component} from 'react'
import Complete from './complete'



export default function Lists(props){
    var list= props.list.map((item, i)=>{
        return <li className="list-item"  
        key={i} id={i}> {item} 
        <button >clear</button>
        <Complete />
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
