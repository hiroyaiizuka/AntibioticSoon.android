import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, Button, View, ScrollView, TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements';

class SevereHAPScreen extends React.Component{
    state = {
        checked: false,
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
    }

    
    static navigationOptions = ({navigation}) =>{
        const {state} = navigation
        return {
            title: '重症度評価',
            headerStyle: { backgroundColor : 'rgb(24,77,116)'},
            headerTintColor: "#fff",
            headerRight: 
            <View> 
                <TouchableOpacity style = {{paddingRight:15}} onPress={() => state.params.handleCcr()}> 
                    <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}> 治療 </Text> 
                </TouchableOpacity> 
            </View>,
            headerTitleStyle: {
                width: '85%',
                textAlign: 'center',
                color: '#fff'
            },
        }
    }
    
    componentDidMount(){
        this.props.navigation.setParams({handleCcr: ()=> this.props.navigation.navigate('Escalate2')})
    }

    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
            <ScrollView　horizontal={true} pagingEnabled={true} >

                 <View style={{
                    width: screenWidth,
                    backgroundColor: 'rgb(254,254,246)',
                    flex: 1,
                }}>
                    <Text style = {styles.iroad}> I -ROAD </Text>
                    <CheckBox 
                        title= 'I: 免疫         悪性腫瘍、または免疫不全状態'　
                        checked = {this.state.checked} 
                        onPress={()=> this.setState({checked: !this.state.checked})}/>
                    <CheckBox 
                        title= 'R: 呼吸         FiO2>35% 必要'　
                        checked = {this.state.checked1} 
                        onPress={()=> this.setState({checked1: !this.state.checked1})}/>
                    <CheckBox 
                        title= 'O: 意識        意識レベルの低下'　
                        checked = {this.state.checked2} 
                        onPress={()=> this.setState({checked2: !this.state.checked2})}/>
                    <CheckBox 
                        title= 'A: 年齢        男性 ≧70歳、女性 ≧75歳'　
                        checked = {this.state.checked3} 
                        onPress={()=> this.setState({checked3: !this.state.checked3})}/>     
                    <CheckBox 
                        title= 'D: 脱水        乏尿または脱水'　
                        checked = {this.state.checked4} 
                        onPress={()=> this.setState({checked4: !this.state.checked4})}/>
                    <View style={styles.iroadresult}>
                      <Text  style={{marginBottom: 8, marginTop:0, fontSize: 15,color: 'rgb(255,255,255)', fontWeight:'bold',}}>  １-２項目    中等症</Text>
                      <Text style = {{  fontSize: 15,color: 'rgb(255,255,255)', fontWeight:'bold',padding:6}}>      ３項目     重症 </Text>
                    </View>
                </View>




                <View style={{
                    width: screenWidth,
                    backgroundColor: 'rgb(254,253,238)',
                    flex: 1,
                    paddingLeft: 30,
                    paddingRight: 30,
                }}>
                    <Text style = {styles.qsofa}>q -SOFA</Text>
                    <CheckBox 
                         title= '                sBP ≦ 100mmHg'
                        checked = {this.state.checked5} 
                        onPress={()=> this.setState({checked5: !this.state.checked5})}/>
                     <CheckBox 
                         title= '                 呼吸数 ≧ 22回/分'　
                        checked = {this.state.checked6} 
                        onPress={()=> this.setState({checked6: !this.state.checked6})}/>
                     <CheckBox 
                          title= '                 意識状態の変化'　
                        checked = {this.state.checked7} 
                        onPress={()=> this.setState({checked7: !this.state.checked7})}/>
                    <Text style = {styles.resultqsofa}> ２項目以上で、敗血症疑い </Text>
                   
                    <Text style = {styles.resultall}> I-ROAD ≧１項目   or   q-SOFA ≧２項目{"\n"}{"\n"}➡︎   重症 </Text>
                 
             
                    
                </View>

                
            <View　style={{
                    width: screenWidth,
                    backgroundColor: 'rgb(233,231,217)',
                    flex: 1,
                }}>  
                <Text style = {styles.taisei}>耐性菌リスク </Text>
                <CheckBox 
                    title= '   過去90日以内の経静脈的抗菌薬の使用歴'　
                    checked = {this.state.checked8} 
                    onPress={()=> this.setState({checked8: !this.state.checked8})}/>
                <CheckBox 
                    title= '   過去90日以内に2日以上の入院歴'　
                    checked = {this.state.checked9} 
                    onPress={()=> this.setState({checked9: !this.state.checked9})}/>
                <CheckBox 
                    title= '   免疫抑制状態'　
                    checked = {this.state.checked10} 
                    onPress={()=> this.setState({checked10: !this.state.checked10})}/>
                <CheckBox 
                    title= '   活動性の低下'　
                    checked = {this.state.checked11} 
                    onPress={()=> this.setState({checked11: !this.state.checked11})}/>     
                <Text style = {styles.taiseiresult}> ２項目以上で耐性菌リスク(+)</Text>
                <Text style = {styles.sankou}>成人肺炎診療ガイドライン2017</Text>
         </View>
            
            </ScrollView>
        );
    }    
}
    const styles = StyleSheet.create({
    
        iroad: {
            backgroundColor: '#fff',
            marginTop: 20,
            marginBottom: 20,
            height: 50,
            width: 170,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 13,
            fontSize: 18,
            fontWeight: 'bold'
        },
        iroadresult: {
            backgroundColor: 'rgb(130,200,143)',
            marginTop: 25,
            marginBottom: 25,
            height: 90,
            width: 178,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.2,
            shadowRadius: 1,
            alignSelf: 'center',
            padding: 19,
        },  
        qsofa: {
            backgroundColor: '#fff',
            marginTop: 23,
            marginBottom: 20,
            height: 50,
            width: 170,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 13,
            fontSize: 18,
            fontWeight: 'bold'
        },
        resultqsofa: {
            backgroundColor: 'rgb(130,200,143)',
            color: 'rgb(255,255,255)',
            fontWeight:'bold',
            marginTop: 50,
            height: 60,
            width: 250,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.2,
            shadowRadius: 1,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 17,
            fontSize: 16

        },
        resultall: {
            color: 'rgb(114,95,70)',
            fontWeight:'bold',
            marginTop: 23,
            height: 110,
            width: 350,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.2,
            shadowRadius: 1,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 20,
            fontSize: 17,
            borderColor: 'rgb(114,95,70)',
            borderRadius: 50
        },
        taisei: {
            backgroundColor: '#fff',
            marginTop: 38,
            marginBottom: 30,
            height: 55,
            width: 170,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 16,
            fontSize: 18,
            fontWeight: 'bold'
    },
    taiseiresult: {
        backgroundColor: 'rgb(130,200,143)',
        color: 'rgb(255,255,255)',
        fontWeight:'bold',
        marginTop: 40,
        height: 60,
        width: 250,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        textAlign: 'center',
        alignSelf: 'center',
        padding: 19,   
        fontSize: 16
    },
    sankou: {
        fontSize: 11,
        color: '#808080',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 35

    },
    
    })

export default SevereHAPScreen;