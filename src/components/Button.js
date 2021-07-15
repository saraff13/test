import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class Button extends Component{
    render(){
        const { title, onPress = () => {} } = this.props
        
        return (
            <TouchableOpacity onPress={onPress} style={[styles.main]}>
                <Text style={[styles.ButtonText]}>{title}</Text>
            </TouchableOpacity>
        );
    };
}

export default Button;

// const mapStateToProps = state => ({
//     loader_Loading: state.loaderReducer.loading,
// });

// export default connect(mapStateToProps)(Loader);

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        padding: 10,
        width: 300,
        marginVertical: 15,
    },
    ButtonText: {
        fontSize: 20,
        color: 'white',
    },
});