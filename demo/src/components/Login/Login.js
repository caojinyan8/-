import React,{Component} from 'react'
import style from'./Login.module.css'
import {Link} from 'react-router-dom'
class Login extends Component{
    state={
        st:{"textAlign":"center"},
        username:'',
        passname:''
    }
    render(){
        return(
            <section className={style.auiflexView}>
            {/* <header className="aui-navBar aui-navBar-fixed">
                <a href="javascript:;" className="aui-navBar-item">
                    <i className="icon icon-return"></i>
                </a>
                <div className="aui-center">
                    <span className="aui-center-title"></span>
                </div>
                <a href="javascript:;" className="aui-navBar-item">
                    <i className="icon icon-sys"></i>
                </a>
            </header> */}
            <section className={style.auiscrollView}>
              
                <div className={style.auisignheader}>
                   <h1 style={this.state.st}>登录</h1>
                        <div className={style.auisignheader}>
                            {/* <i className={`${style.icon} ${style.iconphone}`}></i> */}
                            用户名
                            <input type="text" name="username" placeholder="请输入用户名" value={this.state.username} onChange={(ev)=>this.changeIpt(ev)}/>
                       
                    </div>
                    <div>
                            {/* <i className={`${style.icon} ${style.iconpas}`}></i> */}
                            密码
                            <input type="password" name="passname" placeholder="登录密码" value={this.state.passname} onChange={(ev)=>this.changeIpt(ev)}/>
                    </div>
                    <div className={style.auiflexforget}>
                        <a href="javascript:;">忘记密码</a>
                    </div>
                    <div className={style.auibuttonsign}>
                    <button onClick={this.login.bind(this)}>登录</button>
                        <Link to="/reg"><button>注册</button></Link>
                    </div>
                </div>
            </section>
        </section>
        )
    }
    changeIpt(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    login(){
        //console.log('login',this.state.username,this.state.passname);
        // fetch(
        //     `/data/user.json`
        // ).then(
        //     res=>res.json()
        // ).then(data=>{
        //     //console.log(data)
        //     if(data.auth){
        //         this.props.history.push({pathname:'/user'})
        //     }else{
        //         this.props.history.push({pathname:'/error'})
        //     }
        // })


        fetch(
            'http://localhost:3001/login?username='+this.state.username+'&passname='+this.state.passname
        ).then(
            res=>res.json()
        ).then(
            data=>{
                console.log(data)
                switch(data){
                    case 1:
                    alert('用户名或者密码输入有误');
                    break;
                    case 0:
                    alert('登录成功')
                    document.cookie=this.state.username
                    this.props.history.push('/user')
                    break;
                }
            }
        )

    }
}
export default Login