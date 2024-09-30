import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Event: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Event Title</Text>
            <Text style={styles.description}>Event Description</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#666',
    },
});

export default Event;