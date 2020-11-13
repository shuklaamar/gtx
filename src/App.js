import React from 'react';
import Display from './components/Display';
import './App.css'
import Navbar from './components/Navbar'
import AddEmploy from './components/AddEmploy';
import Edition from './components/Edition';

class App extends React.Component{
  state={
    courseDetails:[
      {id:"1",title:'react',details:'revising'},
     {id:"2",title:'node',details:'revvising'}
    ]
  }

  addemploy = (employ) =>{
    employ.id=Math.floor(Math.random()*1000).toString();
    let newemploy = [...this.state.courseDetails,employ]
    //console.log(newemploy)
    this.setState({ 
     // courseDetails:this.state.courseDetails.push(employ)
     courseDetails:newemploy
    })
  }

  deleteemploy = (employ) =>{
    let newemploy = this.state.courseDetails.filter((ele)=>{
      return ele.id !== employ;
    })
    this.setState({
      courseDetails:newemploy
    })
  }

  editemploy = (employ) =>{
    let newemploy = this.state.courseDetails.filter((ele)=>{
      return ele.id === employ.id;
    })
    let newemploy3 = this.state.courseDetails.filter((ele)=>{
      return ele.id !== employ.id;
    })
    console.log(newemploy)
    if(newemploy.length!==0){
      newemploy.id=employ.id;
      newemploy.title=employ.title;
      newemploy.details=employ.details;
      let newemploy2 = [...newemploy3,newemploy]
      console.log(newemploy)
      this.setState({ 
        courseDetails:newemploy2
       })
    }
  }

  render(){
    return(
      <div className="App">
      <Navbar></Navbar>
      <AddEmploy addemploy={this.addemploy}></AddEmploy>
      <Edition editemploy={this.editemploy}></Edition>
      <Display courseDetails={this.state.courseDetails} deleteemploy={this.deleteemploy}></Display>
      </div>
    )
  }
}

export default App;
