import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import classes from './FlipBook.module.css'
import SpringModal from '../../UI/SpringModal'
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

    createMarkup() {
        return { __html: this.props.description }
    }

    render() {
        let color = this.getRandomColor()

        return (
            <div className={classes.Flippy}>
                <Flippy


                    flipOnHover={false} flipOnClick={true} flipDirection='horizontal' ref={(r) => this.flippy = r}

                >
                    <FrontSide style={{
                        backgroundColor: color,

                    }} >
                        <img className={classes.photo} src={this.props.cover} alt='cover' />
                        <b>{this.props.title},</b><br />
                        <b>{this.props.author}</b>

                    </FrontSide>

                    <BackSide
                        style={{
                            backgroundColor: '#ff5f6d',
                            fontSize: '18px'
                        }}
                    >
                        <SpringModal description={this.props.description}/>
                   
                    </BackSide>

                </Flippy>
            </div>
        )
    }

}

export default FlipBook;
