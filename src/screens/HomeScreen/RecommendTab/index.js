import React from 'react';
import { Text, View, FlatList } from 'react-native';

class HomePage extends React.Component {
    footerComponent = () => {
        return (
            <View style={{ height: 100 }}></View>)
    }
    render() {
        return (
            <View style={{ height: 700 }}>
                <FlatList
                    data={[{ key: '1' }]}
                    ListFooterComponent={this.footerComponent}
                    renderItem={() => (
                        <View>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                            <Text>推荐 1</Text>
                        </View>

                    )}

                />
            </View>
        );
    }
}

export default HomePage