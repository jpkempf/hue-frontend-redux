import Presets from './Presets'
import React from 'react'

const Group = ({
    group,
    onClick,
}) => {
    const { state: groupData } = group
    const currentState = groupData.state.all_on
    const style = {
        display: 'block',
        width: '100%',
        backgroundColor: currentState ? 'yellow' : 'lightgrey',
        border: 0,
        padding: '1em',
    }

    return (
        <div className="hueItem">
            <strong>{groupData.name}</strong>
            <button
                style={style}
                onClick={onClick}
            >
                Turn {currentState ? 'off' : 'on'}
            </button>
            <Presets target={group} type={'GROUPS'} />
        </div>
    )
}

export default Group