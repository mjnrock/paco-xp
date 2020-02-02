import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Lux from "@lespantsfancy/lux";

import Test from "./Test";

export default class App extends Lux.React.ReactorComponent {
    componentWillMount() {
        this.context.attach("Tester", new Lux.Node.Node());
        this.context.getEntity("Tester").prop("cats", 15);

        setTimeout(() => {
            this.context.getEntity("Tester").prop("cats", 25);
            console.log(this.context.$());
        }, 1500);
    }

    render() {        
        return (
            <View style={ styles.container }>
                <Text>Open up App.js to start working on your app!</Text>
                <Test />
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
