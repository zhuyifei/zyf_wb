import React from 'react';
import { Text, View, FlatList,StyleSheet } from 'react-native';

import Tabs from './Tabs';



import { Header } from 'react-native-elements';

class HomePage extends React.Component {
  

    footerComponent = () => {
        return (
            <View style={{ height: 100 }}></View>)
    }
    render() {
        return (
            <View >
                <Header
                    backgroundColor={'#FAFAFA'}
                    centerComponent={{ text: '微博', style: { color: '#000' } }}
                />        
                <View  style={{ minHeight: 1000 }}>
                <Tabs></Tabs>
                </View>
                
    

            </View>
        )
    }
}



  




export default HomePage