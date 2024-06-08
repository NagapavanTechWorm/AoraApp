import { View, Text, ScrollView, Image,Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton"
import { Link ,router} from 'expo-router';
import { signIn,getCurrentUser } from '../../lib/appwrite';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);


  const handleSubmit = async () => {
    if (formData.email === "" || formData.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      await signIn(formData.email, formData.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };


  const handleEmailChange = (text) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: text,
    }));
  };

  const handlePasswordChange = (text) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: text,
    }));
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="min-h-[90vh] justify-center px-4 my-6">
          <Image source={images.logo} className="w-[115px] h-[35px]" resizeMode="contain" />
          <Text className="mt-4 text-white text-2xl font-PsemiBold">Login to Aora</Text>
          <FormField
            title="Email"
            value={formData.email}
            handleChangeText={handleEmailChange}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="password"
            value={formData.password}
            handleChangeText={handlePasswordChange}
            otherStyles="mt-7"
            secureTextEntry
          />
          <CustomButton
            title={"Sign-in"}
            handlePress={handleSubmit}
            isLoading={isSubmiting}
            contentContainerStyle={"mt-8"}

          />
          <View className="flex flex-row justify-center items-center gap-3 p-4">
              <Text className="text-white mt-5 text-base font-semibold" >Don't have a account</Text>
              <Link href={"/sign-up"} className='text-secondary font-semibold text-base' >Sign-up</Link>
          </View>

        </View>
      </ScrollView >
    </SafeAreaView>
  );
};

export default SignIn;
