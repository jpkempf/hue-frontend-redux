import { PRESET_TYPES } from './../config/presets'
import Presets from './Presets'
import React from 'react'

const Light = ({
    light,
    onClick,
}) => {
    const { state: lightData } = light
    const currentState = lightData.state.on
    const style = {
        display: 'block',
        width: '100%',
        backgroundColor: currentState ? 'yellow' : 'lightgrey',
        border: 0,
        padding: '1em',
    }

    return (
        <div className="hueItem">
            <strong>{lightData.name}</strong>
            <button style={style} onClick={onClick}>
                Turn {currentState ? 'off' : 'on'}
            </button>
            <Presets target={light} type={PRESET_TYPES.LIGHTS} />
        </div>
    )
}

export default Light