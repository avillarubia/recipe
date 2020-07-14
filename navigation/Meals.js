import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Categories from '../screens/Categories'
import CategoryMeals from '../screens/CategoryMeals'
import MealDetails from '../screens/MealDetails'
import Favorites from '../screens/Favorites'
import Filter from '../screens/Filter'
import Colors from '../constants/colors'

const defaultStackNavOptions = {}

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
    defaultNavigationOptions: defaultStackNavOptions
})

const FavStack = createStackNavigator({
    Favorites,
    MealDetails
}, {
    // mode: 'modal', //can see difference on iphone
    // initialRouteName: 'MealDetails',
    defaultNavigationOptions: defaultStackNavOptions
})

const tabScreenConfig = {
    Meals: {
        screen: Meals,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                    name='ios-restaurant'
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavStack,
        navigationOptions: {
            tabBarLabel: 'Favorites!', //overriding the label name
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                    name='ios-star'
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: Colors.accentColor
        }
    }
}

const MealsFavTab =
    Platform.OS === 'android' ?
        createMaterialBottomTabNavigator( //this is for android
            tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true, //zoom effect of menu when clicked
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        }) :
        createBottomTabNavigator(
            tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: Colors.accentColor
            }
        })

const FiltersNav = createStackNavigator({
    Filter
}, {
    // navigationOptions: {
    //     drawerLabel: 'Filter!!!'
    // },
    defaultNavigationOptions: defaultStackNavOptions
})

const MainNav = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTab,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNav
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNav)