 import { FlatList, Image, Text, View,StyleSheet } from "react-native"
 import { Gesture,GestureDetector } from "react-native-gesture-handler"
    import React, { useState } from "react"
import { useWindowDimensions } from "react-native"
 import Animated,{cancelAnimation, useSharedValue, withDecay, clamp,
withClamp
} from "react-native-reanimated"
import Card from "./Card"

 const cards = [
    require('../../assets/cards/Card 1.png'),
    require('../../assets/cards/Card 2.png'),
    require('../../assets/cards/Card 3.png'),
    require('../../assets/cards/Card 4.png'),
    require('../../assets/cards/Card 5.png'),
    require('../../assets/cards/Card 6.png'),
    require('../../assets/cards/Card 7.png'),
    require('../../assets/cards/Card 8.png'),
    require('../../assets/cards/Card 9.png'),
 ]

const CardsList = () =>{
    const [listHeight,setListHeight] = useState(0)
    const {height:screenHeight} = useWindowDimensions()

    const scrollY = useSharedValue(0)
    const maxScrollY = listHeight-screenHeight+70

    const pan = Gesture.Pan()
.onBegin((event)=>{
    cancelAnimation(scrollY)
})
    
    .onStart(()=>{
        console.log("Start")
    }).onChange((event)=>{
  
        scrollY.value = clamp(scrollY.value-event.translationY,0,maxScrollY)
        console.log("ScrollY",scrollY.value)
    }).onEnd((event)=>{
        console.log("End",event.velocityY)
        scrollY.value = withClamp({min:0,max:maxScrollY},withDecay({velocity:-event.velocityY})) 
    })
 
  
 return (
 <GestureDetector gesture={pan}>
       <View style={styles.container} onLayout={(event)=>setListHeight(event.nativeEvent.layout.height)}>
     {cards.map((card,index)=>(
   <Card key={index} card={card} index={index} scrollY={scrollY} />
     ))}

    </View>
 </GestureDetector>
 )
}
export default CardsList

const styles = StyleSheet.create({

    container:{
    padding:10,
    },
   
})
