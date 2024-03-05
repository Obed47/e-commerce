import './App.css';
import { useState } from 'react';
import Homepage from './components/homepage/homepage'
import Navigation from './components/navigation/navigation'
import Goods from './components/goods/goods';
import About from './components/about/about';
import Chart from './components/navigation/chart';
import Contacts from './components/contacts/contacts';
//import Homepage from './components/homepage/homepage';


//read about conditional rendering

function App() {

  const [comp,setComp]=useState('Homepage')

  let changeComp=(comp)=>
  {
    setComp(comp)
  }
//note about conditional and direct rendering below
//with the navigation and the other components rendered there below
//navigation is rendered automatically bu the others are rendrered when the button is clicked
//the rendering conditions are from line 40 to 43

//find out how to render navigation here below as first element without covering the buttons
  return (
    
    <div className="App">
      <h2>Hello</h2>
     <Navigation/>
<div className="buttons">
    <button className='Homep' onClick={()=>changeComp('Homepage')}>Homepage</button>
    <button className='Goods' onClick={()=>changeComp('Goods')}> All Products</button>
    
    <div className="linksH">
    <button className='chart' onClick={()=>changeComp('Chart')}>Favoirites</button>
      <button className='about' onClick={()=>changeComp('About')}>About</button>
      <button className='contacts' onClick={()=>changeComp('Contacts')}>Contact</button>
   
      <p></p>
    </div>

    </div>
    {comp==='Homepage'&&<Homepage/>}
    {comp==='Goods'&&<Goods/>}
    {comp==='About'&&<About/>}
    {comp==='Contacts'&&<Contacts/>}
    {comp==='Chart'&&<Chart/>}

    </div>
  );
}

export default App;
