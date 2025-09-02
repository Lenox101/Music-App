/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    textMuted: '#687076', // Added muted text color for light mode
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    background: ['#ffffff', '#f0f0f0'],
    cardBackground: 'rgba(255, 255, 255, 0.7)',
    primary: '#007AFF',
    gradient: ['#ffffff', '#f7f9fb']
  },
  dark: {
    text: '#ECEDEE',
    textMuted: '#9BA1A6', // Added muted text color for dark mode
    background: ['#1c3a5e', '#0a192f'],
    cardBackground: 'rgba(30, 30, 30, 0.4)',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    primary: '#0A84FF',
    gradient: ['#1c3a5e', '#0a192f']
  },
};

