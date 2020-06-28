import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const MealDetails = ({ navigation }) => {
    return <>
        <View style={styles.screen}>
            <Text>The MealDetails Screen</Text>
            <Button title='Go to root screen' onPress={() => navigation.popToTop()} />
        </View>
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetails