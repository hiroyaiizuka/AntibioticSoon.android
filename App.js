import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import DoseScreen from './dose/DoseScreen';
import BeakerScreen from './dose/BeakerScreen';
import Beaker2Screen from './dose/Beaker2Screen';
import Beaker3Screen from './dose/Beaker3Screen';
import ScrollScreen from './cap/ScrollScreen';
import Antibiotics1Screen from './cap/Antibiotics1Screen';
import SevereNHCAPScreen from './nhcap/SevereNHCAPScreen';
import EscalationScreen from './nhcap/EscalationScreen';
import SevereHAPScreen from './hap/SevereHAPScreen';
import Escalation2Screen from './hap/Escalation2Screen';
import DifferentScreen from './uro/DifferentScreen';
import SimpleScreen from './uro/SimpleScreen';
import ComplexScreen from './uro/ComplexScreen';


const App = createStackNavigator({
  Home:           {screen: HomeScreen}, 
  Dose:           {screen: DoseScreen},
  Beaker:         {screen: BeakerScreen}, 
  Beaker2:        {screen: Beaker2Screen},
  Beaker3:        {screen: Beaker3Screen},
  Scroll:         {screen: ScrollScreen},
  Antibiotics1:   {screen: Antibiotics1Screen},
  SevereN:        {screen: SevereNHCAPScreen},
  Escalate:       {screen: EscalationScreen},
  SevereH:        {screen: SevereHAPScreen},  
  Escalate2:      {screen: Escalation2Screen},
  Different:      {screen: DifferentScreen},
  Simple:         {screen: SimpleScreen},
  Complex:        {screen: ComplexScreen},






}, {
  navigationOptions: {
    title: '抗菌薬 アプリ',
    headerStyle: { backgroundColor : 'rgb(114,95,70)'},
    headerTitleStyle: {color: '#fff'},
    headerTintColor: "#fff",
    headerBackTitle: null,
    headerTitleStyle: {
      width: '92%',
      textAlign: 'center',
     },
  },
});

const Beaker = createStackNavigator({
  Beaker:           {screen: BeakerScreen},
});

const SevereStack = createStackNavigator({
  Dose:           {screen: DoseScreen},
});

export default createBottomTabNavigator({
  App:  {
          screen: App, 
          navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => (
              <Icon 
                    name= {focused ? "ios-home" : "ios-home"} 
                    size={22} 
                    style={{ color: tintColor }}
                     />
            )
          }     
        }, 
　 SevereStack:  {screen: SevereStack,
                  navigationOptions: {
                    tabBarIcon: ({ tintColor, focused }) => (
                      <Icon 
                            name= {focused ? "ios-calculator" : "ios-calculator"} 
                            size={22} 
                            style={{ color: tintColor }}
                             />
                    )
  
                  }     

                 },
  Beaker:{
          screen: Beaker,
          navigationOptions: {
            tabBarIcon: () => (
              <Icon name="ios-beaker" size={20} color="#853" />
            )
          }     
        }

}, {
  tabBarOptions: { showLabel: false }
});



