 import  Animated, {clamp, useAnimatedReaction, useDerivedValue, useSharedValue, withTiming} from 'react-native-reanimated';
import React, { useState } from 'react';
import {Gesture,GestureDetector} from "react-native-gesture-handler"
import { useWindowDimensions } from 'react-native';



const Card =({card,index,scrollY,activeCardIndex}) =>{
  const [cardHeight, setCardHeight] = useState(0)
  const translateY = useSharedValue(0)
  const {height:screenHeight} = useWindowDimensions()

  useAnimatedReaction(()=>
     scrollY.value
,
(current)=>{
    translateY.value= clamp(-current,-index*cardHeight,0)
  })
    // const translateY = useDerivedValue(()=>clamp(-scrollY.value,-index*cardHeight,0))
   useAnimatedReaction(()=>activeCardIndex.value,
   (current,pervious) => {
      if (current === pervious) {
        return
      }
      // no card selected 
      if(activeCardIndex.value === null){
        translateY.value=withTiming(clamp(-scrollY.value,-index*cardHeight,0))
        
      }else if(activeCardIndex.value === index) {
             // this card becomes active
             translateY.value=withTiming(-index*cardHeight)
      
      }
      
      else {
        translateY.value=withTiming( -index*cardHeight*0.9+screenHeight*0.7)
      }


     // Another card is active

   }
   )
    const tap = Gesture.Tap().onEnd(()=>{

       if (activeCardIndex.value === null) {
        activeCardIndex.value = index
       } else {
        activeCardIndex.value = null
       }
    })
    return (
 <GestureDetector  gesture={tap} >
        <Animated.Image  
        onLayout={(event) => setCardHeight(event.nativeEvent.layout.height+10)}
        style={{
            width:  "100%",
            height: undefined,
            aspectRatio:7/4,
            marginVertical:5,
            transform : [{translateY: translateY}]
            
        }} source={card} />
        </GestureDetector>

    )

}
export default Card