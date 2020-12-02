import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import classes from './FlipBook.module.css'

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
        console.log(this.props.title);
        return (
            <div className={classes.Flippy}>
                <Flippy
                    flipOnHover={false} flipOnClick={true} flipDirection='horizontal' ref={(r) => this.flippy = r}

                >
                    <FrontSide style={{
                        backgroundColor: color,

                    }} >
                        <img className={classes.photo} src={this.props.cover} alt='cover' />

                    </FrontSide>

                    <BackSide
                        style={{
                            backgroundColor: '#ff5f6d',
                            fontSize: '40px',
                            paddingTop: '30%'
                        }}
                    >

                        <b>Title:</b>
                        <br />
                        {this.props.title}
                        <br />
                        <b>Author:</b>
                        <br />
                        {this.props.author}
                        <br />
                        <b>Genre:</b>  <br />  {this.props.genre}


                    </BackSide>

                </Flippy>
            </div>
        )
    }

}

export default FlipBook;
