import { locations } from '@/constants/data';
import { Link } from 'expo-router';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import CreateGroup from '../group/CreateGroup';

const Location = () => {
    return (
        <View>
            {locations.length === 0 ? (
                <>
                    <View style={[styles.bottom_body, styles.center]}>
                        <Image
                            source={require('@/assets/images/finding_art.png')}
                        />
                        <View>
                            <Text style={[styles.bottom_text, { fontFamily: 'InterMedium' }]}>You are have not been invited into any location yet</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'flex-end', marginTop: 20 }}>
                        <Image
                            source={require('@/assets/images/add-group.png')}
                        />
                    </View>
                </>
            ) : (
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 500, fontFamily: 'InterRegular', color: '#808080', marginTop: 10 }}>Pinned</Text>
                        </View>
                        {locations.filter((location) => location.typeof === 'pinned').map((item, index) => (
                            <View key={index} style={styles.locationContainer}>
                                <View>
                                    {item.imgUrl === '' ? (
                                        <View style={{ backgroundColor: '#E4E9FF', width: 38, height: 38, borderRadius: 99, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: '#4A6DFF', fontWeight: '700' }}>{item.name[0]}{item.subName[0]}</Text>
                                        </View>
                                    ) : (
                                        <Image
                                            source={require('../../assets/images/rivella.png')}
                                        />
                                    )}
                                </View>
                                <View style={[styles.locationHeader]}>
                                    <Text style={[styles.name, { fontFamily: 'NohemiBold' }]}>{item.name}{" "} {item.subName}</Text>
                                    <Text style={styles.address}>{item.address}</Text>
                                </View>
                                <View>
                                    <Text style={[styles.address, { fontWeight: '700' }]}>{item.type}</Text>
                                </View>
                            </View>
                        ))}
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 500, fontFamily: 'InterRegular', color: '#808080', marginTop: 10 }}>All</Text>
                        </View>
                        {locations.filter((location) => location.typeof === 'all').map((item, index) => (
                            <View key={index} style={styles.locationContainer}>
                                <View>
                                    {item.imgUrl === '' ? (
                                        <View style={{ backgroundColor: '#E4E9FF', width: 38, height: 38, borderRadius: 99, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: '#4A6DFF', fontWeight: '700' }}>{item.name[0]}{item.subName[0]}</Text>
                                        </View>
                                    ) : (
                                        <Image
                                            source={require('../../assets/images/rivella.png')}
                                        />
                                    )}
                                </View>
                                <View style={[styles.locationHeader]}>
                                    <Text style={[styles.name, { fontFamily: 'NohemiBold' }]}>{item.name}{" "}{item.subName}</Text>
                                    <Text style={styles.address}>{item.address}</Text>
                                </View>
                                <View>
                                    <Text style={[styles.address, { fontWeight: '700' }]}>{item.type}</Text>
                                </View>
                            </View>
                        ))}
                        <Link href='/location' style={{ alignSelf: 'flex-end', marginTop: 20, position: 'absolute', right: 20, bottom: 35 }}>
                            <View>
                                <Image
                                    source={require('@/assets/images/add-group.png')}
                                />
                            </View>
                        </Link>
                    </ScrollView>
                </View>
            )}
            {/* <CreateGroup /> */}
        </View>
    )
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

export default Location