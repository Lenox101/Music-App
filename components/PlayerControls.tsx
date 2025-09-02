import { Ionicons } from "@expo/vector-icons";
import { ViewStyle, View, TouchableOpacity } from "react-native";
import TrackPlayer, { useIsPlaying } from "react-native-track-player";

type PlayerControlsProps = {
    style?: ViewStyle;
};

type PlayerButtonProps = {
    style?: ViewStyle;
    iconSize?: number;
};

export const PlayPauseButton = ({ style, iconSize = 32 }: PlayerButtonProps) => {
    const { playing } = useIsPlaying();

    return (
        <View style={[{ height: iconSize }, style]}>
            <TouchableOpacity
                activeOpacity={0.85}
                onPress={playing ? async () => await TrackPlayer.pause() : async () => await TrackPlayer.play()}
                className="justify-center items-center"
            >
                <Ionicons
                    name={playing ? 'pause' : 'play'}
                    size={iconSize}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    );
};

export const SkipToNextButton = ({ iconSize = 24 }: PlayerButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => TrackPlayer.skipToNext()}
            className="justify-center items-center p-1"
        >
            <Ionicons name="play-skip-forward" size={iconSize} color="white" />
        </TouchableOpacity>
    );
};

export const SkipToPreviousButton = ({ iconSize = 24 }: PlayerButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => TrackPlayer.skipToPrevious()}
            className="justify-center items-center p-1"
        >
            <Ionicons name="play-skip-back" size={iconSize} color="white" />
        </TouchableOpacity>
    );
};