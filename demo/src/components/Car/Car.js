import React,{Component} from 'react'
import Shopcar from '../../common/Shopcar/Shopcar'
import Setlement from '../../common/Settlement/Setlement'
import Header from '../../common/Header/Header'
class Car extends Component{
    state={
        tit:"购物车",
        classn:"icon icon-return",
      
    }
    render(){
        return(
            <div>
                 <Header xiao={this.state.classn} tit={this.state.tit}></Header>
                <Shopcar></Shopcar>
                <Setlement></Setlement>
            </div>
        )
    }
}
export default Car