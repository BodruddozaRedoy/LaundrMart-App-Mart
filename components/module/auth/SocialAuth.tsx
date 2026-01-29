import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function SocialAuth() {
  return (
    <View>
      {/* Divider */}
      <View className="flex-row items-center w-full mt-8">
        <View className="flex-1 h-[1px] bg-gray-200" />
        <Text className="mx-4 text-gray-400 font-medium">Or continue with</Text>
        <View className="flex-1 h-[1px] bg-gray-200" />
      </View>

      {/* Social Login Buttons */}
      <View className="w-full flex-row items-center gap-4 mt-6">
        {/* Google */}
        <TouchableOpacity
          onPress={() => {
            // TODO: Google Sign In handler
          }}
          activeOpacity={0.8}
          className=" h-12 flex-1 flex-row items-center justify-center gap-3 border border-primary/10 rounded-lg bg-white"
        >
          <Image
            source={{
              uri: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
            }}
            className="w-5 h-5"
            resizeMode="contain"
          />
          <Text className="text-black/60 text-base font-medium">Google</Text>
        </TouchableOpacity>

        {/* Apple */}
        <TouchableOpacity
          onPress={() => {
            // TODO: Apple Sign In handler
          }}
          activeOpacity={0.8}
          className="h-12 flex-1 flex-row items-center justify-center gap-3 border border-primary/10 rounded-lg bg-white"
        >
          <Ionicons name="logo-apple" size={20} color="black" />
          <Text className="text-black/60 text-base font-medium">Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}