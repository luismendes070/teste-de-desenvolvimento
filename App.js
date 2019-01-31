/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    Button,
    Image,
    ScrollView,
    SectionList,
    FlatList,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
type Props = {};
export default class App extends Component<Props> {
	
	
	constructor(props) {
    super(props);
    this.state = {
	  corridaText:'CORRIDA',
	  caloriaCorridaText:400,
	  distanciaCorridaText:30,
	  kgCorrida:52
    };
  }
	
    render() {
		
	const gradientHeight=80;
    const gradientBackground  = '#F22B48';
    const data = Array.from({ length: gradientHeight });
		
        return (
            <ScrollView style={{ backgroundColor: '#262F38'}}> 
                    <Text 
					style={{color: '#FEFFFF', fontFamily: 'Montserrat', fontSize: 36, textAlign:'center' }}>MEU PERFIL</Text>
               
                <View style={
                    {flex: 1, flexDirection: 'row', color: '#323C47', backgroundColor: '#323C47', margin: 10, padding: 20}
                }>
				
				<View style={{flex:1, flexDirection: 'row'}}>
              {data.map((_, i) => (
                  <View
                      key={i}
                      style={{
                          position: 'absolute',
						  borderRadius: 50,
						  color: '#7F38F4',
                          backgroundColor: gradientBackground,
                          height: 1,
                          bottom: (gradientHeight - i),
                          right: 0,
                          left: 0,
                          zIndex: 2,
                          opacity: (1 / gradientHeight) * (i + 1)
                      }}
                  />
              ))}
              <Image style={{borderRadius:50, backgroundColor:'#7F38F4', width:50, height:50, margin: 10}} 
			  source={require('./images/ic_yoga.png')}/>
			  
			  <Image style={{borderRadius:50, backgroundColor:'#7F38F4', width:50, height:50, margin: 10}} 
			  source={require('./images/ic_upper_body.png')}/>
              <Image style={{borderRadius:50, backgroundColor:'#7F38F4', width:50, height:50, margin: 10}} 
			  source={require('./images/ic_lower_body.png')}/>
              <Image style={{borderRadius:50, backgroundColor:'#7F38F4', width:50, height:50, margin: 10}} 
			  source={require('./images/ic_dance.png')}/>
              <Image style={{borderRadius:50, backgroundColor:'#7F38F4', width:50, height:50, margin: 10}} 
			  source={require('./images/ic_yoga.png')}/>
          </View>
                </View>


                <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#323C47', margin:10}}>
                    <Image style={styles.imagens} source={require('./images/running.png')}/>

                    <View style={{flex: 1, flexDirection: 'column'}}>

                        <Text style={styles.titulos,{color:'#FEFFFF'}}>{this.state.corridaText}</Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image style={{color: '#19B996'}} source={require('./images/ic_bike.png')}/>
                            <Text style={styles.subtitulos, {color: '#FEFFFF'}}>{this.state.caloriaCorridaText} Kcal</Text>
                            <Image style={{color: '#FD3C29'}} source={require('./images/ic_time.png')}/>
	<Text style={styles.subtitulos, {color: '#FEFFFF'}}>{this.state.distanciaCorridaText} m</Text>
                            <Image source={require('./images/ic_balance.png')}/>
                            <Text style={styles.subtitulos, {color: '#FEFFFF'}}>{this.state.kgCorrida} kg</Text>
                        </View>

                        <View style={styles.botoes}>
                            <Button
                                onPress={() => {
                                    Alert.alert('CORRIDA');
                                }}

                                title="HOJE"
                                color="#323C47"
                                accessibilityLabel="botão hoje"
                            />

                            <Button
                                onPress={() => {
                                    Alert.alert('CORRIDA');
                                }}
                                title="ONTEM"
                                color="#323C47"
                                accessibilityLabel=""
                            />
                        </View>

                    </View>

                </View>



                <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#323C47', margin:10}}>
                    <Image style={styles.imagens} source={require('./images/cycling.png')}/>

                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={styles.titulos, {color: '#FEFFFF'}}>BICICLETA</Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image style={{color: '#19B996'}} source={require('./images/ic_bike.png')}/>
                            <Text style={styles.subtitulos, {color: '#FEFFFF'}}>630Kcal</Text>
                            <Image style={{color: '#FD3C29'}} source={require('./images/ic_time.png')}/>
                            <Text style={styles.subtitulos, {color: '#FEFFFF'}}>40m</Text>
                            <Image source={require('./images/ic_balance.png')}/>
                            <Text style={styles.subtitulos, {color: '#FEFFFF'}}>52Kg</Text>
                        </View>

                        <View style={styles.botoes}>
                            <Button
                                onPress={() => {
                                    Alert.alert('BICICLETA');
                                }}
                                title="HOJE"
                                color="#FD3C29"
                                accessibilityLabel="You tapped the button!"
                            />

                            <Button
                                onPress={() => {
                                    Alert.alert('BICICLETA');
                                }}
                                title="ONTEM"
                                color="#323C47"
                                accessibilityLabel="You tapped the button!"
                            />
                        </View>
                    </View>

                </View>


                <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#323C47', margin:10}}>
                    <Image style={styles.imagens} source={require('./images/gym.png')}/>

                    <View style={{flex: 1, flexDirection: 'column'}} >
                        <Text style={styles.titulos, {color: '#FEFFFF'}}>MUSCULAÇÃO</Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image style={{color: '#19B996'}} source={require('./images/ic_bike.png')}/>
                            <Text style={styles.subtitulos, {color: '#FEFFFF'}}>950Kcal</Text>
                            <Image style={{color: '#FD3C29'}} source={require('./images/ic_time.png')}/>
                            <Text style={styles.subtitulos, {color: '#FEFFFF'}}>1h</Text>
                            <Image source={require('./images/ic_balance.png')}/>
                            <Text style={styles.subtitulos, {color: '#FEFFFF'}}>52Kg</Text>
                        </View>
                        <View style={styles.botoes}>
                            <Button
                                onPress={() => {
                                    Alert.alert('MUSCULAÇÃO');
                                }}
                                title="HOJE"
                                color="#323C47"
                                accessibilityLabel="You tapped the button!"
                            />

                            <Button
                                onPress={() => {
                                    Alert.alert('MUSCULAÇÃO');
                                }}
                                title="ONTEM"
                                color="#323C47"
                                accessibilityLabel="You tapped the button!"
                            />
                        </View>
                    </View>

                </View>


                <View style={{flex: 1, flexDirection: 'row', backgroundColor:'#323C47', margin:10}}>
                    <Image style={styles.imagens} source={require('./images/yoga.png')}/>

                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={styles.titulos, {color: '#FEFFFF'}}>YOGA</Text>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require('./images/ic_bike.png')}/>
                            <Text style={styles.subtitulos, {color: '#FEFFFF'}}>200Kcal</Text>
                            <Image style={{color: '#FD3C29'}} source={require('./images/ic_time.png')}/>
                            <Text style={styles.subtitulos, {color: '#FEFFFF'}}>80m</Text>
                            <Image source={require('./images/ic_balance.png')}/>
                            <Text style={styles.subtitulos, {color: '#FEFFFF'}}>52Kg</Text>
                        </View>

                        <View style={styles.botoes}>
                            <Button
                                onPress={() => {
                                    Alert.alert('YOGA');
                                }}
                                title="HOJE"
                                color="#323C47"
                                accessibilityLabel="You tapped the button!"
                            />

                            <Button
                                onPress={() => {
                                    Alert.alert('YOGA');
                                }}
                                title="ONTEM"
                                color="#19B996"

                                accessibilityLabel="You tapped the button!"
                            />
                        </View>
                    </View>

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
        textAlign: 'left',
        marginBottom: 5,
        fontFamily: 'Montserrat',
        fontSize: 20
    }, subtitulos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontFamily: 'Montserrat'
    }, botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textAlign: 'center',
        margin: 10,
        fontFamily: 'Montserrat',
		borderRadius: 50
    }, containerFlatList: {
        flex: 1,
        paddingTop: 22,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    itemFlatList: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontFamily: 'Montserrat'
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
        fontFamily: 'Montserrat'
    },
    itemSectionList: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontFamily: 'Montserrat'
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
    },imagens: {
        backgroundColor:'#262F38',
        borderRadius:50,
        width:82,
        height:84,
        borderStyle: 'solid',
        borderColor: '#000'
    }, gradiente: {
		color:'#262F38',
	backgroundColor:'#262F38',
	borderRadius:50,
	width:82,
	height:84,
	borderStyle:'solid',
	borderColor: '#000'
	}
});
