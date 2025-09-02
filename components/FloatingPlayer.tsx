import React, { useState } from 'react';
import { View, Text, Image, Pressable, ViewProps } from 'react-native';
import { useActiveTrack, Track } from 'react-native-track-player';
import { PlayPauseButton, SkipToNextButton, SkipToPreviousButton } from './PlayerControls';
import { Ionicons } from '@expo/vector-icons';
import { unknownTrackImageUri } from '@/constants/images';
import { useLastActiveTrack } from '@/hooks/useLastActiveTrack';

const FloatingPlayer = ({ style }: ViewProps) => {
    const activeTrack = useActiveTrack();
    const lastActiveTrack = useLastActiveTrack();
    const [imageError, setImageError] = useState(false);

    const displayedTrack = activeTrack ?? lastActiveTrack;

    if (!displayedTrack) return null;

    return (
        <View style={style}>
            <Pressable className="flex-row items-center rounded-xl bg-neutral-800/95 p-3 shadow-2xl border border-neutral-700/30">
                {/* Album Artwork */}
                <View className="relative">
                    {!imageError ? (
                        <Image
                            source={{ uri: displayedTrack.image ?? unknownTrackImageUri }}
                            style={{ width: 48, height: 48, borderRadius: 8 }}
                            onError={() => setImageError(true)}
                            onLoad={() => setImageError(false)}
                        />
                    ) : (
                        // Fallback icon when no image is available
                        <View className="h-12 w-12 rounded-lg bg-neutral-700 items-center justify-center">
                            <Ionicons name="musical-note" size={24} color="#a3a3a3" />
                        </View>
                    )}
                </View>

                {/* Track Info */}
                <View className="mx-3 flex-1 justify-center">
                    <Text className="font-semibold text-white text-sm" numberOfLines={1}>
                        {displayedTrack.title || 'Unknown Track'}
                    </Text>
                    <Text className="text-xs text-neutral-400 mt-0.5" numberOfLines={1}>
                        {displayedTrack.artist || 'Unknown Artist'}
                    </Text>
                </View>

                {/* Control Buttons */}
                <View className="flex-row items-center space-x-2">
                    <SkipToPreviousButton iconSize={20} />
                    <PlayPauseButton iconSize={28} />
                    <SkipToNextButton iconSize={20} />
                </View>
            </Pressable>
        </View>
    );
};

export default FloatingPlayer;
