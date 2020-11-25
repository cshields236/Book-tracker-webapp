import React, { Component } from 'react'


class Toolbar extends Component {


    render() {
        return (
            <div>
                <nav>
                    <div className='logo'>Book Tracker</div>
                    <ul className='nav-links'>
                        <li><a>Home</a></li>
                        <li><a>View List</a></li>
                        <li><a>Add New Book</a></li>
                        <li><a>View Read</a></li>
                        <li><a>Update Progress</a></li>
                    </ul>
                </nav>
            </div>

        )
    }
}

export default Toolbar