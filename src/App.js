import React, { Component } from 'react'
import Group from './components/Group'
import Light from './components/Light'
import './style/style.css'

class App extends Component {
    constructor (props) {
        super(props)

        this.state = {
            groups: [],
            lights: [],
        }
    }

    componentDidMount () {
        this._getGroupsAndLights()
    }

    _getGroupsAndLights () {
        Promise.all([
            this.props.api.GROUPS.GET_ALL(),
            this.props.api.LIGHTS.GET_ALL(),
        ]).then(
            ([ groups, lights ]) => this.setState({ groups, lights })
        )
    }

    async toggleGroup (id) {
        await this.props.api.GROUPS.TOGGLE(id)
        this._getGroupsAndLights()
    }

    async toggleLight (id) {
        await this.props.api.LIGHTS.TOGGLE(id)
        this._getGroupsAndLights()
    }

    render() {
        const { groups, lights } = this.state

        return (
            <div>
                <div className="wrapper">
                    { groups.map(group => <Group
                        key={group.id}
                        group={group}
                        onClick={() => this.toggleGroup(group.id)}
                    />)}
                </div>
                <hr />
                <div className="wrapper">
                    { lights.map(light => <Light
                        key={light.id}
                        light={light}
                        onClick={() => this.toggleLight(light.id)}
                    />)}
                </div>
            </div>
        )
    }
}

export default App
