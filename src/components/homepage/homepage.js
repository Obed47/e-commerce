import './homepage.css'
import Cat from './category';
function Homepage(changeComp)
{
    return(
    <div className="Home">

       <Cat name="Hats" changeComp={changeComp}/>
       <Cat name="Jackets" changeComp={changeComp}/>
       <Cat name="Shoes" changeComp={changeComp}/>
       <Cat name="Men" changeComp={changeComp}/>
       <Cat name="Women" changeComp={changeComp}/>
    </div>
    );
}
export default Homepage;