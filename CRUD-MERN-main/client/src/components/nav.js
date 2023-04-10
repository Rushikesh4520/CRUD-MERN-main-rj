import React from 'react';
import {Link} from 'react-router-dom'


const nav=()=>{

    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to="/">Staff</Link></li>
                <li><Link to="/add" >add Staff</Link></li>
            </ul>
        </div>
    )


}

export default nav;