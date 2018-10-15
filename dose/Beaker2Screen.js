import React, { Component } from 'react';
import {StyleSheet,Text,View,ScrollView,Button, TouchableOpacity} from 'react-native';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';


class Beaker2Screen extends React.Component{
    
    state = {
        tableHead: ['商品名','CCr>50', 'CCr 10-50', 'CCr< 10'],
        tableData: [
            ['サワシリン', '\n500mg (2Cp)\n(1日3-4回)','\n500mg (2Cp)\n(1日2-3回)','\n500mg (2Cp)\n(1日1回)'],
            ['オーグメンチン', '375mg (1錠)\n(1日3回)','375mg (1錠)\n(1日2回)','375mg (1錠)\n(1日1回)'],
            ['ケフレックス', '500mg (2Cp)\n(1日3回)','500mg (2Cp)\n(1日2回)','500mg (2Cp)\n(1日1回)'],
            ['クラリシッド', '200-400mg (1-2錠)\n(1日2回)','200mg (1錠)\n(1日1-2回)','200mg (1錠)\n(1日1回)'],
            ['ジスロマック', '500mg (2錠)\n(1日1回)','投与量･間隔\n調整不要','投与量･間隔\n調整不要'],
            ['ミノマイシン', '100mg (1Cp)\n(1日2回)','投与量･間隔\n調整不要','投与量･間隔\n調整不要'],
            
            ['ビブラミシン', '初日: 100mg(1錠)\n(1日2回)\n\n2日目以降:\n100mg(1錠)\n(1日1回)','投与量･間隔\n調整不要','投与量･間隔\n調整不要'],
            ['ダラシン', '300mg (2Cp)\n(1日3回)','投与量･間隔\n調整不要','投与量･間隔\n調整不要'],
            ['シプロキサン', '200-400mg (1-2錠)\n(1日2回)','100-200mg (0.5-1錠)\n(1日2回)','200mg (1錠)\n(1日1回)'],
           
            ['クラビット', '500mg (2錠)\n(1日1回)', '250mg (1錠)\n(1日1回)', '250mg (1錠)\n(2日に1回)'],
            ['バクタ配合錠', '1回2錠 \n(1日2回)','1回1錠\n(1日2回)','基本的には\n使用しない'],
            ['フラジール', '500mg (2錠)\n(1日3回)','500mg (2錠)\n(1日2回)','250mg (1錠)\n(1日1回)'],
        
        
        
        ]
    }

    static navigationOptions = ({navigation}) =>{
        const {state} = navigation
        return {
            title: '経口抗菌薬投与量',
            headerStyle: { backgroundColor : '#3cb371'},
            headerTintColor: "#fff",
            headerTitleStyle: {
                width: '86%',
                textAlign: 'center',
                color: '#fff'
            },
            headerRight: 
            <View> 
                <TouchableOpacity style = {{paddingRight:15}} onPress={() => state.params.handleCcr()}> 
                    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}> 透析 </Text> 
                </TouchableOpacity> 
            </View>,
        }
    }
    

    componentDidMount(){
        this.props.navigation.setParams({handleCcr: ()=> this.props.navigation.navigate('Beaker3')})
    }

    render(){
        const state = this.state;
        return(
            <ScrollView style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead} flexArr={[1.05,1,1,1]} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData} flexArr={[1.05,1,1,1]} textStyle={styles.text}/>
            </Table>
        <Text style = {{fontWeight: "bold", marginTop: 30}}>※  オーグメンチン、サワシリン併用療法について</Text>
        <Text style = {{marginTop: 10, fontSize:12}}>　日本で発売されているオーグメンチンは、サワシリン</Text>
        <Text style = {{marginTop: 2, fontSize:12}}>　含有量が少ないため、併用が望ましい。(オグサワ療法) </Text>
        <Text style = {{marginTop: 15, fontSize:12}}>　CCr＞30 {"\n"}　オーグメンチン 375mg + サワシリン 250mg  1日3回 </Text>
        <Text style = {{marginTop: 7, fontSize:12}}>　CCr 10-30  {"\n"}　オーグメンチン 375mg + サワシリン 250mg  1日2回 </Text>
        <Text style = {{marginTop: 7, fontSize:12}}>    CCr＜10  {"\n"}　オーグメンチン 375mg + サワシリン 250mg  1日1回 </Text>
        
        <Text style = {{fontWeight: "bold", marginTop: 28}}>※  第3世代セフェム系経口薬について</Text>
        <Text style = {{marginTop: 10, fontSize:12}}>　バイオアベイラビリティ16%であり、ほとんど便中へ</Text>
        <Text style = {{marginTop: 2, fontSize:12}}>    排泄されるため、原則として使用しない。　</Text>
        <Text style = {{marginTop: 2, fontSize:12}}>    日本の薬剤耐性対策アクションプランでは</Text>
        <Text style = {{marginTop: 2, fontSize:12, marginBottom: 40}}>    大幅な処方量減が目標になっている　</Text>  
          </ScrollView>
        )
      
    }
}

     
const styles = StyleSheet.create({
    container: { flex: 1, padding: 3, paddingTop: 0, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6,fontSize: 12},
  });


export default Beaker2Screen;