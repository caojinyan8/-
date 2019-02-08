import React,{Component} from 'react'
import './Community.css'
import Header from '../../common/Header/Header'
import data from '../../api/time'
class Community extends Component{
    constructor(props){
        super(props)
         this.state={
            tit:"社区",
            listl:[],
        classn:"icon icon-return",
      
    }
    }
    componentDidMount(){
        fetch(
            `/data/she.json`
        ).then(
            res=>res.json()
        ).then(
            data=>this.setState({listl:data})
            //data=>console.log(data)
        )
    }
   
   render(){
        console.log(this.state.listl)
        return(

            <>
            <Header xiao={this.state.classn} tit={this.state.tit}></Header>
            {
            this.state.listl.map(items=>(
             <article key={items.id}>
             <div className="community-head">
                 <img src={items.head}/>
                 <span>{items.name}</span>
                 <p>{items.title}</p>
             </div>
             <ul className="community-content">
                 <li><img src={items.img}/></li>
                 <li><img src={items.img2}/></li>
                 <li><img src={items.img3}/></li>
             </ul>
             <div className="cl"></div>
             <div className="community-foot">
             </div>
         </article>
            )) 
         }
                
        </>
        )
    }
}
export default Community