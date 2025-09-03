//@ts-nocheck
import { unknownTrackImageUri } from "@/constants/images";
import { TouchableHighlight, View, Image, Text } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';
import { Track, useActiveTrack, useIsPlaying } from "react-native-track-player";
import { Entypo, Ionicons } from "@expo/vector-icons";

// Import the new platform-specific component
import { PlatformLoader } from './PlatformLoader'; // Adjust path if needed

export type ListItemProps = {
    track: Track;
    onTrackSelect: (track: Track) => void;
}

export const ListItem = ({ track, onTrackSelect: handleTrackSelect }: ListItemProps) => {
    const isActiveTrack = useActiveTrack()?.url === track.url;
    const { playing } = useIsPlaying();

    const textColor = useThemeColor({}, 'text');
    const mutedTextColor = useThemeColor({}, 'textMuted');

    return (
        <TouchableHighlight onPress={() => handleTrackSelect(track)} underlayColor="rgba(0,0,0,0.1)">
            <View className="flex-row items-center gap-x-3.5 px-4 py-2">
                <View className="relative h-[50px] w-[50px] items-center justify-center">
                    <Image
                        source={{ uri: track.image ?? unknownTrackImageUri }}
                        className={`h-full w-full rounded-lg ${
                            isActiveTrack ? 'opacity-60' : 'opacity-100'
                        }`}
                    />
                    {isActiveTrack && (
                        <View className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40">
                            {playing ? (
                                <PlatformLoader />
                            ) : (
                                <Ionicons name="play" size={24} color="#fff" />
                            )}
                        </View>
                    )}
                </View>

                <View className="flex-1">
                    <Text
                        numberOfLines={1}
                        className={`text-sm max-w-[90%] ${
                            isActiveTrack ? 'font-semibold' : 'font-normal'
                        }`}
                        style={{ color: isActiveTrack ? textColor : mutedTextColor }}
                    >
                        {track.title}
                    </Text>
                    {track.artist && (
                        <Text
                            className="mt-1 text-xs"
                            style={{ color: mutedTextColor }}
                        >
                            {track.artist}
                        </Text>
                    )}
                </View>

                <Entypo name="dots-three-horizontal" size={18} color={mutedTextColor} />
            </View>
        </TouchableHighlight>
    );
}