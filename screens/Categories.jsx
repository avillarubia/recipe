import React from 'react'
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/dummy-data'
import CustomHeaderButton from '../components/CustomHeaderButton'
import CategoryGridTile from '../components/CategoryGridTile'

const Categories = ({ navigation }) => {
    const renderGridItem = itemData => {
        return <>
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            />
        </>
    }

    return <>
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    </>
}

Categories.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: <>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Menu'
                    iconName='ios-menu'
                    onPress={() => navData.navigation.toggleDrawer()}
                />
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

export default Categories