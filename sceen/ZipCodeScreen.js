import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]

const ZipItem = ({place, code}) => (
    <View style = {styles.ZipItem}>
        <Text style={styles.zipPlace} >{place}</Text>
        <Text style={styles.zipPlace} >{code}</Text>
    </View>
    )
const _keyExtractor = item => item.code
export default function ZipCodeScreen(){
    return (
    <FlatList
        data={availableZipItems}
        keyExtractor={_keyExtractor}
        renderItem={({item}) => <ZipItem {...item} />}
    />

    );
   
   }
 const styles = StyleSheet.create ({
     ZipItem: {
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'space-between',
         height: 50,
         
         
     },
     zipPlace: {
        fontSize: 20,
         
     },
     
 })