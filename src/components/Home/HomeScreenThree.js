import React from 'react'
import { View, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('window');

const icons = [
          { name: 'Pathaan', image: require('../../assets/images/recom4.avif') },
          { name: 'Phulrani', image: require('../../assets/images/recom1.avif') },
          { name: 'Shazam! Fury of the Gods', image: require('../../assets/images/recom2.avif') },
          { name: 'Fast X', image: require('../../assets/images/recom3.avif') },
          { name: 'Demon Slayer: Kitmetsu', image: require('../../assets/images/recom5.avif') },
          { name: 'Bholaa', image: require('../../assets/images/recom6.avif') },
          { name: 'Jhon Wick: Chapter 4', image: require('../../assets/images/recom7.avif') },
          { name: 'Tu Jhoothi Main Makkaar', image: require('../../assets/images/recom8.avif') },
          { name: 'Mrs. Chatterjee Vs Norway', image: require('../../assets/images/recom9.avif') },
          { name: 'Bheed (Black & White)', image: require('../../assets/images/recom10.avif') },

];
const HomeScreenThree = () => {
          const renderIcon = ({ item }) => (
                    <TouchableOpacity onPress={() => console.log(`You tapped on ${item.name}`)}>
                              <View style={styles.card} key={item?.id}>
                                        <Image source={item?.image} style={styles.image} />
                              </View>
                              <Text style={styles.title}>{item?.name}</Text>
                    </TouchableOpacity>
          );


          return (
                    <View style={styles.container}>
                              <View style={styles.header} >
                                        <Text style={styles.reccom}>Recommended Movies</Text>
                                        <View >
                                                  <TouchableOpacity style={styles.right} onPress={() => console.log(`You tapped on `)}>
                                                            <Text style={styles.seeAll}>See All</Text>
                                                            <AntDesign name="right" size={10} color="rgb(236, 94, 113)" />
                                                  </TouchableOpacity>


                                        </View>
                              </View>
                              <FlatList
                                        data={icons}
                                        horizontal
                                        renderItem={renderIcon}
                                        keyExtractor={(item) => item.name}
                                        showsHorizontalScrollIndicator={false}
                              />
                    </View>
          )
}

const styles = StyleSheet.create({
          container: {
                    marginVertical: 10,
          },
          header: {
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10
          },
          reccom: {
                    fontSize: 20,
                    fontWeight: "bold"
          },
          seeAll: {
                    color: "rgb(236, 94, 113)"
          },
          right: {
                    flexDirection: "row",
                    alignItems: "center",
                    color: "rgb(236, 94, 113)"
          },
          card: {
                    width: 120,
                    // height: 200,
                    marginRight: 10,
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    shadowColor: '#000',
                    shadowOffset: {
                              width: 0,
                              height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
          },
          image: {
                    width: '100%',
                    height: 200,
                    resizeMode: 'cover',
                    borderRadius: 5,

          },
          title: {
                    width: 120,
                    fontSize: 16,
                    fontWeight: "600",
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    marginVertical: 5
          },
});

export default HomeScreenThree