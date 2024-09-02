import { Image, StyleSheet, Platform, SafeAreaView, Text, View, ScrollView, ScrollViewBase, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { Link, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/location/Header'
import Adverts from '@/components/home/Adverts';
import { locations } from '@/constants/data';
import Invitation from '@/components/location/Invitation';
import Location from '@/components/location/Location';
import Member from '../location/Member';

const GroupContent = () => {
    const navigation = useNavigation();
    const [tab, setTab] = useState(1);

    useEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, []);

    return (
        <>
            <View
                style={[
                    styles.container,
                    {
                        flexDirection: 'column',
                    },
                ]}>
                <View style={[styles.bottom, { flex: 2 }]}>
                    <View style={styles.bottom_headers}>
                        <Text onPress={() => setTab(1)} style={[tab === 1 ? styles.headerBottom : {}, { color: `${tab === 1 ? '#FF7043' : '#808080'}`, fontWeight: '600', fontSize: 12, fontFamily: 'NohemiSemiBold' }]}>Location</Text>
                        <Text onPress={() => setTab(2)} style={[tab === 2 ? styles.headerBottom : {}, { color: `${tab === 2 ? '#FF7043' : '#808080'}`, fontWeight: '600', fontSize: 12, fontFamily: 'NohemiSemiBold' }]}>Membership</Text>
                        <Text onPress={() => setTab(3)} style={[tab === 3 ? styles.headerBottom : {}, { color: `${tab === 3 ? '#FF7043' : '#808080'}`, fontWeight: '600', fontSize: 12, fontFamily: 'NohemiSemiBold' }]}>Invitation</Text>
                    </View>
                    {tab === 1 && (
                      <Location />
                    )}
                    {tab === 2 && (
                      <Member />
                    )}

                    {tab === 3 && (
                        <>
                            <Invitation />
                        </>
                    )}

                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       paddingBottom: 90
    },
    headerBottom: {
        borderBottomWidth: 3,
        paddingBottom: 5,
        borderColor: '#FF7043'
    },
    group: {
        fontSize: 32,
        color: '#252525',
        fontWeight: '600'
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 20,
    },
    bottom: {
        backgroundColor: '#ffffff',
        borderTopRightRadius: 19,
        borderTopLeftRadius: 19,
        marginTop: 20,
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 40,
    },
    bottom_headers: {
        display: 'flex',

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottom_body: {
        marginTop: 35,
    },
    bottom_text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#16151880',
        marginTop: 20,
        paddingHorizontal: 20
    },
    locationContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    locationHeader: {
        marginLeft: 10,
        flexGrow: 1,
    },
    name: {
        flexGrow: 1,
        color: '#252525',
        fontWeight: '700',
        fontSize: 14
    },
    address: {
        color: '#1B1B1B80',
        fontSize: 12,
    },
});

export default GroupContent;
