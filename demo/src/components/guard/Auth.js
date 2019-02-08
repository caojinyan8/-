import React from 'react';
import {Route,Redirect} from 'react-router-dom'
//异步条件2
class Auth extends React.Component{
  constructor(props){
    super(props);

    this.state={
      hasAuth:false,
      auth:false,
      data:null
    }

  }
  componentDidMount(){
    fetch(
      `/data/user.json`
    ).then(
      res=>res.json()
    ).then(
      res=>{
        this.setState({auth:res.auth,hasAuth:true,data:res.data})
      }
    )
  }

  render(){
    //console.log(document.cookie)
    let {component:Component, ...rest}=this.props;

    if (!document.cookie) return <Redirect to="/login" />;
    return <Route {...rest} render={(props)=>
      this.state.auth ? //data == 预载数据
        <Component data={this.state.data} {...props} /> :
        <Redirect to="/user" />
    } />
  }
}



export default Auth;