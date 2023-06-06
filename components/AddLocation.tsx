// Cities.tsx
import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CitiesContext from "../Context/CitiesContext";
import uuid from 'react-native-uuid';
import { colors } from "./Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type  AddLocationProps = NativeStackScreenProps<RootStackParamList, 'AddLocation'>

const AddLocation: React.FC<AddLocationProps> = ({navigation, route}) => {
    //const {location, city} = route.params;
    const [locationName, setLocationName] = useState('');
    const [infoText, setInfoText] = useState('');
    const ctx = useContext(CitiesContext);
    console.log(route.params);
    //console.log(location);
    
    const handleAddLocation = () => {
        const newLocation: Location = {
            name: locationName,
            info: infoText,
            id: uuid.v4().toString(),
        };
        //ctx.addLocation(city.id, newLocation); // add the new city using the addCity function from the context
        setLocationName(""); // reset the input fields
        setInfoText("");
        //navigation.canGoBack;
    };

    return (
        <View style={styles.AddLocationWrapper}>
            <TextInput
                style={styles.input}
                onChangeText={setLocationName}
                value={locationName}
                placeholder="Enter location name"
            />
            <TextInput
                style={styles.input}
                onChangeText={setInfoText}
                value={infoText}
                placeholder="Enter description"
            />
            <TouchableOpacity style={styles.button} onPress={handleAddLocation}>
                <Text style={styles.buttonText}>Add Location</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    AddLocationWrapper: {
        paddingHorizontal: 20,
        marginTop: 40,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 5,
        padding: 10,
        marginVertical: 6,
    },
    button: {
        backgroundColor: colors.black,
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 12,
    },
    buttonText: {
        color: colors.white,
    },
});
       

export default AddLocation;