//@ts-nocheck
import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemeColor } from '@/hooks/useThemeColor';

const Playlists = () => {
  const backgroundGradientColors = useThemeColor({}, 'background') as string[];

  return (
    <LinearGradient colors={backgroundGradientColors} className="flex-1 justify-center items-center">
      <View>
        <Text className="text-white">Playlist</Text>
      </View>
    </LinearGradient>
  );
};

export default Playlists;