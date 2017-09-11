import React, { Component } from 'react'
import List from './List'
import Button from './button.js'
import $ from "jquery";
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
		this.clearItem = this.clearItem.bind(this);
		this.completed = this.completed.bind(this);
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
	
	clearItem(i){
		let toDo = this.state.toDoList.slice()
		toDo.splice(i, 1)
		this.setState({
			toDoList: toDo
		})
	}

	completed(i){
		$(document).ready(function() {
			let box = $('a')
			$('.box').on('click', function() {
				$(this).toggleClass('toggle')
			})
		});
	}



    render(){

        return(
            <div className="box">
                <input className="input" type="text" id='name' required placeholder='input task' value={this.state.task} onChange={this.handleChange}/>
                <Button action={this.addToToDoList.bind(this, this.state.task)}>
                <button>Add a Task</button>
                </Button>
				<List clearItem={this.clearItem} completed={this.completed} list={this.state.toDoList} />
			</div>
		)}
}






























