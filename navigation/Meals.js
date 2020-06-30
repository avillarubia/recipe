import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

import Categories from '../screens/Categories'
import CategoryMeals from '../screens/CategoryMeals'
import MealDetails from '../screens/MealDetails'
import Favorites from '../screens/Favorites'
import Colors from '../constants/colors'

const Meals = createStackNavigator({
    Categories: {
        screen: Categories,
        // navigationOptions: {
        //     headerTitle: 'Categories',
        //     // headerStyle: {
        //     //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        //     // },
        //     // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        // }
    },
    CategoryMeals: {
        screen: CategoryMeals
    },
    MealDetails
}, {
    // mode: 'modal', //can see difference on iphone
    // initialRouteName: 'MealDetails',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitle: 'A Screen'
    }
})

const MealsFavTab = createBottomTabNavigator({
    Meals,
    Favorites
})

export default createAppContainer(MealsFavTab)