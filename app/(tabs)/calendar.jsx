import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';

const CalendarScreen = () => {
  const router = useRouter();
  const { isDark } = useTheme();
  const [selectedDate, setSelectedDate] = useState('');

  // Set dynamic background based on theme
  const backgroundColor = isDark ? '#0f172a' : '#ffffff';
  const textColor = isDark ? '#ffffff' : '#111827';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.heading, { color: textColor }]}>
        Select a Date
      </Text>

      <View style={styles.calendarWrapper}>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: '#3b82f6',
              selectedTextColor: '#fff',
            },
          }}
          theme={{
            backgroundColor,
            calendarBackground: backgroundColor,
            textSectionTitleColor: isDark ? '#cbd5e1' : '#000',
            dayTextColor: isDark ? '#f8fafc' : '#000',
            monthTextColor: isDark ? '#f1f5f9' : '#1e293b',
            arrowColor: '#3b82f6',
            todayTextColor: '#3b82f6',
            selectedDayBackgroundColor: '#3b82f6',
            selectedDayTextColor: '#ffffff',
            textDisabledColor: isDark ? '#94a3b8' : '#d1d5db',
            dotColor: '#3b82f6',
            indicatorColor: '#3b82f6',
          }}
        />
      </View>

      {selectedDate && (
        <Text style={[styles.selectedText, { color: textColor }]}>
          Selected Date: {selectedDate}
        </Text>
      )}

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

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  calendarWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  selectedText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
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
