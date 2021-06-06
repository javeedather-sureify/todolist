import axios from 'axios';
import React,{useState} from 'react';



const Register= () =>{
  const initial_state={
    name:"",
    email:"",
    password:""
  };


  // const[user,setuser]=useState();
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
const onchangeName=(e)=>{
  console.log(e.target.value,"name")
  setName(e.target.value)
}
const onChangeEmail=(e)=>{
  console.log(e.target.value,"email")
  setEmail(e.target.value)
}
const onChangePassword=(e)=>{
  console.log(e.target.value,"password")
  setPassword(e.target.value)
}


  // const onchange2=async(d)=>{
  //   const name=d.target.name;
  //   const value=d.target.value;
  //   setuser({...user,[name]:value});
  // }
const onclickregister=(e)=>{
  e.preventDefault();
  console.log("Raeched here");
  if(!name  || !email|| !password ){
    alert("Fill All Values");
    return;
  }
  
    // if(name === "" || email==="" || password ===""){
    //   alert("Fill All Values");
    //   return;
    // }
  // console.log(sendData,"senddata")
  var formdata=new FormData();
  //formdata.name=name
  //formdata.email=email
  //formdata.password=password
   formdata.append("name",name);
   formdata.append("email",email);
   formdata.append("password",password);
  
  console.log(formdata,"formdata");

  const response=axios({
    url:"http://localhost:8009/api/signin",
    method:"POST",
    headers:{
      "content-Type":"application/x-www-form-urlencoded", 
    
    },
  data:formdata,
    }
  ).then((res)=>{
    if(res.data==='Success')
    // alert("This Email is already taken");
    alert("Registered Successfully");

    else
    // alert("Registered Successfully");
    alert("This Email is already taken");

    console.log(res,"response")
    
  })
    
  setName("");
  setEmail("");
  setPassword("");

}



    return(
<div>


<form>
<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

    {/* <fieldset style={{width:'500px',height:'300px'}}>
     */}

<fieldset style={{margin:'60px',width:'700px',height:'400px',  borderColor: '#F00',
  borderStyle: 'solid' , border:'#000000 1px solid',borderRadius:'20px' , backgroundColor:'darkgrey'}}>

       <h1 style={{justifyContent:'center'}}>Register</h1><br/>

      <div>
        <label><b>Name:</b></label>
        <input style={{marginLeft:'25px'}} type="text" name="name"  id="name" value={name} onChange={onchangeName}/>
       </div><br/> <br/>


      <div>
        <label><b>Email: </b></label>
        <input style={{marginLeft:'25px'}} type="email" name="email"  id="email" value={email} onChange={onChangeEmail} required/>
      </div><br/> <br/>
      <div>
        <label><b>Password:</b> </label>
        <input style={{marginLeft:'25px'}} type="password" name="password"  id="password" value={password} onChange={onChangePassword} required/>
      </div><br/>
    
    <div>
      {/* ()=>onRouteChange('home') */}
      <input onClick={onclickregister} type="submit" value="Register" required/>
    </div><br/>
    </fieldset>
    </div>
  </form>































</div>

    )
}
export default Register;