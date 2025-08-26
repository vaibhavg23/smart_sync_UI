import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Vibration,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();
  const { isDark } = useTheme();
  const [waterCount, setWaterCount] = useState(0);
  const maxGlasses = 8;

  const nextTasks = [
    { time: '10:00 AM', task: 'Team Standup Meeting' },
    { time: '11:30 AM', task: 'UI Design Review' },
    { time: '01:00 PM', task: 'Lunch Break' },
    { time: '03:00 PM', task: 'Client Call' },
    { time: '05:00 PM', task: 'Daily Wrap-up' },
  ];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? '#0F172A' : '#f4f7fc' },
      ]}
    >
      {/* Greeting */}
      <Text style={[styles.greeting, isDark && styles.textWhite]}>
        Good Morning,{'\n'}Vaibhav
      </Text>

      {/* Search Box with Mic */}
      <View style={[styles.searchBox, isDark && styles.searchBoxDark]}>
        <Feather
          name="search"
          size={20}
          color={isDark ? '#fff' : '#475569'}
          style={styles.searchIcon}
        />
        <Text style={[styles.searchText, { color: isDark ? '#cbd5e1' : '#475569' }]}>
          Add your Schedule...
        </Text>
        <TouchableOpacity onPress={() => router.push('/mic')}>
          <Feather name="mic" size={22} color={isDark ? '#fff' : '#475569'} />
        </TouchableOpacity>
      </View>

      {/* Next Task Section */}
      <View style={[styles.taskCard, isDark && styles.taskCardDark]}>
        <Text style={[styles.taskTitle, isDark && styles.textWhite]}>
          Today's Schedule
        </Text>
        {nextTasks.map((item, index) => (
          <Text
            key={index}
            style={[styles.taskItem, { color: isDark ? '#cbd5e1' : '#475569' }]}
          >
            ⏰ {item.time} — {item.task}
          </Text>
        ))}
      </View>

      {/* Tips Section */}
      <View style={styles.tipContainer}>
        {/* Water Intake Tracker */}
        <View
          style={[
            styles.tipBox,
            styles.shadow,
            isDark ? styles.tipDarkBlue : styles.tipLightBlue,
          ]}
        >
          <Image
            source={{
              uri: 'https://t4.ftcdn.net/jpg/02/85/19/86/240_F_825198623_91xZCQxmTuxrOycn6IXXfwg0dScjjzbu.jpg',
            }}
            style={styles.hydrationImage}
            resizeMode="contain"
          />
          <Text style={styles.tipTitle}>Water Intake</Text>
          <Text style={[styles.tipText, { color: isDark ? '#ffffff' : '#475569' }]}>
            {waterCount}/{maxGlasses} glasses today
          </Text>

          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBar,
                {
                  width: `${(waterCount / maxGlasses) * 100}%`,
                  backgroundColor: isDark ? '#60A5FA' : '#3B82F6',
                },
              ]}
            />
          </View>

          <View style={styles.counterButtons}>
            <TouchableOpacity
              onPress={() => {
                Vibration.vibrate(50);
                setWaterCount(Math.max(0, waterCount - 1));
              }}
              style={[
                styles.counterBtn,
                { backgroundColor: isDark ? '#1e293b' : '#cbd5e1' },
              ]}
            >
              <Feather name="minus" size={20} color={isDark ? '#fff' : '#000'} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Vibration.vibrate(50);
                setWaterCount(Math.min(maxGlasses, waterCount + 1));
              }}
              style={[
                styles.counterBtn,
                { backgroundColor: isDark ? '#1e293b' : '#cbd5e1' },
              ]}
            >
              <Feather name="plus" size={20} color={isDark ? '#fff' : '#000'} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Fitness Tip */}
        <View
          style={[
            styles.tipBox,
            styles.shadow,
            isDark ? styles.tipDarkGreen : styles.tipLightGreen,
          ]}
        >
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/1a/c6/ec/1ac6ec98195fa1498be7bd6a517386fb.jpg',
            }}
            style={styles.fitnessImage}
            resizeMode="contain"
          />
          <Text style={styles.tipTitle}>Fitness Tip</Text>
          <Text style={[styles.tipText, { color: isDark ? '#fff' : '#475569' }]}>
            Take a short walk to reduce stress
          </Text>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Feather name="home" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/calendar')}>
          <Feather name="calendar" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/bell')}>
          <Feather name="bell" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/user')}>
          <Feather name="user" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 24,
    color: '#1e293b',
  },
  textWhite: {
    color: '#FFFFFF',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e2e8f0',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  searchBoxDark: {
    backgroundColor: '#1F2937',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchText: {
    flex: 1,
    fontSize: 15,
    color: '#475569',
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  taskCardDark: {
    backgroundColor: '#1E293B',
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  taskItem: {
    fontSize: 15,
    marginBottom: 6,
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 100,
  },
  hydrationImage: {
    width: 120,
    height: 100,
    alignSelf: 'center',
    marginBottom: 8,
    borderRadius: 10,
  },
  fitnessImage: {
    width: 120,
    height: 100,
    alignSelf: 'center',
    marginBottom: 8,
    borderRadius: 10,
  },
  tipBox: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  tipLightBlue: {
    backgroundColor: '#bee3f8',
  },
  tipDarkBlue: {
    backgroundColor: '#1E3A8A',
  },
  tipLightGreen: {
    backgroundColor: '#c6f6d5',
  },
  tipDarkGreen: {
    backgroundColor: '#065F46',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
    textAlign: 'center',
  },
  tipText: {
    fontSize: 16,
    textAlign: 'center',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 0,
  },
  progressBar: {
    height: '100%',
    borderRadius: 6,
  },
  counterButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
    gap: 18,
  },
  counterBtn: {
    padding: 10,
    borderRadius: 8,
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
