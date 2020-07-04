import React from 'react'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import MealList from './../components/MealList'

const CategoryMeals = ({ navigation }) => {
    const categoryId = navigation.getParam('categoryId')
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    )

    return <MealList listData={displayedMeals} navigation={navigation} />
}

CategoryMeals.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    return {
        headerTitle: selectedCategory.title
    }
}

export default CategoryMeals