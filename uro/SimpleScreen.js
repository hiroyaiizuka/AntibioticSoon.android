import React, { Component } from 'react';
import { Dimensions, Text,View,ScrollView, StyleSheet} from 'react-native';

class SimpleScreen extends React.Component{

static navigationOptions = () =>{
  return {
      title: '治療',
      headerStyle: { backgroundColor : 'rgb(24,110,189)'},
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
                <Text style ={styles.esc}>総論</Text>
            </View> 
    
            <View style = {styles.guidline } >
            <Text style={{fontWeight: 'bold', position: 'relative'}}> 原因微生物:</Text>
                <Text style={{ paddingBottom: 2,paddingTop:8, fontSize: 12}} >･ Ecoli (80%以上)</Text> 
                <Text style={{ paddingBottom: 2, fontSize: 12}} >･ Klebsiella、Proteus</Text> 
                <Text style={{ paddingBottom: 2, fontSize: 12}} >･ 腐性ブドウ球菌  (性的に activeな女性に多い)</Text> 
                <Text style={{ paddingBottom: 2,paddingTop: 30, fontSize: 12}} >   近年では「健常者」からの</Text> 
                <Text style={{ fontSize: 12}}>   ESBL産生菌検出事例が増えつつある！(7.4%)</Text> 

                <Text style = {{fontSize: 6,textAlign:'right', position: 'absolute', top:203, right:14}}> Shiori et al; 食衛誌　Vol. 58, No. 1</Text> 
            </View>

            <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:18, top:0, marginBottom: 5}}>治療の基本)</Text>
            <View style = {styles.example}>
                <Text style={{fontWeight: 'bold',paddingTop: 2}}>1. 無症候性細菌尿は、治療対象にならない</Text>
                <Text style={{paddingTop: 2, fontSize: 12}}>      例外:   妊婦、侵襲性の泌尿器科処置、小児など</Text>
                <Text style={{fontWeight: 'bold', paddingTop: 16}}>2. 尿路感染症は、敗血症の原因のナンバーワン</Text>
                <Text style={{paddingTop: 2, fontSize: 12}}>      一旦治療を決めれば、断固強力に行う</Text>
                <Text style={{fontWeight: 'bold',paddingTop: 16}}>3. 治療期間:  膀胱炎 3日、腎盂腎炎 14日間</Text>
                <Text style={{paddingTop: 2, fontSize: 12}}>      再発例や14日間の治療で失敗した例は、3-4週間</Text>
                <Text　style = {{fontSize: 6,textAlign:'right',position: 'absolute', top:175, right:14}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                <Text　style = {{fontSize: 6,textAlign:'right',position:  'absolute', top:184, right:14}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
            </View>


         </View>

         
         <View style={{
                     width: screenWidth,
                     backgroundColor: '#fff',
                     flex: 1,
                }}>
                <Text　style ={styles.esc}>膀胱炎</Text>
                <View style = {styles.guidline} >
                    <Text style={{fontWeight: 'bold', paddingBottom: 10, paddingTop: 2}}>内服薬: </Text>
                    <Text style ={{paddingTop: 4, fontSize: 12}}>バクタ 2錠                     1日2回　3日間</Text>
                    <Text style={{paddingTop: 2, fontSize: 12}}>ケフレックス 500mg   1日3回    7日間</Text>
                    <Text style={{paddingTop: 2, fontSize: 12}}>オーグメンチン 1錠　 1日2回    3日間</Text>
                    <Text style={{paddingTop: 2, fontSize: 12}}>ホスミシン 3g               1回経口投与</Text>
                    <Text style ={{paddingTop: 32 , fontSize: 12}}>バクタは妊婦には使用を避ける</Text>
                    <Text　style = {{fontSize: 6,textAlign:'right',position: 'absolute', top:194, right:14}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                    <Text style = {{fontSize: 6,textAlign:'right', position: 'absolute', top:203, right:14}}> レジデントのための感染症マニュアル第3版,  医学書院</Text> 
      
                </View>  
                 
                <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:18, top:0, marginBottom: 5}}>ポイント)</Text>
                <View style = {styles.example}>
                    <Text style={{fontWeight: 'bold', fontSize:14}}>1. ニューキノロン系について</Text>
                    <Text style = {{paddingTop: 4, fontSize:12}}>     クラビット耐性の大腸菌が増えてきた (全国平均31%)</Text>
                    <Text style = {{paddingTop: 1, fontSize:12}}>     緑膿菌への貴重な治療薬であるため</Text>
                    <Text style = {{paddingTop: 1, fontSize:12}}>     膀胱炎には、できるだけ使用しない 温存する！</Text>
                    <Text　style ={{ paddingTop: 28,fontWeight: 'bold', fontSize:14}}>2. 治療が失敗した時</Text>
                    <Text　style ={{paddingTop: 4, fontSize:12}}>     解剖学的な異常や、上部尿路感染症の存在を示唆する</Text>
                    <Text　style = {{fontSize: 6,textAlign:'right',position:  'absolute', top:175, right:14}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                    <Text　style = {{fontSize: 6,textAlign:'right',position:  'absolute', top:184, right:14}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
                </View>
            </View>
    
           
         <View style={{
                width: screenWidth,
                backgroundColor: '#fff',
                flex: 1,
                }}>
           <Text　style ={styles.esc}> 腎盂腎炎 </Text> 

            <View style = {styles.guidline}>
                <Text style={{fontWeight: 'bold'}}>軽症、外来治療:</Text>
                <Text style ={{ paddingTop: 1, fontSize:12}}>バクタ １回2錠　1日2回   14日間</Text>
                <Text style ={{  paddingTop: 2, fontSize: 12}}>ロセフィン 2g 外来で投与後に</Text>
                <Text style ={{ fontSize: 12}}>オーグメンチン 375mg + サワシリン 250mg  1日3回  14日間</Text>
                <Text style={{fontWeight: 'bold', paddingBottom: 0, paddingTop: 10,}}>中等症以上、入院治療:</Text>
                <Text style ={{paddingTop: 1, fontSize:12}}>セフメタゾール 2g　12時間毎</Text>
                <Text style ={{ fontSize:12}}>ロセフィン 2g　　　24時間毎</Text>
                <Text style={{fontWeight: 'bold', paddingTop: 10,}}>ショック:</Text>
                <Text style ={{ paddingTop: 1, fontSize:12}}>メロペン 1g  8時間毎</Text>
                <Text style = {{fontSize: 6, textAlign:'right', position: 'absolute', top:203, right:14}}> 感染症プラチナマニュアル2018,  MEDSi</Text> 
            </View>
            <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:18, top:0, marginBottom: 5}}>ポイント)</Text>
            <View style = {styles.example}>
                <Text style={{fontWeight: 'bold', fontSize:15, marginTop:10}}>1. 3日治療しても解熱しないとき</Text>
                <Text　style ={{paddingTop: 4, fontSize:12}}>     起因菌の感受性を確認するとともに、膿瘍の合併を考える</Text>
                <Text style={{fontWeight: 'bold', fontSize:15, marginTop:20}}>2. ESBL産生菌を疑うとき</Text>
                <Text　style ={{paddingTop: 4, fontSize:12}}>     軽症例では、セフメタゾール</Text>
                <Text　style ={{paddingTop: 2, fontSize:12}}>     重症例では、カルバペネム系で治療する</Text>
                <Text　style = {{fontSize: 6,textAlign:'right',position:  'absolute', top:175, right:14}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                <Text　style = {{fontSize: 6, textAlign:'right',position:  'absolute', top:184, right:14}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
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
            height: 48,
            width: 100,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf:'center',
            padding: 15,
            fontSize: 15,
            fontWeight: 'bold'
    },
    guidline: {
        backgroundColor: '#ffdead',
        marginTop: 12,
        marginBottom: 7,
        height: 215,
        width: 378,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 1,
        alignSelf: 'center',
        padding: 19,    
    },
    example: {
        backgroundColor : '#b0e0e6',
        height: 255,
        width: 374,
        paddingLeft:19,
        paddingTop:20,
        alignSelf: 'center',

    },
    
});


export default SimpleScreen;