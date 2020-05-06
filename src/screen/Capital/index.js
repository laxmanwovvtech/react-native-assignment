import React from 'react';
import { View, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native';
import { Container, Button, Text, ListItem, Left, Right, Body } from 'native-base';
import Svg,{Image} from "react-native-svg";
const axios = require('axios');
const deviceHeight = Dimensions.get('window').height;

export default class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryDetails: this.props.navigation.state.params.capitalData
        }
    }

    handleCapitalDetails = async (city) => {
        //https://restcountries.eu/rest/v2/name/
        try {
            const response = await axios.get(`http://api.weatherstack.com/current?access_key="407a3041920fabcdd2ed17b682176647"&query =${city}`);
            alert(JSON.stringify(response))
            if (response.length > 0) {
                this.props.navigation.navigate('Details', { capitalData: response });
            }
        } catch (error) {
            alert
        }

    }
   // http://api.weatherstack.com/current? access_key="407a3041920fabcdd2ed17b682176647"&query ="delhi"
    renderItems = ({ item }) => {
        return (
            <ListItem>
                <Left>
                    <Svg height="40%" width="40%">
                    <Image
    x="5%"
    y="5%"
    width="20%"
    height="20%"
    preserveAspectRatio="xMidYMid slice"
    opacity="0.5"
    href={item.flag}
    clipPath="url(#clip)"
  />
                    </Svg>
                </Left>
                <Body>
                    <Text>capital <Text>{item.capital}</Text></Text>
                    <Text>population <Text>{item.population}</Text></Text>
                    <Text>latlng <Text>{item.latlng}</Text></Text>
                </Body>
                <Right>
                    <Button block onPress={()=>this.handleCapitalDetails(item.capital)}><Text>Capital Weather</Text></Button>
                </Right>
            </ListItem>
        )
    }
    render() {
        return (
            <Container>
                <View style={{ marginHorizontal: 10 }}>
           
                    <FlatList
                        data={this.state.countryDetails}
                        renderItem={this.renderItems}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
        height: deviceHeight / 10,
        paddingHorizontal: 5,
        marginVertical: 10
    }
})