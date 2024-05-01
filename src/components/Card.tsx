 import  Animated, {clamp, useAnimatedReaction, useDerivedValue, useSharedValue} from 'react-native-reanimated';
import React, { useState } from 'react';
import {Gesture,GestureDetector} from "react-native-gesture-handler"



const Card =({card,index,scrollY,activeCardIndex}) =>{
  const [cardHeight, setCardHeight] = useState(0)
  const translateY = useSharedValue(0)

  useAnimatedReaction(()=>{
    return scrollY.value
},
(current)=>{
    translateY.value= clamp(-current,-index*cardHeight,0)
  })
    // const translateY = useDerivedValue(()=>clamp(-scrollY.value,-index*cardHeight,0))

    const tap = Gesture.Tap().onEnd(()=>{
    console.warn(index)
    activeCardIndex.value = activeCardIndex.value === index ? null : index
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