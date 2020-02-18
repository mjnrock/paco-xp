import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Lux from "@lespantsfancy/lux";

import Component from "./component/package";

const Test = new Component.ExperienceAttribute("Strength");

export default class App extends Lux.React.ObserverComponent {
    componentDidMount() {
        console.time();
            console.log(Test._state);

            console.log(Test.Level, Test.Experience);
            console.log(Test.Value, Test.Min, Test.Max);

            Test.Experience += 100000;
            
            console.log(Test.Level, Test.Experience);
            console.log(Test.Value, Test.Min, Test.Max);
        console.timeEnd();
    }

    render() {
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