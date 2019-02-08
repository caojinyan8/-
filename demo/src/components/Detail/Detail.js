import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../../common/Header/Header'
import img1 from '../../assets/images/sjlogo.png'
import img2 from '../../assets/images/tel.png'
// import querystring from 'query-string'
import './Detail'
class Detail extends Component{
	state={
		tit:"商品详情",
		classn:"icon icon-return",
		detail:{}
	}
	componentDidMount(){
		let id=this.props.match.params.id-0
		// let dataName=querystring.parse(this.props.location.search).dataName
		fetch(
			`/data/index.json`
			).then(
				res=>res.json()
			).then(
				data=>this.setState({detail:data[id-1]})
				//data=>console.log(99,data)
			)
	}

    render(){
		let detail=this.state.detail
		console.log(detail)
        return(
    <div>
     <Header xiao={this.state.classn} tit={this.state.tit}></Header>
  <div className="product-head">
		{/* <a href="javascript:;"><img src="./images/fx02.png"/></a>
		<a href="javascript:;"><img src="./images/sc02.png"/></a> */}
		<img src={detail.img} style={{height:200}}/>
	</div>
	<article className="product-text">
    	<span>{detail.title}</span>
    	<span className="price">￥{detail.news} <s>${detail.old}</s></span>
    </article>
    <a id="norms" href="javascript:;" className="select-btn select-btn-s">选择规格<i className="icon icon-select"></i></a>

    <div className="norms-box">
    	<div className="norms-box-bg"></div>
        <div className="norms-content">
            <div className="norms-content-t norms-content-one">
                <div className="norms-img"><img src="./images/cp_gg.png"/></div>
                <div className="norms-c-text">
                    <span>{detail.title}</span>
                    <span className="price">￥{detail.news}<s>${detail.old}</s></span>
                </div>
                <div className="norms-off-btn"><img src="./images/off_btn.png"/></div>
            </div>
            <div className="norms-content-t norms-content-two">
                数量
                <span className="icon norms-out"></span>
                <span>1</span>
                <span className="icon norms-add"></span>
            </div>
            <div className="norms-content-three">
                颜色<br/>
                <span className="pick">黑色</span>
                <span >白色</span>
            </div>
        </div>
    </div>
    <a href="javascript:;" className="select-btn select-btn-t"><img src={img1}/>cjy的demo<i className="icon icon-select"></i></a>
    <a href="javascript:;" className="select-btn select-btn-t select-btn-d"><img src={img2}/>020-8888-8888</a>

    <div className="product-content">
    	<ul id="tab_btn" className="product-content-ul">
    		<li className="pick">
    			<span>图文详情</span>
				<img src={detail.img} alt=""/>
				<img src={detail.img} alt=""/>
    		</li>
    		<li>
    			<span>用户评价</span>
				<img src={detail.img} alt=""/>
				<img src={detail.img} alt=""/>

    		</li>
    	</ul>
    	
    	
    </div>

    <div className="add-shopping">
	{/* <a href="javascript:;" className="shopping-btn">
    		<em>2</em>
    		<i className="icon icon-car"></i>
    	</a> */}
    	<a href="javascript:;" className="btn btn-red fr">立即购买</a>
    	<Link to="/car" className="btn btn-yellow fr">加入购物车</Link> 
    	<div className="cl"></div>
	</div>
            </div>
         
       
        )
    }
}

export default Detail