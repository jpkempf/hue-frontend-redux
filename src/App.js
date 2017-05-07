import React, { Component } from 'react'
import api from './config/api'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            groups: null,
            lights: null,
        }
    }

    componentDidMount() {
        Promise.all([
            api.GROUPS.GET_ALL(),
            api.LIGHTS.GET_ALL(),
        ]).then(
            ([ groups, lights ]) => this.setState({ groups, lights })
        )
    }

    render() {
        const { groups, lights } = this.state

        return (
            <div>
                { groups && groups.map(group => <div key={group.id}>
                    <button onClick={() => api.GROUPS.TOGGLE(group.id)}>
                        Toggle all { group.state.name } lights
                    </button>
                    <br />
                </div> )}

                <hr />

                { lights && lights.map(light => <div key={light.id}>
                    <button onClick={() => api.LIGHTS.TOGGLE(light.id)}>
                        Toggle light "{light.state.name}"
                    </button>
                    <br />
                </div> )}
            </div>
        )
    }
}

export default App
