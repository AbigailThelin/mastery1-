import React, { Component } from 'react'
import List from './List'
import Button from './button.js'
// import $ from "jquery";
// import complete from './complete.js'



export default class tasks extends Component{

    constructor(){
        super();

        this.state={
            task: '',
            toDoList: [{text: 'blah', completed: false}, {text: 'blah', completed: false},{text: 'blah', completed: false}],
            disabled: false
        }
        this.handleChange = this.handleChange.bind(this);
		this.addToToDoList = this.addToToDoList.bind(this);
		this.clearItem = this.clearItem.bind(this);
        this.completed = this.completed.bind(this);
    }


    handleChange(e) {
        this.setState({ task: e.target.value})
    }

    addToToDoList(item){
        if(this.state.task){
            let newItem = {
                text:this.state.task,
                completed: false,
            }
            let newArr = this.state.toDoList.slice()
            newArr.push(newItem)
            this.setState({
            toDoList: newArr, 
            task: ''
        })
        }
	}
	
	clearItem(i){
		let toDo = this.state.toDoList.slice()
		toDo.splice(i, 1)
		this.setState({
			toDoList: toDo
		})
	}

	completed(i){
        // let dec = document.getElementById(i).style.textDecoration = "line-through";
            let tempArr = this.state.toDoList.slice()
            tempArr[i].completed=true;
            this.setState({
                toDoList: tempArr
            })
            
}
    

    render(){

        return(
            <div className="box">
                <input className="input" type="text" id='name' required placeholder='input task' value={this.state.task} onChange={this.handleChange}/>
                <Button action={this.addToToDoList.bind(this, this.state.task)}>
                <button>Add a Task</button>
                </Button>
				<List className="list" clearItem={this.clearItem} completed={this.completed} list={this.state.toDoList} />
			</div>
		)}
}































