import { useState } from "react"
import './goods.css'
let Goods=()=>
{

    //see how to display this array as a vertical scroll
    let [articles,SetArticles]=useState([
        {type:'hat',price:1000,image:'image.jpg'},
        {type:'hat',price:1000,image:'image.jpg'},
        {type:'hat',price:1000,image:'image.jpg'},
        {type:'hat',price:1000,image:'image.jpg'},
        {type:'hat',price:1000,image:'image.jpg'},
        {type:'hat',price:1000,image:'image.jpg'},
        {type:'hat',price:1000,image:'image.jpg'}
    
    ])

    return(
        <div className="AllGoods">
            {articles.map((art)=>(
            <div className="good">
                <p className="type">{art.type}</p>
                <p className="pri">{art.price}</p>
                <img src={art.image} alt="loading failed" />

            </div>
            ))

            }
        </div>
    );
}
export default Goods