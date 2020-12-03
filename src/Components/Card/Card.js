import Axios from 'axios'
import React, { Component } from 'react'
import FlipBook from '../Card/FlipBook'
import styles from './Card.module.css'
import Aux from 'react-aux';
class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [],
            loading: false,


        }

    }
    componentDidMount() {
        Axios.get('http://127.0.0.1:5000/show-books')
            .then(res => {

                const fetchedBooks = [];
                for (let key in res.data) {
                    fetchedBooks.push({
                        ...res.data[key],
                        id: parseInt(key) + 1
                    })
                    this.setState({ books: fetchedBooks })
                }

            })

    }
    render() {
        // console.log(this.state.books);
        return (
            <Aux>



                <h1>Your Library</h1>
                <div className={styles.Card} md="auto" >

                    {this.state.books.map(book => (
                        <FlipBook
                            key={book.id}
                            identifier={book.id}
                            title={book.title}
                            author={book.author}
                            genre={book.genre}
                            cover={book.cover}


                        />

                    ))}

                </div>
            </Aux>

        )
    }
}

export default Card