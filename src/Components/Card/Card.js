import Axios from 'axios'
import React, { Component } from 'react'
import FlipBook from '../Card/FlipBook'


class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [],
            loading: false

        }
    }
    componentDidMount() {

        Axios.get('http://127.0.0.1:5000/show-books')
            .then(res => {

                const fetchedBooks = [];
                for (let key in res.data) {
                    fetchedBooks.push({
                        ...res.data[key],
                        id: key
                    })
                    this.setState({ books: fetchedBooks })
                }

            })


    }



    render() {
        return (



            <div>
                {this.state.books.map(book => (
                    <FlipBook
                        title={book.title}
                        author={book.author}
                        genre={book.genre}
                    />

                ))}
            </div>
        )
    }
}

export default Card