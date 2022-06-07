import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Feather
        style={styles.icon}
        name="search"
        size={30}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ddd',
    height: 50,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
  },

  input: {
    flex: 1,
    padding: 5,
    margin: 5,
    fontSize: 20
  },

  icon: {
    alignSelf: 'center',
    marginLeft: 5
  }
})

export default SearchBar