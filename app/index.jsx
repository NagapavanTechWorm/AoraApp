import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from "../constants"
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-black-100 h-full">
      <ScrollView contentContainerStyle={{height:'100%'}} >
        <View className="w-full justify-center items-center min-h-[90vh] px-4 ">
          <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode='contain' />
          <Image source={images.cards} className="max-w-[380px] h-[300px] w-full" resizeMode='contain' />
          <View className="relative mt-5"> 
            <Text className="text-white text-3xl font-bold text-center">Discover Endless Possibilities with{' '}
             <Text className="text-secondary-200">Aora</Text></Text>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where Creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
          <CustomButton
           title={"Continue with Email"}
           handlePress = {()=>{}}
           contentContainerStyle={"w-full mt-6"}
            />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}

