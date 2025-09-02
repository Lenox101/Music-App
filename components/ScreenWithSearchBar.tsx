import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useThemeColor } from '@/hooks/useThemeColor';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

export const useStackScreenWithSearchBar = (): NativeStackNavigationOptions => {
  const textColor = useThemeColor({}, 'text');
  const backgroundGradientColors = useThemeColor({}, 'background') as any;
  
  return {
    headerLargeTitle: true,
    headerBackground: () => (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={backgroundGradientColors}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      </View>
    ),
    headerLargeTitleStyle: {
      color: textColor,
    },
    headerTintColor: textColor,
    headerTransparent: false,
    headerBlurEffect: undefined, // Remove blur effect to see gradient clearly
    headerShadowVisible: false,
  };
};