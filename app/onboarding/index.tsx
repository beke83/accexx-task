import { useNavigation, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function OnboardingScreen() {
    const navigation = useNavigation();
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0)

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);


    const circleLinks = [
        {
            id: 1,
            name: "Estate",
        },
        {
            id: 2,
            name: "Assets",
        },
        {
            id: 3,
            name: "Guest",
        },
    ]

    const goForward = () => {
        if (currentStep === 2) {
            const step = 0
            setCurrentStep(step);
            router.push('/home')
        }
        else {
            const step = currentStep + 1;
            setCurrentStep(step);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ marginBottom: 25 }}>
                <StatusBar style='light' />
                {currentStep === 0 && (
                    <View>
                        <Image
                            style={styles.onboardingImage}
                            source={require('@/assets/images/onboarding-one.png')}
                        />
                        <View style={styles.titleContainer}>
                            <Text style={{ fontFamily: 'NohemiSemiBold', fontSize: 24, lineHeight: 33 }}>Keep your estate secured</Text>
                            <Text style={{ fontFamily: 'NohemiRegular', color: '#82808F', fontSize: 14, lineHeight: 20, textAlign: 'center', marginTop: 16 }}>Secure your estate with a secured mobile platform</Text>
                        </View>
                    </View>
                )}
                {currentStep === 1 && (
                    <View>
                        <Image
                            style={styles.onboardingImage}
                            source={require('@/assets/images/onboarding-two.png')}
                        />
                        <View style={styles.titleContainer}>
                            <Text style={{ fontFamily: 'NohemiSemiBold', fontSize: 24, lineHeight: 33 }}>Have your assets safe</Text>
                            <Text style={{ fontFamily: 'NohemiRegular', color: '#82808F', fontSize: 14, lineHeight: 20, textAlign: 'center', marginTop: 16 }}>Have your belongings safe and secured</Text>
                        </View>
                    </View>
                )}
                {currentStep === 2 && (
                    <View>
                        <Image
                            style={styles.onboardingImage}
                            source={require('@/assets/images/onboarding-three.png')}
                        />
                        <View style={styles.titleContainer}>
                            <Text style={{ fontFamily: 'NohemiSemiBold', fontSize: 24, lineHeight: 33 }}>Keep track of your guests</Text>
                            <Text style={{ fontFamily: 'NohemiRegular', color: '#82808F', fontSize: 14, lineHeight: 20, textAlign: 'center', marginTop: 16 }}>Track guests at every point, from entry to arrival</Text>
                        </View>
                    </View>
                )}


                <View style={styles.roundedIconContainer}>
                    {circleLinks.map((icons, index) => (
                        <View key={index}
                            style={[styles.roundedIcon, currentStep === index ? { backgroundColor: '#242450' } : { backgroundColor: '#82808F' }]}
                        />
                    ))}
                </View>


                <View style={{ display: 'flex', justifyContent: 'center', paddingHorizontal: 20, marginTop: 60 }}>
                    <Pressable style={styles.button} onPress={goForward}>
                        <Text style={{ color: 'white', fontFamily: 'NohemiRegular' }}>Next</Text>
                    </Pressable>
                    <Text onPress={() => router.push('/home')} style={{ textAlign: 'center', fontFamily: 'NohemiSemiBold', color: '#FF8C61', marginTop: 20 }}>Skip</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
    },
    onboardingImage: {
        maxHeight: 390,
        width: '100%',
        objectFit: 'cover',
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25,
        paddingHorizontal: 5,
        // borderWidth: 5
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'light',
        lineHeight: 20,
        textAlign: 'center',
        marginTop: 15,
    },
    roundedIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 20
    },
    roundedIcon: {
        width: 8.32,
        height: 8.32,
        borderRadius: 99
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#242450',
        paddingVertical: 20,

    },
});


