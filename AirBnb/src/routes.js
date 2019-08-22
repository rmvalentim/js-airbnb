import { createAppContainer, createStackNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';

const Routes = createAppContainer(createStackNavigator({
  SignIn,
  SignUp,
  Main,
}));

export default Routes;