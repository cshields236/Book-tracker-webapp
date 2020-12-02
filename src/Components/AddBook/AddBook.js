import React, { Component } from 'react'
import axios from 'axios'
import classes from './AddBook.module.css'
import Button from '../../UI/Button/Button'
import Auxilery from '../../UI/HOC/Auxilery'
import { storage } from '../../firebase'

class AddBook extends Component {
    constructor(props) {
        super(props)


        this.state = {
            title: '',
            author: '',
            genre: 'fiction',
            coverUrl: null,
            selectedFile: null,
            progress: 0,
            bookAdded: null,
            disabled: false

        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleUpload = (event) => {
        event.preventDefault()
        const uploadTask = storage.ref(`covers/${this.state.selectedFile.name}`).put(this.state.selectedFile);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({
                    progress: progress
                })
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("covers")
                    .child(this.state.selectedFile.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({
                            coverUrl: url
                        })
                    });
            }
        );
    };

    fileSelectedHandler = (event) => {
        if (event.target.files[0]) {
            this.setState({
                selectedFile: event.target.files[0]
            })
        }

    }

    handleSubmit = (event) => {
        if (this.state.selectedFile === null) {
            event.preventDefault()
            alert('Please Upload a Cover Image')
        } else {

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
            }).catch(err => {
                console.log(err)
            })
        }
    }

    render() {
        console.log(this.state.progress);
       
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


                        <div>
                        </div>
                       
                        <input
                        style={{color: 'bisque'}}
                        type='file' name='upload'

                        value={this.state.coverImg}
                        onChange={this.fileSelectedHandler}
                        ref={fileInput => this.fileInput = fileInput} />
                        <button onClick={this.handleUpload}>Upload</button>
                        <br />
                        <br />
                        <br />
                      
                        <Button disabled={this.state.progress === 0 ? true : false} >Add Book</Button>


                    </form>

                    <br />
                    <br />   <br />
                    <br />
                   
                    
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