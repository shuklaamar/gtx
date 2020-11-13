import React, { Component } from 'react';


class AddEmploy extends Component{
    state={
        title:'',
        details:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]:event.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
        this.props.addemploy(this.state)
        this.setState({
            title:'',
            details:''
        })
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                    <label htmlFor='title'></label>
                    <input type='text' id='title' placeholder="enter your name" onChange={this.handleChange} value={this.state.title}></input><br></br>

                    <label htmlFor="details"></label>
                    <input type="text" id="details" placeholder="enter the details" onChange={this.handleChange} value={this.state.details}></input><br></br>

                    <input type="submit" value="ADD"></input>
            </form>
        )
    }
}

export default AddEmploy;
