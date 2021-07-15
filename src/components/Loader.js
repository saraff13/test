import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {responsiveWidth, responsiveHeight} from '../utils/Responsive';

class Loader extends Component{
    render(){
        const {loading=false, storeLoading=false} = this.props;

        if(!loading && !storeLoading)return null;

        return (
            <SafeAreaView style={[styles.main]}>
                <ActivityIndicator size={60} color='black' />
            </SafeAreaView>
            
        );
    };
}

const mapStateToProps = state => ({
    storeLoading: state.loaderReducer.storeLoading,
});

export default connect(mapStateToProps)(Loader);

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignContent: "center",
        position: "absolute",
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        backgroundColor: "rgba(0,0,0,.5)",
    },
});