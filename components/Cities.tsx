// Cities.tsx
import React, { useEffect, useContext } from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../components/Colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import { RootStackParamList, City} from "../App";
import CitiesContext from "../Context/CitiesContext";

type CitiesScreenProps = NativeStackScreenProps<RootStackParamList, "Home">

const Cities: React.FC<CitiesScreenProps> = (props) => {
    const {navigation} = props;
    const ctx = useContext(CitiesContext);
    const cities = ctx.allCities;
    //const cities = props.route.params.cities;

    useEffect(() => {
        navigation.setOptions({
            title: 'List of Cities',
            headerLeft: () => (
                <Button 
                    onPress={() => {navigation.navigate('Info')}}
                    title='Info'
                />
            ),
            headerRight: () => (
                <Button 
                    onPress={() => {navigation.navigate('AddCity')}}
                    title='Add'
                />
            )
        });
    });

    const navigateToLocations = (city: City) => {
        //console.log(`Cities navigateTo ${JSON.stringify(city)}`);
        navigation.navigate('Locations', { locations: city.locations });
    }
    const navigateToInfo = (city: City) => {
        navigation.navigate('Info')
    }
    const navigateToAddCity = (city: City) => {
        navigation.navigate('AddCity')
    }

    //console.log(`Cities: ${JSON.stringify(props)}`);

    return (
        <SafeAreaView style={styles.citiesWrapper}>
            <FlatList
                data={cities}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback
                        onPress={() => navigateToLocations(item)}
                        key={item.id}
                        style={styles.cityContainer}
                    >
                        <View style={styles.cityInfo}>
                            <Text style={styles.city}>{item.name}</Text>
                            <Text style={styles.country}>{item.country}</Text>
                        </View>
                        <Feather name="arrow-right" size={24} color="black" />
                    </TouchableWithoutFeedback>
                )}
                ListEmptyComponent={() => <Text style={styles.noItems}>No cities at the moment</Text>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    citiesWrapper: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    cityContainer: {
        //borderColor: colors.white,
        //borderWidth: 2,
        padding: 12,
        backgroundColor: colors.white,
        borderRadius: 5,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cityInfo: {

    },
    city: {
        color: colors.black,
        fontWeight: 'bold',
        //fontFamily: 'Futura',
    },
    country: {
        color: colors.grey,
        //fontFamily: 'Futura',
    },
    noItems: {

    },
})

export default Cities;