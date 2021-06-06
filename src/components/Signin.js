import axios from 'axios';
import React,{useState} from 'react';
import img2 from '../images/jav.jpg'



const Signin= (props) =>{

  const initial_state={
    email:"",
    password:""
  };


  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [validation,setValidation]=useState();

  const onChangeEmail=(e)=>{
    console.log(e.target.value,"email")
    setEmail(e.target.value)
  }
  const onChangePassword=(e)=>{
    console.log(e.target.value,"password")
    setPassword(e.target.value)
  }
  



const onsignin=async(e)=>{

     props.onsend(email);
  e.preventDefault();
  
  console.log("Raeched here");

  
  // console.log(sendData,"senddata")
  var formdata=new FormData();
  //formdata.name=name
  //formdata.email=email
  //formdata.password=password
   formdata.append("email",email);
   formdata.append("password",password);
  
  console.log(formdata,"formdata");

  const response=await axios({
    url:"http://localhost:8009/api/login",
    method:"POST",
    headers:{
      "content-Type":"application/x-www-form-urlencoded", 
    
    },
  data:formdata,
    }
  )
  console.log(response,'resp')
  // .then((res)=>{
  //   console.log(res,'resp')

    if(response.data==="Failure"){
      setValidation(false);
      
      alert("Enter Valid Id");
    }
    else{
      props.onRouteChange('home');
      setValidation(true);
    }
    // if(validation){

    //   props.onRouteChange

}
const onRegister=()=>{
  props.onRouteChange('register')
}

    return(
<div style={{height:'548px' ,width:'100'}} >


<form>
       <div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <fieldset style={{margin:'60px',width:'700px',height:'400px',  borderColor: '#F00',
  borderStyle: 'solid' , border:'#000000 1px solid',borderRadius:'20px' , backgroundColor:'darkgrey'}}>
      <h1 style={{justifyContent:'center'}}>Sign In</h1><br/><br/>
      <div>
        <label><b>Email:</b></label>
        <input style={{marginLeft:'25px'}} onChange={onChangeEmail} type="email" name="email"  id="email" required/>
      </div><br/> <br/>
      <div>
        <label><b>Password:</b></label>
        <input style={{marginLeft:'10px'}} onChange={onChangePassword} type="password" name="password"  id="password" required/>
      </div><br/><br/>
      <div>
      <button onClick={onsignin} style={{marginRight:80}}>Sign In</button>
          <button   onClick={onRegister}>Register</button>
      </div>
    
    {/* <div>
      <input onClick={onsignin} type="submit" value="Sign in"/>
    </div><br/>
    <div>
      <button  onClick={onRegister} >Register</button>
    </div> */}
   
    </fieldset>
    </div>

    </div>
  </form>































</div>

    )
}
export default Signin;