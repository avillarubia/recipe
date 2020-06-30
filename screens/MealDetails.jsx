import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CustomHeaderButton from './../components/CustomHeaderButton'

import { MEALS } from '../data/dummy-data'

const MealDetails = ({ navigation }) => {
    const mealId = navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return <>
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title='Go to root screen' onPress={() => navigation.popToTop()} />
        </View>
    </>
}

MealDetails.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: selectedMeal.title,
        headerRight: <>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Favorite' iconName='ios-star' onPress={() => console.log('Mark as fav')} />
            </HeaderButtons>
        </>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetails