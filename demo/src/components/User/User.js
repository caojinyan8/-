import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './User.css'
class User extends Component{
    state={
        username:""
    }
    render(){
        return(
  <div>
                <article className="user-head">
            <div className="user-bg-img">
                <img src="./images/user_bg.png"/>

                <div className="user-img">

                    <img src="./images/user-img0.jpg"/>
                    <p style={{display:"inline-block"}}>{this.state.username}</p><Link to="/login"><p style={{display:"inline-block"}} onClick="this.zhuxiao">注销</p></Link>

                 
                </div>

            </div>
            <div className="user-order">
                <a href="javascript:;" className="select-btn select-btn-t"><img src="./images/indent.png"/>我的订单<span>查看所有订单</span><i className="icon icon-select"></i></a>
            </div>
            <div className="user-nav">
                <a href="index.html">
                    <i className="icon icon-f1"></i>
                    待付款
                </a>
                <a href="javascript:;">
                    <i className="icon icon-f2"></i>
                    待收货
                </a>
                <a href="javascript:;">
                    <i className="icon icon-f3"></i>
                    已收货
                </a>
                <a href="javascript:;">
                    <i className="icon icon-f4"></i>
                    已取消
                </a>
                <a href="javascript:;">
                    <i className="icon icon-f5"></i>
                    售后
                </a>
            </div>
        </article>
        <article className="user-list">
            <a href="javascript:;" className="select-btn select-btn-t"><img src="./images/collct.png"/>我的收藏 	<span>2</span>	 <i className="icon icon-select"></i></a>
            <a href="javascript:;" className="select-btn select-btn-t"><img src="./images/service.png"/>联系客服<i className="icon icon-select"></i></a>
            <a href="javascript:;" className="select-btn select-btn-t"><img src="./images/about.png"/>关于我们<i className="icon icon-select"></i></a>
            <a href="javascript:;" className="select-btn select-btn-t"><img src="./images/set.png"/>设置<i className="icon icon-select"></i></a>
        </article>
  </div>
        )
    }

    

    componentDidMount(){
        this.setState({
            username:document.cookie
        })
    }
}
export default User