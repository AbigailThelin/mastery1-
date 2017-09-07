import React, { Component } from 'react'
import List from './list.js'
import Button from './button.js'
// import complete from './complete.js'



export default class tasks extends Component{

    constructor(){
        super();

        this.state={
            task: '',
            toDoList: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.addToToDoList = this.addToToDoList.bind(this);
        // this.clear = this.clear.bind(this)
    }


    handleChange(e) {
        this.setState({ task: e.target.value})
    }

    addToToDoList(item){
        if(this.state.task){
            this.setState({
            toDoList: this.state.toDoList.concat([this.state.task]), 
            task: ''
        })
        }
    }
    



    render(){

        // const todoList = this.state.list.map((item, index) => {
        //     return <complete 
        //             key={index} 
        //             item={item}/>
        // })

        return(
            <div className="box">
                <input className="input" type="text" id='name' required placeholder='input task' value={this.state.task} onChange={this.handleChange}/>
                <Button action={this.addToToDoList.bind(this, this.state.task)}>
                <button>Add a Task</button>
                </Button>
                <List  title="to Do List" list={this.state.toDoList} />
            </div>
            
        )
    }
}
