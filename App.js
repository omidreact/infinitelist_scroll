import React, { useState,useEffect } from "react";
import { Text, View ,FlatList,TouchableOpacity,ActivityIndicator } from "react-native";
const dataArray = require("./src/dataArray.json");

let page=0;
let count=20;
const App = (props) => {
const [isLoading,setIsLoading]=useState(true);
const [item,setItem]=useState([]);
const [fetchStatus,setFetchStatus]=useState(false);

useEffect(()=>{
    setItem([...item,...dataArray.slice(page,count)]);
    setIsLoading(false);
},[])

const fetch_data=()=>{
  setFetchStatus(true);
  page=count;
  count=count+5;
  setItem([...item,...dataArray.slice(page,count)]);
  setFetchStatus(false);
}
return(
  <View style={{ flex: 1 }}>
    <View style={{flex:9, justifyContent: "center", alignItems: "center"}}>
<FlatList
data={item}
renderItem={({item})=>{
return(
  <View>
    <Text style={{marginTop:20}}>
    {item.id} {item.name} {item.family}
    </Text>
  </View>
)
}}
keyExtractor={(i,index)=>i.id+index}
onEndReached={()=>{
  console.log(item.length),
  fetch_data()}

}
onEndReachedThreshold={0.1}
ListFooterComponent={()=>{
  return(
  // <View>
  //   <TouchableOpacity
  //   activeOpacity={0.9}
  //   onPress={()=>fetch_data()}
  //   >
  //     <Text>more</Text>
  //   </TouchableOpacity>
  // </View>
  
<ActivityIndicator color="green" size="large"/>

  )
}}
/>
    </View>
    <View style={{flex:1,backgroundColor:"pink", justifyContent: "center", alignItems: "center"}}>
    <Text>ok</Text>
    </View>
  </View>

)
}
export default App;
