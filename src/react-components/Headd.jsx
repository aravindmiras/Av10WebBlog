import { Component } from "react"
export default class Headd extends Component {
    constructor(props)
    {
     super(props)
     this.state={myName:"Abhishek"}
    }
 
    componentDidMount()
    {
     setTimeout(()=>{this.setState({myName:"Sachin"})},5000)
    }
 
    getSnapshotBeforeUpdate(pProps,pState)
    {
     document.getElementById("id1").innerHTML="Before updating my name is "+pState.myName;
    }
 componentDidUpdate()
    {
     document.getElementById("id2").innerHTML="After Updating my name is "+this.state.myName
    }
    render()
    {
     return(
         <>
         My name is {this.state.myName}
         <div id="id1"></div>
         <div id="id2"></div>
         </>
     )
    }
 }