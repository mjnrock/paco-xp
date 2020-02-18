import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Lux from "@lespantsfancy/lux";

import Component from "./component/package";

const Test = new Component.Attribute();

export default class App extends Lux.React.ObserverComponent {
    componentDidMount() {
        Test.Strength += 5;
        Test.Strength -= 15;
    }

    render() {  
        console.log(Test);

        return (
            <View style={ styles.container }>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});