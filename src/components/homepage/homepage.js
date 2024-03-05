import './homepage.css'

function Homepage(){

    let AllProducts=[
        //these products will be read,searched from,added to and sorted from
        //to display in the different categories
        {type:'hat',price:1000,image:'image.jpg'},
        {type:'jacket',price:1000,image:'image.jpg'},
        {type:'men',price:1000,image:'image.jpg'},
        {type:'sneakers',price:1000,image:'image.jpg'},
        {type:'women',price:1000,image:'image.jpg'}
        
    ]

    return(
    <div className="Home">
        <div className="smaller-cards">
        <div className="card">
            <div className="title"> 
                <a href="/">
                <h1>Hats</h1>
                <h2>Shop Now</h2>
                </a>
            </div>
        </div>
        <div className="card">
            <div className="title">
                <h1>Jackets</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
        <div className="card">
            <div className="title">
                <h1>Sneakers</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
        </div>
      

        <div className="larger-cards">
        <div className="card">
            <div className="title">
                <h1>Womens</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
        <div className="card">
            <div className="title">
                <h1>Mens</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
        </div>
    </div>
    );
}
export default Homepage;