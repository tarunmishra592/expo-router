import { Tabs } from "expo-router";

import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function TabLayout(){
    return <Tabs screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: true,
        headerTitle: 'My App',
        tabBarActiveTintColor: '#22d3ee',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle:{
            backgroundColor: '#0f172a'
        },
        headerTintColor: '#0f172a'
    }}>
        <Tabs.Screen name="index" options={{
            tabBarLabel: 'Home',
            title: 'Home',
            tabBarIcon: ({color}) => (
                <FontAwesome name="home" color={color} size={24}  />
            )
        }} />
        <Tabs.Screen name="explore" options={{
            tabBarLabel: 'Explore',
            title: 'Explore',
            tabBarIcon: ({color}) => (
                <FontAwesome name="search" color={color} size={24}  />
            )
        }} />
        <Tabs.Screen name="profile" options={{
            tabBarLabel: 'My Profile',
            title: 'Profile',
            tabBarIcon: ({color}) => (
                <FontAwesome name="user" color={color} size={24}  />
            ),
            tabBarBadge: 3
        }} />
    </Tabs>
}