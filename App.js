import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabContainer from './navigation/TabContainer'; // 앞서 만든 탭 네비게이터

export default function App() {
  return (
    <NavigationContainer>
      <TabContainer />
    </NavigationContainer>
  );
}
