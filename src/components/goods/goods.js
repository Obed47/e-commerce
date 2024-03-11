import './goods.css'
let Goods=(props)=>
{

    return(
        <div className="AllGoods">
            {props.AllGood.map((art)=>(
            <div className="good" key={art.id}>
                <p className="name">{art.Name}</p>
                <p className="category">{art.Category}</p>
                <p className="Price">{art.Price}</p>
            </div>
            ))
            }
        </div>
    );
}
export default Goods