import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Adverts = ({color}: any) => {
    const router = useRouter()
    return (
        <>
            <View style={[styles.advertContainer, {backgroundColor: color}]}>
                <Text style={[styles.title, {fontFamily: 'NohemiBold'}]}>Announcement</Text>
                <Text style={[styles.subtitle, {fontFamily: 'NohemiRegular', marginTop: 20}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <View style={styles.line} />
                <Pressable style={styles.button}>
                   <Text style={{textAlign: 'center', color: color, fontSize: 12, fontWeight: '600', fontFamily: 'NohemiBold'}}>Learn more</Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    advertContainer: {
        borderRadius: 7,
        width: 276,
        height: 185,
        padding: 16,
        marginTop: 10,
    },
    title:{
        fontSize: 14,
        fontWeight: '600',
        color: '#ffffff'
    },
    subtitle: {
        fontSize: 11,
        fontWeight: '500',
        color: '#ffffff',
        lineHeight: 18,
    },
    line: {
        height: 1,
        backgroundColor: '#BFBDBD',
        marginTop: 20
    },
    button:{
        backgroundColor: '#ffffff',
        paddingVertical: 12,
        color: '#FF7043',
        borderRadius: 6,
        marginTop: 20
    }
})

export default Adverts