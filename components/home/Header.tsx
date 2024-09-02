import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={[styles.headerContainer]}>
            <View>
                <Image
                    source={require('@/assets/images/user.png')}
                />
            </View>
            <View style={[styles.header]}>
                <Text style={[styles.name, { fontFamily: 'NohemiBold' }]}>Hi Chibueze Franklin</Text>
                <Text style={styles.welcome}>Welcome to Accesspal</Text>
            </View>
            <View>
                <Image
                    source={require('@/assets/images/notification.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        marginLeft: 20,
        flexGrow: 1,
    },
    name: {
        flexGrow: 1,
        color: '#252525',
        fontWeight: '700',
        fontSize: 20
    },
    welcome: {
        color: '#1B1B1B80',
        fontSize: 14,
    },
})

export default Header