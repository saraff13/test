import React, { Component } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet } from 'react-native';
import STYLES from '../utils/styles';
import { connect } from 'react-redux';
import {initLogin} from '../store/actions/loginAction';
import Button from '../components/Button';

class Login extends Component{
    state = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
        isLoggedIn: false,
        isError: false,
    };

    render(){
        const {email, password, isLoggedIn, isError} = this.state;
        // const {loading, user, error} = this.props;

        // if(user){
        //     return(
        //         <Home />
        //     );
        // }
        // if(error){
        //     return(
        //         <Login />
        //     );
        // }

        return (
            <SafeAreaView style={[STYLES.main,styles.main]}>
                {/* <Loader loading={loading}/> */}
                {/* {loading?<Loader />:null} */}
                <Text style={[styles.logo]}>LOGO</Text>
                <TextInput 
                    style={[styles.input]} 
                    placeholder="Enter your email"
                    value = {email}
                    onChangeText = {value => this.setState({email:value})}
                />
                <TextInput 
                    style={[styles.input]} 
                    placeholder="Enter your password"
                    secureTextEntry
                    value = {password}
                    onChangeText = {value => this.setState({password:value})}
                />
                <Button 
                    title="Sign in" 
                    onPress={() => this.props.initLogin(this.state)}
                />
            </SafeAreaView>
        );
    };
};

// export default Login;

// const mapStateToProps = state => {
//     return {
//         loading: state.loginReducer.loading,
//         user: state.loginReducer.user,
//         error: state.loginReducer.error,
//     };
// };
// export default connect(mapStateToProps,{initLogin})(Login);

export default connect(null,{initLogin})(Login);


const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        paddingVertical: 38,
        paddingHorizontal: 32,
        borderWidth: 1,
        margin: 20,
        
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        margin: 10,
        width: 300,
        fontSize: 25,
    }
});