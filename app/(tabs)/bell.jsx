import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';

const NotificationScreen = () => {
  const notifications = [
    {
      id: '1',
      title: 'Schedule Updated',
      message: 'Your meeting with Dr. Sharma has been moved to 5 PM.',
      time: '2025-07-24 10:30 AM',
    },
    {
      id: '2',
      title: 'Hydration Reminder',
      message: 'Drink a glass of water to stay hydrated.',
      time: '2025-07-24 11:00 AM',
    },
    {
      id: '3',
      title: 'Fitness Tip',
      message: 'Take a 5-minute stretch break.',
      time: '2025-07-24 12:15 PM',
    },
    {
      id: '4',
      title: 'Meeting Bot',
      message: 'Your call with team Namah is in 30 minutes.',
      time: '2025-07-24 01:00 PM',
    },
    {
      id: '5',
      title: 'Health Check',
      message: 'Your sleep quality last night was below average.',
      time: '2025-07-24 08:00 AM',
    },
  ];

  const { isDark } = useTheme();
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View style={[styles.notificationBox, { backgroundColor: isDark ? '#1f2937' : '#fff' }]}>
      <Text style={[styles.title, { color: isDark ? '#f1f5f9' : '#222' }]}>{item.title}</Text>
      <Text style={[styles.message, { color: isDark ? '#cbd5e1' : '#555' }]}>{item.message}</Text>
      <Text style={[styles.time, { color: isDark ? '#94a3b8' : '#888' }]}>{item.time}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#0f172a' : '#F5F8FB' }]}>
      <Text style={[styles.header, { color: isDark ? '#f8fafc' : '#333' }]}>Notifications</Text>

      {/* FlatList should fill the space above bottom nav */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 100 }} // space above nav
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Feather name="home" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/calendar')}>
          <Feather name="calendar" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => router.push('/mic')}>
          <Feather name="mic" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => router.push('/bell')}>
          <Feather name="bell" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/user')}>
          <Feather name="user" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 50,
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    marginTop: 40,
  },
  notificationBox: {
    padding: 15,
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
    marginTop: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  message: {
    fontSize: 15,
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    marginTop: 6,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
