import React from 'react'
import './Shopcar.css'
import '../../assets/css/style.css'
const Shopcar =(props)=>(
   
	   <form className="setCmp">
		<div className="Cart">
			<div className="payment">
				 <input type="radio" className="radio-la" value="" id="check-2" name="doc-radio-1"/>
	             {/* <label for="check-2"></label> */}
			</div>
			<a href="javascript:;" className="select-btn select-btn-t"><img src="./images/sjlogo.png"/>海绵包包</a>
		</div>
		<article className="confirmOrder">
			<img src="images/cp_gg.png"/>
			<div className="product-text">
		    	<span>首款海绵包包</span>
		    	<span className="hue">颜色：黑色</span>
		    	<span className="price price-cart">
		    		￥68.00
		    		<div className="norms-content-t norms-content-two">
		                <span className="icon norms-out"></span>
		                <span>1</span>
		                <span className="icon norms-add"></span>
		            </div>
		    	</span>
			</div>
		</article>
		<div className="Cart">
			<div className="payment">
					 <input type="radio" className="radio-la" value="" id="check-3" name="doc-radio-1"/>
		             {/* <label for="check-3"></label> */}
				</div>	
			<a href="javascript:;" className="select-btn select-btn-t"><img src="images/sjlogo.png"/>海绵包包</a>
		</div>
		<article className="confirmOrder">
			<img src="images/cp_gg.png"/>
			<div className="product-text">
		    	<span>首款海绵包包</span>
		    	<span className="hue">颜色：黑色</span>
		    	<span className="price price-cart">
		    		￥68.00
		    		<div className="norms-content-t norms-content-two">
		                <span className="icon norms-out"></span>
		                <span>1</span>
		                <span className="icon norms-add"></span>
		            </div>
		    	</span>
			</div>
		</article>
	</form>
   
)
export default Shopcar