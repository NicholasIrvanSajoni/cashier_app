import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import axios from "axios";
import secret from "./constants/Secret";
import UserContextProvider from './context/user-context-provider';

axios.defaults.baseURL = secret.APIURL


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <UserContextProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </UserContextProvider>
      </SafeAreaProvider>
    );
  }
}
