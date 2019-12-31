import React, {useCallback, useContext} from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation, state: { recording } } = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);

    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Create a Track</Text>
            <Map />
            <TrackForm/>
            { err ? <Text> Please enable location services </Text> : null }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
