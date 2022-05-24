import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    return result;
}

async function remove(key) {
    await SecureStore.deleteItemAsync(key);
}

const securestoreutils = { getValueFor, save, remove }

export default securestoreutils;