import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { HeaderStyleLogin, Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
       onEmailChange(text) {
            this.props.emailChanged(text);
        }
        onPasswordChange(text){
            this.props.passwordChanged(text);
        }
        onButtonPress(){
            const { email, password } = this.props;

            this.props.loginUser({ email, password });
        }
        renderButton(){
            if(this.props.loading) {
                return <Spinner size="large" />
            } 
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            );                
        }
    render() {
        return (
            <View style={{ backgroundColor: "#fff", }}>
                <Card>
                <HeaderStyleLogin />

                <Text style={styles.marginText}>Email Address</Text>
                
                <CardSection>                    
                    <Input
                        autoCapitalize={"none"}
                        label="Email"
                        placeholder="Please enter your email"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                
                    <Text style={styles.textStyle}>Password</Text>
                
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="********"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <Text style={styles.errorText}>
                    {this.props.error}
                </Text>
                {this.renderButton()}                
            <View style={{ marginBottom: 120,}} />
            </Card>  
        </View>          
        );
    }
};

const styles = {
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }, 
    marginText: {
        marginTop: 50,
        color: '#00CAFA',
        alignSelf: 'center',
    },
    textStyle: {
        color: '#00CAFA',
        alignSelf: 'center',
    }
}

const mapStateToProps = ({auth}) => {
    
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm); 