import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from '../constants/colors'

const CategoryMeals = ({ navigation }) => {
    const renderMealItem = itemData => {
        return <>
            <View>
                <Text>
                    {itemData.item.title}
                </Text>
            </View>
        </>
    }

    const categoryId = navigation.getParam('categoryId')

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    return <>
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    </>
}

CategoryMeals.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMeals