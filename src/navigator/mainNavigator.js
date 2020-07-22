import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen39260Navigator from '../features/BlankScreen39260/navigator';
import BlankScreen29175Navigator from '../features/BlankScreen29175/navigator';
import BlankScreen18999Navigator from '../features/BlankScreen18999/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen39260: { screen: BlankScreen39260Navigator },
BlankScreen29175: { screen: BlankScreen29175Navigator },
BlankScreen18999: { screen: BlankScreen18999Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
