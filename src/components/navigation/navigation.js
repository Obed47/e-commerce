import './navigation.css'
import About from '../about/about';
import Contacts from '../contacts/contacts';
import { useState } from 'react';
import Homepage from '../homepage/homepage';
function Navigation()
{
    const [currentComp,setCurrentComp]=useState('')
   
    let chComp=(cmp)=>
    {
        setCurrentComp(cmp);
    }

    return(
      <div className="navigation">
        <div className="logo">logo here</div>
        <div className="text">
            <h2>Daxx-Commerce</h2>
        </div>
      </div>
    );
    
}

export default Navigation;