import { Link, router } from 'expo-router'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image, SafeAreaView, StyleSheet, Text, Touchable, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Link href='/location' style={{marginRight: 10}}>
                <View>
                    <Image
                        source={require('@/assets/images/arrow_left.png')}
                        alt="go back"
                    />
                </View>
            </Link>
            <View>
                <Image
                    source={require('@/assets/images/user.png')}
                />
            </View>
            <TouchableOpacity style={[styles.header]}>
                <Text style={[styles.name, { fontFamily: 'NohemiBold' }]}>Cinefores Limited</Text>
                <Text style={styles.welcome}>Staff</Text>
            </TouchableOpacity>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
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
        paddingBottom: 10,
    },
    header: {
        marginLeft: 10,
        flexGrow: 1,
    },
    name: {
        // flexGrow: 1,
        color: '#252525',
        fontWeight: '700',
        fontSize: 16
    },
    welcome: {
        color: '#1B1B1B80',
        fontSize: 12,
    },
})

export default Header