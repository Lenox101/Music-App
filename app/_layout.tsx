import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import 'react-native-reanimated';
import '@/global.css';
import { SplashScreen } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemeColor } from '@/hooks/useThemeColor';
import useSetupTrackPlayer from '@/hooks/useSetupTrackPlayer';
import { useCallback } from 'react';
import { useLogTrackPlayerState } from '@/hooks/useLogTrackPlayerState';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  useLogTrackPlayerState();
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, [])

  useSetupTrackPlayer({
    onLoad: handleTrackPlayerLoaded,
  });

  useLogTrackPlayerState();

  const colorScheme = useColorScheme();
  const backgroundGradientColors = useThemeColor({}, 'background') as any;

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const baseTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  const navigationTheme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
    },
  };

  if (!loaded) {
    return null;
  }

  return (
    // 👇 3. Pass our new custom theme to the ThemeProvider
    <ThemeProvider value={navigationTheme}>
      <LinearGradient
        colors={backgroundGradientColors}
        className="flex-1"
        style={{ paddingBottom: Platform.OS === 'ios' ? 20 : 0 }}
      >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </LinearGradient>
    </ThemeProvider>
  );
}
