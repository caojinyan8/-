import React,{Component} from 'react'
// import Header from "../common/Header/Header"
 import Home from "./Home/Home"
 import Car from "./Car/Car"
 import Community from "./Community/Community"
 import Login from "./Login/Login"
 import Reg from "./Reg/Reg"
 import User from "./User/User"
import Error from '../components/Error/Error'
import Footer from '../common/Footer/Footer'
import Detail from '../components/Detail/Detail'
import {Route,Redirect,Switch} from 'react-router-dom'
import Loading from '../common/Loading/Loading'
import pubsub from 'pubsub-js'
import Auth from './guard/Auth'
class App extends Component{
    constructor(){
        super()
        this.state={
            bNav:true,
            bFoot:true,
            bLoading:false
        }
        pubsub.subscribe('view',(mess,bl)=>{
            console.log('app_loadind',bl)
            this.setState({bLoading:bl})
        })

    }

    componentWillReceiveProps(nextProps){
        console.log("sss",nextProps.location.pathname)
        let path=nextProps.location.pathname
        if(/home|community|car/.test(path)){
            this.setState({bNav:true,bFoot:true})
        }
  if(/user/.test(path)){
      this.setState({bNav:false,bFoot:true})

  }
        if(/login|reg|detail|error/.test(path)){
            this.setState({bNav:true,bFoot:false})
        }
    }
  
render(){
    return(

        <>
            {this.state.bLoading && <Loading></Loading>}
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/car" component={Car}></Route>
                <Route path="/community" component={Community}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/reg" component={Reg}></Route>
                <Auth path="/user" component={User}></Auth>
                <Route path="/detail/:id" component={Detail}></Route>
                <Redirect exact from='/' to="/home"></Redirect>
                <Route component={Error}/>
            </Switch>
            {this.state.bFoot && <Footer/>}
        </>
    )
}
}
export default App