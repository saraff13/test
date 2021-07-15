import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet, View, Image, Linking } from "react-native";
import { connect } from "react-redux";
import Button from "../components/Button";
import Header from "../components/Header";
import STYLES from '../utils/styles';
import ImagePicker from 'react-native-image-crop-picker';
import RNLocation from 'react-native-location';


class Profile extends Component{
    state = {
        images: [],
        location: ""
    };

    pickImage = () => {
        ImagePicker.openPicker({
            multiple: true
          }).then(images => {
              this.setState({images: images});
            console.log(images);
          })
          .catch(error => {
              console.log(error.code);
              if (error.code !== 'E_PICKER_CANCELLED') Linking.openSettings();
          });
    };
    getLocation = () => {
        RNLocation.configure({
            distanceFilter: 5.0
          });
        // RNLocation.checkPermission({
        //     ios: 'whenInUse', // or 'always'
        //     android: {
        //       detail: 'coarse' // or 'fine'
        //     }
        //   }).then(granted => {
        //     console.log('granted => ', granted);
            // RNLocation.requestPermission({
            //     ios: "whenInUse",
            //     android: {
            //       detail: "coarse"
            //     },
            //     rationale: {
            //         title: "We need to access your location",
            //         message: "We use your location to show where you are on the map",
            //         buttonPositive: "OK",
            //         buttonNegative: "Cancel"
            //       }
            //   });

            // if (granted)
            //   RNLocation.getLatestLocation().then(location => {
            //     console.log('location => ', location);
            //     this.setState({
            //       location,
            //     });
            //   });
        //   })
        //   .catch(error => {
        //     console.log('error => ', error);
        //   });
        RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
              detail: "fine",
              rationale: {
                title: "Location permission",
                message: "We use your location to demo the library",
                buttonPositive: "OK",
                buttonNegative: "Cancel"
              }
            }
          }).then(granted => {
            console.log('granted => ', granted);
            if (granted) {
                this._startUpdatingLocation();
              }

            // if (granted)
            //   RNLocation.getLatestLocation().then(location => {
            //     console.log('location => ', location);
            //     this.setState({
            //       location,
            //     });
            //   });
          })
          .catch(error => {
            console.log('error => ', error);
          });
    };

    _startUpdatingLocation = () => {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
          locations => {
            this.setState({ location: locations[0] });
          }
        );
      };
    
      _stopUpdatingLocation = () => {
        this.locationSubscription && this.locationSubscription();
        this.setState({ location: null });
      };
    
      _openRepoUrl = () => {
        Linking.openURL(repoUrl).catch(err =>
          console.error("An error occurred", err)
        );
      };

    render(){
        const {images,location} = this.state;
        return(
            <>
            <Header
                title='Profile'
                navigation={this.props.navigation}
            />
            <SafeAreaView  style={[STYLES.main,styles.main]}>
                <Text>Profile</Text>
                <Button title="Home" onPress={() => this.props.navigation.navigate('Home')}/>
                <Button title="Pick Image" onPress={this.pickImage}/>
                <Button title="Get Location" onPress={this.getLocation}/>
                {location ? <Text>{JSON.stringify({location})}</Text> : null}
                <View>
                    {images.map((image,index) => {
                        return (
                            <Image 
                                key = {index}
                                source = {{uri: image.sourceURL}}
                            />
                        );
                    })}
                </View>
            </SafeAreaView>
            </>
        );
    };
};

export default connect(null)(Profile);

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});