import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import WeekCalendarStrip from '../../../components/solterra/tasks/WeekCalendarStrip';
import { G, gardenUi } from '../../_partials/gardenUi';

const WEEK_DAYS = [
  { d: 'Mon', n: 13, dot: false },
  { d: 'Tue', n: 14, dot: true },
  { d: 'Wed', n: 15, dot: true },
  { d: 'Thu', n: 16, dot: true },
  { d: 'Fri', n: 17, dot: false },
  { d: 'Sat', n: 18, dot: false },
  { d: 'Sun', n: 19, dot: false },
];

const WEEK_SUMMARY = ['1–2 tasks', '1–2 tasks', '3 tasks', '1–2 tasks', '1–2 tasks', 'No tasks', 'No tasks'];

const TasksCalendarScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [selectedDay, setSelectedDay] = useState(2);

  return (
    <View style={gardenUi.page}>
      <View style={[gardenUi.pageX, styles.header, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Typography size={18} color={G.muted}>
            ←
          </Typography>
        </TouchableOpacity>
        <Typography size={16} color={G.forest} style={{ fontWeight: '600' }}>
          This Week
        </Typography>
        <View style={styles.backBtn} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[gardenUi.scrollPad, gardenUi.pageX, styles.scroll]}>
        <WeekCalendarStrip
          days={WEEK_DAYS}
          selectedIndex={selectedDay}
          onSelectDay={setSelectedDay}
        />

        <View style={{ gap: 8, marginTop: 8 }}>
          {WEEK_DAYS.map((day, i) => (
            <TouchableOpacity
              key={`${day.d}-${day.n}`}
              style={[gardenUi.card, styles.dayRow, i === selectedDay && styles.dayRowActive]}
              activeOpacity={0.88}
              onPress={() => {
                setSelectedDay(i);
                navigation.navigate('TaskDetailScreen');
              }}>
              <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
                {day.d} {day.n}
              </Typography>
              <Typography size={12} color={G.muted}>
                {WEEK_SUMMARY[i]}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  backBtn: { width: 36, alignItems: 'center' },
  scroll: { paddingBottom: 24 },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  dayRowActive: {
    borderWidth: 1,
    borderColor: G.sage,
  },
});

export default TasksCalendarScreen;
