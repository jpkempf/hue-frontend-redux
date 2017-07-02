import React from 'react'

import { PRESET_TYPES } from './../config/presets'
import Presets from './Presets'

const generateStyles = (isItemOn) => {
    return {
        display: 'block',
        width: '100%',
        backgroundColor: isItemOn ? 'yellow' : 'lightgrey',
        fontWeight: isItemOn ? 'bold' : 'normal',
        border: 0,
        padding: '1em',
    }
}

const renderItem = (style, item, onClickFn, presetType) => {
    return (
        <div className="hueItem">
            <button
                style={style}
                onClick={onClickFn}
            >
                {item.state.name}
            </button>
            <Presets target={item} type={presetType} />
        </div>
    )
}

export const Group = ({
    group,
    onClick,
}) => {
    return renderItem(
        generateStyles(group.state.state.all_on),
        group,
        onClick,
        PRESET_TYPES.GROUPS,
    )
}

export const Light = ({
    light,
    onClick,
}) => {
    return renderItem(
        generateStyles(light.state.state.on),
        light,
        onClick,
        PRESET_TYPES.LIGHTS,
    )
}