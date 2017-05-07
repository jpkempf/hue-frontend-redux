import { BASE_URL } from './../config/constants'

/* exported functions */

export async function getGroupsOrLights (endpoint) {
    const response = await fetch(endpoint)
    const jsonObject = await response.json()
    const groupsOrLights = []

    for (let itemId in jsonObject) {
        const dataOrState = jsonObject['data'] ? 'data' : 'state'

        groupsOrLights.push({
            id: itemId,
            [dataOrState]: jsonObject[itemId],
        })
    }

    return groupsOrLights
}

export async function getGroupOrLight (endpoint) {
    const response = await fetch(endpoint)
    const groupOrLight = await response.json()
    return groupOrLight
}

export function updateGroup (groupId, requestBody) {
    return updateGroupOrLight(`${BASE_URL}/groups/${groupId}/action`, requestBody)
}

export function updateLight (lightId, requestBody) {
    return updateGroupOrLight(`${BASE_URL}/lights/${lightId}/state`, requestBody)
}

/* private functions */

async function updateGroupOrLight (endpoint, requestBody) {
    return await fetch(endpoint, {
        method: 'PUT',
        body: requestBody,
    })
}
