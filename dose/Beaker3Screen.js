import React, { Component } from 'react';
import {StyleSheet,Text,View,ScrollView,Button} from 'react-native';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';


class Beaker3Screen extends React.Component{
    
    state = {
        tableHead: ['商品名(経口)','血液透析(HD)'],
        tableHead2: ['商品名(静注)','血液透析(HD)'],
        tableData: [
            ['サワシリン','1回500mg 1日1回、HD日はHD後'],
            ['オーグメンチン','1回375mg 1日1回、HD日はHD後'],
            ['ケフレックス','1回500mg 1日1回、HD日はHD後'],
            ['クラリス','1回200mg 1日1回'],
            ['ジスロマック','1回500mg 1日1回'],
            ['エリスロシン','1回100-150mg 1日4回'],
            ['ミノマイシン','1回100mg 1日2回'],
            ['ダラシン', '1回300mg 1日3回'],
            ['クラビット','1回250mg 2日に1回、HD日はHD後'],
            ['シプロキサン','1回200mg 1日1回、HD日はHD後'],
            ['ジェニナック','1回400mg 1日1回'],
            ['ザイボックス','1回600mg 1日2回'],
        
        ],
        tableData2: [
            ['ペニシリンG','1回50-200万単位 1日4回\nHD日はHD後に、50万単位追加投与'],
            ['ビクシリンS','1回1-2g 1日2回、HD日はHD後'],
            ['ユナシンS','1回1.5g 1日2回、HD日はHD後'],
            ['ゾシン','1回2.25g 1日3回\nHD日はHD後に、0.75g追加投与'],
            ['セファメジンα','1回0.5-1g 1日2回\nHD日はHD後に、1g追加投与'],
            ['セフメタゾン','1回1-2g 2日に1回、HD日はHD後 '],
            ['セフトリアキソン','1回1-2g 1日1回'],
            ['セフォタックス','1回0.5g 1日2回'],
            ['モダシン','1回1g 1日1回\nHD日はHD後に、1g追加投与'],
            ['マキシピーム','1回0.5g 1日1回\nHD日はHD後に、1g追加投与'],
            ['ジスロマック','1回0.5g 1日1回'],
            ['エリスロシン','1回0.25g 1日4回'],
            ['メロペン','1回0.5g 1日1回\nHD日はHD後に、0.5g追加投与'],
            ['ミノマイシン','1回0.1g 1日2回'],
            ['クラビット','1回0.25g 2日に1回、HD日はHD後'],
            ['シプロキサン','0.2-0.4g 1日1回、HD日はHD後'],
            ['ダラシン','1回0.6g 1日3回'],
            ['アネメトロ','1回0.5g 1日3-4回'],
            ['※バンコマイシン','初回20-25mg/kg\nその後は透析後に 1回7.5ー10mg/kg'],
            ['ザイボックス','1回0.6g 1日2回、HD日はHD後'],
            ['※ゲンタシン','0.3mg/kg 2日に1回\nHD日はHD後に、1mg/kg追加投与'],
            ['※アミカシン','2mg/kg 2-3日に1回\nHD日はHD後に、2.5mg/kg追加投与'],


  
        
        ]
    }

    static navigationOptions = () =>{
        return {
            title: '透析患者への投与量',
            headerStyle: { backgroundColor : '#3cb371'},
            headerTintColor: "#fff",
            headerTitleStyle: {
                width: '72%',
                textAlign: 'center',
                color: '#fff'
            },
        }
    }
    


    render(){
        const state = this.state;
        return(
            <ScrollView style={styles.container}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={state.tableHead} flexArr={[0.5,1]} style={styles.head} textStyle={styles.text}/>
                <Rows data={state.tableData} flexArr={[0.5,1]} textStyle={styles.text}/>
                </Table>
            
                <View style={{margin:20}}></View>

                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={state.tableHead2} flexArr={[0.5,1]} style={styles.head} textStyle={styles.text}/>
                <Rows data={state.tableData2} flexArr={[0.5,1]} textStyle={styles.text}/>
                </Table>
                <Text style={{fontSize: 12, paddingBottom: 14,}}>{"\n"} ※ 初期投与量なので、TDMを行い、投与量を調節すること </Text>
          </ScrollView>
        )
      
    }
}

     
const styles = StyleSheet.create({
    container: { flex: 1, padding: 3, paddingTop: 0, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6,fontSize: 12},
  });


export default Beaker3Screen;