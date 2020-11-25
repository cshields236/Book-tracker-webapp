import Axios from 'axios'
import React, { PureComponent } from 'react'

class Card extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    componentDidMount(){
        Axios.get('http://127.0.0.1:5000/show-books').then(res =>{
            console.log(res.data)
        })
    }



    render() {
        return (
            <div>
                Hey
            </div>
        )
    }
}

export default Card