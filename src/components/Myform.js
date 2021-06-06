// import React from 'react'
import axios from 'axios';
import {Container,Card,Button} from 'react-bootstrap';
import React, { Component } from 'react';
import img1 from '../images/rav.jpg'

class Myform extends Component{

    constructor(props){
        super(props);{
            this.state={
                item:"",
                items:[],
                sendemail:this.props.sendemail
            }
        }

        this.handleInputChange=this.handleInputChange.bind(this)
        this.submitItem=this.submitItem.bind(this)
    
         this.deleteCard=this.deleteCard.bind(this)

    }
     handleInputChange(event){
        let name=event.target.name
        let value=event.target.value
        this.setState({
            [name]:value
        })
     }
     submitItem(event){
         console.log(this.state.items,"itms")
  var formdata=new FormData();
// debugger
         let items=this.state.items
         let item=this.state.item
         items.push(item)
         formdata.append('email',this.state.sendemail)
         formdata.append('items',item)
         
        this.setState({items: items})
        console.log(formdata)


        const response=axios({
    url:"http://localhost:8009/api/todo",
            
            method:"POST",
            headers:{
              "content-Type":"application/x-www-form-urlencoded", 
            
            },
          data:formdata,
            }
          ).then((res)=>{
            console.log(res,"response")
          })


     }

     componentDidMount(event){
  var formdata=new FormData();
        // debugger
  console.log(this.state.sendemail,"gotmail")

        formdata.append('email',"f@gmail.com")
console.log(formdata)
         console.log("New button Clicked");
     const response1=axios({
    url:"http://localhost:8009/api/print",
        
        method:"GET",
        headers:{
          "content-Type":"application/x-www-form-urlencoded", 
        
        },
     params:{
email:this.state.sendemail,
     },
        }
      ).then((res)=>{
        if(res.data){
          // debugger
          let savedArray=res.data
        this.setState({items: savedArray})
        console.log(res.data,"response1")
        }
      })
        // console.log(response1)
      

     
    }
    deleteCard(index,item){

  var formdata=new FormData();
  formdata.append('value',item);
      console.log(index,item,"mydeleteditem");


      const response1=axios({
    url:"http://localhost:8009/api/del",
        
        method:"delete",
        headers:{
          "content-Type":"application/x-www-form-urlencoded", 
        
        },
     data:formdata,
        }
      ).then((res)=>{
          // let savedArray=res.data
        // this.setState({items: savedArray})
        console.log(res.data,"response1")
      })








        console.log("indexdeletecard")
        console.log(index)
        let mainArray=this.state.items
        console.log(mainArray)
        let getArray=mainArray.splice(index, 1);
        this.setState({items: mainArray})
        console.log(mainArray)
    }
    render(){



        return(
          
          <Container style={{backgroundImage:`url(${img1})`,height:'700px'}}>
            <div>
            {/* <div style={{backgroundColor:'Aquamarine'}}> */}
               <h1><b>TODO LIST</b></h1><br/>
                <input onChange={this.handleInputChange} type="text" name="item"/>
                <button onClick={this.submitItem}>Insert</button>
                <div style={{backgroundImage:`url(${img1})`}} ></div>
                {/* <button onClick={this.submitShow}>Show</button> */}
                

                {this.state.items.map((item,index)=>{
                  console.log(this.state.items,"aaa")
                  console.log(item,"bb")
                    return(
//                         <div class="card">
//   <div class="card-body">
//                         <Card>
//   <Card.Body>{item}</Card.Body>
// </Card>
                  
                        
//                         </div>
//                         </div>

<Container style={{backgroundImage:`url(${img1})`, display:'flex',justifyContent:'center',alignItems:'center', marginTop:'200'}}>
<div className="card" style={{width: '18rem', marginTop:'20px'}}>

<ul className="list-group list-group-flush">
  <li ><b>{item}</b></li>
  <button type="button" className="btn btn-secondary btn-sm" width="10px" onClick={()=>{this.deleteCard(index,item)}}>Delete</button>
  
  
  {/* <li class="list-group-item">Dapibus ac facilisis in</li> */}
  {/* <li class="list-group-item">Vestibulum at eros</li> */}
</ul>
</div>
</Container>

                    )
                })}
    
            </div>
            </Container>
     )
  }
}


export default Myform