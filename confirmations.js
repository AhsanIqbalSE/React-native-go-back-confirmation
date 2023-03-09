import { View, Text,  BackHandler,Alert } from 'react-native'
import React,{useEffect} from 'react'

export default function Home(props) {
    // React.useEffect(
    //     () =>
    //     props.navigation.addListener('beforeRemove', (e) => {
    //         // Prevent default behavior of leaving the screen
    //         e.preventDefault();
    //       }),
    //     [props.navigation]
    //   );
    useEffect(() => {
        const backAction = () => {
          Alert.alert('Hold on!', 'Are you sure you want to go back?', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => BackHandler.exitApp()},
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);
   
  return (
    <View>
      <Text >Confirmation when user want go back from component</Text>
    </View>
  )
}



