import React from 'react'
import { FlatList } from 'react-native';

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
    <View>
    <FlatList
        data={availableZipItems}
        keyExtractor={_keyExtractor}
        renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
    />
    <StatusBar style="auto" />
    </View>
    );
   
   }
   