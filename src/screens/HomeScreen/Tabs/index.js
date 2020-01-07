import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

import FriendTab from '../FriendTab';
import HotTab from '../HotTab';
import RecommendTab from '../RecommendTab';


import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '推荐' },
    { key: 'second', title: '热门' },
    { key: 'third', title: '朋友' },
  ]);

  const renderScene = SceneMap({
    first: RecommendTab,
    second: HotTab,
    third: FriendTab,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      inactiveColor={"#666"}
      activeColor={"#FA9432"}
      indicatorStyle={{ backgroundColor: '#fff' }}
      style={{ backgroundColor: '#fff' }}
    />
  );
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}


const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
