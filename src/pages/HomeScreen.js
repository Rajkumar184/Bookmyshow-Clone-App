import React from 'react'
import HomeScreenOne from '../components/Home/HomeScreenOne'
import HomeScreenTwo from '../components/Home/HomeScreenTwo';
import HomeScreenThree from '../components/Home/HomeScreenThree';
import HomeScreenFour from '../components/Home/HomeScreenFour';
import HomeScreenFive from '../components/Home/HomeScreenFive';
import HomeScreenSix from '../components/Home/HomeScreenSix';
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, Pressable, Button } from 'react-native';

const HomeScreen = () => {
          return (


                    <SafeAreaView style={styles.container}>
                              <ScrollView style={styles.scrollView}>
                                        <HomeScreenOne />
                                        <HomeScreenTwo />
                                        <HomeScreenThree />
                                        <HomeScreenFour />
                                        <HomeScreenFive />
                                        <HomeScreenSix />
                              </ScrollView>

                    </SafeAreaView>


          )
}

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    paddingTop: StatusBar.currentHeight,
          },
          scrollView: {
                    marginHorizontal: 5,
          }
});

export default HomeScreen