import React from 'react';
import Loading from './Loading'
const Display = (props) => {
    //console.log(props)
    

       const courseList = props.courseDetails.length?props.courseDetails.map((element,index)=>{
        return(
            <div key={element.id}>
            <h2>name:{element.title}</h2>
            <p>details:{element.details}</p>
            <p>id:{element.id}</p>
            <button onClick={() => props.deleteemploy(element.id)}>Delete</button>
            </div>
        )
    }):(<Loading/>)
    return(
        <div>
            {courseList}
        </div>
    )
}

export default Display;