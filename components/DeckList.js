import React from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import DeckItem from './DeckItem'
import { ActivityIndicator } from 'react-native-paper'

const DeckList = ({ loading, decks, navigation }) => {
    if (loading)
        return (
            <View style={styles.loading}>
                <Text>Loading...</Text>
                <ActivityIndicator />
            </View>
        )

    return (<FlatList
        data={Object.values(decks)}
        renderItem={({ item }) => <DeckItem navigation={navigation} deck={item} />}
        keyExtractor={item => item.title} />)
}

const styles = StyleSheet.create({

    loading: {
        alignSelf: 'center',
    }
})

const mapStateToProps = (state) => ({
    loading: state === null || state === undefined,
    decks: Object.values(state),
})

export default connect(mapStateToProps)(DeckList)