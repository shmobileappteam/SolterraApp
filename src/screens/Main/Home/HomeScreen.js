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
  TaskDropletIcon,
  TaskLeafIcon,
  WeatherSunSimple,
} from '../../../components/solterra/home/HomeUiParts';
import { heroGarden, lesson1, lesson2, lesson3, solMascot } from '../../../assets/images';
import { FONTS } from '../../../globalStyle/Theme';
import { CARD_GAP, G, gardenUi } from '../../_partials/gardenUi';
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
    desc: 'Tomatoes, peppers, and basil thrive now.',
  },
  {
    img: lesson2,
    title: 'Deep water before the heat wave.',
    desc: 'Water early before temps peak.',
  },
  {
    img: lesson3,
    title: 'Add mulch to retain moisture.',
    desc: 'Mulch keeps soil cool and moist.',
  },
];

const HomeScreen = ({ navigation }) => (
    <TabScreenLayout
      header={
        <View style={styles.headerRow}>
          <View style={styles.headerCopy}>
            <Typography size={22} color={G.forest} style={styles.greeting}>
              Good morning, Emma
            </Typography>
            <Typography size={13} color={G.muted} mT={2} style={styles.subGreeting}>
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
          </View>
        </View>
      }>
        {/* Ask with Solterra AI */}
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
              <Typography size={14} color={G.forest} style={styles.aiTitle}>
                Ask with Solterra AI
              </Typography>
              <Typography size={11} color={G.muted} mT={1} style={styles.aiSub}>
                Plant care, diagnose issues & seasonal tips — anytime.
              </Typography>
            </View>
            <ChevronRight size={18} color={G.sage} strokeWidth={2.5} />
          </TouchableOpacity>
        </View>

        {/* Cards stack */}
        <View style={[gardenUi.pageX, styles.stack]}>
          {/* Your Garden Card */}
          <TouchableOpacity
            style={styles.gardenCard}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('GardenScreen')}>
            <View style={styles.gardenCopy}>
              <Typography size={12} color={G.forest} style={styles.gardenLabel}>
                Your Garden
              </Typography>
              <Typography size={16} color={G.forest} mT={4} style={styles.gardenTitle}>
                Backyard Edible Garden
              </Typography>
              <Typography size={12} color={G.muted} mT={4} style={styles.gardenMeta}>
                Zone 9b • Full Sun
              </Typography>
            </View>
            <View style={styles.gardenRight}>
              <Image source={heroGarden} style={styles.gardenThumb} />
              <ChevronRight size={16} color={G.forest} strokeWidth={2.25} />
            </View>
          </TouchableOpacity>

          {/* Garden Health Score Card */}
          <View style={[styles.homeCard, styles.healthCard]}>
            <Typography size={13} color={G.forest} style={styles.cardLabel}>
              Garden Health Score
            </Typography>
            <View style={styles.healthMain}>
              <View style={styles.healthLeft}>
                <Typography size={48} color={G.forest} style={styles.scoreBig}>
                  92
                </Typography>
                <Typography size={14} color={G.sage} style={styles.scoreLabel}>
                  Excellent
                </Typography>
                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: '92%' }]} />
                </View>
              </View>
              <View style={styles.stemWrap}>
                <HealthStemArt width={52} height={78} />
              </View>
            </View>
            <TouchableOpacity
              style={styles.detailsBtn}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('GardenScreen')}>
              <Typography size={12} color={G.sage} style={styles.detailsBtnText}>
                Details
              </Typography>
            </TouchableOpacity>
          </View>

          {/* This Week's Focus Section */}
          <View style={styles.focusSection}>
            <TouchableOpacity
              style={styles.focusHeader}
              activeOpacity={0.88}
              onPress={() => navigation.navigate('TasksScreen')}>
              <Typography size={14} color={G.forest} style={styles.cardTitle}>
                This Week's Focus
              </Typography>
              <View style={styles.focusMeta}>
                <View style={styles.taskPill}>
                  <Typography size={11} color={G.sage} style={styles.taskPillText}>
                    3 tasks
                  </Typography>
                </View>
                <ChevronRight size={14} color={G.muted} />
              </View>
            </TouchableOpacity>
            <View style={[styles.homeCard, styles.taskList]}>
              {TASKS.map((t, i) => (
                <TouchableOpacity
                  key={t.title}
                  style={[styles.taskRow, i > 0 && styles.taskDivider]}
                  activeOpacity={0.88}
                  onPress={() => navigation.navigate('TasksScreen')}>
                  <View style={[styles.taskIconSlot, t.type === 'droplet' ? styles.iconBgBlue : styles.iconBgGreen]}>
                    {t.type === 'droplet' ? <TaskDropletIcon /> : <TaskLeafIcon />}
                  </View>
                  <View style={styles.taskCopy}>
                    <Typography size={13} color={G.forest} style={styles.taskTitle}>
                      {t.title}
                    </Typography>
                    <Typography size={11} color={G.muted} mT={1}>
                      {t.sub}
                    </Typography>
                  </View>
                  <Typography size={11} color={G.muted} style={styles.taskTime}>
                    {t.time}
                  </Typography>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Weather Card */}
          <TouchableOpacity style={[styles.homeCard, styles.weatherCard]} activeOpacity={0.88}>
            <View style={styles.weatherLeft}>
              <WeatherSunSimple />
              <View style={styles.weatherTemps}>
                <Typography size={24} color={G.forest} style={styles.tempBig}>
                  82°F
                </Typography>
                <Typography size={12} color={G.forest} style={styles.weatherCondition}>
                  Mostly Sunny
                </Typography>
                <Typography size={10} color={G.muted} mT={1}>Feels like 84°</Typography>
              </View>
            </View>
            <View style={styles.weatherDivider} />
            <View style={styles.weatherRight}>
              <View style={styles.weatherRightCopy}>
                <Typography size={12} color={G.forest} style={styles.weatherHeadline}>
                  No rain expected
                </Typography>
                <Typography size={11} color={G.muted} mT={2}>
                  Perfect day to garden!
                </Typography>
              </View>
              <ChevronRight size={14} color={G.muted} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Recommendations */}
        <View style={styles.recSection}>
          <View style={[gardenUi.pageX, styles.recHeader]}>
            <Typography size={15} color={G.forest} style={styles.recSectionTitle}>
              Recommendations for You
            </Typography>
            <TouchableOpacity onPress={() => navigation.navigate('GardenScreen')} hitSlop={8}>
              <Typography size={12} color={G.sage} style={styles.viewAll}>
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
                style={[styles.homeCard, styles.recCard]}
                activeOpacity={0.88}
                onPress={() => navigation.navigate('GardenScreen')}>
                <Image source={r.img} style={styles.recImg} resizeMode="cover" />
                <View style={styles.recBody}>
                  <Typography size={12} color={G.forest} numberOfLines={2} style={styles.recTitle}>
                    {r.title}
                  </Typography>
                  <Typography size={10} color={G.muted} mT={4} numberOfLines={2} style={styles.recDesc}>
                    {r.desc}
                  </Typography>
                  <View style={styles.recChevron}>
                    <ChevronRight size={14} color={G.sage} strokeWidth={2.25} />
                  </View>
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
    paddingBottom: 2,
  },
  headerCopy: { flex: 1, paddingRight: 8 },
  greeting: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
    lineHeight: Sizer.fS(26),
  },
  subGreeting: { 
    lineHeight: Sizer.fS(18),
    fontFamily: FONTS.body,
  },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  iconBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  notifDot: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: G.sage,
    borderWidth: 1.2,
    borderColor: G.cream,
  },
  aiCard: {
    ...gardenUi.card,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 12,
    borderRadius: 12,
    backgroundColor: G.cream,
    borderWidth: 1.5,
    borderColor: G.sage,
  },
  aiBadgePos: { position: 'absolute', top: 10, right: 10, zIndex: 1 },
  mascotWrap: {
    shadowColor: '#1A3020',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  mascot: { width: 44, height: 44 },
  aiCopy: { flex: 1, marginLeft: 10, paddingRight: 24 },
  aiTitle: { fontWeight: '700' },
  aiSub: { lineHeight: 15 },
  stack: { gap: 8, marginTop: 10, paddingBottom: 4 },
  homeCard: {
    ...gardenUi.card,
    borderRadius: 14,
  },
  gardenCard: {
    ...gardenUi.card,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 20,
  },
  gardenCopy: { flex: 1, minWidth: 0, paddingRight: 10 },
  gardenLabel: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
  },
  gardenTitle: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
  },
  gardenMeta: {
    fontFamily: FONTS.body,
    fontWeight: '400',
  },
  gardenRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
  },
  cardTitle: { 
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
  cardLabel: { 
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
  gardenThumb: { width: 82, height: 70, borderRadius: 10 },
  healthCard: {
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 14,
  },
  healthMain: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  healthLeft: { flex: 1, minWidth: 0, paddingRight: 12 },
  scoreBig: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
    lineHeight: Sizer.fS(52),
    letterSpacing: -1,
  },
  scoreLabel: { 
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
    marginTop: -4,
  },
  stemWrap: { marginTop: -12, marginRight: 4 },
  progressTrack: {
    height: 7,
    borderRadius: 3.5,
    backgroundColor: G.sageLight,
    marginTop: 12,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: G.sage, borderRadius: 3.5 },
  detailsBtn: {
    alignSelf: 'flex-end',
    marginTop: 10,
    borderWidth: 1,
    borderColor: G.sage,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  detailsBtnText: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
  focusSection: {
    marginTop: 2,
  },
  focusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingBottom: 8,
  },
  focusMeta: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  taskPill: {
    backgroundColor: G.sageLight,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  taskPillText: {
    fontFamily: FONTS.body,
    fontWeight: '500',
  },
  taskList: { 
    paddingHorizontal: 14, 
    paddingBottom: 12,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 10,
  },
  taskDivider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: G.divider },
  taskIconSlot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBgBlue: {
    backgroundColor: '#E6F0FA',
  },
  iconBgGreen: {
    backgroundColor: '#E8F0E6',
  },
  taskCopy: { flex: 1, minWidth: 0 },
  taskTitle: { 
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
  taskTime: {
    flexShrink: 0,
  },
  weatherCard: { flexDirection: 'row', alignItems: 'stretch', overflow: 'hidden' },
  weatherLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 10,
  },
  weatherTemps: { flex: 1 },
  tempBig: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    lineHeight: Sizer.fS(28),
  },
  weatherCondition: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '500',
    marginTop: 1,
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
    paddingHorizontal: 12,
    paddingVertical: 14,
    gap: 6,
  },
  weatherRightCopy: { flex: 1, minWidth: 0 },
  weatherHeadline: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
  recSection: { marginTop: 16 },
  recHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  recSectionTitle: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
    lineHeight: Sizer.fS(20),
  },
  viewAll: {
    fontFamily: FONTS.body,
    fontWeight: '500',
  },
  recScroll: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    gap: 12,
  },
  recCard: {
    width: 158,
    padding: 12,
    borderRadius: 16,
    overflow: 'hidden',
  },
  recImg: { width: '100%', height: 88, borderRadius: 10 },
  recBody: {
    flex: 1,
    marginTop: 10,
    minHeight: 72,
    paddingRight: 18,
  },
  recTitle: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
    lineHeight: Sizer.fS(16),
  },
  recDesc: {
    lineHeight: Sizer.fS(14),
    fontFamily: FONTS.body,
  },
  recChevron: { position: 'absolute', right: 0, bottom: 2 },
});

export default HomeScreen;
