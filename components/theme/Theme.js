// 1. Import the extendTheme function
import {extendTheme} from "@chakra-ui/react";
import styles from "./styles";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        100: "#f9c7da",
        200: "#f7b8d0",
        300: "#f499bc",
        400: "#f499bc",
        500: "#f28ab2",
        600: "#f07ba8",
        700: "#ef6b9e",
        800: "#ed5c94",
        900: "#eb4d8a",
    },
}

const fonts = {
    heading: 'Lato',
    body: 'Lato'
}

const theme = extendTheme({
    colors,
    // fonts,
    styles
})

export default theme;