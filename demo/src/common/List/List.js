import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './List.css'
const List=({list,dataName})=>(
    <>
    <article>
    <h1>精选促销</h1>
</article>
<div className="commodity-box">
    <ul className="commodity">
       
            {
                list.map(item=>(
                    <li key={item.id}>  
                    <Link to={{pathname:'/detail/'+item.id,search:'?dataName='+dataName}}>
                            <img src={item.img}/>
                            <span>{item.title}</span>
                            <span className="price">￥{item.old} <s>${item.news}</s></span>
                    </Link>
                </li> 

                ))
            
            }
           
     
    </ul>	
</div>
    </>

)
export default List