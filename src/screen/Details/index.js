import React from 'react';
import { View, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native';
import { Container, Button, Text, ListItem, Left, Right, Body } from 'native-base';
const axios = require('axios');
const deviceHeight = Dimensions.get('window').height;

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryDetails: this.props.navigation.state.params.Capital
        }
    }

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
                <ListItem>
                <Left>

                </Left>
                <Body>
                    <Text>temperature <Text>{item.temperature}</Text></Text>
                    <Text>wind_speed <Text>{item.wind_speed}</Text></Text>
                    <Text>precip <Text>{item.precip}</Text></Text>
                </Body>
            </ListItem>
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