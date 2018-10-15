import React, { Component } from 'react';
import {StyleSheet,Text,View, TouchableOpacity, ScrollView, Image} from 'react-native';

class DifferentScreen extends React.Component{

  static navigationOptions = () =>{
    return {
    title: '単純性と複雑性',
    headerStyle: { backgroundColor : 'rgb(114,95,70)'},
    headerTitleStyle: {
        width: '70%',
        textAlign: 'center',
      }
  }
}

    render(){
        return(
       
            <ScrollView style = {styles.container}>
                <View style ={styles.judge}> 
                    <Text style ={styles.judgetext}>単純性尿路感染症</Text>
                </View>

                <Image style ={{ width:300, height:150,  marginLeft: 'auto', marginRight: 'auto', position: 'relative',top:10, left: 5}} source = {require('./image/AdobeStock_162240635.jpeg')}/>
                <TouchableOpacity style={styles. simp}
                    onPress = {() =>{ this.props.navigation.navigate('Simple')}}> 
                    <Text style={{fontSize: 20, color: 'blue'}}>治療へ</Text>
                </TouchableOpacity>

                
                <View style ={styles.judge}> 
                     <Text style ={styles.judgetext} >複雑性尿路感染症</Text>
                </View>

                <View style ={{flexDirection: 'row', paddingBottom: 10,  marginLeft: 'auto', marginRight: 'auto'}}>
                    <Image style ={{ width:90, height:120, position: 'relative',top:10, right: 5}} source = {require('./image/AdobeStock_45974064.jpeg')}/>
                    <Image style ={{ width:90, height:120, position: 'relative',top:10, left:0}} source = {require('./image/AdobeStock_121777785.jpeg')}/>
                    <Image style ={{ width:120, height:120, position: 'relative',top:10, right: 0}} source = {require('./image/AdobeStock_176741195.jpeg')}/>
                </View>

                <View style = {{flexDirection: 'row',  marginLeft: 'auto', marginRight: 'auto'}}>
                    <Image style ={{ width:90, height:120, position: 'relative',top:10, right: 5}} source = {require('./image/AdobeStock_138909907.jpeg')}/>
                    <Image style ={{ width:90, height:120, position: 'relative',top:10, left: 0}} source = {require('./image/AdobeStock_138952310.jpeg')}/>  
                    <Image style ={{ width:110, height:120, position: 'relative',top:10, right: -5}} source = {require('./image/anomaly2.jpeg')}/>
                </View>

                <TouchableOpacity style={styles. comp}
                     onPress = {() =>{ this.props.navigation.navigate('Complex')}}> 
                    <Text style={{fontSize: 20, color: 'blue'}}>治療へ</Text>
                </TouchableOpacity>

            
            </ScrollView>
     
        )
    }
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(250,250,240)',
      height:1000,
      paddingLeft:35,
      paddingRight:35,
    },
    judge: {
      backgroundColor: '#fff',
      marginTop: 50,
      marginBottom: 15,
      height: 50,
      width: 160,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.5},
      shadowOpacity: 0.4,
      shadowRadius: 2,
      alignSelf: 'center',
      padding: 15,
      
    },
    judgetext:{
      fontSize: 14,
      fontWeight: 'bold',
      padding: 3,
      textAlign: 'center',
    },
    simp: {
      alignItems: 'center',
      paddingTop: 40,
      paddingBottom: 25
  
    },
    assess: {
        backgroundColor: 'rgb(130,200,143)',
        marginTop: 35,
        marginBottom: 7,
        height: 400,
        width: 373,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        alignSelf: 'center',
        padding: 19,    
    },
    comp: {
      alignItems: 'center',
      paddingTop: 40,
      paddingBottom: 50
  
    },
  })

export default DifferentScreen;

