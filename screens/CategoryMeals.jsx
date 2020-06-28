import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CategoryMeals = ({ navigation }) => {
    return <>
        <View style={styles.screen}>
            <Text>The CategoryMeals Screen</Text>
            <Button title='Go to Meal Details' onPress={() => navigation.navigate('MealDetails')} />
            <Button title='go back' onPress={() => navigation.goBack()} />
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

export default CategoryMeals