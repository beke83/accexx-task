import { Image, StyleSheet, Platform, SafeAreaView, Text, View, ScrollView, ScrollViewBase, Dimensions, Pressable, Animated, PanResponder } from 'react-native';
import { useEffect, useState } from 'react';
import { Link, router, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/location/Header'
import Adverts from '@/components/home/Adverts';
import { locations } from '@/constants/data';
import Invitation from '@/components/location/Invitation';
import Location from '@/components/location/Location';
import Member from '@/components/location/Member';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import Check from '@/components/check/Check';
import style from '../styles/styles'


export default function Groups() {
    const navigation = useNavigation();
    const { height: screenHeight } = Dimensions.get('window');
    const [tab, setTab] = useState(1);
    const [showAddLocation, setShowAddLocation] = useState(false);
    const [selectedType, setSelectedType] = useState(false);


    useEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, []);

    const translateY = new Animated.Value(0);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      if (gestureState.dy > 0) {
        translateY.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (event, gestureState) => {
      if (gestureState.dy > 150) {
        Animated.timing(translateY, {
          toValue: 500, // slide off screen
          duration: 300,
          useNativeDriver: true,
        }).start(() => setShowAddLocation(false));
      } else {
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

    return (
        <>
            <View
                style={[
                    styles.container,
                    {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: 'column',
                        borderColor: '#000'
                    },
                ]}>
                <View style={{ paddingHorizontal: 16}}>
                    <Header />
                </View>
                <View style={{ paddingHorizontal: 16, marginTop: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Text style={[styles.group, { fontFamily: 'NohemiBold' }]}>Group</Text>
                    <View style={{ backgroundColor: '#ffffff', width: 27, height: 27, borderRadius: 99, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: '500', fontFamily: 'NohemiSemiBold' }}>{locations.length || 0}</Text>
                    </View>
                </View>
                <View style={[styles.bottom, { flex: 1 }]}>
                    <View style={styles.bottom_headers}>
                        <Text onPress={() => setTab(1)} style={[tab === 1 ? styles.headerBottom : {}, { color: `${tab === 1 ? '#FF7043' : '#808080'}`, fontWeight: '600', fontSize: 12, fontFamily: 'NohemiSemiBold' }]}>Location</Text>
                        <Text onPress={() => setTab(2)} style={[tab === 2 ? styles.headerBottom : {}, { color: `${tab === 2 ? '#FF7043' : '#808080'}`, fontWeight: '600', fontSize: 12, fontFamily: 'NohemiSemiBold' }]}>Membership</Text>
                        <Text onPress={() => setTab(3)} style={[tab === 3 ? styles.headerBottom : {}, { color: `${tab === 3 ? '#FF7043' : '#808080'}`, fontWeight: '600', fontSize: 12, fontFamily: 'NohemiSemiBold' }]}>Invitation</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ position: 'relative' }}>
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
                    </ScrollView>
                    <Pressable onPress={() => setShowAddLocation(true)} style={{ position: 'absolute', right: 30, bottom: 60 }}>
                        <View>
                            <Image
                                source={require('@/assets/images/add-group.png')}
                            />
                        </View>
                    </Pressable>

                </View>
            </View>
            {showAddLocation && (
                <>
                    <View style={styles.backdrop}></View>
                    <Animated.View 
                      {...panResponder.panHandlers}
                    style={[styles.selectOptions, {height: 'auto',  transform: [{ translateY: translateY }]}]}>
                        <View style={styles.closeRect}></View>
                        <View style={styles.optionsHeader}>
                            <Text style={[styles.select, { fontFamily: 'Inter' }]}>Select Options</Text>
                            <Pressable onPress={() => setShowAddLocation(false)} style={styles.close}>
                                <Text style={styles.closeBox}>X</Text>
                            </Pressable>
                        </View>
                        <View style={styles.optionsContainer}>
                            <Text style={{ color: '#82808F', fontWeight: 500 }}>Location Type</Text>
                            <View style={styles.types}>
                                <View style={styles.typesOptions}>
                                    <Text style={[styles.optionsValue, { fontWeight: 500 }]}>Estate</Text>
                                    <Check
                                        choice={selectedType}
                                        id={0}
                                        setter={(selectedType: any, index: any) => setSelectedType(selectedType)}
                                    />
                                </View>
                                <View style={styles.typesOptions}>
                                    <Text style={[styles.optionsValue, { fontWeight: 500 }]}>School</Text>
                                    <Check
                                        choice={selectedType}
                                        id={1}
                                        setter={(selectedType: any, index: any) => setSelectedType(selectedType)}
                                    />
                                </View>
                                <View style={styles.typesOptions}>
                                    <Text style={[styles.optionsValue, { fontWeight: 500 }]}>Office</Text>
                                    <Check
                                        choice={selectedType}
                                        id={2}
                                        setter={(selectedType: any, index: any) => setSelectedType(selectedType)}
                                    />
                                </View>
                                <View style={styles.typesOptions}>
                                    <Text style={[styles.optionsValue, { fontWeight: 500 }]}>Hotel</Text>
                                    <Check
                                        choice={selectedType}
                                        id={2}
                                        setter={(selectedType: any, index: any) => setSelectedType(selectedType)}
                                    />
                                </View>
                            </View>
                            <View style={{marginTop: 20, marginBottom: 40}}>
                                <Pressable style={style.button} onPress={() => router.push('/location/new-location')}>
                                    <Text style={{ color: 'white', fontWeight: 700 }}>Create Location</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Animated.View>
                </>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 60 : 40,
        height: "100%"
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
    selectOptions: {
        position: 'relative',
        bottom: 0,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        zIndex: 99,
    },
    backdrop: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        zIndex: 9,
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',

    },
    closeRect: {
        width: 62.4,
        height: 4.16,
        marginTop: 10,
        backgroundColor: 'rgba(230, 230, 230, 1)',
        alignSelf: 'center',
        borderRadius: 14,
    },
    optionsHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16
    },
    select: {
        fontSize: 18.72,
        fontWeight: 600,
        color: '#161518',
    },
    close: {
        justifyContent: 'center', // Centers text vertically within the box
        alignItems: 'center',
        borderRadius: 10,
        width: 33.28,
        height: 33.28,
        borderWidth: 1,
        borderColor: '#C0C1CE80',

    },
    closeBox: {
        color: '#2B2A30',
        fontSize: 15,
    },
    optionsContainer: {
        paddingHorizontal: 16
    },
    types: {
        marginTop: 10
    },
    typesOptions: {
        width: '100%',
        // height: 40,
        backgroundColor: '#FBFBFC',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    optionsValue: {
        color: '#2B2A30',
        fontSize: 14,
        fontWeight: 500,
    }

});
