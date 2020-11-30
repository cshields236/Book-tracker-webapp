import React, {  useState } from 'react'
import styles from './Toolbar.css'
import {Link} from 'react-router-dom';

function Toolbar() {
    const [open, setOpen] = useState(false);


    return (
        <div className={styles}>
            <nav>
                <div className='logo' style={{transform: open ? "translateX(-500px)" : ""}}>Book Tracker</div>
                <ul className='nav-links' style={{transform: open ? "translateX(0px)" : ""}}>
                    <li>
                        <Link to='/'>Home</Link></li>
                    <li>
                        <Link to='/view'>View List</Link></li>
                    <li>
                        <Link to='/'>Add New Book</Link></li>
                    <li>
                        <Link to='/read'>View Read</Link></li>
                    <li>
                        <Link to='update'>Update Progress</Link></li>
                </ul>
                <i onClick={() => setOpen(!open)} className= {open ? 'fas fa-times burger '   : 'fas fa-bars burger' } />
            </nav>

        </div>

    )

}

export default Toolbar