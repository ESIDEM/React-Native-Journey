import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style = {styles.headingText}>FlatCards</Text>
      <View style = {styles.container}>
        <View style = {[styles.card, styles.cardOne]}>
            <Text>RED</Text>
        </View>
        <View style = {[styles.card, styles.cardTwo]}>
            <Text>BLUE</Text>
        </View>
        <View style = {[styles.card, styles.cardThree]}>
            <Text>GREEN</Text>
        </View>
        <View style = {[styles.card, styles.cardTwo]}>
            <Text>BLUE</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 23,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 8

    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardOne: {
        backgroundColor: "#ED1114"
    },
    cardTwo: {
        backgroundColor: "#ED9951"
    },
    cardThree: {
        backgroundColor: "#ED5354"
    }
})