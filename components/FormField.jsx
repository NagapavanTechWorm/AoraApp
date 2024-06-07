import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '../constants';

const FormField = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles} `} >
      <Text className=" text-gray-100 font-pmedium px-2 text-base" >{title}</Text>
      <View className="bg-black-100 border-2 border-black-100 px-4 w-full h-16 rounded-2xl focus:border-secondary-100 items-center flex-row ">
        <TextInput
            className="flex-1 text-white font-semibold"
            value={value}
            placeholder={placeholder}
            placeholderTextColor={"#7b7b8b"}
            onChangeText={handleChangeText}
            secureTextEntry={title==="password" && !showPassword}
        />
        {title==="password" && (
            <TouchableOpacity onPress={()=>setShowPassword(!showPassword)} >
                <Image source={!showPassword ? icons.eye:icons.eyeHide} className="h-6 w-6 " resizeMode='contain'/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField