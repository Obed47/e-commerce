import React from 'react';
import './category.css'
import Homepage from './homepage';
function Cat({name,changeComp}) {
    const UpdateState = () => {
        changeComp(name);
    }
    return (
        <div className="categoryCard" onClick={()=>changeComp({name})}>
            <div className="image"></div>
            <div className="texts">
                <h4 className='title'>{name}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam esse error iure, totam temporibus beatae unde consequuntur
                    sunt, perspiciatis consequatur cum reprehenderit dolore et
                    dolorum, incidunt saepe minus quos? Porro.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam esse error iure, totam temporibus beatae unde consequuntur
                    sunt, perspiciatis consequatur cum reprehenderit dolore et
                    dolorum, incidunt saepe minus quos? Porro.</p>
            </div>
        </div>
    );
}
export default Cat;