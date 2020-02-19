import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Lux from "@lespantsfancy/lux";

import Paco from "./package";

const Test = new Paco.Lib.ExperienceQuantity(0);
const Entity = new Paco.Entity.Entity(Paco.Enum.Entity.GENERIC, [
    new Paco.Component.Attributes(),
    new Paco.Component.Energy(),
    new Paco.Component.Resources(),
]);

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

        console.log(Entity);
        console.log(Entity.Components);
        console.log(Entity.Components[ 0 ].Strength);
        console.log(Entity.Components[ 0 ].type);
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