import { Image, StyleSheet, Platform, SafeAreaView, Text, View } from 'react-native';
import { useEffect } from 'react';
import { Link, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: true })
    }, []);

    return (
        <SafeAreaView>
            <StatusBar />
            <Link style={{ fontFamily: 'NohemiRegular' }} href='/onboarding'>
                <View>
                    <Text style={styles.text}>Click to go to onboarding screen</Text>
                </View>
            </Link>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginTop: 50
    },
});
