import React from 'react'

import { PRESET_TYPES } from './../config/presets'
import Presets from './Presets'

const Group = ({
    group,
    onClick,
}) => {
    const { state: groupData } = group
    const isGroupOn = groupData.state.all_on
    const style = {
        display: 'block',
        width: '100%',
        backgroundColor: isGroupOn ? 'yellow' : 'lightgrey',
        fontWeight: isGroupOn ? 'bold' : 'normal',
        border: 0,
        padding: '1em',
    }

    return (
        <div className="hueItem">
            <button
                style={style}
                onClick={onClick}
            >
                {groupData.name}
            </button>
            <Presets target={group} type={PRESET_TYPES.GROUPS} />
        </div>
    )
}

export default Group