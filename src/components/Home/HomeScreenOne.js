import React from 'react'
import { View, FlatList, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';


const icons = [
          { name: 'Movies', image: require('../../assets/images/video-player.png') },
          { name: 'Stream', image: require('../../assets/images/film-reel.png') },
          { name: 'Plays', image: require('../../assets/images/comedy.png') },
          { name: 'IPl & WPL', image: require('../../assets/images/cricket.png') },
          { name: 'Sports', image: require('../../assets/images/running.png') },
          { name: 'Music Shows', image: require('../../assets/images/musical-note.png') },
          { name: 'See All', image: require('../../assets/images/selection.png') },
];
const HomeScreen = () => {
          const renderIcon = ({ item }) => (
                    <TouchableOpacity onPress={() => console.log(`You tapped on ${item.name}`)}>
                              <Image source={item?.image} style={styles.icon} />
                              <Text style={styles.title}>{item?.name}</Text>
                    </TouchableOpacity>
          );


          return (
                    <View style={styles.container}>
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
          icon: {
                    height: 46,
                    width: 46,
                    marginHorizontal: 20,
          },
          title: {
                    marginHorizontal: 20,
                    marginVertical: 5,
                    width: 48,
                    fontSize: 15

          }
});

export default HomeScreen