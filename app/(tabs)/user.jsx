import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext'; // ✅ global theme

const UserScreen = () => {
  const { isDark, toggleTheme } = useTheme(); // ✅ global theme control
  const router = useRouter();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? '#0F172A' : '#FFFFFF' },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, isDark && styles.whiteText]}>
          SMART SYNC
        </Text>
        <Ionicons
          name="lock-closed-outline"
          size={24}
          color={isDark ? '#fff' : '#000'}
        />
      </View>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Feather name="user" size={60} color="#aaa" />
        </View>
        <Text style={[styles.name, isDark && styles.whiteText]}>Vaibhav</Text>
      </View>

      {/* Theme Toggle */}
      <View style={[styles.card, isDark && styles.cardDark]}>
        <View style={styles.settingItem}>
          <Feather name="settings" size={20} color={isDark ? '#fff' : '#000'} />
          <Text style={[styles.settingText, isDark && styles.whiteText]}>
            Settings
          </Text>
        </View>

        <View style={styles.settingItem}>
          <Feather name="moon" size={20} color={isDark ? '#fff' : '#000'} />
          <Text style={[styles.settingText, isDark && styles.whiteText]}>
            Dark mode
          </Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            thumbColor="#fff"
            trackColor={{ true: '#4caf50', false: '#ccc' }}
          />
        </View>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => router.push('/bell')}
        >
          <Feather name="lock" size={20} color={isDark ? '#fff' : '#000'} />
          <Text style={[styles.settingText, isDark && styles.whiteText]}>
            Notifications
          </Text>
          <Feather name="chevron-right" size={20} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>

        <View style={styles.settingItem}>
          <Feather name="help-circle" size={20} color={isDark ? '#fff' : '#000'} />
          <Text style={[styles.settingText, isDark && styles.whiteText]}>
            Help
          </Text>
          <Feather name="chevron-right" size={20} color={isDark ? '#fff' : '#000'} />
        </View>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => router.push('/login')}
        >
          <Feather name="log-out" size={20} color={isDark ? '#fff' : '#000'} />
          <Text style={[styles.settingText, isDark && styles.whiteText]}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  avatar: {
    backgroundColor: '#ccc',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    marginTop: 30,
    padding: 16,
  },
  cardDark: {
    backgroundColor: '#1F2937',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
    justifyContent: 'space-between',
  },
  settingText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  whiteText: {
    color: '#fff',
  },
});
