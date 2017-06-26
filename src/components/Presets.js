import api from './../config/api'
import presets from './../config/presets'
import React from 'react'

const Presets = ({
    target,
    type,
}) => {
    const presetKeys = Object.keys(presets)
    const onClick = api[type].PRESET

    return (
        <div className="presets">
            { presetKeys.map(key => {
                const preset = presets[key]

                return <button
                    key={key}
                    onClick={() => onClick(target.id, preset)}
                >
                    {preset.name}
                </button>
            })}
        </div>
    )
}

export default Presets