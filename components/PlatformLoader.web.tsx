//@ts-nocheck
import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export const PlatformLoader = () => {
    const animatedValues = useRef([
        new Animated.Value(0.3),
        new Animated.Value(0.5),
        new Animated.Value(0.8),
        new Animated.Value(0.4),
        new Animated.Value(0.7),
    ]).current;

    useEffect(() => {
        const createAnimation = (animatedValue, delay) => {
            return Animated.loop(
                Animated.sequence([
                    Animated.timing(animatedValue, {
                        toValue: 1,
                        duration: 300 + Math.random() * 200,
                        useNativeDriver: false,
                    }),
                    Animated.timing(animatedValue, {
                        toValue: 0.2 + Math.random() * 0.3,
                        duration: 300 + Math.random() * 200,
                        useNativeDriver: false,
                    }),
                ])
            );
        };

        // Start animations with different delays for each bar
        const animations = animatedValues.map((animatedValue, index) => {
            setTimeout(() => {
                createAnimation(animatedValue, index * 100).start();
            }, index * 100);
        });

        // Cleanup function
        return () => {
            animatedValues.forEach(animatedValue => {
                animatedValue.stopAnimation();
            });
        };
    }, []);

    return (
        <View style={styles.container}>
            {animatedValues.map((animatedValue, index) => (
                <Animated.View
                    key={index}
                    style={[
                        styles.bar,
                        {
                            height: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [8, 30],
                            }),
                        },
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 40,
        gap: 3,
    },
    bar: {
        width: 4,
        backgroundColor: '#fff',
        borderRadius: 2,
        minHeight: 8,
    },
});