import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useStackScreenWithSearchBar } from '@/components/ScreenWithSearchBar';
import FloatingPlayer from '@/components/FloatingPlayer';

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme].tint,
          tabBarButton: HapticTab,
          tabBarBackground: () => (
            <BlurView
              intensity={95}
              tint={colorScheme}
              style={styles.blurContainer}
            />
          ),
          tabBarStyle: {
            position: 'absolute',
            borderTopWidth: 0,
            backgroundColor: 'transparent',
            elevation: Platform.OS === 'android' ? 10 : 0,
            height: 78, // Consistent height
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            ...useStackScreenWithSearchBar,
            title: 'Songs',
            tabBarIcon: ({ color }) => (
              <Ionicons name="musical-notes" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            ...useStackScreenWithSearchBar,
            title: 'Favorites',
            tabBarIcon: ({ color }) => (
              <Ionicons name="heart" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="playlists"
          options={{
            ...useStackScreenWithSearchBar,
            title: 'Playlists',
            tabBarIcon: ({ color }) => (
              <Ionicons name="list" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="artists"
          options={{
            ...useStackScreenWithSearchBar,
            title: 'Artists',
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="users-line" size={20} color={color} />
            ),
          }}
        />
      </Tabs>
      
      {/* Floating Player - positioned above tab bar */}
      <FloatingPlayer 
        style={{
          position: 'absolute',
          bottom: 80,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});