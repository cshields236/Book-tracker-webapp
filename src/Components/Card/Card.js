import Axios from 'axios'
import React, { Component } from 'react'
import FlipBook from '../Card/FlipBook'
import styles from './Card.module.css'
import Aux from 'react-aux';
import Spinner from '../../UI/Spinner/Spinner';
class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [],
            loading: true,


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
                    this.setState({ books: fetchedBooks, loading: false })
                }

            })

    }
    render() {

        let card = (<Spinner />)

        if (!this.state.loading) {
            card = (
                <Aux>



                    <h1>Your Library</h1>
                    <div className={styles.Card} md="auto" >

                        {this.state.books.map(book => (
                            <FlipBook
                                key={book.id}
                                title={book.title}
                                author={book.author}
                                genre={book.genre}
                                cover={book.cover}
                                isbn={book.isbn}
                                avg_rating={book.avg_rating}
                                description={book.description}
                                num_pages={book.num_pages}
                                year_pub={book.publication_year}


                            />

                        ))}

                    </div>
                </Aux>

            )
        }
        return (
            card
        )
    }
}

export default Card