import React from 'react';
import {SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Card} from '../../components/Card';
import {DarkStyles} from '../../config/themes/DarkTheme';
import {flatListData} from '../../utils/dummy/data';

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={DarkStyles.homeContainer}
        data={flatListData}
        renderItem={({item}) => (
          <Card title={item.title} content={item.content} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export {Home};
