import React, { Component } from 'react';
import { Dimensions, Text,View,ScrollView, StyleSheet} from 'react-native';

class Escalation2Screen extends React.Component{


static navigationOptions = ({navigation}) =>{
  const {state} = navigation
  return {
      title: '治療',
      headerStyle: { backgroundColor : 'rgb(24,77,116)'},
      headerTitleStyle: {
        width: '70%',
        textAlign: 'center',
      }
  }
}

    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
        <ScrollView  horizontal={true} pagingEnabled={true}>
         <View style={{
                    width: screenWidth,
                    backgroundColor: '#fff',
                    flex: 1,
                }}>

            <View >
                <Text style ={styles.esc}> 重症度が低い{"\n"}耐性菌リスク(-)</Text>
                <Text style={{fontWeight: 'bold', color: 'rgb(25,25,255)',position: 'absolute', top:78,left:12}}>escalation 治療</Text>
            </View> 
            
            <View style = {styles.guidline } >
                <Text style={{fontWeight: 'bold', paddingBottom: 4, color: 'rgb(255,255,255)',}} >内服薬(外来治療が可能な場合):</Text> 
                <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}>βラクタマーゼ阻害配合ペニシリン系 + マクロライド系{"\n"}レスピラトリーキノロン(結核をマスク！)</Text>
                <Text style={{fontWeight: 'bold', paddingTop: 20, paddingBottom: 4, color: 'rgb(255,255,255)',}}>注射薬:</Text>
                <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}>スルバクタム･アンピシリン{"\n"}セフトリアキソン (嫌気性菌感染疑いには、使用しない)</Text>
                <Text style={{fontWeight: 'bold', paddingTop: 20, paddingBottom: 4, color: 'rgb(255,255,255)',}}>非定型肺炎が疑われる場合:</Text>
                <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}>レボフロキサシン(結核をマスク！)</Text>
                <Text style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right', position: 'absolute', top:219, right:14}}> 成人市中肺炎診療ガイドライン2017</Text> 
            </View>

            <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:12, top:0, marginBottom: 5}}>ex)</Text>
            <View style = {styles.example}>
                <Text style={{fontWeight: 'bold', color: 'rgb(255,255,255)'}}>内服:</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4, fontSize:12}}>オーグメンチン 375mg + サワシリン 250mg  1日3回{"\n"}(± ジスロマック 2000mg 1回)</Text>
                <Text style={{fontWeight: 'bold', marginTop: 10, color: 'rgb(255,255,255)'}}>注射:</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4, fontSize:12}}>ロセフィン 2g/日  or  ユナシン 1.5-3g  6時間毎 </Text>
                <Text　style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',position: 'absolute', top:132, right:14}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                <Text　style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',position: 'absolute', top:140, right:14}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
            </View>


         </View>

         
         <View style={{
                     width: screenWidth,
                     backgroundColor: '#fff',
                     flex: 1,
                }}>
                <Text　style ={styles.esc}> 重症  or{"\n"}  耐性菌リスク(+)</Text>
                <Text style={{fontWeight: 'bold', paddingBottom: 4, color: 'rgb(25,25,255)',position: 'absolute', top:78, left:12}}>de-escalation  単剤治療</Text>
            

            <View style = {styles.guidline} >
                <Text style={{fontWeight: 'bold', paddingBottom: 10, paddingTop: 2, color: 'rgb(255,255,255)',}}>注射薬(単剤投与):</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 8,fontSize:12}}>第4世代セフェム系薬  or  ニューキノロン系薬{"\n"}(→ 嫌気性菌感染疑いには、使用しない)</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:17,fontSize:12}}>タゾバクタム･ピペラシン{"\n"}{"\n"}カルバペネム系 </Text>
                <Text style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',  position: 'absolute', top:219, right:14}}> 成人市中肺炎診療ガイドライン2017</Text> 
            </View>  

            <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:12, top:0, marginBottom: 5}}>ex)</Text>
            <View style = {styles.example}>
                <Text style={{fontWeight: 'bold', marginTop: 10, color: 'rgb(255,255,255)'}}>注射:</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:15,fontSize:12}}>ゾシン 4.5g  6時間毎</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4,fontSize:12}}>マキシピーム 2g  6時間毎  (嫌気性菌感染には × )</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4,fontSize:12}}>メロペン 1g  8時間毎</Text>
                <Text　style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',position: 'absolute', top:132, right:14}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                <Text　style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',position: 'absolute', top:140, right:14}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
            </View>

         </View>
         <View style={{
                width: screenWidth,
                backgroundColor: '#fff',
                flex: 1,
                }}>
           <Text　style ={styles.esc}> 重症  &{"\n"}  耐性菌リスク(+)</Text>
           <Text style={{fontWeight: 'bold', paddingBottom: 4, color: 'rgb(25,25,255)',position: 'absolute', top:78,left:12}}>de-escalation  多剤治療</Text>
           

            <View style = {styles.guidline}>
                <Text style={{fontWeight: 'bold', paddingBottom: 8, paddingTop: 2, color: 'rgb(255,255,255)',}}>注射薬(2剤併用投与):</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 1,fontSize:12}}>タゾバクタム・ピペラシン</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 1,fontSize:12}}>カルバペネム系</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 1,fontSize:12}}>第4世代セフェム系薬  (嫌気性菌感染疑いは使用しない)</Text>
             
                <Text style = {{color: 'rgb(255,255,255)', paddingLeft: 50, paddingTop:2, paddingBottom: 2, fontWeight: 'bold'}}>+</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 1,fontSize:12}}>アミノグリコシド系薬</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 1,fontSize:12}}>ニューキノロン系薬</Text>
                <Text style={{fontWeight: 'bold', paddingTop: 14, color: 'rgb(255,255,255)',}}>MRSA感染を疑う場合:　</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop: 4,fontSize:12}}>抗MRSA薬  (ダプトマイシン、アルべカシンは使用不可)</Text>
                <Text style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',  position: 'absolute', top:219, right:14}}> 成人市中肺炎診療ガイドライン2017</Text> 
            </View>
            <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:12, top:0, marginBottom: 5}}>ex)</Text>
            <View style = {styles.example}>
                <Text style={{fontWeight: 'bold', marginTop: 10, color: 'rgb(255,255,255)'}}>注射:</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:17,fontSize:12}}>ゾシン 4.5g  6時間毎</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4,fontSize:12}}> + クラビット500mg/日 or  ゲンタシン 5mg/kg/日</Text>
                <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4,fontSize:12}}>(± バンコマイシン 1g  12時間毎)</Text>
                <Text　style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',position: 'absolute', top:132, right:14}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                <Text　style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',position: 'absolute', top:140, right:14}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
            </View>
        </View>  


        </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    esc: {
        backgroundColor: '#fff',
            marginTop: 10,
            marginBottom: 1,
            height: 70,
            width: 160,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf:'center',
            padding: 15,
            fontSize: 14,
            fontWeight: 'bold'
    },
    guidline: {
        backgroundColor: 'rgb(130,200,143)',
        marginTop: 18,
        marginBottom: 7,
        height: 230,
        width: 378,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        alignSelf: 'center',
        padding: 19,    
    },
    example: {
        backgroundColor : 'rgb(114,95,70)',
        height: 255,
        width: 378,
        paddingLeft:19,
        paddingTop:20,
        alignSelf: 'center',
    },
    
});


export default Escalation2Screen;