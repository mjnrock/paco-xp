import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Lux from "@lespantsfancy/lux";
import "tachyons";

import Paco from "./package";

//? /App.js is entry point for React Native, while /src/index.js is for React | Both call /src/App.jsx, so set origin state here
Lux.React.Context.Observer.setSubject(new Lux.Node.Struct({
    fish: 1
}));

// const Test = new Paco.Lib.ExperienceQuantity(0);
// const Entity = new Paco.Entity.Entity(Paco.Enum.Entity.GENERIC, [
//     new Paco.Component.Attributes(),
//     new Paco.Component.Energy(),
//     new Paco.Component.Resources(),
// ]);

export default class App extends Lux.React.ObserverComponent {
    render() {
        return (
            <View style={ styles.container }>
                <Text>cat</Text>
                {/* <Text>{ Lux.Core.Helper.StringifyCyclic(this.context, 2) }</Text> */}
                {/* <Text>{ Lux.Core.Helper.StringifyCyclic(this.state, 2) }</Text> */}
                <View style={ styles.container }>
                    <Text className="b">{ Lux.Core.Helper.StringifyCyclic(this.context.$("getState"), 2) }</Text>
                </View>
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
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000",
        borderRadius: 4,
        padding: 4,
        margin: 4,
    },
});