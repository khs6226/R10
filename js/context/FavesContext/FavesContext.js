import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';

const FavesContext = createContext();

const FavesProvider = () => {
    const [faves, setValue] = useState([]);

    const declare = async () => {
        const list = await getFavedSessionIds();
        setValue(list);
    }

    const getFavedSessionIds = async () => {
        const item = await AsyncStorage.getAllKeys();
        const multi = await AsyncStorage.multiGet(item);
        let result = [];

        for (let i = 0; i < multi.length; i++) {
            let isFav = multi[i][1];
            let favId = multi[i][0];
            if (isFav === "true") {
                result.push(favId)
            }
        }
        return result;
    }

    const writeItemToStorage = async (id) => {
        const isFav = await AsyncStorage.getItem(id);
        isFav === "true" ? await AsyncStorage.setItem(id, "false")
                         : await AsyncStorage.setItem(id, "true");
        declare();
    };

    useEffect(() => {
        declare()
      }, []);

    return [faves, writeItemToStorage];

}
export {FavesContext};
export default FavesProvider;