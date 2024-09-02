import { Image, StyleSheet, Platform, SafeAreaView, Text, View, ScrollView, ScrollViewBase, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { Link, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/location/Header'
import Adverts from '@/components/home/Adverts';
import { locations } from '@/constants/data';
import Invitation from '@/components/location/Invitation';
import Location from '@/components/location/Location';
import GroupContent from './GroupContent';

const Group = () => {
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
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: 'column',
                    },
                ]}>
                <View style={{ paddingHorizontal: 16 }}>
                    <Header />
                </View>
                <GroupContent />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
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
        // marginTop: 20,
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

export default Group;
