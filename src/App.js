import './App.css';
import { useState } from 'react';
import Homepage from './components/homepage/homepage'
import Navigation from './components/navigation/navigation'
import Goods from './components/goods/goods';
import Cat from './components/homepage/category';
import About from './components/about/about';
import Chart from './components/navigation/chart';
import Contacts from './components/contacts/contacts';


//read about conditional rendering
let AllGood=[
  {Name:"Hat",Category:"Hats",Price:400,id:1},
  {Name:"Hat",Category:"Jackets",Price:400,id:2},
  {Name:"Hat",Category:"Sneakers",Price:400,id:3},
  {Name:"Hat",Category:"Women",Price:400,id:4},
  {Name:"Hat",Category:"Men",Price:400,id:5},
  {Name:"Hat",Category:"Hats",Price:400,id:6},
  {Name:"Hat",Category:"Jackets",Price:400,id:7},
  {Name:"Hat",Category:"Sneakers",Price:400,id:8},
  {Name:"Hat",Category:"Women",Price:400,id:9},
  {Name:"Hat",Category:"Men",Price:400,id:10},
  {Name:"Hat",Category:"Hats",Price:400,id:11},
  {Name:"Hat",Category:"Jackts",Price:400,id:12},
  {Name:"Hat",Category:"Women",Price:400,id:13},
  {Name:"Hat",Category:"Sneakers",Price:400,id:14},
  {Name:"Hat",Category:"Hats",Price:400,id:17}
]


function App() {
  const [comp,setComp]=useState("Homepage")

  function changeComp(s){
    setComp(s)
  }
console.log(comp)
//note about conditional and direct rendering below
//with the navigation and the other components rendered there below
//navigation is rendered automatically bu the others are rendrered when the button is clicked
//the rendering conditions are from line 40 to 43

//find out how to render navigation here below as first element without covering the buttons
  return (
    
    <div className="App">
      <h2>Hello</h2>
      <hr />
     <Navigation/>
<div className="buttons">
    <button className='Homep' onClick={()=>changeComp("Homepage")}>Homepage</button>
    <button className="Goods" onClick={()=>changeComp('AllGoods')}> All Products</button>
    
    <div className="linksH">
    <button className='favourites' onClick={()=>changeComp('Favourites')}>Favoirites</button>
      <button className='about' onClick={()=>changeComp('About')}>About</button>
      <button className='contacts' onClick={()=>changeComp('Contacts')}>Contact</button>

   
      <p></p>
    </div>

    </div>
    {comp==='Homepage'&&<Homepage/>}
    {comp === 'AllGoods' && <Goods AllGood={AllGood} />}
    {comp === 'Favourites' && <p>favorited goods aprear here</p>}
    {comp==='About'&&<About/>}
    {comp==='Contacts'&&<Contacts/>}
    {comp==='Hats'&& <Goods AllGood={AllGood.filter(a=>a.Category==='Hats')}/>}

    </div>
  );
}

export default App;
