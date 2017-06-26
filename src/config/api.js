import { BASE_URL } from './constants'
import {
    getGroupsOrLights,
    getGroupOrLight,
    updateGroup,
    updateLight,
} from './../helpers/api-helpers'

export const GROUPS = {
    GET_ALL () {
        return getGroupsOrLights(`${BASE_URL}/groups`)
    },

    GET (groupId) {
        return getGroupOrLight(`${BASE_URL}/groups/${groupId}`)
    },

    async TOGGLE (groupId) {
        const group = await this.GET(groupId)
        const currentState = group.state.all_on
        const newState = (!currentState).toString()
        return updateGroup(groupId, `{ "on": ${newState} }`)
    },

    BRIGHTNESS (groupId, value) {
        return updateGroup(groupId, `{ "bri": ${value} }`)
    },

    SATURATION (groupId, value) {
        return updateGroup(groupId, `{ "sat": ${value} }`)
    },

    HUE (groupId, value) {
        return updateGroup(groupId, `{ "hue": ${value} }`)
    },

    PRESET (groupId, preset) {
        const { bri, hue, sat } = preset

        return updateGroup(groupId, `{
            "bri": ${bri},
            "hue": ${hue},
            "sat": ${sat}
        }`)
    },
}

export const LIGHTS = {
    GET_ALL () {
        return getGroupsOrLights(`${BASE_URL}/lights`)
    },

    GET (lightId) {
        return getGroupOrLight(`${BASE_URL}/lights/${lightId}`)
    },

    async TOGGLE (lightId) {
        const light = await this.GET(lightId)
        const currentState = light.state.on
        const newState = (!currentState).toString()
        return updateLight(lightId, `{ "on": ${newState} }`)
    },

    PRESET (lightId, preset) {
        const { bri, hue, sat } = preset

        return updateLight(lightId, `{
            "bri": ${bri},
            "hue": ${hue},
            "sat": ${sat}
        }`)
    },
}

export default { GROUPS, LIGHTS }
