import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url !== '' ? result.image_url : null }}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}
 
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 125,
    borderRadius: 5,
    marginBottom: 5
  },

  name: {
    fontWeight: 'bold'
  },

  container: {
    marginLeft: 10,
    marginBottom: 10
  }
})

export default ResultsDetail