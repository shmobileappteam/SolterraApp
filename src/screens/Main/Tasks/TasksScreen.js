import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Typography from '../../../atomComponents/Typography';
import TabScreenLayout from '../../../components/layout/TabScreenLayout';
import WeekCalendarStrip from '../../../components/solterra/tasks/WeekCalendarStrip';
import {
  ChevronRight,
  IconCalendar,
  IconCheck,
  IconCircleEmpty,
  IconDroplet,
  IconFlame,
  IconIrrigation,
  IconLeaf,
  IconSearch,
  IconSprout,
  IconSun,
  IconWheelbarrow,
} from '../../../components/solterra/tasks/TasksUiParts';
import { lesson1, taskTomatoes, taskWaterBeds } from '../../../assets/images';
import { G, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const WEEK_DAYS = [
  { d: 'Mon', n: 13, dot: false },
  { d: 'Tue', n: 14, dot: true },
  { d: 'Wed', n: 15, dot: true },
  { d: 'Thu', n: 16, dot: true },
  { d: 'Fri', n: 17, dot: false },
  { d: 'Sat', n: 18, dot: false },
  { d: 'Sun', n: 19, dot: false },
];

const STREAK_DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const STREAK_DONE = 6;

const TODAYS_TASKS = [
  {
    id: 'water',
    Icon: IconDroplet,
    title: 'Water raised beds',
    sub: 'Vegetables • 2 beds',
    meta: 'Due today',
    img: taskWaterBeds,
    iconBg: '#E6F0FA',
  },
  {
    id: 'seedlings',
    Icon: IconSprout,
    title: 'Check seedlings',
    sub: 'Greenhouse • Tray 3',
    meta: 'Due today',
    img: lesson1,
    iconBg: '#E8F0E6',
  },
  {
    id: 'fertilize',
    Icon: IconIrrigation,
    title: 'Fertilize tomatoes',
    sub: 'Raised beds',
    meta: 'Due today',
    img: taskTomatoes,
    iconBg: '#EEF0EA',
  },
];

const UPCOMING_TASKS = [
  {
    id: 'mulch',
    Icon: IconWheelbarrow,
    title: 'Add mulch to pathways',
    sub: 'Paths • Front garden',
    meta: 'Tomorrow',
    iconBg: '#E8F0E6',
  },
  {
    id: 'basil',
    Icon: IconSprout,
    title: 'Plant basil seedlings',
    sub: 'Herb garden',
    meta: 'Fri, May 17',
    iconBg: '#E8F0E6',
  },
  {
    id: 'pests',
    Icon: IconSearch,
    title: 'Inspect for pests',
    sub: 'Full garden',
    meta: 'Fri, May 17',
    iconBg: '#E8F0E6',
  },
];

const TaskRow = ({ task, showThumb, onPress }) => (
  <Pressable
    style={({ pressed }) => [styles.taskRow, pressed && styles.taskRowPressed]}
    onPress={onPress}>
    <View style={[styles.taskIconBox, { backgroundColor: task.iconBg }]}>
      <task.Icon size={17} />
    </View>
    <View style={styles.taskCopy}>
      <Typography size={13} color={G.forest} style={styles.taskTitle}>
        {task.title}
      </Typography>
      <Typography size={11} color={G.muted} mT={2}>
        {task.sub}
      </Typography>
      <Typography size={10} color={G.muted} mT={3}>
        {task.meta}
      </Typography>
    </View>
    {showThumb && task.img ? (
      <View style={styles.thumbWrap}>
        <Image source={task.img} style={styles.thumb} resizeMode="cover" />
      </View>
    ) : null}
    <IconCircleEmpty size={20} color={G.muted} />
  </Pressable>
);

const TaskSection = ({ title, badge, tasks, showThumb, onTask, onBadge, footer }) => (
  <View style={styles.sectionBlock}>
    <View style={styles.sectionHead}>
      <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
        {title}
      </Typography>
      <TouchableOpacity style={styles.badge} onPress={onBadge} activeOpacity={0.8}>
        <Typography size={11} color={G.sage} style={{ fontWeight: '600' }}>
          {badge}
        </Typography>
      </TouchableOpacity>
    </View>
    <View style={styles.homeCard}>
      {tasks.map((t, i) => (
        <View key={t.id}>
          {i > 0 ? <View style={styles.taskDivider} /> : null}
          <TaskRow task={t} showThumb={showThumb} onPress={onTask} />
        </View>
      ))}
      {footer}
    </View>
  </View>
);

const TasksScreen = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(2);

  const goDetail = () => navigation.navigate('TaskDetailScreen');
  const goCalendar = () => navigation.navigate('TasksCalendarScreen');

  return (
    <TabScreenLayout
      header={
        <View style={styles.headerRow}>
          <View>
            <Typography size={22} color={G.forest} style={styles.pageTitle}>
              Tasks
            </Typography>
            <Typography size={13} color={G.muted} mT={2}>
              Stay on top of what matters.
            </Typography>
          </View>
          <TouchableOpacity
            style={styles.calBtn}
            onPress={goCalendar}
            accessibilityLabel="Open calendar">
            <IconCalendar size={20} />
          </TouchableOpacity>
        </View>
      }>
      <View style={gardenUi.pageX}>
        <WeekCalendarStrip
          days={WEEK_DAYS}
          selectedIndex={selectedDay}
          onSelectDay={setSelectedDay}
        />
      </View>

      <View style={[gardenUi.pageX, styles.body]}>
        <TaskSection
          title="Today's Tasks"
          badge="3 tasks"
          showThumb
          tasks={TODAYS_TASKS}
          onTask={goDetail}
          onBadge={goCalendar}
        />

        <TaskSection
          title="Upcoming"
          badge="5 tasks"
          tasks={UPCOMING_TASKS}
          onTask={goDetail}
          onBadge={goCalendar}
          footer={
            <Pressable
              style={({ pressed }) => [styles.viewAllRow, pressed && styles.viewAllPressed]}
              onPress={goCalendar}>
              <Typography size={12} color={G.forest} style={{ fontWeight: '500' }}>
                View all upcoming
              </Typography>
              <ChevronRight size={14} color={G.forest} />
            </Pressable>
          }
        />

        <Pressable
          style={({ pressed }) => [styles.streakCard, pressed && styles.widgetPressed]}
          onPress={goCalendar}>
          <View style={styles.streakLeft}>
            <IconFlame size={24} />
            <View style={styles.streakCopy}>
              <View style={styles.streakNumberRow}>
                <Typography size={22} color={G.forest} style={styles.streakNumber}>
                  8
                </Typography>
                <Typography size={13} color={G.forest} style={{ fontWeight: '600', marginLeft: 4 }}>
                  day streak
                </Typography>
              </View>
              <Typography size={11} color={G.muted} mT={2}>
                Great job!
              </Typography>
            </View>
          </View>
          <View style={styles.streakDays}>
            {STREAK_DAYS.map((d, i) => (
              <View key={`${d}-${i}`} style={styles.streakDayCol}>
                <Typography size={8} color={G.muted} style={{ fontWeight: '500' }}>
                  {d}
                </Typography>
                {i < STREAK_DONE ? (
                  <View style={styles.streakCheck}>
                    <IconCheck size={9} color="#fff" />
                  </View>
                ) : (
                  <IconCircleEmpty size={18} color={G.muted} />
                )}
              </View>
            ))}
          </View>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.homeCard,
            styles.weatherCard,
            pressed && styles.widgetPressed,
          ]}
          onPress={() => navigation.navigate('HomeScreen')}>
          <View style={styles.weatherLeft}>
            <IconSun size={26} />
            <View style={styles.weatherTemps}>
              <Typography size={20} color={G.forest} style={styles.weatherDeg}>
                82°F
              </Typography>
              <Typography size={12} color={G.forest} style={{ fontWeight: '500' }}>
                Mostly Sunny
              </Typography>
              <Typography size={10} color={G.muted} mT={3}>
                Low 58° • High 84°
              </Typography>
            </View>
          </View>
          <View style={styles.weatherDivider} />
          <View style={styles.weatherRight}>
            <View style={styles.weatherNoteWrap}>
              <Typography size={11} color={G.forest} style={{ fontWeight: '600' }}>
                No rain expected
              </Typography>
              <Typography size={10} color={G.muted} mT={3}>
                Good day for outdoor tasks.
              </Typography>
            </View>
            <ChevronRight size={14} color={G.muted} />
          </View>
        </Pressable>
      </View>
    </TabScreenLayout>
  );
};

