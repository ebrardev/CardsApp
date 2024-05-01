 import  Animated, {clamp, useDerivedValue} from 'react-native-reanimated';
import React, { useState } from 'react';



const Card =({card,index,scrollY}) =>{
  const [cardHeight, setCardHeight] = useState(0)

    const translateY = useDerivedValue(()=>clamp(-scrollY.value,-index*cardHeight,0))

    return (

        <Animated.Image  
        onLayout={(event) => setCardHeight(event.nativeEvent.layout.height+10)}
        style={{
            width:  "100%",
            height: undefined,
            aspectRatio:7/4,
            marginVertical:5,
            transform : [{translateY: translateY}]
            
        }} source={card} />

    )

}
export default Card