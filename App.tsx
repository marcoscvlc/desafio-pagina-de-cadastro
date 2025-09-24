import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

declare global{
  namespace ReactNavigation {
    interface RootParamList{
      Home: undefined,
      Details: undefined
    }
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

