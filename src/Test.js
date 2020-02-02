import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Lux from "@lespantsfancy/lux";

export default class Test extends Lux.React.ReactorComponent {
    render() {        
        return (
            <View style={ styles.container }>
                <Text>{ JSON.stringify(this.context.$()) }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
