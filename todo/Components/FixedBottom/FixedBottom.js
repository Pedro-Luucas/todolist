import React from "react";
import { StyleSheet, View } from "react-native";

export default function FixedBottom ({ children }) {
    return (
        <View style={styles.container}>
            {children && React.cloneElement(children, { style: [children.props.style, styles.button] })}
        </View>
    );}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
        padding : 20,
        height: 80,
    },
    button: {
        height: "100%",
        justifyContent: "center",
    },
});
