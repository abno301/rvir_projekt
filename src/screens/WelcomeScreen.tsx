import React from 'react';
import { Text, Pressable, Image, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

function WelcomeScreen({ navigation }: {navigation: any}) {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <LinearGradient colors={['#141e30', '#243b55']} style={{ flex: 1, borderRadius: 20 }}>
        <View style={{ marginHorizontal: 16, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <View>
         
          </View>
          <Text style={{ color: '#0000FF', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 24 }}>
            Keep all your client conversations in one place
          </Text>
          <Text style={{ color: '#FFFFFF', fontSize: 16, textAlign: 'center', marginHorizontal: 16 }}>
            At legal call we allow you to contact your clients through voice and text without giving out your phone number
          </Text>
          <View>
            <Pressable style={{ backgroundColor: '#0000FF', paddingVertical: 8, paddingHorizontal: 16, margin: 16 }}>
              <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }} onPress={() => navigation.navigate('Log In')}>
                Sign In
              </Text>
            </Pressable>
            <Pressable style={{ backgroundColor: '#0000FF', paddingVertical: 8, paddingHorizontal: 16, margin: 16 }}>
              <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }} onPress={() => navigation.navigate('Sign Up')}>
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default WelcomeScreen;
