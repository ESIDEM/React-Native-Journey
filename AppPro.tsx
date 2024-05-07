import React from "react";

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native"

function AppPro(): JSX.Element {

    const isDark = useColorScheme() === "dark"
return (
    <View style = { style.container}>
    <Text style = { isDark ? style.whiteText : style.blackText}> Hello Sam Esidem</Text>
    </View>
)
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    whiteText: {
        color: "#FFFFFF"
    },
    blackText: {
        color: "#000000"
    }
})
export default AppPro