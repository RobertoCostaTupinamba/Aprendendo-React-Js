import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Form/Input.jsx'
import './style.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            properties: []
        }
    }

    componentWillMount() {
        console.log('vai montar');

    }
    componentDidMount() {
        fetch('http://www.mocky.io/v2/5d94e1602f000058008ffa12')
            .then((response) => response.json())
            .then(({ properties }) => {

                this.setState({ properties })

            })
            .catch((error) => {
                console.log('error', error);

            })
    }
    render() {
        return (
            <Fragment>
                <div className="title">Minicurso React</div>
                <div>
                    <form className="card">
                        {
                            this.state.properties.map((data,index) => (
                                <Input key={index} label={data.label} name={data.name} type={data.type} />
                            ))
                        }
                    </form>
                </div>

            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'))
