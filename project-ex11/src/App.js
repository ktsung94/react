import React, { Fragment, Component } from 'react';

class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            keyword: '',
            contents: '',
            birthYear: 1985
        }
    }

    onInputChange(event) {
        this.setState({
            keyword: event.target.value.substr(0, 5)
        });
    }

    onTextChange(event) {
        this.setState({
            contents: event.target.value
        });
    }

    onSelectChange(event) {
        this.setState({
            birthYear: event.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <div>
                    검색: <input type='text' value={this.state.keyword} onChange={this.onInputChange.bind(this)} />
                </div>
                <div>
                    내용: <textarea value={this.state.contents} onChange={this.onTextChange.bind(this)} />
                </div>
                <div>
                    <select value={ this.state.birthYear } onChange={this.onSelectChange.bind(this)}>
                        <option value='1984'>1984년</option>
                        <option value='1985'>1985년</option>
                        <option value='1986'>1986년</option>
                    </select>
                </div>
            </Fragment>
        );
    }
}

export { App };