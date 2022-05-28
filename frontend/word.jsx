import React from 'react'

export default class Word extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: "",
        }
    }

    updateWord(event) {
        this.setState({ word: event.currentTarget.value }, () => {
            console.log(this.state.word)
        });
    }

    render() {
        return (
            <div>
                <input onChange={this.updateWord.bind(this)} value={this.state.word} />
                <span>The word is: {this.state.word}</span>
            </div>
        )
    }
}