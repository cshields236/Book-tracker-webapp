import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import classes from './FlipBook.module.css'
import SpringModal from '../../UI/SpringModal'
import ReactStars from 'react-stars'
class FlipBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false

        }
    }


    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }



    render() {
        let color = this.getRandomColor()

        return (
            <div className={classes.Flippy}>
                <Flippy


                    flipOnHover={true} flipOnClick={false} flipDirection='horizontal' ref={(r) => this.flippy = r}

                >
                    <FrontSide style={{
                        backgroundColor: color,

                    }} >
                        <img className={classes.photo} src={this.props.cover} alt='cover' />
                        <b>{this.props.title},</b><br />


                    </FrontSide>

                    <BackSide
                        style={{
                            paddingTop: '20%',
                            backgroundColor: '#ff5f6d',
                            fontSize: '20px',
                            color: 'bisque',
                            lineHeight: '2',
                            textTransform: 'capitalize'
                        }}
                    >
                        <b>Author:</b> {this.props.author}<br />
                        <b>ISBN:</b> {this.props.isbn}<br />
                        <b>Goodreads Rating:</b>  {this.props.avg_rating}<br />
                        <b>Number of Pages:</b>  {this.props.num_pages}<br />
                        <b>Year of Publication:</b>  {this.props.year_pub}<br />
                        <b>Genre:</b> {this.props.genre} <br />



                        <SpringModal description={this.props.description} />

                    </BackSide>

                </Flippy>
            </div>
        )
    }

}

export default FlipBook;
