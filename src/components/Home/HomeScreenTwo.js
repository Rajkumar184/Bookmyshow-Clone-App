import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, FlatList, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
          { id: 1, image: require('../../assets/images/banner1.jpg'), title: 'Banner 1' },
          { id: 2, image: require('../../assets/images/banner2.jpg'), title: 'Banner 2' },
          { id: 3, image: require('../../assets/images/banner3.avif'), title: 'Banner 3' },
];


const HomeScreenTwo = () => {

          const [index, setIndex] = useState(0);
          const flatListRef = useRef(null);

          const handleScroll = event => {
                    const slideWidth = event.nativeEvent.layoutMeasurement.width;
                    const offset = event.nativeEvent.contentOffset.x;
                    const currentIndex = Math.round(offset / slideWidth);
                    setIndex(currentIndex);
          };

          useEffect(() => {
                    const timer = setInterval(() => {
                              const newIndex = (index + 1) % data.length;
                              flatListRef.current.scrollToIndex({ index: newIndex });
                              setIndex(newIndex);
                    }, 3000);
                    return () => clearInterval(timer);
          }, [index]);

          const renderItem = ({ item }) => (
                    <View style={styles.slide}>
                              <Image source={item.image} style={styles.image} />
                    </View>
          );

          return (
                    <View style={styles.container}>
                              <FlatList
                                        data={data}
                                        renderItem={renderItem}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        pagingEnabled
                                        onScroll={handleScroll}
                                        ref={flatListRef}
                              />
                              <View style={styles.pagination}>
                                        {data.map((_, i) => (
                                                  <View
                                                            key={i}
                                                            style={[
                                                                      styles.dot,
                                                                      { backgroundColor: i === index ? '#000' : '#888' },
                                                            ]}
                                                  />
                                        ))}
                              </View>
                    </View>
          )
}

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    backgroundColor: '#fff',
          },
          slide: {
                    width,
                    alignItems: 'center',
          },
          image: {
                    width: '100%',
                    height: 200,
                    resizeMode: 'cover',
          },
          title: {
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginTop: 16,
          },
          pagination: {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 16,
                    left: 0,
                    right: 0,
          },
          dot: {
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginHorizontal: 4,
          },
});

export default HomeScreenTwo