 import { FlatList, Image, Text, View,StyleSheet } from "react-native"
 import { Gesture,GestureDetector } from "react-native-gesture-handler"
 import Animated,{useSharedValue, withSpring} from "react-native-reanimated"
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

    const scrollY = useSharedValue(0)

    const pan = Gesture.Pan().onStart(()=>{
        console.log("Start")
    }).onChange((event)=>{
  
        scrollY.value = scrollY.value- event.changeY
        console.log("ScrollY",scrollY.value)
    }).onEnd(()=>{
        console.log("End")
    })
 
  
 return (
 <GestureDetector gesture={pan}>
       <View style={styles.container}>
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
