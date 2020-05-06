import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Card, CardItem, Body} from 'native-base';

export default class  Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
    };
  }
    render(){
      let {capitaldata} = this.props.navigation.state.params;

      let {temperature, wind_speed, precip, weather_icons} = capitaldata.current;
      let {
        location: {name},
      } = capitaldata;
      return (
        <View style={styles.container}>
          <Card>
            <CardItem>
              <Body>
                <Text style={{marginVertical: 1}}>
                  <Text style={styles.label}>Capital City: </Text>
                  {name}
                </Text>
                <Text style={{marginVertical: 1}}>
                  <Text style={styles.label}>Temperature: </Text>
                  {`${temperature} celcius`}
                </Text>
                <Text style={{marginVertical: 1}}>
                  <Text style={styles.label}>Precipitation: </Text>
                  {precip}
                </Text>
                <Text style={{marginVertical: 1}}>
                  <Text style={styles.label}>Wind speed: </Text> {wind_speed}
                </Text>
              </Body>
              <Body style={styles.iconPlate}>
                {weather_icons.map(eachIcon => (
                  <Image
                    source={{uri: eachIcon}}
                    style={{width: 50, height: 50, marginLeft: 50}}
                  />
                ))}
              </Body>
            </CardItem>
          </Card>
        </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {flex: 1},
  label: {fontWeight: 'bold', color: '#000'},
  iconPlate: {flexDirection: 'row', flexWrap: 'wrap'},
});
