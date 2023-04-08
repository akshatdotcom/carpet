import React from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { FlatGrid } from 'react-native-super-grid';

    
  

export default function SearchPage() {

    const [items, setItems, desc] = React.useState([
      { name: 'ARTS AND CRAFTS', code: '#134840', desc: 'Knitting, Canvas Work, Crocheting and more! ' },
      { name: 'CODING', code: '#0D5F66', desc: 'Web Development, Front-end, Back-end, and more!' },
      { name: 'COSMETIC', code: '#29748F', desc: 'Haircuts, Nails, Eyelashes, Eyebrows and more!' },
      { name: 'DIGITAL DESIGN', code: '#5C86B3', desc: 'Logo Dseign, Digital Art, Graphics, Tattoo Design and more!' },
      { name: 'FLORAL DESIGN', code: '#9895CD', desc: 'Bouquets, Reefs, Crowns, Decorations and more!' },
      { name: 'MUSIC', code: '#12C381', desc: 'Mixing, Producing, Vocals, Recording, and more!' },
      { name: 'PHOTOGRAPHY', code: '#2B415E', desc: 'Senior Portraits, Editing, Photoshop, and more!' },
      { name: 'VIDEOGRAPHY', code: '#503852', desc: 'Short Films, Organization Promos, and more!' },
      { name: 'CLEANING', code: '#00A990', desc: 'Deep Clean, UV Disinfection, and more!' },
      { name: 'HAIRCARE', code: '#2B415E', desc: 'Hair Treatments, Dyes, Perms, and more!' },
      
    ]);


    
    return (
      <View style={styles.container}>
        <SearchBar
            placeholder="Search for services"
            style={styles.search}
        />
        <Text style={styles.firstText}>
            Categories
        </Text>

        <FlatGrid 
            itemDimension={130}
            data={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            spacing={10}
            renderItem={({ item }) => (
              <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.desc}</Text>
              </View>
        )}/>
       
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center',
        padding: 20,
    },
    firstText: {
        color: "#134840",
        fontFamily: "Lehend",
        fontWeight: 600,
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
    },
    secondText: {
        color: "black",
        fontFamily: "Lehend",
        fontWeight: 200,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 60,
    },
    thirdText: {
        color: "black",
        fontFamily: "Lehend",
        fontWeight: 200,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 60,
    },
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });