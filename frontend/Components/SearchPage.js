import React, { useState } from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SearchCard } from './SearchCard';
import { searchPageOptions } from './utils';




    
  

export default function SearchPage() {
    const [search, setSearchString] = useState('');

    const updateSearch = (search) => {
      setSearchString(search);
    }

    const listItems = [];
    for (let i = 0; i < searchPageOptions.length; i++) {
      let len = search.length;
      if(len != 0)
        if(searchPageOptions[i].name.substring(0, len) !== search)
          continue;
      listItems.push(<SearchCard title={searchPageOptions[i].name}
                      url={searchPageOptions[i].url}
                      desc={searchPageOptions[i].desc}    
                      />);
    }
    
    return (
      <SafeAreaProvider style={styles.safeContainer}>
        <ScrollView style={styles.container}>
          <SearchBar
              placeholder="Search for services"
              style={styles.search}
              onChangeText={updateSearch}
              value={search}
          />
          <Text style={styles.firstText}>
              Categories
          </Text>

          {listItems}

        </ScrollView>
      </SafeAreaProvider>
    );
  };

  const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: '#74AB9D',
      alignItems: 'center',
      justifyContent: 'center',
  },
    container: {
        marginLeft: 20,
        marginTop: 70,
    },
    search: {
      color: 'white',
      marginRight: 40,
    },
    firstText: {
        color: "white",
        fontWeight: 600,
        fontSize: 30,
        textAlign: 'center',
        marginTop: 5,
        marginRight: 20,
    },
    gridView: {
      marginTop: 10,
      flex: 1,
    },
  });