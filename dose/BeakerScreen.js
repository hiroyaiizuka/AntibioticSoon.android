import React, { Component } from 'react';
import {Dimensions, StyleSheet,Text,View,ScrollView,Button, TouchableOpacity} from 'react-native';
import {Table, TableWrapper, Row, Rows, } from 'react-native-table-component';


class BeakerScreen extends React.Component{
    
    state = {
        tableHead: ['商品名','CCr>50', 'CCr 10-50', 'CCr< 10'],
        tableData: [
            ['ペニシリンG', '200~400万単位\n(4時間毎)','200万単位\n(4時間毎)','100万単位\n(6時間毎)'],
            ['ビクシリン', '2g\n(6時間毎)','2g\n(8時間毎)','2g\n(12時間毎)'],
            ['ユナシン', '1.5-3g\n(6時間毎)','1.5-3g\n(8時間毎)','1.5-3g\n(12時間毎)'],
            ['ゾシン', '4.5g\n(6時間毎)','2.25g\n(6時間毎)','2.25g\n(8時間毎)'],
            ['セファメジン', '1-2g\n(8時間毎)','1-2g\n(12時間毎)','1g\n(24時間毎)'],
            ['セフメタゾン', '1g\n(6-8時間毎)','1g\n(12時間毎)','1g\n(24時間毎)'],
            ['パンスポリン', '1g\n(6-8時間毎)','1g\n(12時間毎)','1g\n(24時間毎)'],
            ['ロセフィン', '髄膜炎: 2g\n(12時間毎)\n\nその他:1-2g\n(24時間毎)','投与量･間隔\n調整不要','投与量･間隔\n調整不要'],
            ['モダシン', '1g\n(6-8時間毎)','1g\n(12時間毎)','1g\n(24時間毎)'],
            ['スルペラゾン', '2g\n(12時間毎)','2g\n(12時間毎)','2g\n(24時間毎)'],
            ['マキシピーム', '発熱性好中球減少症\n緑膿菌感染: 2g\n(12時間毎)\n\nその他: 1g\n(8時間毎)','1g\n(12時間毎)','500mg-1g\n(24時間毎)'],
            ['メロペン', '1g\n(8時間毎)','1g\n(12時間毎)','500mg\n(24時間毎)'],
            ['チエナム', '500mg\n(6時間毎)','500mg\n(12時間毎)','250mg\n(12時間毎)'],
            ['ミノマイシン', '100mg\n(12時間毎)','投与量･間隔\n調整不要','投与量･間隔\n調整不要'],
            ['エリスロシン', '500mg\n(6時間毎)','500mg\n(6時間毎)','250mg\n(6時間毎)'],
            ['ジスロマック', '500mg\n(24時間毎)','投与量･間隔\n調整不要','投与量･間隔\n調整不要'],
            ['ダラシンS', '600mg\n(8時間毎)','投与量･間隔\n調整不要','投与量･間隔\n調整不要'],
            ['シプロキサン', '300mg\n(12時間毎)','300mg\n(12時間毎)','300mg\n(24時間毎)'],
            ['クラビット', '500mg\n(24時間毎)','250mg\n(24時間毎)','250mg\n(48時間毎)'],
            ['※バンコマイシン', '1g\n(12-24時間毎)','0.5-1g\n(24時間毎)','0.5g\n(72時間毎)'],           
            ['※ゲンタシン', '4-5mg/kg\n(24時間毎)','0.5-1mg/kg (24時間毎)','0.3mg/kg (48時間毎)'],
            ['ファンガード', 'カンジダ:\n100mg\n(24時間毎)\n\nアスペルギルス:\n150-300mg\n(24時間毎)','投与量･間隔\n調整不要','投与量･間隔\n調整不要'],
            ['ゾビラックス', '10mg/kg\n(8時間毎)','CCr: 30-50\n10mg/kg\n(12時間毎)\n\nCCr: 10-30\n10mg/kg\n(24時間毎)','5mg/kg\n(24時間毎)'],
        ]
    }

    static navigationOptions = ({navigation}) =>{
        const {state} = navigation
        return {
            title: '静注抗菌薬投与量',
            headerStyle: { backgroundColor : '#3cb371'},
            headerTintColor: "#fff",
            headerTitleStyle: {
                width: '86%',
                textAlign: 'center',
                color: '#fff'
            },
            headerRight: <View> 
                            <TouchableOpacity style = {{paddingRight:15}} onPress={() => state.params.handleCcr()}> 
                                <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}> 内服 </Text> 
                            </TouchableOpacity> 
                        </View>
        }
    }


    componentDidMount(){
        this.props.navigation.setParams({handleCcr: ()=> this.props.navigation.navigate('Beaker2')})
    }
    
    
    render(){
        const state = this.state;

        return(
            <ScrollView style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead} flexArr={[1.12,1.35,1.05,1.05]} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData} flexArr={[1.12,1.35,1.05,1.05]} textStyle={styles.text}/>
            </Table>
            <Text style={{fontSize: 12, paddingBottom: 10,}}>{"\n"} ※ 初期投与量なので、TDMを行い、投与量を調節すること </Text>
          </ScrollView>
        )
      
    }
}

     
const styles = StyleSheet.create({
    container: { flex: 1, padding: 3, paddingTop: 0, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6, fontSize:12},
  });


export default BeakerScreen;