import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import CommentListScreen from './screens/CommentListScreen';


const AppNavigator = createStackNavigator(
  {
    home: {
      screen: HomeScreen,
      
    },
    post: {
      screen: PostScreen,
      
    },
    commentList: {
      screen: CommentListScreen,
      
    }
  },
  {
        initialRouteName: "home",
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          headerTintColor: "#fff"
        }
      }
  );
const App = createAppContainer(AppNavigator)
export default App;
