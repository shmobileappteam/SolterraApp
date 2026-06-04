import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNav from '../components/layout/BottomNav';
import {
  CommunityScreen,
  GardenScreen,
  HomeScreen,
  ShopScreen,
  TasksScreen,
} from '../screens';
import { G } from '../screens/_partials/gardenUi';

const Tab = createBottomTabNavigator();

function TabBarBridge(props) {
  return <BottomNav {...props} />;
}

const MainTabNavigator = () => (
  <Tab.Navigator
    tabBar={props => <TabBarBridge {...props} />}
    safeAreaInsets={{ top: 0, right: 0, bottom: 0, left: 0 }}
    screenOptions={{
      headerShown: false,
      lazy: true,
      sceneStyle: { backgroundColor: G.cream },
      tabBarStyle: { paddingBottom: 0, height: undefined },
    }}>
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    <Tab.Screen name="GardenScreen" component={GardenScreen} />
    <Tab.Screen name="TasksScreen" component={TasksScreen} />
    <Tab.Screen name="CommunityScreen" component={CommunityScreen} />
    <Tab.Screen name="ShopScreen" component={ShopScreen} />
  </Tab.Navigator>
);

export default MainTabNavigator;
