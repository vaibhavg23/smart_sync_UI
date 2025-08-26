import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const { isDark } = useTheme();
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? '#1F2937' : '#F9FAFB' },
      ]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >
        <Image
  source={{
    uri: isDark
      ? 'https://img.icons8.com/ios-filled/100/ffffff/artificial-intelligence.png' // white color
      : 'https://img.icons8.com/ios-filled/100/000000/artificial-intelligence.png', // black color
  }}
  style={styles.logo}
/>


        <Text style={[styles.title, { color: isDark ? '#fff' : '#111827' }]}>
          Create Account
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? '#ccc' : '#6B7280' }]}>
          Join AI Scheduler Today
        </Text>

        {/* Full Name Input */}
        <TextInput
        style={[
            styles.input,
            {
            backgroundColor: isDark ? '#374151' : '#fff',
            borderColor: isDark ? '#4B5563' : '#e5e7eb',
            color: isDark ? '#fff' : '#000',
            },
        ]}
        placeholder="Full Name"
        placeholderTextColor={isDark ? '#9CA3AF' : '#888'}
        value={fullName}
        onChangeText={setFullName}
        />

        {/* Email Input */}
        <TextInput
        style={[
            styles.input,
            {
            backgroundColor: isDark ? '#374151' : '#fff',
            borderColor: isDark ? '#4B5563' : '#e5e7eb',
            color: isDark ? '#fff' : '#000',
            },
        ]}
        placeholder="Email"
        placeholderTextColor={isDark ? '#9CA3AF' : '#888'}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        />

        {/* Password Input */}
        <View style={styles.inputWrapper}>
  <TextInput
    style={[
      styles.input,
      {
        backgroundColor: isDark ? '#374151' : '#fff',
        borderColor: isDark ? '#4B5563' : '#e5e7eb',
        color: isDark ? '#fff' : '#000',
        paddingRight: 45, // leave space for the icon
      },
    ]}
    placeholder="Password"
    placeholderTextColor={isDark ? '#9CA3AF' : '#888'}
    secureTextEntry={!showPassword}
    value={password}
    onChangeText={setPassword}
  />
  <TouchableOpacity
    onPress={() => setShowPassword(!showPassword)}
    style={styles.eyeIconWrapper}
  >
    <Image
      source={{
        uri: showPassword
          ? 'https://img.icons8.com/ios-filled/24/000000/visible--v1.png'
          : 'https://img.icons8.com/ios-glyphs/30/000000/closed-eye.png',
      }}
      style={[
        styles.eyeIcon,
        { tintColor: isDark ? '#D1D5DB' : '#6B7280' },
      ]}
    />
  </TouchableOpacity>
</View>



        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={{ color: isDark ? '#91b0f3ff' : '#2563EB' }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push('/login')} // 👈 navigate on press
        >
        <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>


        <View style={styles.footerText}>
          <Text style={{ color: isDark ? '#ccc' : '#555' }}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={{ color: isDark ? '#91b0f3ff' : '#2563EB' }}>
            Login
          </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    elevation: 2,
  },
  inputWrapper: {
  width: '100%',
  position: 'relative',
  marginBottom: 16,
},
eyeIconWrapper: {
position: 'absolute',
right: 16,
top: 13,
zIndex: 1,
},
eyeIcon: {
width: 24,
height: 24,
},


  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    elevation: 3,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  signUpLink: {
    fontWeight: '600',
    marginLeft: 4,
  },
});
