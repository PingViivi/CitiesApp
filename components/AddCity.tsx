// Cities.tsx
import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CitiesContext from "../Context/CitiesContext";
import { City } from "../App";
import uuid from 'react-native-uuid';
import { colors } from "./Colors";

const AddCity: React.FC = () => {
    const [cityName, setCityName] = useState("");
    const [countryName, setCountryName] = useState("");
    const ctx = useContext(CitiesContext);
    const handleAddCity = () => {
        const newCity: City = {
            name: cityName,
            country: countryName,
            locations: [],
            id: uuid.v4().toString(),
        };
        ctx.addCity(newCity); // add the new city using the addCity function from the context
        setCityName(""); // reset the input fields
        setCountryName("");
    };

    //console.log(`AddCity ${JSON.stringify(ctx.allCities)}`)

    return (
        <View style={styles.AddCityWrapper}>
            <TextInput
                style={styles.input}
                onChangeText={setCityName}
                value={cityName}
                placeholder="Enter city name"
            />
            <TextInput
                style={styles.input}
                onChangeText={setCountryName}
                value={countryName}
                placeholder="Enter country name"
            />
            <TouchableOpacity style={styles.button} onPress={handleAddCity}>
                <Text style={styles.buttonText}>Add City</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    AddCityWrapper: {
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
        

export default AddCity;