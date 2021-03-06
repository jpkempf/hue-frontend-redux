// rename this file to constants.js

const BRIDGE_IP = 'your-ip-here'
const API_KEY = 'your-api-key-here'

export const BASE_URL = `http://${BRIDGE_IP}/api/${API_KEY}`

// brightness
export const BRI_MIN = 0
export const BRI_MAX = 254

// saturation: 0 === white for any given hue
export const SAT_MIN = 0
export const SAT_MAX = 254

// hue: 0 === 65535 === red, 25500 === green, 46920 === blue
export const HUE_MIN = 0
export const HUE_MAX = 65535
