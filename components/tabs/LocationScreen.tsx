import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StatusBarStyle, StyleSheet, Text, Platform } from 'react-native';
import { View } from 'react-native';
import Header from './Header';
import Adverts from '../home/Adverts';
import { ScrollView } from 'react-native';
import Register from './Register';
import Svg, { Path } from 'react-native-svg';
import { recentVisits } from '@/constants/data';


export default function LocationScreen() {
    const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>('dark-content');
    return (
        <View style={[styles.container]}>
            <StatusBar barStyle={statusBarStyle} />
            <View>
                <View>
                    <Header />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ height: '100%' }}>
                    <View style={{ marginTop: 20 }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <Register />
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: 25, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 700, color: '#242450', fontFamily: 'NohemiBold' }}>Upcoming Visitors</Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#82808F', fontFamily: 'NohemiRegular' }}>Upcoming Events</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <View style={styles.upcomingEvents}>
                            <View style={{ width: 40, height: 40, backgroundColor: '#FFFFFF', borderRadius: 99, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                                    <Path d="M21.8228 7.97334L15.8324 3.78214C14.1996 2.63814 11.6932 2.70054 10.1228 3.91734L4.91238 7.98374C3.87238 8.79494 3.05078 10.4589 3.05078 11.7693V18.9453C3.05078 21.5973 5.20358 23.7605 7.85558 23.7605H19.0668C21.7188 23.7605 23.8716 21.6077 23.8716 18.9557V11.9045C23.8716 10.5005 22.9668 8.77414 21.8228 7.97334ZM14.2412 19.6005C14.2412 20.0269 13.8876 20.3805 13.4612 20.3805C13.0348 20.3805 12.6812 20.0269 12.6812 19.6005V16.4805C12.6812 16.0541 13.0348 15.7005 13.4612 15.7005C13.8876 15.7005 14.2412 16.0541 14.2412 16.4805V19.6005Z" fill="#242450" />
                                </Svg>
                            </View>
                            <View style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#FFFFFF1A', width: '100%', }}>
                                <Text style={[styles.eventTitle, { fontWeight: 700 }]}>Leera Gabriel Chukwu</Text>
                                <Text style={[styles.eventDate, { fontWeight: 600, marginBottom: 20 }]}>21 Apr, 2023 | 4:00PM</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View>
                                    <Text style={styles.eventOther}>Due Date</Text>
                                    <Text style={[styles.eventCode, { fontWeight: 600 }]}>30 Apr, 2023</Text>
                                </View>
                                <View>
                                    <Text style={styles.eventOther}>Access Code</Text>
                                    <Text style={[styles.eventCode, { fontWeight: 600 }]}>TY567890-09</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontWeight: 700, fontFamily: 'NohemiBold', fontSize: 16 }}>Recent Visits</Text>
                        {recentVisits.map((activity) => {
                            return (
                                <View style={{ marginTop: 15, }}>
                                    <Text style={{ fontWeight: 500, fontSize: 14, marginBottom: 15 }}>{activity.date}</Text>
                                    {activity.visits.map((visit) => (
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', marginBottom: 10 }}>
                                                <View style={styles.initials}>
                                                    <Text style={[styles.initialText, { fontWeight: 600 }]}>{visit.name[0]}D</Text>
                                                </View>
                                                <Text style={{ fontSize: 14, fontWeight: 600, color: '#878787' }}>{visit.name}</Text>
                                            </View>
                                            <Text style={{ fontSize: 12, fontWeight: 500, color: '#878787' }}>{visit.time}</Text>
                                        </View>
                                    ))}
                                </View>
                            )
                        })}

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: Platform.OS === 'ios' ? 55 : 40,
        backgroundColor: '#ffffff',
        paddingBottom: 50
    },
    advertContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 15
    },
    upcomingEvents: {
        borderRadius: 16,
        backgroundColor: '#242450',
        padding: 24
    },
    eventTitle: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    eventDate: {
        color: '#FFFFFF',
        fontSize: 13,
        marginTop: 5
    },
    eventOther: {
        color: '#FFFFFF',
        fontSize: 12
    },
    eventCode: {
        color: '#FFFFFF',
        fontSize: 15,
        marginTop: 5,
    },
    initials: {
        backgroundColor: '#F8F8F8',
        width: 40.73,
        height: 40.73,
        borderRadius: 99,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'
    },
    initialText: {
        color: '#FF8C61',
        fontSize: 15.5,
    }
})