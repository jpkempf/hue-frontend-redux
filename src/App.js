import React, { Component } from 'react'

import api from './config/api'
import { Group, Light } from './components/Item'

const REFRESH_INTERVAL = 5000;

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

        setInterval(() => {
            this._getGroupsAndLights()
        }, REFRESH_INTERVAL)
    }

    _getGroupsAndLights () {
        Promise.all([
            api.GROUPS.GET_ALL(),
            api.LIGHTS.GET_ALL(),
        ]).then(
            ([ groups, lights ]) => {
                this.setState({
                    groups: this._sortItemsByName(groups),
                    lights: this._sortItemsByName(lights),
                })
            }
        )
    }

    _sortItemsByName (items) {
        return items.sort((prev, next) =>
            prev.state.name > next.state.name)
    }

    async toggleGroup (id) {
        await api.GROUPS.TOGGLE(id)
        this._getGroupsAndLights()
    }

    async toggleLight (id) {
        await api.LIGHTS.TOGGLE(id)
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
