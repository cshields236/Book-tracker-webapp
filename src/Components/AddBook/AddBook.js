import React, { Component } from 'react'
import axios from 'axios'
import classes from './AddBook.module.css'
import Button from '../../UI/Button/Button'

class AddBook extends Component {
    constructor(props) {
        super(props)

      
        this.state = {
            title: '',
            author: '',
            genre: 'fiction',
            startdate: '',
            enddate: '',
            pages: 0,
            progress: 0,
            finished: false,
            bookAdded: null

        }
    }

   
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleSubmit = (event) => {

        event.preventDefault();

        axios.post('http://127.0.0.1:5000/add-book', this.state).then(res => {
            if (res.data.success) {
                console.log(res)
                this.setState({
                    bookAdded: true
                })
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
      

        return (
            <div>
                <form className={classes.Form} onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Author</label>
                        <input type='text' name='author' value={this.state.author} onChange={this.handleChange} />
                    </div>

                Genre
                <select value={this.state.genre} name='genre' onChange={this.handleChange}>
                        <option value='fiction'>Fiction </option>
                        <option value='history'>History</option>
                        <option value='sport'>Sport</option>
                        <option value='politics'>Politics</option>
                        <option value='memoir'>Memoir</option>
                        <option value='investigative'>Investigative</option>
                    </select>

                    {/* <button style={classes.Button}>Add Book</button> */}
                  <Button >submit</Button>
                </form>

              

            </div>


        )
    }

    // TODO: Add rest of fields for data input
    // TODO: Fix UI 
    // TODO: Look into adding and saving pics 
    // TODO: Sort out database 
    // TODO: Add Routing 

}

export default AddBook