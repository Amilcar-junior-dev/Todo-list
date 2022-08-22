import { extendTheme } from 'native-base';

export const THEME = extendTheme( {
    colors: {
        primary: { 
            700: "#22d3ee"
        }, 
        secondary: {
            700: "#c026d3"
        },
        green: {
            700: "#22c55e",
            500: "#4ade80",
            300: "#f0fdf4",
        },
        gray: {
            700: "#171717",
            600: "#262626",
            500: "#404040", 
            400: "#737373", 
            300: "#fafafa",
        },
    },
    fonts: {
        heading: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
    },
    sizes: {
        14: 56
    },
});

