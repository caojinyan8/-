import React from 'react'
import './Header.css'
const Header=(props)=>(

	<header>
			<div className="header">
				<a href="javascript:;window.history.back(-1)"><i className={props.xiao}></i></a>
				<h1>{props.tit}</h1>
			</div>
		</header>
)
export default Header