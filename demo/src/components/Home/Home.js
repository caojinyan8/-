import React,{Component} from 'react'
import ReactSwipe from 'react-swipe'
import Nav from '../../common/Nav/Nav'
import './Home.css'
import Mall from '../../common/Mall/Mall'
import List from '../../common/List/List'
import Header from '../../common/Header/Header'
import pubsub from 'pubsub-js'
class Home extends Component{
 
    state={
        classn:"icon icon-menu",
        tit:"京西商城",
        list:[]
      
    };
    componentDidMount(){
    pubsub.publish('view',true)
      fetch(
        `/data/index.json`
      ).then(
        res=>res.json()
      ).then(
        data=>{
         setTimeout(()=>{
          pubsub.publish('view',false)

          this.setState({list:data})
          //console.log(data)
         },1000)
        }

      )
    }
    render(){
        return(
            <div>
                
                 <Header xiao={this.state.classn} tit={this.state.tit}></Header>
                <ReactSwipe
          className="carousel"
          swipeOptions={{
            continuous: true,
            auto: 1000,

          }}
        >
	         <div>
	           <img src="images/banner1.jpg"/>
	         </div>
	         <div>
	           <img src="images/banner2.jpg"/>
	         </div>
	         <div>
	           <img src="images/banner3.jpg"/>>
	         </div>
        </ReactSwipe>
                <Nav></Nav>
                <Mall></Mall>
                <List list={this.state.list} dataName='home'></List>
            </div>
        )
    }
}
export default Home