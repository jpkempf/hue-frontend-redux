import React from 'react'

import { PRESET_TYPES } from './../config/presets'
import Presets from './Presets'

const Light = ({
    light,
    onClick,
}) => {
    const { state: lightData } = light
    const isLightOn = lightData.state.on
    const style = {
        display: 'block',
        width: '100%',
        backgroundColor: isLightOn ? 'yellow' : 'lightgrey',
        fontWeight: isLightOn ? 'bold' : 'normal',
        border: 0,
        padding: '1em',
    }

    return (
        <div className="hueItem">
            <button
                style={style}
                onClick={onClick}
            >
                {lightData.name}
            </button>
            <Presets target={light} type={PRESET_TYPES.LIGHTS} />
        </div>
    )
}

export default Light