import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {background, primary} from '../config/color';
import Lottos from '../screens/Lottos/Lottos';
import LottoDetails from '../screens/LottoDetails/LottoDetails';

const navigationOptions = {
  headerShown: false,
};

const MainNavigator = createStackNavigator({
  Lottos: {
    screen: Lottos,
    navigationOptions,
  },
  LottoDetails: {
    screen: LottoDetails,
    navigationOptions: {
      title: 'Lotto Details',
      headerStyle: {
        backgroundColor: background.light,
      },
      headerTintColor: primary.text,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
