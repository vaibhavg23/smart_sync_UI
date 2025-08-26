import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

export default function MicScreen() {
  const [summary, setSummary] = useState('');
  const [isListening, setIsListening] = useState(false);
  const { isDark } = useTheme();
  const router = useRouter();

  const currentSchedule = [
    { time: '8:00 AM', task: 'Breakfast' },
    { time: '9:00 AM', task: 'Design Meeting' },
    { time: '12:00 PM', task: 'Lunch' },
  ];

  const handleGenerateSummary = () => {
    // Fake optimized summary (replace with real AI logic or backend call)
    setSummary(
      'Optimized Schedule:\n✅ 8:00 AM - Breakfast\n✅ 9:00 AM - Design Meeting\n✅ 12:00 PM - Lunch\n✅ 2:00 PM - Deep Work\n✅ 4:00 PM - Break & Walk'
    );
  };

  const handleMicPress = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      handleGenerateSummary();
    }, 2000); // Simulate 2 seconds of listening
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? '#1F2937' : '#F9FAFB' },
      ]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={[styles.heading, { color: isDark ? '#ffffff' : '#000000' }]}>SMART SYNC</Text>


          <View style={styles.card}>
            <Text style={styles.cardTitle}>Here is your schedule for today</Text>
            {currentSchedule.map((item, index) => (
              <Text key={index} style={styles.scheduleItem}>
                {item.time} — {item.task}
              </Text>
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={handleGenerateSummary}>
            <Text style={styles.buttonText}>Give me a meeting summary</Text>
          </TouchableOpacity>

          {summary !== '' && (
            <View style={styles.summaryCard}>
              <Text style={styles.summaryText}>{summary}</Text>
            </View>
          )}

          
        </View>
        <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push('/')}>
            <Feather name="home" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/calendar')}>
            <Feather name="calendar" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>

        {/* Placeholder to balance layout */}
        <View style={{ width: 80 }} />

        <TouchableOpacity onPress={() => router.push('/bell')}>
            <Feather name="bell" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/user')}>
            <Feather name="user" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        </View>

        {/* Mic button in center, floating */}
        <TouchableOpacity style={styles.micButton} onPress={handleMicPress}>
        <Feather name="mic" size={28} color="#fff" />
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    color: '#f1f5f9',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  scheduleItem: {
    fontSize: 15,
    color: '#cbd5e1',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
  summaryCard: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  summaryText: {
    color: '#e2e8f0',
    fontSize: 15,
    lineHeight: 22,
  },
  micButton: {
    backgroundColor: '#3b82f6',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    elevation: 8,
  },
  bottomNav: {
  position: 'absolute',
  bottom: 20,
  left: 10,
  right: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

micButton: {
  position: 'absolute',
  bottom: 35, // slightly above the nav bar
  alignSelf: 'center',
  backgroundColor: '#3b82f6',
  width: 64,
  height: 64,
  borderRadius: 32,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 8,
  zIndex: 10,
},

});
