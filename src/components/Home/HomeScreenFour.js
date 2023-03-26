import React from 'react'
import { View, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('window');

const icons = [
          { name: 'An EDM-infushed Holi season awaits!', image: require('../../assets/images/event1.avif') },
          { name: 'An EDM-infushed Holi season awaits!', image: require('../../assets/images/event2.avif') },
          { name: 'An EDM-infushed Holi season awaits!', image: require('../../assets/images/event3.avif') },
          { name: 'An EDM-infushed Holi season awaits!', image: require('../../assets/images/event4.avif') },
];
const HomeScreenFour = () => {
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
                                        <Text style={styles.top}>Martin Garix - LIVE in India!</Text>
                                        <Text style={styles.bottom}>Unleash your PARTY 'Animals'!</Text>

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

                    alignItems: "left",
                    marginBottom: 10
          },
          top: {
                    fontSize: 20,
                    fontWeight: "bold"
          },
          bottom: {
                    fontSize: 16,
                    fontWeight: "400"
          },
          right: {
                    flexDirection: "row",
                    alignItems: "center",
                    color: "rgb(236, 94, 113)"
          },
          card: {
                    width: 300,
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
                    width: 300,
                    fontSize: 16,
                    fontWeight: "600",
                    // display: '-webkit-box',
                    // WebkitLineClamp: 2,
                    // WebkitBoxOrient: 'vertical',
                    // overflow: 'hidden',
                    marginVertical: 5
          },
});

export default HomeScreenFour