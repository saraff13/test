import React, { Component } from "react";
import { Text, StyleSheet, FlatList, View, Image, Dimensions, RefreshControl } from "react-native";
import { connect } from "react-redux";
import { getFeed } from '../store/actions/newsAction';

const {width} = Dimensions.get('screen');

class Notifications extends Component{
    componentDidMount(){
        this.fetchData(false);
    }

    fetchData = (isPaginated = true) => {
        const {getFeed, newsData} = this.props;
        if(!isPaginated){
            getFeed({data:[],pageNo: 1});
            return;
        }
        const data = (newsData && newsData.data) || [];
        const currPageNo = (newsData && newsData.page) || 0;
        const pageNo = currPageNo+1;
        if(pageNo<=newsData.total_pages)getFeed({data, pageNo});
    } 

    render(){
        const {newsData} = this.props;
        // console.log('data => ',newsData);
        return(
            <FlatList 
                data = {(newsData && newsData.data) || []}
                renderItem = {renderItem}
                onEndReached={({distanceFromEnd}) => {
                    if (distanceFromEnd >= 0) this.fetchData();
                }}
                onEndReachedThreshold = {0.5}
                refreshControl = {
                    <RefreshControl 
                        refreshing={false}
                        onRefresh={() => this.fetchData(false)}
                    />
                }
                ListFooterComponent={<View style={styles.listFooter} />}
                ListHeaderComponent={
                    <View>
                        <Text style={styles.listTitle}>News Feed</Text>
                    </View>
                }
            />
        );
    };
};

const mapStateToProps = state => ({
    newsData: state.newsReducer.data,
    error: state.newsReducer.error,
});

export default connect(mapStateToProps,{getFeed})(Notifications);

const renderItem = item => {
    const {id,email,first_name,last_name,avatar} = item.item;
    // console.log(avatar);
    return (
        <View style={styles.item}>
            <Image style={styles.itemImage} source={{uri: avatar}} />
            <View style={styles.itemRight}>
                <Text style={styles.text}>Id: {id}</Text>
                <Text style={styles.text}>Name: {first_name} {last_name}</Text>
                <Text style={styles.text}>Email: {email}</Text> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
      alignContent: 'center',
      margin: 20,
    },
    image: {
      height: (width - 60) / 2,
      width: (width - 60) / 2,
      margin: 5,
    },
    imageUpper: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    mapUpper: {width: '100%', height: 400, backgroundColor: 'red'},
  
    item: {padding: 10, margin: 20, backgroundColor: 'darkcyan'},
    text: {paddingVertical: 5, color: 'white', marginLeft: 15},
    itemImage: {width: 100, height: 100, borderRadius: 60, marginBottom: 10},
    listTitle: {fontSize: 20, paddingTop: 20, paddingLeft: 20, textAlign:'center'},
    listFooter: {height: 30},
  });