import React, { Component } from 'react'
import axios from 'axios'

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

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAuthorChange = (event) => {
        this.setState({
            author: event.target.value
        })
    }

    handleGenreChange = (event) => {
        this.setState({
            genre: event.target.value
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
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type='text' value={this.state.title} onChange={this.handleTitleChange} />
                </div>
                <div>
                    <label>Author</label>
                    <input type='text' value={this.state.author} onChange={this.handleAuthorChange} />
                </div>
                Genre
                <select value={this.state.genre} onChange={this.handleGenreChange}>
                    <option value='fiction'>Fiction </option>
                    <option value='history'>History</option>
                    <option value='sport'>Sport</option>
                    <option value='politics'>Politics</option>
                    <option value='memoir'>Memoir</option>
                    <option value='investigative'>Investigative</option>
                </select>

                <button>Add Book</button>
            </form>

        )
    }

    // TODO: Add rest of fields for data input
    // TODO: Fix UI 
    // TODO: Look into adding and saving pics 
    // TODO: Sort out database 

}

export default AddBook