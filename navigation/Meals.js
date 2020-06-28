import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Categories from '../screens/Categories'
import CategoryMeals from '../screens/CategoryMeals'
import MealDetails from '../screens/MealDetails'

const Meals = createStackNavigator({
    Categories,
    CategoryMeals: {
        screen: CategoryMeals
    },
    MealDetails
})

export default createAppContainer(Meals)