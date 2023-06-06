# CitiesApp

The CitiesApp is mobile application for interesting Cities and Locations that user can list. The App uses useContext hook to access data from the CitiesContext context.

## Implementations:
- You can view the list of cities.
- You can view the list of locations.
- You can add new city (with name and country).
- View for the adding Location is implemented

## Work in progress
- User is able to delete and edit cities and locations
-	App is persistent.
- Adding location isn’t working properly.


## Description of the states and props
useContext hook is used to access data from the CitiesContext context. The CitiesProvider component is used to wrap the entire app component, and it provides the CitiesContext to all the child components in the app. 

The NavigationContainer component from the @react-navigation/native library is used to provide navigation to the app. The createNativeStackNavigator function from the same library is used to create a stack navigator that provides screen navigation to the app.

The RootStackParamList type defines the type of the navigation props that are passed to the screens. The props include cities and setCities for the Home screen, locations and setLocations for the Locations screen, and undefined for the other screens

The Cities component displays a list of cities, and it receives the navigation prop from the React Navigation library. The TouchableWithoutFeedback component from the react-native-gesture-handler library is used to create a touchable city container that navigates to the Locations screen when pressed.

The Locations component displays a list of locations for a selected city, and it receives the navigation prop from the React Navigation library.

AddCity, AddLocation and Info receives the navigation prop from the React Navigation library.
