/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, Button, Image, ScrollView, SectionList, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                        }}

                        title="HAMBURGUER"
                        color="#841584"
                        accessibilityLabel="botão"

                    />
                    <Text>MEU PERFIL</Text>
                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                        }}

                        title="SOL"
                        color="#841584"
                        accessibilityLabel="botão"
                    />
                </View>
                <View style={styles.containerFlatList}>
                    <FlatList
                        data={[
                            {key: 'Devin'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </View>

                <View style={styles.containerSectionList}>
                    <SectionList
                        sections={[
                            {title: 'D', data: ['Devin']},
                            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                </View>


                <View style={
                    {flex: 1, flexDirection: 'row'}
                }>
                    <Image style={{width: 40, height: 40}} source={require('./images/ic_yoga.png')}/>
                    <Image style={{width: 40, height: 40}} source={require('./images/ic_upper_body.png')}/>
                    <Image style={{width: 40, height: 40}} source={require('./images/ic_lower_body.png')}/>
                    <Image style={{width: 40, height: 40}} source={require('./images/ic_dance.png')}/>
                    <Image style={{width: 40, height: 40}} source={require('./images/ic_yoga.png')}/>
                </View>


                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('./images/running.png')}/>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={styles.titulos}>CORRIDA</Text>
                    </View>


                    <View style={{flex: 1, flexDirection: 'row'}}>
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
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={styles.titulos}>BICICLETA</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('./images/cycling.png')}/>
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


            </ScrollView>


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
        fontFamily: 'Montserrat'
    },
    titulos: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontFamily: 'Montserrat'
    }, subtitulos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    fontFamily: 'Montserrat'
    }, botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    fontFamily: 'Montserrat'
    }, containerFlatList: {
        flex: 1,
        paddingTop: 22,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    itemFlatList: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontFamily: 'Montserrat',
    }, containerSectionList: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeaderSectionList: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontFamily: 'Montserrat',
    },
    itemSectionList: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontFamily: 'Montserrat',
    },
    textoPaleta: {
        color: '#7F38F4'
    },
    inicioGradientePaletta: {
        color: '#7F38F4'
    },
    fimGradientePaleta: {
        color: '#F22B48'
    }, paleta1: {
        color: '#19B996'
    }, paleta2: {
        color: '#FD3C29'
    }, paleta3: {
        color: '#262F38'
    }, paleta4: {
        color: '#323C47'
    }
});
