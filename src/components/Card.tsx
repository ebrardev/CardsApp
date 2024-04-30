 import  Animated  from 'react-native-reanimated';



const Card =({card,index,scrollY}) =>{

    return (

        <Animated.Image  key={index} style={{
            width:  "100%",
            height: undefined,
            aspectRatio:7/4,
            marginVertical:5,
            transform : [{translateY: scrollY}]
            
        }} source={card} />

    )

}
export default Card