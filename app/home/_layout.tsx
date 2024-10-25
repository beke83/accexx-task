import React, { useEffect } from 'react';
import { Stack, useNavigation } from 'expo-router';

export default function HomeLayout() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, []);

    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
            <Stack.Screen name="location" options={{ title: 'Single Location' }} />
        </Stack>
    );
}