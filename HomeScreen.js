import React, { Component } from 'react';
import {StyleSheet,Text,View,ScrollView, TouchableOpacity,Button} from 'react-native';
import {Linking} from 'react-native';

class HomeScreen extends React.Component{
    constructor(props) {
        super(props);
      }


    render(){
      
        return(
            <ScrollView style ={styles.container}>
                
                    <View style = {styles.haien}>
                      <Text style = {styles.haienText}> 肺炎</Text>
                    </View>
                    <TouchableOpacity style = {{paddingLeft:135, paddingBottom: 35}} onPress = {() =>{ this.props.navigation.navigate('Scroll')}}>
                        <Text style={{color: 'rgb(52,62,62)', paddingTop: 20}}>・市中肺炎</Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity style = {{paddingLeft:135, paddingBottom: 25}} onPress = {() =>{ this.props.navigation.navigate('SevereN')}}>
                        <Text style={{color: 'rgb(52,62,62)'}}>・医療介護関連肺炎{"\n"}   (NHCAP)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {{paddingLeft:135, paddingBottom: 10}} onPress = {() =>{ this.props.navigation.navigate('SevereH')}}>
                        <Text style={{color: 'rgb(52,62,62)'}}>・院内肺炎{"\n"}   (HAP)</Text>
                    </TouchableOpacity>

                    <View style = {styles.nyouro}>
                        <Text style = {styles.haienText}> 尿路感染症 </Text>
                    </View>
                    <TouchableOpacity style = {{paddingLeft:135, paddingBottom: 10}} onPress = {() =>{ this.props.navigation.navigate('Different')}}>
                        <Text >・尿路感染症</Text>
                    </TouchableOpacity>

                    <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 50,
                                    marginBottom: 10
                                    }}>
                        <Text style={{color: 'grey', fontSize: 10}} onPress = {()=> Linking.openURL('https://medical-leap.com/2018/10/07/rule/')}> 利用規約</Text>
                        <Text style={{color: 'grey' , fontSize: 10 ,paddingLeft: 25}} onPress = {()=> Linking.openURL('https://medical-leap.com/2018/10/07/privacy_policy/')}>プライバシーポリシー</Text>
                    </View>
           </ScrollView>
         
        );
    }    
}
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'rgb(250,250,240)',
            height: 1000,

        },
        haien: {
            backgroundColor: 'rgb(130,200,143)',
            alignSelf: 'center',
            padding:14,
            borderRadius: 4,
            width: 250,
            marginTop:60,
            marginBottom: 30  
        },
        haienText: {
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          
        },
        nyouro: {
            backgroundColor: 'rgb(130,200,143)',
            alignSelf: 'center',
            padding:14,
            borderRadius: 4,
            width: 250,
            marginTop:60,
            marginBottom: 40 
        },
        
    })


export default HomeScreen;