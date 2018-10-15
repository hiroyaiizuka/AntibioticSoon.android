import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native';


class Antibiotics1Screen extends React.Component{

    static navigationOptions = {
        title: '治療',
        headerTitleStyle: {
            width: '70%',
            textAlign: 'center',
        },
    }
    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
            <ScrollView horizontal={true} pagingEnabled={true}>
                <View style={{
                    width: screenWidth,
                    backgroundColor: '#fff',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                   <Text style = {styles. kei}>軽症、外来患者群</Text>
                   <View style={styles.guidline}>
                        <Text style={{fontWeight: 'bold', paddingBottom: 4, color: 'rgb(255,255,255)',}}> 内服薬: </Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}> βラクタマーゼ阻害配合ペニシリン系薬 </Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}> マクロライド系薬 </Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}> レスピラトリーキノロン</Text>
                        <Text style={{fontWeight: 'bold', marginTop: 18, paddingBottom: 4,color: 'rgb(255,255,255)', fontWeight: 'bold'}}> 注射薬:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}> セフトリアキソン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}> アジスロマイシン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}> レボフロキサシン (結核をマスクする、注意！)</Text>
                        <Text style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',position: 'absolute', top:188, right:12}}> 成人市中肺炎診療ガイドライン2017</Text> 
                    </View>
                    <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:-170, top:0, marginBottom: 5}}>ex)</Text>
                    <View style = {styles.example}>
                        <Text style={{fontWeight: 'bold', color: 'rgb(255,255,255)'}}>細菌性肺炎を疑う場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4, fontSize:12}}>オーグメンチン 375mg + サワシリン 250mg  1日3回</Text>
                        <Text style={{fontWeight: 'bold', marginTop: 14, color: 'rgb(255,255,255)'}}>非定型肺炎を疑う場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4, fontSize:12}}>ジスロマック2000mg 1回{"\n"}または、ビブラマイシン100mg を1日2回 </Text>
                        <Text style={{fontWeight: 'bold', marginTop: 15, color: 'rgb(255,255,255)'}}>免疫不全、基礎疾患あり:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', paddingTop:4, fontSize:12}}>クラビット500mg 1日1回{"\n"}結核をマスクする！使用前に要検討！</Text>
                        <Text　style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',position: 'absolute', top:194, right:12}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                        <Text　style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',position: 'absolute', top:202, right:12}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
                    </View>

                </View>

                <View style={{
                    width: screenWidth,
                    backgroundColor: '#fff',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style = {styles.tyu}>中等症、入院群</Text>
                    <View style ={styles.guidline}>
                        <Text  style={{fontWeight: 'bold', paddingBottom: 4, color: 'rgb(255,255,255)',}} > 注射薬:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}> スルバクタム・アンピシン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}> セフトリアキソン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}> レボフロキサシン (結核をマスクする、注意！)</Text>
                        <Text style={{fontWeight: 'bold',paddingTop:16, paddingBottom: 4, color: 'rgb(255,255,255)',}}> 非定型肺炎が疑われる場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}> ミノサイクリン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}> アジスロマイシン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}> レボフロキサシン (結核をマスクする、注意！)</Text>
                        <Text style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right', position: 'absolute', top:188, right:12}}> 成人市中肺炎診療ガイドライン2017</Text> 
                    </View>

                    <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:-170, top:0, marginBottom: 5}}>ex)</Text>
                    <View style = {styles.example}>
                        <Text style={{fontWeight: 'bold', color: 'rgb(255,255,255)'}}>細菌性肺炎を疑う場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', paddingTop:2, fontSize:12}}>ロセフィン2g/日</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', position: 'relative', top:3, right:4, fontSize:12}}> (± ジスロマック500mg/日  or  ミノマイシン100mg1日2回)</Text>
                        <Text style={{fontWeight: 'bold', marginTop: 18, color: 'rgb(255,255,255)'}}>誤嚥性肺炎を疑う場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', paddingTop:2, fontSize:12}}>ユナシン 1.5-3g  6時間毎 </Text>
                        <Text style={{fontWeight: 'bold', marginTop: 15, color: 'rgb(255,255,255)'}}>緑膿菌の関与が疑われる場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', paddingTop:2, fontSize:12}}>ゾシン4.5g  6時間毎  or  マキシピーム2g  6時間毎</Text>
                        <Text　style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',position:  'absolute', top:194, right:12}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                        <Text　style={{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',position: 'absolute', top:202, right:12}}> レジデントのための感染症マニュアル第3版,  医学書院</Text>  
                    </View>

 

                </View>

                <View style={{
                    width: screenWidth,
                    backgroundColor: '#fff',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text  style = {styles.tyu}>重症、ICU群</Text>
                    <View style ={styles.guidline}>
                        <Text style={{fontWeight: 'bold', paddingBottom: 6, color: 'rgb(255,255,255)',}}>注射薬:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingBottom: 4, fontSize:13}}>A 法:    カルバペネム系 or タゾバクタム･ピペラシン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingBottom: 4, fontSize:13}}>B 法:    スルバクタムアンピシリン or セフトリアキソン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingBottom: 4, fontSize:13}}>C 法:    A or B 法 + アジスロマイシン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingBottom: 4, fontSize:13}}>D 法:    A or B 法 + レボフロキサシン</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingBottom: 4, fontSize:13}}>E 法:    A or B or C or D + 抗MRSA薬</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',paddingBottom: 4, fontSize:13}}>※ B 法は、緑膿菌を考慮しない場合</Text>
                        <Text style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right', position: 'absolute', top:188, right:12}}> 成人市中肺炎診療ガイドライン2017</Text> 
                    </View>

                    <Text style={{fontWeight: 'bold', color: 'rgb(114,95,70)', position: 'relative', left:-170, top:0, marginBottom: 5}}>ex)</Text>
                    <View style = {styles.example}>
                        <Text style={{fontWeight: 'bold', color: 'rgb(255,255,255)'}}>通常投与量:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}>ロセフィン2g/日  or  ユナシン1.5-3g  6時間毎</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', position: 'relative', top:0, right:4, fontSize:12}}>(± ジスロマック500mg/日  or  ミノマイシン100mg1日2回)</Text>
                        <Text style={{fontWeight: 'bold', marginTop: 18, color: 'rgb(255,255,255)'}}>緑膿菌感染を疑う場合:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', fontSize:12}}>ゾシン4.5g  6時間毎   or   メロペン1g  8時間毎</Text>
                        <Text style ={{ color: 'rgb(255,255,255)', position: 'relative', top:0, fontSize:12}}>(±  クラビット500mg/日)</Text>
                        <Text style={{fontWeight: 'bold', marginTop: 18, color: 'rgb(255,255,255)'}}>インフルエンザ後の肺炎:</Text>
                        <Text style ={{ color: 'rgb(255,255,255)',fontSize:12}}>バンコマイシン1g  12時間毎    上記へ追加を検討する</Text>
                        <Text　style = {{fontSize: 6, color: 'rgb(255,255,255)',textAlign:'right',position:  'absolute', top:202, right:12}}> 感染症プラチナマニュアル2018,  MEDSi</Text>
                 
                    </View>
                </View>
            </ScrollView>
        );
    }
}
    const styles = StyleSheet.create({
        kei: {
            backgroundColor: '#fff',
            marginTop: 50,
            height: 50,
            width: 170,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 15,
            fontSize: 18,
            fontWeight: 'bold'
        },
        guidline: {
                backgroundColor: 'rgb(130,200,143)',
                marginTop: 5,
                marginBottom: 7,
                height: 200,
                width: 373,
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
            width: 374,
            paddingLeft:19,
            paddingTop:20
        },
        tyu: {
            backgroundColor: '#fff',
            marginTop: 50,
     
            height: 50,
            width: 170,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 15,
            fontSize: 18,
            fontWeight: 'bold'
        },
        


    })
    

export default Antibiotics1Screen;