import React from 'react';
import { View, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native';
import { Container, Button, Text, ListItem, Left, Right, Body } from 'native-base';
const axios = require('axios');
const deviceHeight = Dimensions.get('window').height;

export default class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryDetails: this.props.navigation.state.params.Capital
        }
    }

    handleSubmit = async () => {
        //https://restcountries.eu/rest/v2/name/
        try {
            const response = await axios.get(`https://restcountries.eu/rest/v2/name/${this.state.countryName}`);
            if (response.length > 0) {
                this.props.navigation.navigate('Capital', { capitalData: response });
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

                </Left>
                <Body>
                    <Text>capital <Text>{item.capital}</Text></Text>
                    <Text>population <Text>{item.population}</Text></Text>
                    <Text>latlng <Text>{item.latlng}</Text></Text>
                </Body>
                <Right>
                    <Button onPress={()=>this.handleCapitalDetails(item)}><Text>Capital Weather</Text></Button>
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