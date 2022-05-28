import React from 'react';
import Renderage from './renderage'

export default class Agereader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: [],
        }
    }

    async apiCall(event) {
        if (event.currentTarget.value !== "") {
            let url = `https://api.agify.io/?name=${event.currentTarget.value}`
            const response = await fetch(url);
            const age = await response.json();
            
            this.setState({ age: age });
            return ;
        }
    }

    render() {
        if (this.state.age.length === 0) {
            return (
                <div>
                    <input type="text" onChange={this.apiCall.bind(this)} />
                    <br />
                    <div>Fetching Ages.....</div>
                </div>
            );
        } else {
            return (
                <div className="age_reader">
                    <input type="text" onChange={this.apiCall.bind(this)} />
                    <br />
                    <div className="output">
                        <Renderage age={this.state.age} />
                    </div>
                </div>
            )
        }
    }
}