const styles = StyleSheet.create({
  pageTitle: { fontWeight: '700', lineHeight: Sizer.fS(28) },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 6,
  },
  calBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  body: { gap: 14, marginTop: 4, paddingBottom: 12 },
  sectionBlock: { gap: 8 },
  sectionHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: G.sageLight,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  homeCard: {
    ...gardenUi.card,
    borderRadius: 16,
    overflow: 'hidden',
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
  },
  taskRowPressed: { opacity: 0.88 },
  taskDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: G.divider,
    marginHorizontal: 14,
  },
  taskIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  taskCopy: { flex: 1, minWidth: 0 },
  taskTitle: { fontWeight: '600', lineHeight: Sizer.fS(17) },
  thumbWrap: {
    width: 52,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: G.cardTint,
    flexShrink: 0,
  },
  thumb: { width: '100%', height: '100%' },
  viewAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 14,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: G.divider,
  },
  viewAllPressed: { opacity: 0.85 },
  streakCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 16,
    backgroundColor: G.sageBanner,
    gap: 10,
  },
  widgetPressed: { opacity: 0.92 },
  streakLeft: { flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1, minWidth: 0 },
  streakCopy: { flex: 1 },
  streakNumberRow: { flexDirection: 'row', alignItems: 'baseline' },
  streakNumber: { fontWeight: '700', lineHeight: Sizer.fS(26) },
  streakDays: { flexDirection: 'row', gap: 5 },
  streakDayCol: { alignItems: 'center', gap: 4 },
  streakCheck: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: G.sage,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherCard: {
    flexDirection: 'row',
    alignItems: 'stretch',
    overflow: 'hidden',
  },
  weatherLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    gap: 10,
  },
  weatherTemps: { flex: 1, minWidth: 0 },
  weatherDeg: { fontWeight: '700', lineHeight: Sizer.fS(24) },
  weatherDivider: {
    width: StyleSheet.hairlineWidth,
    backgroundColor: G.divider,
    marginVertical: 12,
  },
  weatherRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    gap: 8,
  },
  weatherNoteWrap: { flex: 1, minWidth: 0 },
});

export default TasksScreen;
