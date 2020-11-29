import React, { Component } from 'react'
import axios from 'axios'
import classes from './AddBook.module.css'
import Button from '../../UI/Button/Button'
import Auxilery from '../../UI/HOC/Auxilery'
import { green, red } from '@material-ui/core/colors'

class AddBook extends Component {
    constructor(props) {
        super(props)


        this.state = {
            title: '',
            author: '',
            genre: 'fiction',
            selectedFile: null,
            bookAdded: null,
            disabled: false

        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    fileSelectedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
        console.log(event);
    }

    handleSubmit = (event) => {
        if (this.state.selectedFile === null){
            event.preventDefault()
            alert('Please Upload a Cover Image')
        }else{
        
        this.setState({
            disabled: true
        })
        axios.post('http://127.0.0.1:5000/add-book', this.state).then(res => {
            if (res.data.success) {
                console.log(res)
                this.setState({
                    bookAdded: true
                })
            }
        }).then(r => {
            const fd = new FormData();
            fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
            console.log(fd);
            axios.post('http://127.0.0.1:5000/add-cover', fd)
                .then(res => {
                    console.log(res);
                })
        }).catch(err => {
            console.log(err)
        })}
    }

    render() {
        return (
            <Auxilery>
                <div>
                    <br />
                    <center>
                        <u>
                            <h1>Add A New Book</h1>
                        </u>
                    </center>

                    <form className={classes.Form} onSubmit={this.handleSubmit}>
                        <label>Title</label>
                        <div>
                            <input required type='text' name='title' value={this.state.title} onChange={this.handleChange} />
                        </div>
                        <label>Author</label>
                        <div>
                            <input required type='text' name='author' value={this.state.author} onChange={this.handleChange} />
                        </div>

                        <label> Genre</label><br />
                        <select value={this.state.genre} name='genre' onChange={this.handleChange}>
                            <option value='fiction'>Fiction </option>
                            <option value='history'>History</option>
                            <option value='sport'>Sport</option>
                            <option value='politics'>Politics</option>
                            <option value='memoir'>Memoir</option>
                            <option value='investigative'>Investigative</option>
                        </select>
                        <br />
                        <label>Upload Cover Image</label>   <br />

                        <input
                            type='file' name='upload'
                            style={{ display: 'none' }}
                            value={this.state.coverImg}
                            onChange={this.fileSelectedHandler}
                            ref={fileInput => this.fileInput = fileInput} />
                        <button
                            style={{
                                border: '1px solid  #ff5f6d',
                                display: 'inline-block',
                                backgroundColor: 'bisque',
                                color: 'black',
                                padding: '6px 12px',
                                cursor: 'pointer',
                            }}
                            onClick={() => this.fileInput.click()} >Pick File</button>
                        <div>
                        </div>
                        <br />
                        <br />
                        <Button disabled={this.state.disabled} >Add Book</Button>
                        
                        {this.state.bookAdded === true && <p style={{color: green, }}>Book Added!</p>}
                        {this.state.emailSent === false && <p style={{color: red, }} >Book Not Added!</p>}
                    </form>
                </div>
            </Auxilery>
        )
    }

    // TODO: Add rest of fields for data input
    // TODO: Fix UI 
    // TODO: Look into adding and saving pics 
    // TODO: Sort out database 
    // TODO: Add Routing 

}

export default AddBook