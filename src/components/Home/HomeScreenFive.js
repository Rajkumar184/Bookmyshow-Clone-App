import React from 'react';
import { StyleSheet, FlatList, View, Image, Text } from 'react-native';

const DATA = [
          { id: '1', image: require('../../assets/images/bstevt1.avif') },
          { id: '2', image: require('../../assets/images/bstevt2.avif') },
          { id: '3', image: require('../../assets/images/bstevt3.avif') },
          { id: '4', image: require('../../assets/images/bstevt4.avif') },
];

const Card = ({ title, image }) => {
          return (
                    <View style={styles.card}>
                              <Image source={image} style={styles.cardImage} />

                    </View>
          );
};
const HomeScreenFive = () => {
          const renderCard = ({ item }) => <Card title={item.title} image={item.image} />;


          return (
                    <View style={styles.container}>
                              <View style={styles.header} >
                                        <Text style={styles.top}>The Best Events This Week</Text>
                                        <Text style={styles.bottom}>Monday to Sunday, we got you covered</Text>

                              </View>
                              <FlatList
                                        data={DATA}
                                        renderItem={renderCard}
                                        keyExtractor={(item) => item.id}
                                        numColumns={2}
                                        columnWrapperStyle={styles.row}
                              />
                    </View>

          )
}

const styles = StyleSheet.create({
          row: {
                    flex: 1,
                    justifyContent: 'space-between',
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
          card: {
                    flex: 1,
                    alignItems: 'center',
                    margin: 10,
                    borderRadius: 10
          },
          cardImage: {
                    width: 150,
                    height: 150,
                    resizeMode: 'cover',
                    borderRadius: 10,
          },
          cardTitle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 10,
          },
});

export default HomeScreenFive