import React,{Component} from 'react'
import './App.css';
import Navigation from './components/Navigation'
import Myform from './components/Myform'
import Signin from './components/Signin'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Register from './components/Register'
class App extends Component{

  constructor(){
    super();
    this.state={
      route:'signin',
      isSignedIn:false,
      sendemail:""
    }
  }

  onsend=(e)=>{
    this.setState({sendemail:e})
    console.log(e,"onsendemail")
  }


  onRouteChange =(route) =>{

    if(route==='signout'){
      this.setState({isSignedIn:false})
    }
    else if(route==='home'){
      
      this.setState({isSignedIn:true})
      this.setState({route:route})
    }

    this.setState({route:route})
  }
  render(){
    return(
      <div className="App">

<Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>

    { this.state.route ==='home'?
    
    <Myform  sendemail={this.state.sendemail}/>:
       (
        this.state.route ==='signin'
        ? <Signin onRouteChange={this.onRouteChange} onsend={this.onsend}/>
        : <Register onRouteChange={this.onRouteChange}/>
      )  
  }
  </div>
  )
}
}

export default App;
