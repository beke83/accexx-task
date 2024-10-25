import Toggle from '@/components/toggle/Toggle';
import { Link, router, useNavigation } from 'expo-router'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Dimensions, Image, Pressable, SafeAreaView, ScrollView, ScrollViewBase, StatusBar, StatusBarStyle, StyleSheet, Text, TextInput, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import style from '@/app/styles/styles'

export default function NewLocationForm() {
    const navigation = useNavigation();
    const [selectGuest, setSelectGuest] = useState(false);
    const [selectPrivate, setSelectPrivate] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>('dark-content');
    useEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, []);

    return (
        <KeyboardAwareScrollView>
            <StatusBar barStyle={statusBarStyle} />
            <View>
                <View
                    style={[
                        styles.container,
                    ]}>
                    <Link href='/location'>
                        <View>
                            <Image
                                source={require('@/assets/images/arrow_left.png')}
                                alt="go back"
                            />
                        </View>
                    </Link>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontWeight: 700, color: '#000000', fontSize: 21, marginBottom: 10 }}>Location Details</Text>
                            <Text style={{ fontWeight: 500, color: '#82808F', fontSize: 14 }}>Add a location by entering your details</Text>
                        </View>
                        <View style={styles.formContainer}>
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ position: 'relative' }} source={require('@/assets/images/location-image.png')} alt="user photo" />
                                <Image style={{ position: 'absolute', bottom: -5, }} source={require('@/assets/images/select-image-icon.png')} alt="select photo" />
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <View>
                                    <Text style={styles.label}>Location Name</Text>
                                    <TextInput style={styles.input} placeholder='E.g: John Doe' placeholderTextColor="#999" />
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={styles.label}>Location Description</Text>
                                    <TextInput
                                        style={styles.textArea}
                                        multiline={true}
                                        numberOfLines={4}
                                        placeholder="Type your comments here..."
                                        placeholderTextColor="#D0D0D5"
                                    />
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={styles.label}>Set Code Expiration Day (optional)</Text>
                                    <RNPickerSelect
                                        onValueChange={value => value}
                                        items={[
                                            { label: '24 hours', value: '24' },
                                            { label: '48 hours', value: '48' },
                                            { label: '72 hours', value: '72' },
                                        ]}
                                        style={pickerSelectStyles}
                                    />
                                </View>
                                <View style={{ marginTop: 40 }}>
                                    <Text style={styles.label}>Location Settings</Text>
                                    <View style={styles.settings}>
                                        <View>
                                            <Text style={[styles.settingsTitle, { fontWeight: 700, }]}>Guest</Text>
                                            <Text style={[styles.settingsSubTitle, { fontWeight: 500 }]}>Guest must be verified with their photo</Text>
                                        </View>
                                        <View>
                                            <Toggle
                                                choice={selectGuest}
                                                setter={(selectGuest: any) => setSelectGuest(selectGuest)}
                                                id={1}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.settings}>
                                        <View>
                                            <Text style={[styles.settingsTitle, { fontWeight: 700, }]}>Private</Text>
                                            <Text style={[styles.settingsSubTitle, { fontWeight: 500 }]}>Only those you invite can join</Text>
                                        </View>
                                        <View>
                                            <Toggle
                                                choice={selectPrivate}
                                                setter={(selectPrivate: any) => setSelectPrivate(selectPrivate)}
                                                id={1}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 20, marginBottom: 40 }}>
                                        <Pressable style={style.button} onPress={() => router.push('/location')}>
                                            <Text style={{ color: 'white', fontWeight: 700 }}>Create Location</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 12,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        backgroundColor: '#FBFBFC',
        borderRadius: 8,
        color: '##D0D0D5',
        paddingRight: 30,
        marginTop: 10,
    },
    inputAndroid: {
        marginTop: 10,
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#F0F0F0',
        backgroundColor: '#FBFBFC',
        borderRadius: 8,
        color: '#D0D0D5',
        paddingRight: 30,
    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        // paddingBottom: 40,
        
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
    },
    formContainer: {
        flex: 1,
        marginTop: 40,
    },
    label: {
        fontSize: 12.4,
        fontWeight: '500',
        color: '#82808F',
    },
    input: {
        borderRadius: 8,
        width: '100%',
        height: 45,
        paddingLeft: 12,
        paddingVertical: 12,
        borderWidth: 1,
        color: '#D0D0D5',
        borderColor: '#F0F0F0',
        backgroundColor: '#FBFBFC',
        fontWeight: '500',
        fontSize: 12,
        marginTop: 10,
    },
    textArea: {
        height: 100, // Set the height of the text area
        borderColor: '#F0F0F0',
        borderWidth: 1,
        backgroundColor: '#FBFBFC',
        borderRadius: 8,
        padding: 10,
        textAlignVertical: 'top',// Align text to the top
        fontSize: 12,
        marginTop: 10,
        color: '#D0D0D5',
    },
    settings: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    settingsTitle: {
        color: '#2B2A30',
        fontSize: 14,
    },
    settingsSubTitle: {
        color: '#878787',
        fontSize: 12,
        flexWrap: 'wrap',
        marginTop: 5,
    },
})

