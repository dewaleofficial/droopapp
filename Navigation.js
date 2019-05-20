import { createBottomTabNavigator, createAppContainer } from "react-navigation"
import DroopInputScreen from "./screens/DroopInputScreen"
import HomeScreen from "./screens/HomeScreen"
import IntroAndHelpScreen from './screens/IntroandHelp';

const TabNavigator = createBottomTabNavigator({
    "Home": HomeScreen,
    "Droop": DroopInputScreen,
    "Help": IntroAndHelpScreen
})

export default createAppContainer(TabNavigator)
