import React from 'react'
import './Footer.css'
import {NavLink} from 'react-router-dom'
const Footer=(props)=>(
    <footer>
    <NavLink to={{pathname:'/home'}} activeClassName="pick">
        <i className="icon iconf1"></i>
        首页
    </NavLink>
    <NavLink to={{pathname:'/community'}} activeClassName="pick">
        <i className="icon iconf2"></i>
        社区
    </NavLink>
    <NavLink to={{pathname:'/car'}}  activeClassName="pick">
        <i className="icon iconf3"></i>
        购物车
    </NavLink>
    <NavLink to={{pathname:'/user'}} activeClassName="pick">
        <i className="icon iconf4"></i>
        我
    </NavLink>
</footer>
)
export default Footer