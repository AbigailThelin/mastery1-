import React, {Component} from 'react'


export default class complete extends Component{

    constructor(props){
        super(props)

        this.state={
            decor: 'not_checked_input'
        }
        this.handleCheck=this.handleCheck.bind(this)
    }

    handleCheck(e) {
        this.setState({
            decor: e ? 'checked_input' : 'not_checked_input'
        })
    }


    render(){
        return(
        <div className={this.state.decor}>
             <button onClick={(e) => this.handleCheck(e.target.click)}>Complete</button> 
             {this.props.complete} 
        </div>
        )
    }
}