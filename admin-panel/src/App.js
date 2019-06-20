import React, { Component } from 'react'
import {Form,Button,ToggleButtonGroup,ButtonToolbar,ToggleButton} from 'react-bootstrap'
import axios from 'axios';
export default class App extends Component {
  constructor()
  {
    super();
    this.state={name:"",description:"",cost:"",course:"btech",semester:"1",condition:"",image:""};
  }
  getName=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  getDescription=(e)=>{
    this.setState({
      description:e.target.value
    })
  }
  getCost=(e)=>{
    this.setState({
      cost:e.target.value
    })
  }
  getCourse=(e)=>{
    this.setState({
      course:e.target.value
    })
    

  }
  getSemester=(e)=>{
    this.setState({
      semester:e.target.value
    })
  }
  getCondition=(e)=>{
    this.setState({
      condition:e.target.value
    })
  }
  setImage=(e)=>{
    // console.log(e.target.files[0])
    e.preventDefault();
    this.setState({image:e.target.value})
    let fd = new FormData();
    fd.append('file',e.target.files[0]);
   axios.post("http://localhost:8080/insertImage",fd,{
    headers: {
      'Content-Type': 'multipart/form-data; boundary=---WebKitFormBoundary7MA4YWxkTrZu0gW'
    }
}).then((res=>{
     this.state.image=res.data; 
    console.log(res.data);
  }))
  }
  setValue=(e)=>{
    
    e.preventDefault();
 let obj = this.state;
  axios.post('http://localhost:8080/insert',obj).then((res=>{
    console.log(obj);
  }))
 this.setState({
   name:"",
   cost:"",
   description:"",
   image:""
 })
  }

  render() {
    return (
      
      <div>
       <Form onSubmit={this.setValue}>
  <Form.Group >
    <Form.Label>Book Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Book name" onChange={this.getName} value={this.state.name} required/>
    </Form.Group>
    <Form.Group >
    <Form.Label>Book Description</Form.Label>
    <Form.Control type="text" placeholder="Enter Book description" onChange={this.getDescription} value={this.state.description} required/>
    </Form.Group>
    <Form.Group >
    <Form.Label>Cost </Form.Label>
    <Form.Control type="number" placeholder="Enter Cost of Book" onChange={this.getCost} value={this.state.cost} required />
    </Form.Group>
    <Form.Group >
    <Form.Label>Course Name</Form.Label>
    <ButtonToolbar>
     <ToggleButtonGroup type="radio" name="course" defaultValue={1} >
      <ToggleButton value="B.Tech" onChange={this.getCourse}>B.Tech</ToggleButton>
      <ToggleButton value="mbbs" onChange={this.getCourse}>MBBS</ToggleButton>
      <ToggleButton value="bds" onChange={this.getCourse}>BDS</ToggleButton>
      <ToggleButton value="bcom" onChange={this.getCourse}>B.Com</ToggleButton>
      <ToggleButton value="bsc" onChange={this.getCourse}>B.Sc</ToggleButton>
      <ToggleButton value="bba" onChange={this.getCourse}>BBA</ToggleButton>
      <ToggleButton value="bca" onChange={this.getCourse}>BCA</ToggleButton>
      <ToggleButton value="ma" onChange={this.getCourse}>M.A.</ToggleButton>
      <ToggleButton value="mba" onChange={this.getCourse}>MBA</ToggleButton>
      <ToggleButton value="iti" onChange={this.getCourse}>ITI</ToggleButton>
      <ToggleButton value="nursing" onChange={this.getCourse}>Nursing</ToggleButton>
      <ToggleButton value="competition" onChange={this.getCourse}>All Competition</ToggleButton>
      </ToggleButtonGroup>
      </ButtonToolbar>   
    </Form.Group>
    <Form.Group>
    <Form.Label>Semester </Form.Label>
    <ButtonToolbar>
     <ToggleButtonGroup type="radio" name="semester" defaultValue={1}>
      <ToggleButton value={1} onChange={this.getSemester}>1st Semester</ToggleButton>
      <ToggleButton value={2} onChange={this.getSemester}>2nd Semester</ToggleButton>
      <ToggleButton value={3} onChange={this.getSemester}>3rd Semester</ToggleButton>
      <ToggleButton value={4} onChange={this.getSemester}>4th Semester</ToggleButton>
      <ToggleButton value={5} onChange={this.getSemester}>5th Semester</ToggleButton>
      <ToggleButton value={6} onChange={this.getSemester}>6th Semester</ToggleButton>
      <ToggleButton value={7} onChange={this.getSemester}>7th Semester</ToggleButton>
      <ToggleButton value={8} onChange={this.getSemester}>8th Semester</ToggleButton>
      </ToggleButtonGroup>
      </ButtonToolbar>   
        </Form.Group>
    
    
    <Form.Group>
      <Form.Label>Condition</Form.Label>
     
     <ButtonToolbar>
     <ToggleButtonGroup type="radio" name="Hand" defaultValue={1}>
      <ToggleButton value={1} onChange={this.getCondition}>1st Hand</ToggleButton>
      <ToggleButton value={2} onChange={this.getCondition}>2nd Hand</ToggleButton>
      </ToggleButtonGroup>
      </ButtonToolbar>
    </Form.Group>
  <Button variant="success"  type="submit">
    Submit
  </Button>
</Form>

  <input type="file" name='file'  onChange={this.setImage} value={this.state.image} ></input>
      </div>
    )
  }
}







// Create a new form with file inputs.

// Make these changes to this form:

// Add name attributes as file to file input
// Add method as POST and enctype as multipart/form-data to the Form tag.
// Add action attribute with value https://hidden-ridge-64485.herokuapp.com/selfie
// Submit and verify the result