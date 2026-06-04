import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Typography from '../../../atomComponents/Typography';
import { G } from '../../../screens/_partials/gardenUi';

/**
 * Centered horizontal week strip — matches web TasksScreen / design mock.
 */
export default function WeekCalendarStrip({ days, selectedIndex, onSelectDay }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        {days.map((day, i) => {
          const active = i === selectedIndex;
          return (
            <TouchableOpacity
              key={`${day.d}-${day.n}`}
              style={styles.dayCol}
              onPress={() => onSelectDay(i)}
              activeOpacity={0.8}
              accessibilityState={active ? { selected: true } : {}}>
              <Typography
                size={10}
                color={active ? G.forest : G.muted}
                style={[styles.dayLabel, active && styles.dayLabelActive]}>
                {day.d}
              </Typography>
              <View style={[styles.dayCircle, active && styles.dayCircleActive]}>
                <Typography
                  size={13}
                  color={active ? '#FFFFFF' : G.forest}
                  style={{ fontWeight: '600' }}>
                  {day.n}
                </Typography>
              </View>
              {day.dot ? (
                <View style={[styles.dayDot, active && styles.dayDotActive]} />
              ) : (
                <View style={styles.dotSpacer} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  dayCol: {
    flex: 1,
    alignItems: 'center',
    minWidth: 44,
    paddingVertical: 4,
  },
  dayLabel: {
    fontWeight: '500',
    textAlign: 'center',
  },
  dayLabelActive: {
    fontWeight: '600',
  },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  dayCircleActive: {
    backgroundColor: G.forest,
  },
  dayDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: G.sage,
    marginTop: 4,
  },
  dayDotActive: {
    backgroundColor: '#FFFFFF',
  },
  dotSpacer: {
    height: 8,
  },
});
