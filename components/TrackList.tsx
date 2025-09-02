import { FlatList, FlatListProps, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import library from "@/data/library.json"
import { ListItem } from './ListItem';
import TrackPlayer, { Track } from 'react-native-track-player';

export type TrackListProps = Partial<FlatListProps<Track> & {
    tracks: Track[];
}>;

export const TrackList = ({ tracks, ...flatlistProps }: TrackListProps) => {
    const handleTrackSelect = async (track: Track) => {
        await TrackPlayer.load(track)
        await TrackPlayer.play()
    }

    return (
        <FlatList
            data={tracks}
            renderItem={({ item: track }) => (
                <ListItem track={{
                    title: track.title,
                    artist: track.artist,
                    image: track.artwork,
                    url: track.url,
                }}
                    onTrackSelect={handleTrackSelect}
                />
            )}
            ListEmptyComponent={() => (
                <View className="flex-1 justify-center items-center px-8 py-16">
                    <View className="items-center space-y-4">
                        <View className="w-20 h-20 rounded-full bg-neutral-800/50 items-center justify-center mb-4">
                            <Ionicons name="musical-notes-outline" size={32} color="#a3a3a3" />
                        </View>
                        <Text className="text-xl font-semibold text-white text-center">
                            No Tracks Found
                        </Text>
                        <Text className="text-sm text-neutral-400 text-center leading-relaxed max-w-sm">
                            Your music library is empty. Add some tracks to get started with your listening experience.
                        </Text>
                    </View>
                </View>
            )}
            {...flatlistProps}
        />
    );
}