import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
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
  IconLeaf,
  IconSprout,
  IconSun,
} from '../../../components/solterra/tasks/TasksUiParts';
import { heroGarden, lesson1, lesson2 } from '../../../assets/images';
import { CARD_GAP, G, gardenUi } from '../../_partials/gardenUi';
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
const STREAK_DONE = 5;

const TODAYS_TASKS = [
  {
    Icon: IconDroplet,
    title: 'Water raised beds',
    sub: 'Vegetables • 2 beds',
    meta: 'Due today',
    img: heroGarden,
  },
  {
    Icon: IconSprout,
    title: 'Check seedlings',
    sub: 'Greenhouse • Tray 3',
    meta: '15 min',
    img: lesson1,
  },
  {
    Icon: IconLeaf,
    title: 'Fertilize tomatoes',
    sub: 'Raised beds',
    meta: 'This week',
    img: lesson2,
  },
];

const UPCOMING_TASKS = [
  {
    Icon: () => <Text style={{ fontSize: 16 }}>🍅</Text>,
    title: 'Harvest cherry tomatoes',
    sub: 'Backyard • Row A',
    meta: 'Sat',
  },
  {
    Icon: IconLeaf,
    title: 'Mulch pathways',
    sub: 'Full garden',
    meta: 'Next week',
  },
];

const TaskSection = ({ title, badge, tasks, showThumb, onTask, onBadge }) => (
  <View>
    <View style={styles.sectionHead}>
      <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
        {title}
      </Typography>
      <TouchableOpacity style={styles.badge} onPress={onBadge} activeOpacity={0.8}>
        <Typography size={10} color={G.sage} style={{ fontWeight: '500' }}>
          {badge}
        </Typography>
      </TouchableOpacity>
    </View>
    <View style={gardenUi.card}>
      {tasks.map((t, i) => (
        <TouchableOpacity
          key={t.title}
          style={[styles.taskRow, i > 0 && styles.taskDivider]}
          onPress={onTask}
          activeOpacity={0.88}>
          <View style={styles.taskIconBox}>
            <t.Icon />
          </View>
          <View style={styles.taskCopy}>
            <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
              {t.title}
            </Typography>
            <Typography size={11} color={G.muted}>{t.sub}</Typography>
          </View>
          {showThumb && t.img ? <Image source={t.img} style={styles.thumb} /> : null}
          <Typography size={11} color={G.muted} style={styles.taskMeta}>
            {t.meta}
          </Typography>
          <IconCircleEmpty size={20} />
        </TouchableOpacity>
      ))}
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
            <Typography size={28} color={G.forest} style={styles.pageTitle}>
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
            <IconCalendar />
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
            badge="2 tasks"
            tasks={UPCOMING_TASKS}
            onTask={goDetail}
            onBadge={goCalendar}
          />

          <TouchableOpacity style={styles.streakCard} activeOpacity={0.88} onPress={goCalendar}>
            <View style={styles.streakLeft}>
              <IconFlame />
              <View style={styles.streakCopy}>
                <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                  8 day streak
                </Typography>
                <Typography size={11} color={G.muted}>Great job!</Typography>
              </View>
            </View>
            <View style={styles.streakDays}>
              {STREAK_DAYS.map((d, i) => (
                <View key={`${d}-${i}`} style={styles.streakDayCol}>
                  <Typography size={8} color={G.muted}>{d}</Typography>
                  {i < STREAK_DONE ? (
                    <View style={styles.streakCheck}>
                      <IconCheck size={10} />
                    </View>
                  ) : (
                    <IconCircleEmpty size={16} />
                  )}
                </View>
              ))}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[gardenUi.card, styles.alertCard]}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('AskSolScreen')}>
            <View style={styles.alertCopy}>
              <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                Climate Alert
              </Typography>
              <Typography size={11} color={G.muted} mT={4} style={{ lineHeight: 16 }}>
                Heat advisory in effect. Water early morning and mulch to retain moisture.
              </Typography>
            </View>
            <IconSun size={32} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[gardenUi.card, styles.tipCard]}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('GardenScreen')}>
            <View style={styles.alertCopy}>
              <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                Seasonal Tip
              </Typography>
              <Typography size={11} color={G.muted} mT={4} style={{ lineHeight: 16 }}>
                Plant heat-loving crops and add shade cloth as temps rise.
              </Typography>
            </View>
            <Text style={styles.tipEmoji}>🪴</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[gardenUi.card, styles.weatherCard]}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('HomeScreen')}>
            <View style={styles.weatherLeft}>
              <IconSun size={28} />
              <View style={styles.weatherTemps}>
                <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                  82°F Mostly Sunny
                </Typography>
                <Typography size={11} color={G.muted}>H 84° / L 68°</Typography>
              </View>
            </View>
            <View style={styles.weatherDivider} />
            <View style={styles.weatherRight}>
              <Typography size={11} color={G.muted} style={styles.weatherNote}>
                No rain expected. Perfect day to garden!
              </Typography>
              <ChevronRight size={16} />
            </View>
          </TouchableOpacity>
        </View>
    </TabScreenLayout>
  );
};

const styles = StyleSheet.create({
  pageTitle: { fontWeight: '700', lineHeight: Sizer.fS(32) },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
  },
  calBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  body: { gap: CARD_GAP, marginTop: 4, paddingBottom: 8 },
  sectionHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    backgroundColor: G.sageLight,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 10,
  },
  taskDivider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: G.divider },
  taskIconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: G.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskCopy: { flex: 1, minWidth: 0 },
  thumb: { width: 40, height: 40, borderRadius: 6 },
  taskMeta: { flexShrink: 0 },
  streakCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 8,
    backgroundColor: G.sageLight,
  },
  streakLeft: { flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1, minWidth: 0 },
  streakCopy: { flex: 1 },
  streakDays: { flexDirection: 'row', gap: 4 },
  streakDayCol: { alignItems: 'center', gap: 2 },
  streakCheck: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: G.sage,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 12,
    gap: 12,
    backgroundColor: G.sageLight,
  },
  alertCopy: { flex: 1, minWidth: 0 },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 12,
    gap: 12,
    backgroundColor: G.sageLight,
  },
  tipEmoji: { fontSize: 24 },
  weatherCard: {
    flexDirection: 'row',
    alignItems: 'stretch',
    overflow: 'hidden',
    backgroundColor: G.sageLight,
  },
  weatherLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 10,
  },
  weatherTemps: { flex: 1, minWidth: 0 },
  weatherDivider: {
    width: StyleSheet.hairlineWidth,
    backgroundColor: G.divider,
    marginVertical: 8,
  },
  weatherRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 6,
  },
  weatherNote: { flex: 1, lineHeight: 16 },
});

export default TasksScreen;
