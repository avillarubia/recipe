import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMeals = ({ navigation }) => {
    const categoryId = navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    return <>
        <View style={styles.screen}>
            <Text>The CategoryMeals Screen</Text>
            <Text>{selectedCategory.title}</Text>
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