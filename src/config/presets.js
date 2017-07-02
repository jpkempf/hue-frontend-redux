const HUE_YELLOW = 8402
const SAT_MEDIUM = 140

export const PRESET_TYPES = {
    GROUPS: 'GROUPS',
    LIGHTS: 'LIGHTS',
}

export const PRESETS = {
    BRIGHT: {
        name: "Bright",
        bri: 254,
        sat: 0,
        hue: 0,
    },

    WARM: {
        name: "Warm",
        bri: 254,
        sat: SAT_MEDIUM,
        hue: HUE_YELLOW,
    },

    DIMMED: {
        name: "Dimmed",
        bri: 77,
        sat: SAT_MEDIUM,
        hue: HUE_YELLOW,
    },

    NIGHTLIGHT: {
        name: "Nightlight",
        bri: 1,
        sat: SAT_MEDIUM,
        hue: HUE_YELLOW,
    },
}