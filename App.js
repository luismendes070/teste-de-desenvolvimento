/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, Button, Image} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    render() {

        return (

            <View style={{flex: 1,flexDirection: 'column'}}>

                <View style={
                    {flex: 1, flexDirection: 'row', justifyContent: 'space-between'}
                }>
                    <Image source={require('./images/ic_yoga.png')}/>
                    <Image source={require('./images/ic_upper_body.png')}/>
                    <Image source={require('./images/ic_lower_body.png')}/>
                    <Image source={require('./images/ic_dance.png')}/>
                    <Image source={require('./images/ic_yoga.png')}/>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text></Text>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('./images/running.png')}/>
                    <Text style={styles.titulos}>CORRIDA</Text>
                </View>

                <View style={{flex: 1,flexDirection: 'row'}}>
                    <Image source={require('./images/ic_yoga.png')}/>
                    <Text style={styles.subtitulos}>400Kcal</Text>
                    <Image source={require('./images/ic_time.png')}/>
                    <Text style={styles.subtitulos}>30m</Text>
                    <Image source={require('./images/ic_balance.png')}/>
                    <Text style={styles.subtitulos}>52Kg</Text>
                </View>

                <View style={styles.botoes}>
                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                        }}

                        title="HOJE"
                        color="#841584"
                        accessibilityLabel="botão hoje"
                    />

                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                        }}
                        title="ONTEM"
                        color="#841584"
                        accessibilityLabel=""
                    />


                </View>




                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('./images/cycling.png')}/>
                    <Text style={styles.titulos}>BICICLETA</Text>


                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('./images/ic_yoga.png')}/>
                    <Text style={{flex: 1, flexDirection: 'row'}}>630Kcal</Text>
                    <Image source={require('./images/ic_time.png')}/>
                    <Text style={{flex: 1, flexDirection: 'row'}}>40m</Text>
                    <Image source={require('./images/ic_balance.png')}/>
                    <Text style={{flex: 1, flexDirection: 'row'}}>52Kg</Text>
                </View>

                <View style={styles.botoes}>
                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                        }}
                        title="HOJE"
                        color="#841584"
                        accessibilityLabel="You tapped the button!"
                    />

                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                        }}
                        title="ONTEM"
                        color="#841584"
                        accessibilityLabel="You tapped the button!"
                    />
                </View>


                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('./images/gym.png')}/>
                    <Text style={styles.titulos}>MUSCULAÇÃO</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('./images/ic_yoga.png')}/>
                    <Text style={styles.subtitulos}>950Kcal</Text>
                    <Image source={require('./images/ic_time.png')}/>
                    <Text style={styles.subtitulos}>1h</Text>
                    <Image source={require('./images/ic_balance.png')}/>
                    <Text style={styles.subtitulos}>52Kg</Text>
                </View>
                <View style={styles.botoes}>
                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                        }}
                        title="HOJE"
                        color="#841584"
                        accessibilityLabel="You tapped the button!"
                    />

                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                        }}
                        title="ONTEM"
                        color="#841584"
                        accessibilityLabel="You tapped the button!"
                    />
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('./images/yoga.png')}/>
                    <Text style={styles.titulos}>YOGA</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('./images/ic_yoga.png')}/>
                    <Text style={styles.subtitulos}>200Kcal</Text>
                    <Image source={require('./images/ic_time.png')}/>
                    <Text style={styles.subtitulos}>80m</Text>
                    <Image source={require('./images/ic_balance.png')}/>
                    <Text style={styles.subtitulos}>52Kg</Text>
                </View>
                <View style={styles.botoes}>
                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                        }}
                        title="HOJE"
                        color="#841584"
                        accessibilityLabel="You tapped the button!"
                    />

                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                        }}
                        title="ONTEM"
                        color="#841584"
                        accessibilityLabel="You tapped the button!"
                    />
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    titulos: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }, subtitulos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }, botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
});
