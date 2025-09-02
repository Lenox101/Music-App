/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';   //useColorScheme(): A custom hook that returns the current theme ('light' or 'dark').



// Overload for background colors that return arrays
export function useThemeColor(
  props: { light?: readonly string[]; dark?: readonly string[] },
  colorName: 'background'
): readonly string[];
// Overload for other colors that return strings
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: Exclude<keyof typeof Colors.light & keyof typeof Colors.dark, 'background'>
): string;
// Implementation
export function useThemeColor(
  props: { light?: string | readonly string[]; dark?: string | readonly string[] },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
