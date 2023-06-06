// Cities.tsx
import React, { useEffect, useContext } from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CitiesContext from "../Context/CitiesContext";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../components/Colors';
import { City, Location, RootStackParamList } from '../App';

type LocationsScreenProps = NativeStackScreenProps<RootStackParamList, "Home">

const Locations: React.FC<LocationsScreenProps> = (props) => {
    const {navigation} = props;
    const locations = props.route.params;
    //const ctx = useContext(CitiesContext);
    //const cities = ctx.allCities;
    //const currentLocation = locations.locations[0]; // assume current location is the first location in the list
    //const currentCity = cities.find(city => city.locations.includes(currentLocation.id));
    //console.log(cities);

    // Change the center title
    useEffect(() => {
        navigation.setOptions({
            title:`Locations in current City`,
            headerRight: () => (
                <Button 
                    onPress={() => {navigation.navigate('AddLocation')}}
                    title='Add'
                />
            )
        });
    });

    return (
        <SafeAreaView style={styles.locationsWrapper}>
            <FlatList
                data={locations.locations}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.locationContainer}>
                        <View style={styles.locationInfo}>
                            <Text style={styles.location}>{item.name}</Text>
                            <Text style={styles.info}>{item.info}</Text>
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => <Text style={styles.noItems}>No locations at the moment</Text>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    locationsWrapper: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    locationContainer: {
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
    locationInfo: {

    },
    location: {
        color: colors.black,
        fontWeight: 'bold',
        //fontFamily: 'Futura',
    },
    info: {
        color: colors.grey,
        //fontFamily: 'Futura',
    },
    noItems: {

    },
})

export default Locations;