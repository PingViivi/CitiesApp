// Cities.tsx
import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Info: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Here is some info about CitiesApp</Text>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </Text>
            <Text style={styles.text}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 40,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 12,
    },
    text: {
      paddingBottom: 12,  
    },
});
export default Info;