import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, Button } from 'react-native';
import Center_banner from "../../assets/images/center-banner.avif"


const carouselItems = [
          { title: 'kantara', language: "Hindi, English, Telugu", description: "When greed paves the way for betrayal, scheming", image: require('../../assets/images/et00345632-emgpxpelpy-portrait.avif') },
          { title: 'A Man Called Otto', language: "Hindi, English, Telugu", description: "When greed paves the way for betrayal, scheming", image: require('../../assets/images/et00348517-zakyzgvslx-portrait.avif') },
          { title: 'Insight', language: "Hindi, English, Telugu", description: "When greed paves the way for betrayal, scheming", image: require('../../assets/images/et00353259-uwavceaqaj-portrait.avif') },
          { title: 'Litvinenko', language: "Hindi, English, Telugu", description: "When greed paves the way for betrayal, scheming", image: require('../../assets/images/et00352890-cgsmbbtvdb-portrait.avif') },
          { title: 'Legacy Peack', language: "Hindi, English, Telugu", description: "When greed paves the way for betrayal, scheming", image: require('../../assets/images/et00354579-rkdxtxuszh-portrait.avif') },
];


const Carousel = () => {


          return (
                    <ScrollView horizontal={true} style={styles.carousel}>
                              {carouselItems.map(item => (

                                        <View key={item.title}>
                                                  <View>
                                                            <View style={styles.carouselItem}>
                                                                      <View style={styles.card} key={item?.id}>
                                                                                <Image source={item.image} style={styles.carouselImage} />
                                                                      </View>


                                                                      <View style={styles.carouselContent}>
                                                                                <Text style={styles.carouselTitle}>{item.title}</Text>
                                                                                <Text style={styles.carouselDescription}>
                                                                                          {item.language}
                                                                                </Text>
                                                                                <Text style={styles.carouselDescription}>
                                                                                          {item.description}
                                                                                </Text>

                                                                      </View>
                                                            </View>
                                                            <View style={styles.rentBtn} >
                                                                      <Button
                                                                                title="Buy or Rent"
                                                                                color="rgb(236, 94, 113)"
                                                                                backgroundColor="rgb(236, 94, 113)"
                                                                                style={{ textTransform: "capitalize", width: 200 }}
                                                                      />
                                                            </View>


                                                  </View>





                                        </View>





                              ))}

                    </ScrollView>
          );
};


const HomeScreenSix = () => {

          return (


                    <View style={styles.container}>

                              <Carousel />
                    </View>


          );
}

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    backgroundColor: 'rgb(43, 49, 72)',
          },
          carousel: {
                    height: 300,
                    marginVertical: 20,
                    borderRadius: 10,
          },
          rentBtn: {
                    marginVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                    textAlign: "center",
          },
          carouselItem: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    borderRadius: 10,
          },
          card: {
                    width: 120,
                    // height: 200,
                    marginRight: 10,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                              width: 0,
                              height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
          },
          carouselImage: {
                    width: 120,
                    height: 180,
                    resizeMode: 'cover',
                    borderRadius: 10,
          },
          carouselContent: {
                    marginLeft: 20,
                    alignItems: "flex-start",
                    width: 150
          },
          carouselTitle: {
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 10,
          },
          carouselDescription: {
                    color: '#fff',
                    fontSize: 16,
                    marginVertical: 5
          },
});

export default HomeScreenSix