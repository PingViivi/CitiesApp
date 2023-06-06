import { City, Location } from "../App";
import uuid from 'react-native-uuid';

const testHelsinki: City = {
    name: "Helsinki",
    country: "Finland",
    id: uuid.v4().toString(),
    locations: [
        {
            name: "Dallapen puisto",
            info: "Kirppis sunnuntaisin",
            id: uuid.v4().toString(),
        },
        {
            name: "Punavuori",
            info: "Viihtyisä (kallis) asuinalue",
            id: uuid.v4().toString(),
        },
    ]
};

const testTurku: City = {
    name: "Turku",
    country: "Finland",
    id: uuid.v4().toString(),
    locations: [
        {
            name: "Aurajoen ranta",
            info: "Ihana aurinkoisina kesäpäivinä",
            id: uuid.v4().toString(),
        },
        {
            name: "Turun tuomiokirkko",
            info: "Upea vanha historiallinen kirkko <3",
            id: uuid.v4().toString(),
        },
    ]
};

const testLahti: City = {
    name: "Lahti",
    country: "Finland",
    id: uuid.v4().toString(),
    locations: [
        {
            name: "Hyppyrimäki",
            info: "Hienot maisemat",
            id: uuid.v4().toString(),
        },
        {
            name: "Lahden Jäähalli",
            info: "Giantsin kotikenttä",
            id: uuid.v4().toString(),
        },
    ]
};

const testTampere: City = {
    name: "Tampere",
    country: "Finland",
    id: uuid.v4().toString(),
    locations: [
        {
            name: "Särkänniemi",
            info: "Huvipuisto",
            id: uuid.v4().toString(),
        },
        {
            name: "Palikka paikka",
            info: "Jätti legopalikoita",
            id: uuid.v4().toString(),
        },
    ]
};

export const testData: City[] = [
    testHelsinki,
    testTurku,
    testLahti,
    testTampere,
];