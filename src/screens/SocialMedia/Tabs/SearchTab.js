import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

function SearchTab() {
    return (
        <SafeAreaView style={styles.background}></SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

export default SearchTab;