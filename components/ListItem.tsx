import { unknownTrackImageUri } from "@/constants/images";
import { TouchableHighlight, View, Image, Text, StyleSheet } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';
import { Track, useActiveTrack } from "react-native-track-player";
import { Entypo } from "@expo/vector-icons";

export type ListItemProps = {
    track: Track;
    onTrackSelect: (track: Track) => void;
}

export const ListItem = ({ track, onTrackSelect: handleTrackSelect }: ListItemProps) => {
    const isActiveTrack = useActiveTrack()?.url === track.url
    const isPaused = false; // Placeholder for paused track logic
    const textColor = useThemeColor({}, 'text');
    const mutedTextColor = useThemeColor({}, 'textMuted');

    return (
        <TouchableHighlight onPress={() => handleTrackSelect(track)}>
            <View style={styles.trackItemContainer}>
                <Image 
                    source={{ uri: track.image ?? unknownTrackImageUri }}
                    style={{
                        ...styles.trackArtworkImage,
                        opacity: isActiveTrack ? 1 : 0.8,
                    }} 
                />

                {/* Track title and artist */}
                <View style={styles.trackInfoContainer}>
                    <Text 
                        numberOfLines={1}
                        style={{
                            ...styles.trackTitleText,
                            color: isActiveTrack ? textColor : mutedTextColor,
                            fontWeight: isPaused ? '400' : '600',
                        }}
                    >
                        {track.title}
                    </Text>
                    {track.artist && (
                        <Text style={[styles.trackArtistText, { color: mutedTextColor }]}>
                            {track.artist}
                        </Text>
                    )}
                </View>

                <Entypo name="dots-three-horizontal" size={18} color={mutedTextColor}/>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    trackItemContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    trackInfoContainer: {
        flex: 1,
    },
    trackArtworkImage: {
        borderRadius: 8,
        width: 50,
        height: 50,
    },
    trackTitleText: {
        fontSize: 14,
        maxWidth: '90%',
    },
    trackArtistText: {
        fontSize: 12,
        marginTop: 4,
    },
});