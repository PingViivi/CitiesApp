import React, { ReactNode, useState } from "react";
import { testData } from "../components/TestData";
import { City, Location } from "../App";
import CitiesContext from "./CitiesContext";

interface Props {
    children: ReactNode;
};

const CitiesProvider: React.FC<Props> = ({children}) => {
    
    const [cities, setCities] = useState<City[]>(testData);
    const addCity = (city: City) => {
        setCities([...cities, city]); // add the new city to the cities array
    };
    
    //console.log(`CitiesProvider: ${JSON.stringify(cities)}`);

    return(
        <CitiesContext.Provider
            value={{
                allCities: cities,
                addCity: addCity, // assign the addCity function
                /*addCity: (city: City) => {
                    console.log(`addCity called with ${JSON.stringify(city)}`);
                },*/
                addLocation: (city: string, location: Location) => {
                    console.log(`addLocation called with ${JSON.stringify(city)}`);
                },
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
    
};

export default CitiesProvider;