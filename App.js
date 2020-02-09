import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from './screens/MainScreen';

const MainNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;
