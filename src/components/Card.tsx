 import  Animated, {useDerivedValue} from 'react-native-reanimated';



const Card =({card,index,scrollY}) =>{
    const translateY = useDerivedValue(()=>-scrollY.value)

    return (

        <Animated.Image  key={index} style={{
            width:  "100%",
            height: undefined,
            aspectRatio:7/4,
            marginVertical:5,
            transform : [{translateY: translateY}]
            
        }} source={card} />

    )

}
export default Card