import React, { useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Typography from '../../../atomComponents/Typography';
import { G, gardenUi } from '../../../screens/_partials/gardenUi';
import { ChevronLeft, ChevronRight } from './TasksUiParts';
import {
  WEEKDAY_LABELS,
  buildMonthGrid,
  chunkWeeks,
  formatMonthYear,
  isSameDay,
} from './monthCalendarUtils';

/**
 * Full-month calendar grid, centered, Monday-first (matches Tasks week strip).
 */
export default function MonthCalendar({
  year,
  month,
  selectedDate,
  onSelectDate,
  onPrevMonth,
  onNextMonth,
  taskDays = [],
}) {
  const weeks = useMemo(() => {
    const cells = buildMonthGrid(year, month);
    return chunkWeeks(cells);
  }, [year, month]);

  const taskDaySet = useMemo(() => new Set(taskDays), [taskDays]);

  return (
    <View style={styles.wrap}>
      <View style={[gardenUi.card, styles.card]}>
        <View style={styles.monthNav}>
          <TouchableOpacity
            onPress={onPrevMonth}
            style={styles.navBtn}
            hitSlop={12}
            accessibilityLabel="Previous month">
            <ChevronLeft />
          </TouchableOpacity>
          <Typography size={15} color={G.forest} style={styles.monthTitle}>
            {formatMonthYear(year, month)}
          </Typography>
          <TouchableOpacity
            onPress={onNextMonth}
            style={styles.navBtn}
            hitSlop={12}
            accessibilityLabel="Next month">
            <ChevronRight size={20} color={G.forest} />
          </TouchableOpacity>
        </View>

        <View style={styles.weekdayRow}>
          {WEEKDAY_LABELS.map(label => (
            <View key={label} style={styles.weekdayCell}>
              <Typography size={10} color={G.muted} style={styles.weekdayText}>
                {label}
              </Typography>
            </View>
          ))}
        </View>

        {weeks.map((week, wi) => (
          <View key={`week-${wi}`} style={styles.weekRow}>
            {week.map(cell => {
              const active = isSameDay(cell.date, selectedDate);
              const inMonth = !cell.outside;
              const hasTasks = inMonth && taskDaySet.has(cell.day);

              return (
                <TouchableOpacity
                  key={`${cell.date.toISOString()}`}
                  style={styles.dayCell}
                  onPress={() => onSelectDate(cell.date)}
                  activeOpacity={0.75}
                  accessibilityState={active ? { selected: true } : {}}>
                  <View style={[styles.dayCircle, active && styles.dayCircleActive]}>
                    <Typography
                      size={13}
                      color={active ? '#fff' : inMonth ? G.forest : G.muted}
                      style={{ fontWeight: active || inMonth ? '600' : '400', opacity: inMonth ? 1 : 0.45 }}>
                      {cell.day}
                    </Typography>
                  </View>
                  {hasTasks ? (
                    <View style={[styles.taskDot, active && styles.taskDotActive]} />
                  ) : (
                    <View style={styles.dotSpacer} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  monthNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  navBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthTitle: {
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  weekdayRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  weekdayCell: {
    flex: 1,
    alignItems: 'center',
  },
  weekdayText: {
    fontWeight: '500',
    textAlign: 'center',
  },
  weekRow: {
    flexDirection: 'row',
  },
  dayCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
    minHeight: 44,
  },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCircleActive: {
    backgroundColor: G.forest,
  },
  taskDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: G.sage,
    marginTop: 2,
  },
  taskDotActive: {
    backgroundColor: '#fff',
  },
  dotSpacer: {
    height: 6,
    marginTop: 2,
  },
});
