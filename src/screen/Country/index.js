//407a3041920fabcdd2ed17b682176647
import React from 'react';
import {View,StyleSheet,Dimensions,TextInput} from 'react-native';
import {Container,Button,Text} from 'native-base';
const axios = require('axios');
const deviceHeight = Dimensions.get('window').height;
export default class Country extends React.Component{
    constructor(props){
        super(props);
        this.state={
            countryName:""
        }
    }

    async handleSubmit(){
        //https://restcountries.eu/rest/v2/name/
        try {
            const response = await axios.get(`https://restcountries.eu/rest/v2/name/${this.state.countryName}`);
           // alert("data"+capitalData)
            if(response.data.length>0){
                this.props.navigation.navigate('Capital',{capitalData:response.data});
            }
        } catch (error) {
            alert("error"+error.message)
        }

    }
    setCoutryName(name){
        this.setState({countryName:name})
    }
    render(){
        return(
            <Container>
                <View style={{ flex:1,marginHorizontal:10}}>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Enter country"
                        onChangeText={(countryName)=>this.setCoutryName(countryName)}
                    />
                    <Button block  onPress={()=>this.handleSubmit()} ><Text>SUBMIT</Text></Button>
                </View> 
            </Container>
        );
    }
}

const styles =  StyleSheet.create({
    textinput:{
        height: deviceHeight/10,
        paddingHorizontal:5,
        marginVertical: 10,
        borderColor:'#000',
        borderWidth:1,
        borderRadius:8
    }
})