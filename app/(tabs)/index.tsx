//@ts-nocheck
import { ScrollView } from 'react-native';
import { TrackList } from '@/components/TrackList';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import library from '@/data/library.json';
import { useMemo } from 'react';
import { trackTitleFilter } from '@/helpers/filter';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemeColor } from '@/hooks/useThemeColor';

const SongsScreen = () => {
  const backgroundGradientColors = useThemeColor({}, 'background') as string[];
  
  // Ensure this hook is always called unconditionally
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Search songs',
    },
  });

  const filteredLibrary = useMemo(() => {
    if (!search) {
      return library; // Return the full library if no search term is provided
    }

    return library.filter(trackTitleFilter(search))
  }, [search]);

  return (
    <LinearGradient colors={backgroundGradientColors} className="flex-1">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }} // Adjust this value as needed
      >
        <TrackList tracks={filteredLibrary} scrollEnabled={false} />
      </ScrollView>
    </LinearGradient>
  );
};

export default SongsScreen;