import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.address}>{result.location.address1}, {result.location.city}</Text>
      <View style={styles.center}>
        <FlatList
          data={result.photos}
          keyExtractor={ photo => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }}/>
          }}
        />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  title: {
   fontSize: 24,
   margin: 10,
   textAlign: 'center'
  },
  image: {
    margin: 10,
    width: 250,
    height: 200,
  },
  address: {
    color: '#505050',
    textAlign: 'center'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
 
export default ResultsShowScreen;