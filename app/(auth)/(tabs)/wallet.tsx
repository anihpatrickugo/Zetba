import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Wallet = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wallet</Text>
            <Text style={styles.balance}>Balance: $0.00</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    balance: {
        fontSize: 18,
    },
});

export default Wallet;