import { useThemeColor } from '@/hooks/useThemeColor';
import { SearchBarProps } from 'react-native-screens';
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const defaultSearchOptions: SearchBarProps = {
    hideWhenScrolling: false,
};

export const useNavigationSearch = ({ searchBarOptions }: { searchBarOptions?: SearchBarProps }) => {
    const tintColor = useThemeColor({}, 'tint'); // Moved inside the hook
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    const handleOnChangeText: SearchBarProps['onChangeText'] = ({ nativeEvent: { text } }) => {
        setSearch(text);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                ...defaultSearchOptions,
                ...searchBarOptions,
                tintColor: tintColor, // Using the tintColor from the hook
                onChangeText: handleOnChangeText,
            },
        });
    }, [navigation, searchBarOptions, handleOnChangeText, tintColor]);

    return search;
};