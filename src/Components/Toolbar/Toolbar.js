import React, {  useState } from 'react'


function Toolbar() {
    const [open, setOpen] = useState(false);


    return (
        <div>
            <nav>
                <div className='logo' style={{transform: open ? "translateX(-500px)" : ""}}>Book Tracker</div>
                <ul className='nav-links' style={{transform: open ? "translateX(0px)" : ""}}>
                    <li><a>Home</a></li>
                    <li><a>View List</a></li>
                    <li><a>Add New Book</a></li>
                    <li><a>View Read</a></li>
                    <li><a>Update Progress</a></li>
                </ul>
                <i onClick={() => setOpen(!open)} className= {open ? 'fas fa-times burger '   : 'fas fa-bars burger' } />
            </nav>

        </div>

    )

}

export default Toolbar