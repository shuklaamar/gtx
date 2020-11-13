import React, { Component } from 'react';

class Edition extends Component{
    state={
        title:'',
        details:'',
        id:12
    }

    handleChange=(event)=>{
      //  console.log(event)
        this.setState({
                [event.target.id]:event.target.value
            })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state)
        this.props.editemploy(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <lable htmlFor="id"></lable>
                <input type="text" id='id' placeholder="enter your the id" onChange={this.handleChange}></input><br></br>

                <lable htmlFor="title"></lable>
                <input type="text" id='title' placeholder="enter your the title" onChange={this.handleChange}></input><br></br>

                <lable htmlFor="details"></lable>
                <input type="text" id='details' placeholder="enter your the details" onChange={this.handleChange}></input><br></br>

                <input type="submit" value="edit"></input>
            </form>
        )
    }
}


export default Edition;