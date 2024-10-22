import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as UI from "@/components/common/index"

const Event: React.FC = () => {
    return (
        <UI.Containner>
           <Text style={styles.title}>All Events</Text>
           <Text style={styles.description}>Event Description</Text>
        </UI.Containner>
        
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
        marginTop: 80,
    },
    description: {
        fontSize: 16,
        color: '#666',
    },
});

export default Event;