//@ts-nocheck
import { FlatList, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function FavoritesScreen() {
  const backgroundGradientColors = useThemeColor({}, 'background') as string[];

  const favoritesData = [
    { id: '1', title: 'Guess I\'ll Never Know', artist: 'TrackTribe' },
  ];

  return (
    <LinearGradient colors={backgroundGradientColors} className="flex-1">
      <FlatList
        data={favoritesData}
        renderItem={({ item }) => <Text className="text-white p-2.5">{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
      
    </LinearGradient>
  );
}