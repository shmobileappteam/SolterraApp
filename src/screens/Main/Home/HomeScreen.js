import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Typography from '../../../atomComponents/Typography';
import TabScreenLayout from '../../../components/layout/TabScreenLayout';
import HealthStemArt from '../../../components/solterra/HealthStemArt';
import {
  AiBadge,
  ChevronRight,
  IconBell,
  IconUser,
  TaskDropletIcon,
  TaskLeafIcon,
  WeatherSunSimple,
} from '../../../components/solterra/home/HomeUiParts';
import { heroGarden, lesson1, lesson2, lesson3, solMascot } from '../../../assets/images';
import { FONTS } from '../../../globalStyle/Theme';
import { CARD_GAP, G, cardPad, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const TASKS = [
  { type: 'droplet', title: 'Check irrigation', sub: 'Drip system', time: '15 min' },
  { type: 'leaf', title: 'Fertilize tomatoes', sub: 'Raised beds', time: 'This week' },
  { type: 'leaf', title: 'Mulch garden beds', sub: 'Moisture & weed control', time: 'This week' },
];

const RECS = [
  {
    img: lesson1,
    title: 'Plant heat-loving crops this week.',
    desc: 'Tomatoes, peppers, and basil thrive in your zone.',
  },
  {
    img: lesson2,
    title: 'Deep water before the heat wave.',
    desc: 'Morning watering helps roots stay resilient.',
  },
  {
    img: lesson3,
    title: 'Add mulch to retain moisture.',
    desc: 'A 2-inch layer cuts evaporation and weeds.',
  },
];

const HomeScreen = ({ navigation }) => (
    <TabScreenLayout
      header={
        <View style={styles.headerRow}>
          <View style={styles.headerCopy}>
            <Typography size={26} color={G.forest} style={styles.greeting}>
              Good morning, Emma
            </Typography>
            <Typography size={13} color={G.muted} mT={4} style={styles.subGreeting}>
              Let's keep your garden thriving.
            </Typography>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.iconBtn}
              hitSlop={8}
              onPress={() => navigation.navigate('NotificationsScreen')}
              accessibilityLabel="Notifications">
              <IconBell />
              <View style={styles.notifDot} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconBtn}
              hitSlop={8}
              onPress={() => navigation.navigate('ProfileMenuScreen')}
              accessibilityLabel="Profile">
              <IconUser />
            </TouchableOpacity>
          </View>
        </View>
      }>
        {/* Ask with Solterra AI — sage border + lift shadow */}
        <View style={gardenUi.pageX}>
          <TouchableOpacity
            style={styles.aiCard}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('AskSolScreen')}>
            <View style={styles.aiBadgePos}>
              <AiBadge />
            </View>
            <View style={styles.mascotWrap}>
              <Image source={solMascot} style={styles.mascot} resizeMode="contain" />
            </View>
            <View style={styles.aiCopy}>
              <Typography size={15} color={G.forest} style={styles.aiTitle}>
                Ask with Solterra AI
              </Typography>
              <Typography size={12} color={G.muted} mT={2} style={styles.aiSub}>
                Plant care, diagnose issues & seasonal tips — anytime.
              </Typography>
            </View>
            <ChevronRight size={20} color={G.sage} strokeWidth={2.5} />
          </TouchableOpacity>
        </View>

        {/* Cards stack — web space-y-2.5 */}
        <View style={[gardenUi.pageX, styles.stack]}>
          <TouchableOpacity
            style={[gardenUi.card, styles.gardenCard]}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('GardenScreen')}>
            <View style={styles.gardenCopy}>
              <Typography size={10} color={G.muted} style={styles.eyebrow}>
                YOUR GARDEN
              </Typography>
              <Typography size={15} color={G.forest} mT={2} style={styles.cardTitle}>
                Backyard Edible Garden
              </Typography>
              <Typography size={12} color={G.muted} mT={2}>
                Zone 9b • Full Sun
              </Typography>
            </View>
            <Image source={heroGarden} style={styles.gardenThumb} />
            <ChevronRight size={16} color={G.muted} />
          </TouchableOpacity>

          <View style={[gardenUi.card, cardPad]}>
            <Typography size={12} color={G.forest} style={styles.cardLabel}>
              Garden Health Score
            </Typography>
            <View style={styles.healthMain}>
              <View style={styles.healthLeft}>
                <View style={styles.scoreLine}>
                  <Typography size={48} color={G.forest} style={styles.scoreBig}>
                    92
                  </Typography>
                  <Typography size={14} color={G.sage} style={styles.scoreLabel}>
                    Excellent
                  </Typography>
                </View>
                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: '92%' }]} />
                </View>
              </View>
              <View style={styles.stemWrap}>
                <HealthStemArt width={48} height={72} />
              </View>
            </View>
            <TouchableOpacity
              style={styles.detailsBtn}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('GardenScreen')}>
              <Typography size={12} color={G.sage} style={{ fontWeight: '500' }}>
                Details
              </Typography>
            </TouchableOpacity>
          </View>

          <View style={gardenUi.card}>
            <TouchableOpacity
              style={styles.focusHeader}
              activeOpacity={0.88}
              onPress={() => navigation.navigate('TasksScreen')}>
              <Typography size={15} color={G.forest} style={styles.cardTitle}>
                This Week's Focus
              </Typography>
              <View style={styles.focusMeta}>
                <View style={styles.taskPill}>
                  <Typography size={11} color={G.sage} style={{ fontWeight: '500' }}>
                    3 tasks
                  </Typography>
                </View>
                <ChevronRight size={16} color={G.muted} />
              </View>
            </TouchableOpacity>
            <View style={styles.taskList}>
              {TASKS.map((t, i) => (
                <TouchableOpacity
                  key={t.title}
                  style={[styles.taskRow, i > 0 && styles.taskDivider]}
                  activeOpacity={0.88}
                  onPress={() => navigation.navigate('TasksScreen')}>
                  <View style={styles.taskIconCircle}>
                    {t.type === 'droplet' ? <TaskDropletIcon /> : <TaskLeafIcon />}
                  </View>
                  <View style={styles.taskCopy}>
                    <Typography size={14} color={G.forest} style={styles.taskTitle}>
                      {t.title}
                    </Typography>
                    <Typography size={12} color={G.muted}>{t.sub}</Typography>
                  </View>
                  <Typography size={12} color={G.muted}>{t.time}</Typography>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity style={[gardenUi.card, styles.weatherCard]} activeOpacity={0.88}>
            <View style={styles.weatherLeft}>
              <WeatherSunSimple />
              <View style={styles.weatherTemps}>
                <Typography size={28} color={G.forest} style={styles.tempBig}>
                  82°F
                </Typography>
                <Typography size={13} color={G.forest} style={{ fontWeight: '500' }}>
                  Mostly Sunny
                </Typography>
                <Typography size={11} color={G.muted}>Feels like 84°</Typography>
              </View>
            </View>
            <View style={styles.weatherDivider} />
            <View style={styles.weatherRight}>
              <View style={styles.weatherRightCopy}>
                <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                  No rain expected
                </Typography>
                <Typography size={12} color={G.muted} mT={2}>
                  Perfect day to garden!
                </Typography>
              </View>
              <ChevronRight size={16} color={G.muted} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Recommendations — web mt-4 */}
        <View style={styles.recSection}>
          <View style={[gardenUi.pageX, styles.recHeader]}>
            <Typography size={15} color={G.forest} style={styles.cardTitle}>
              Recommendations for You
            </Typography>
            <TouchableOpacity onPress={() => navigation.navigate('GardenScreen')} hitSlop={8}>
              <Typography size={12} color={G.muted} style={{ fontWeight: '500' }}>
                View all
              </Typography>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recScroll}>
            {RECS.map(r => (
              <TouchableOpacity
                key={r.title}
                style={[gardenUi.card, styles.recCard]}
                activeOpacity={0.88}
                onPress={() => navigation.navigate('GardenScreen')}>
                <Image source={r.img} style={styles.recImg} resizeMode="cover" />
                <Typography size={12} color={G.forest} mT={10} numberOfLines={2} style={styles.recTitle}>
                  {r.title}
                </Typography>
                <Typography size={10} color={G.muted} mT={4} numberOfLines={2} style={{ lineHeight: 14 }}>
                  {r.desc}
                </Typography>
                <View style={styles.recChevron}>
                  <ChevronRight size={14} color={G.muted} />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
    </TabScreenLayout>
  );

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingBottom: 4,
  },
  headerCopy: { flex: 1, paddingRight: 8 },
  greeting: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    lineHeight: Sizer.fS(30),
  },
  subGreeting: { lineHeight: Sizer.fS(18) },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  iconBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifDot: {
    position: 'absolute',
    top: 9,
    right: 9,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: G.sage,
  },
  aiCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    padding: 14,
    borderRadius: 8,
    backgroundColor: G.sageLight,
    borderWidth: 2,
    borderColor: G.sage,
    shadowColor: '#1A3020',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  aiBadgePos: { position: 'absolute', top: 12, right: 12, zIndex: 1 },
  mascotWrap: {
    shadowColor: '#1A3020',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 2,
  },
  mascot: { width: 48, height: 48 },
  aiCopy: { flex: 1, marginLeft: 12, paddingRight: 28 },
  aiTitle: { fontWeight: '700' },
  aiSub: { lineHeight: 17 },
  stack: { gap: CARD_GAP, marginTop: 12, paddingBottom: 4 },
  gardenCard: {
    ...cardPad,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  gardenCopy: { flex: 1, minWidth: 0 },
  eyebrow: { letterSpacing: 1.6, fontWeight: '600', textTransform: 'uppercase' },
  cardTitle: { fontWeight: '600' },
  cardLabel: { fontWeight: '600' },
  gardenThumb: { width: 56, height: 56, borderRadius: 8 },
  healthMain: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  healthLeft: { flex: 1, minWidth: 0, paddingRight: 8 },
  scoreLine: { flexDirection: 'row', alignItems: 'baseline', gap: 8 },
  scoreBig: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    lineHeight: Sizer.fS(48),
  },
  scoreLabel: { fontWeight: '600', marginBottom: 4 },
  stemWrap: { marginTop: -4 },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: G.sageLight,
    marginTop: 12,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: G.sage, borderRadius: 4 },
  detailsBtn: {
    alignSelf: 'flex-end',
    marginTop: 12,
    borderWidth: 1,
    borderColor: G.sage,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  focusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  focusMeta: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  taskPill: {
    backgroundColor: G.sageLight,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  taskList: { paddingHorizontal: 16, paddingBottom: 12 },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  taskDivider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: G.divider },
  taskIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F5F4F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskCopy: { flex: 1, minWidth: 0 },
  taskTitle: { fontWeight: '600' },
  weatherCard: { flexDirection: 'row', alignItems: 'stretch', overflow: 'hidden' },
  weatherLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  weatherTemps: { flex: 1 },
  tempBig: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    lineHeight: Sizer.fS(30),
  },
  weatherDivider: {
    width: StyleSheet.hairlineWidth,
    backgroundColor: G.divider,
    marginVertical: 12,
  },
  weatherRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 8,
  },
  weatherRightCopy: { flex: 1, minWidth: 0 },
  recSection: { marginTop: 16 },
  recHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  recScroll: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    gap: 10,
  },
  recCard: {
    width: 140,
    padding: 10,
    marginRight: 10,
    minHeight: 168,
  },
  recImg: { width: '100%', height: 80, borderRadius: 6 },
  recTitle: { fontWeight: '600', lineHeight: 16 },
  recChevron: { position: 'absolute', right: 12, bottom: 12 },
});

export default HomeScreen;
