import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CreateGroup = () => {
    return (
        <View style={styles.main}>
            <Text>CreateGroup</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'red',
        position: 'absolute',
        bottom: -60,
        padding: 20,
        width: '100%',
        height: '80%',
    }
})

export default CreateGroup