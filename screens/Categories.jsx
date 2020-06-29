import React from 'react'
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTitle from '../components/CategoryGridTitle'

const Categories = ({ navigation }) => {
    const renderGridItem = itemData => {
        return <>
            <CategoryGridTitle
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

Categories.navigationOptions = {
    headerTitle: 'Categories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Categories