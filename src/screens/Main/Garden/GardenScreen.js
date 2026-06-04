import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Typography from '../../../atomComponents/Typography';
import TabScreenLayout from '../../../components/layout/TabScreenLayout';
import HealthStemArt from '../../../components/solterra/HealthStemArt';
import {
  ChevronDown,
  ChevronRight,
  IconBellSmall,
  IconCalendar,
  IconCamera,
  IconDollar,
  IconDroplet,
  IconHammerWhite,
  IconLayers,
  IconLightbulb,
  IconPlus,
  IconSunSmall,
  IconUsers,
  PlanOverlayFab,
  PlanToolIcon,
  SunExposureIcon,
  TabGrid,
  TabHammer,
  TabLeaf,
  TabStethoscope,
  TaskDropletIcon,
  TaskLeafIcon,
} from '../../../components/solterra/garden/GardenUiParts';
import { heroGarden, lesson1, lesson2, lesson3, onb2, onb3 } from '../../../assets/images';
import { FONTS } from '../../../globalStyle/Theme';
import { CARD_GAP, G, cardPad, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const TABS = [
  { id: 'overview', label: 'Overview', TabIcon: TabLeaf },
  { id: 'plans', label: 'Plans', TabIcon: TabGrid },
  { id: 'projects', label: 'Projects', TabIcon: TabHammer },
  { id: 'diagnose', label: 'Diagnose', TabIcon: TabStethoscope },
];

const FOCUS_TASKS = [
  { type: 'droplet', title: 'Check irrigation', sub: 'Drip system', time: '15 min' },
  { type: 'leaf', title: 'Fertilize tomatoes', sub: 'Raised beds', time: 'This week' },
  { type: 'leaf', title: 'Mulch garden beds', sub: 'Moisture & weed control', time: 'This week' },
];

const PLAN_STATS = [
  { Icon: IconSunSmall, label: 'Sunlight', value: '6–8 hrs', sub: 'Mostly afternoon', color: '#E8A838' },
  { Icon: props => <IconDroplet {...props} filled color="#4A8FD4" />, label: 'Water Needs', value: 'Moderate', sub: '2× per week', color: '#4A8FD4' },
  { Icon: IconDollar, label: 'Est. Budget', value: '$1,200', sub: 'Medium range', color: G.sage, subColor: G.sage },
  { Icon: IconCalendar, label: 'Timeline', value: '8 weeks', sub: 'Start in April', color: G.sage },
];

const PLAN_TOOLS = [
  { title: 'Sunlight Map', desc: 'Track sun patterns' },
  { title: 'Irrigation Planner', desc: 'Design watering zones' },
  { title: 'Planting Schedule', desc: 'Seasonal calendar' },
  { title: 'Budget Estimator', desc: 'Cost breakdown' },
];

const PROJECT_FILTERS = ['All Projects', 'In Progress', 'Planned', 'Completed'];

const PROJECTS = [
  { title: 'Build Greenhouse', status: 'In Progress', step: 'Step 4 of 7 • Install frame', pct: 63, img: onb2, date: 'May 20', pri: 'High' },
  { title: 'Install Drip Irrigation', status: 'In Progress', step: 'Step 2 of 5 • Lay main line', pct: 40, img: lesson2, date: 'May 18', pri: 'Medium' },
  { title: 'Raised Bed Expansion', status: 'Planned', step: 'Step 0 of 6 • Not started', pct: 0, img: lesson1, date: 'Jun 1', pri: 'Low' },
];

const DIAGNOSES = [
  { plant: 'Tomato Plant', issue: 'Leaf Spot (Fungal)', tag: 'Needs Attention', tagBg: G.orangeLight, tagColor: G.orange, img: lesson1, date: 'Today' },
  { plant: 'Cucumber Plant', issue: 'Powdery Mildew', tag: 'Treated', tagBg: G.sageLight, tagColor: G.sage, img: lesson2, date: 'Yesterday' },
  { plant: 'Pepper Plant', issue: 'Nutrient Deficiency', tag: 'Low Severity', tagBg: G.sageLight, tagColor: G.muted, img: lesson3, date: 'May 10' },
];

const TREATMENT_STEPS = [
  { title: 'Prune affected leaves', desc: 'Remove yellowing foliage', when: 'Today', icon: '✂️' },
  { title: 'Apply fungicide', desc: 'Copper-based treatment', when: 'Tomorrow', icon: '🧴' },
  { title: 'Reduce watering', desc: 'Let soil dry between sessions', when: 'This week', icon: '💧' },
  { title: 'Improve airflow', desc: 'Space plants for circulation', when: 'This week', icon: '🌬️' },
];

const GardenScreen = ({ navigation }) => {
  const [tab, setTab] = useState('overview');
  const tabIndex = TABS.findIndex(t => t.id === tab);

  return (
    <TabScreenLayout
      headerStyle={styles.gardenHeaderShell}
      header={
        <>
          <View style={styles.headerRow}>
            <View>
              <Typography size={28} color={G.forest} style={styles.pageTitle}>
                Garden
              </Typography>
              <Typography size={13} color={G.muted} mT={2}>
                Design, build, and care for your space.
              </Typography>
            </View>
            <TouchableOpacity style={styles.bellBtn} accessibilityLabel="Notifications">
              <IconBellSmall />
              <View style={styles.bellDot} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[gardenUi.card, styles.selector]}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
            <View style={styles.selectorCopy}>
              <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
                Backyard Garden
              </Typography>
              <Typography size={12} color={G.muted}>Zone 9b • Full Sun</Typography>
            </View>
            <Image source={heroGarden} style={styles.selectorImg} />
            <ChevronRight size={16} />
          </TouchableOpacity>

          <View style={styles.subNav}>
            {TABS.map(t => {
              const active = tab === t.id;
              return (
                <TouchableOpacity key={t.id} style={styles.subTab} onPress={() => setTab(t.id)}>
                  <t.TabIcon active={active} />
                  <Typography
                    size={10}
                    color={active ? G.forest : G.muted}
                    style={{ fontWeight: active ? '600' : '500', marginTop: 4 }}>
                    {t.label}
                  </Typography>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.subNavLine}>
            <View style={[styles.subNavIndicator, { left: `${tabIndex * 25}%` }]} />
          </View>
        </>
      }>
        <View style={[gardenUi.pageX, styles.tabContent]}>
          {tab === 'overview' && <OverviewTab navigation={navigation} />}
          {tab === 'plans' && <PlansTab navigation={navigation} />}
          {tab === 'projects' && <ProjectsTab navigation={navigation} />}
          {tab === 'diagnose' && <DiagnoseTab navigation={navigation} />}
        </View>
    </TabScreenLayout>
  );
};

const OverviewTab = ({ navigation }) => (
  <>
    <View style={[gardenUi.card, cardPad]}>
      <Typography size={12} color={G.forest} style={{ fontWeight: '600' }}>
        Garden Health Score
      </Typography>
      <View style={styles.healthRow}>
        <View style={styles.healthLeft}>
          <View style={styles.scoreLine}>
            <Typography size={44} color={G.forest} style={styles.scoreBig}>
              92
            </Typography>
            <Typography size={14} color={G.sage} style={{ fontWeight: '600' }}>
              Excellent
            </Typography>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '92%' }]} />
          </View>
        </View>
        <View style={styles.healthRight}>
          <HealthStemArt width={40} height={56} />
          <TouchableOpacity
            style={styles.detailsBtn}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('GardenAuditScreen')}>
            <Typography size={11} color={G.sage} style={{ fontWeight: '500' }}>
              Details
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </View>

    <View style={gardenUi.card}>
      <TouchableOpacity
        style={styles.focusHeader}
        activeOpacity={0.88}
        onPress={() => navigation.navigate('TasksScreen')}>
        <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
          This Week's Focus
        </Typography>
        <View style={styles.focusMeta}>
          <View style={styles.taskPill}>
            <Typography size={10} color={G.sage} style={{ fontWeight: '500' }}>
              3 tasks
            </Typography>
          </View>
          <ChevronRight size={14} />
        </View>
      </TouchableOpacity>
      <View style={styles.taskList}>
        {FOCUS_TASKS.map((t, i) => (
          <TouchableOpacity
            key={t.title}
            style={[styles.taskRow, i > 0 && styles.taskDivider]}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('TaskDetailScreen')}>
            <View style={styles.taskIconBox}>
              {t.type === 'droplet' ? <TaskDropletIcon /> : <TaskLeafIcon />}
            </View>
            <View style={styles.taskCopy}>
              <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                {t.title}
              </Typography>
              <Typography size={11} color={G.muted}>{t.sub}</Typography>
            </View>
            <Typography size={11} color={G.muted}>{t.time}</Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>

    <TouchableOpacity
      style={[gardenUi.card, styles.sunCard]}
      activeOpacity={0.88}
      onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
      <SunExposureIcon />
      <View style={styles.sunCopy}>
        <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
          Sun Exposure
        </Typography>
        <Typography size={12} color={G.muted}>6–8 hrs of sunlight</Typography>
        <Typography size={11} color={G.muted}>Mostly afternoon sun</Typography>
      </View>
      <Image source={onb3} style={styles.sunThumb} />
    </TouchableOpacity>
  </>
);

const compactText = { includeFontPadding: false };

const PlansTab = ({ navigation }) => {
  const { width: screenWidth } = useWindowDimensions();
  const pagePad = Sizer.hSize(16);
  const planGap = Sizer.hSize(10);
  const planCardWidth = Math.round((screenWidth - pagePad * 2 - planGap) * 0.52);
  const planImageHeight = Math.round(planCardWidth * 0.72);
  const planCardSize = { width: planCardWidth };
  const planImgSize = { height: planImageHeight };

  return (
    <>
      <View style={styles.sectionHeader}>
        <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
          Your Plans
        </Typography>
        <TouchableOpacity style={styles.viewAllRow} onPress={() => navigation.navigate('GardenPlansListScreen')}>
          <Typography size={12} color={G.muted} style={{ fontWeight: '500' }}>
            View all
          </Typography>
          <ChevronRight size={14} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.edgeScroll}
        contentContainerStyle={[styles.planScroll, { gap: planGap, paddingHorizontal: pagePad }]}>
        <TouchableOpacity
          style={[gardenUi.card, styles.planCard, styles.planCardActive, planCardSize]}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
          <View style={styles.planImgWrap}>
            <Image source={heroGarden} style={[styles.planImg, planImgSize, { width: '100%' }]} />
            <View style={styles.planCheck}>
              <Typography size={10} color="#fff">✓</Typography>
            </View>
          </View>
          <Typography
            size={11}
            color={G.forest}
            mT={8}
            numberOfLines={2}
            style={[compactText, styles.planTitle]}>
            Backyard Food Garden
          </Typography>
          <Typography size={9} color={G.muted} mT={2} style={compactText}>
            Updated May 12
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          style={[gardenUi.card, styles.planCard, styles.planNew, planCardSize]}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('GardenPlansListScreen')}>
          <View style={[styles.planNewInner, { height: planImageHeight }]}>
            <IconPlus size={24} />
          </View>
          <Typography
            size={11}
            color={G.muted}
            mT={8}
            style={[compactText, styles.planTitle, { textAlign: 'center', fontWeight: '500' }]}>
            New Plan
          </Typography>
        </TouchableOpacity>
      </ScrollView>

    <View style={styles.sectionHeader}>
      <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
        Active Plan Preview
      </Typography>
      <TouchableOpacity
        style={styles.viewAllRow}
        activeOpacity={0.88}
        onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
        <Typography size={11} color={G.muted}>2D Layout</Typography>
        <ChevronDown size={12} />
      </TouchableOpacity>
    </View>

    <TouchableOpacity
      style={[gardenUi.card, styles.previewCard]}
      activeOpacity={0.88}
      onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
      <Image source={heroGarden} style={styles.previewImg} />
      {['Herb Garden', 'Vegetables', 'Patio'].map((l, i) => (
        <View key={l} style={[styles.zoneLabel, { top: 12 + i * 36, left: 12 + i * 40 }]}>
          <Typography size={8} color={G.forest} style={{ fontWeight: '500' }}>
            {l}
          </Typography>
        </View>
      ))}
      <View style={styles.previewFabs}>
        <PlanOverlayFab><IconDroplet size={14} filled color={G.forest} /></PlanOverlayFab>
        <PlanOverlayFab><IconSunSmall size={14} /></PlanOverlayFab>
        <PlanOverlayFab><IconLayers size={14} /></PlanOverlayFab>
      </View>
    </TouchableOpacity>

    <View style={[gardenUi.card, styles.statsGrid]}>
      {PLAN_STATS.map(({ Icon, label, value, sub, color, subColor }) => (
        <View key={label} style={styles.statCell}>
          <Icon size={16} color={color} />
          <Typography size={9} color={G.muted} mT={4} style={[compactText, styles.statLabel]}>
            {label}
          </Typography>
          <Typography size={10} color={G.forest} style={[compactText, styles.statValue, { fontWeight: '600' }]}>
            {value}
          </Typography>
          <Typography size={8} color={subColor || G.muted} style={[compactText, styles.statSub]}>
            {sub}
          </Typography>
        </View>
      ))}
    </View>

    <Typography size={14} color={G.forest} style={{ fontWeight: '600', marginTop: 4 }}>
      Planning Tools
    </Typography>
    <View style={styles.toolsGrid}>
      {PLAN_TOOLS.map(tool => (
        <TouchableOpacity
          key={tool.title}
          style={styles.toolTile}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
          <PlanToolIcon />
          <Typography size={11} color={G.forest} mT={4} style={{ fontWeight: '600' }}>
            {tool.title}
          </Typography>
          <Typography size={9} color={G.muted} style={styles.statSub}>
            {tool.desc}
          </Typography>
        </TouchableOpacity>
      ))}
    </View>

    <TouchableOpacity
      style={[gardenUi.card, styles.createPlanBtn]}
      activeOpacity={0.88}
      onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
      <IconPlus size={16} color={G.forest} />
      <Typography size={13} color={G.forest} style={{ fontWeight: '600', marginLeft: 6 }}>
        Create New Plan
      </Typography>
    </TouchableOpacity>
    </>
  );
};

const ProjectsTab = ({ navigation }) => {
  const [filter, setFilter] = useState(0);

  const filteredProjects = PROJECTS.filter(p => {
    if (filter === 0) return true;
    if (filter === 1) return p.status === 'In Progress';
    if (filter === 2) return p.status === 'Planned';
    if (filter === 3) return p.status === 'Completed';
    return true;
  });

  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.edgeScroll}
        contentContainerStyle={styles.filterScroll}>
        {PROJECT_FILTERS.map((f, i) => (
          <TouchableOpacity
            key={f}
            style={[styles.filterChip, i === filter && styles.filterChipActive]}
            onPress={() => setFilter(i)}>
            <Typography
              size={11}
              color={i === filter ? '#fff' : G.forest}
              style={{ fontWeight: '500' }}>
              {f}
            </Typography>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
        Your Projects
      </Typography>

      {filteredProjects.map(p => (
        <TouchableOpacity
          key={p.title}
          style={[gardenUi.card, styles.projectCard]}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('GardenProjectDetailScreen')}>
          <Image source={p.img} style={styles.projectImg} />
          <View style={styles.projectCopy}>
            <View style={styles.projectTitleRow}>
              <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                {p.title}
              </Typography>
              <View style={styles.statusPill}>
                <Typography size={9} color={G.sage}>{p.status}</Typography>
              </View>
            </View>
            <Typography size={10} color={G.muted} mT={2}>{p.step}</Typography>
            <View style={styles.projectProgress}>
              <View style={styles.progressTrackSm}>
                <View style={[styles.progressFill, { width: `${p.pct}%` }]} />
              </View>
              <Typography size={10} color={G.muted} style={{ fontWeight: '500' }}>
                {p.pct}%
              </Typography>
            </View>
            <View style={styles.projectMeta}>
              <View style={styles.metaItem}>
                <IconCalendar size={12} />
                <Typography size={9} color={G.muted} style={{ marginLeft: 2 }}>
                  {p.date}
                </Typography>
              </View>
              <Typography size={9} color={G.muted}>⚡ {p.pri}</Typography>
              <IconUsers size={12} />
            </View>
          </View>
          <ChevronRight size={16} />
        </TouchableOpacity>
      ))}

      <View style={styles.projectBanner}>
        <View style={styles.bannerIcon}>
          <IconHammerWhite />
        </View>
        <Typography size={11} color={G.forest} style={{ flex: 1 }}>
          Track every step of your builds…
        </Typography>
        <TouchableOpacity
          style={styles.newProjectBtn}
          onPress={() => navigation.navigate('GardenProjectDetailScreen')}>
          <Typography size={10} color={G.forest} style={{ fontWeight: '500' }}>
            + New Project
          </Typography>
        </TouchableOpacity>
      </View>
    </>
  );
};

const DiagnoseTab = ({ navigation }) => (
  <>
    <View>
      <Typography size={15} color={G.forest} style={{ fontWeight: '600' }}>
        Diagnose Your Plants
      </Typography>
      <Typography size={12} color={G.muted} mT={2}>
        Identify issues early and get step-by-step treatment plans.
      </Typography>
    </View>

    <TouchableOpacity
      style={[styles.scanRow, { borderRadius: 8 }]}
      activeOpacity={0.88}
      onPress={() => navigation.navigate('GardenDiagnoseDetailScreen')}>
      <IconCamera />
      <Typography size={14} color={G.forest} style={{ flex: 1, fontWeight: '600', marginLeft: 12 }}>
        Scan a Plant
      </Typography>
      <ChevronRight size={16} />
    </TouchableOpacity>

    <View style={styles.sectionHeader}>
      <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
        Recent Diagnoses
      </Typography>
      <TouchableOpacity onPress={() => navigation.navigate('GardenDiagnoseDetailScreen')}>
        <Typography size={12} color={G.muted} style={{ fontWeight: '500' }}>
          View all →
        </Typography>
      </TouchableOpacity>
    </View>

    <View style={gardenUi.card}>
      {DIAGNOSES.map((d, i) => (
        <TouchableOpacity
          key={d.plant}
          style={[styles.diagRow, i > 0 && styles.taskDivider]}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('GardenDiagnoseDetailScreen')}>
          <Image source={d.img} style={styles.diagImg} />
          <View style={styles.diagCopy}>
            <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
              {d.plant}
            </Typography>
            <Typography size={11} color={G.muted}>{d.issue}</Typography>
            <View style={[styles.tag, { backgroundColor: d.tagBg }]}>
              <Typography size={9} color={d.tagColor} style={{ fontWeight: '500' }}>
                {d.tag}
              </Typography>
            </View>
          </View>
          <Typography size={10} color={G.muted}>{d.date}</Typography>
        </TouchableOpacity>
      ))}
    </View>

    <View style={styles.smartPlanRow}>
      <TaskLeafIcon />
      <Typography size={12} color={G.forest} style={{ flex: 1, marginLeft: 8, fontWeight: '500' }}>
        Smart Treatment Plan
      </Typography>
      <TouchableOpacity
        style={styles.howBtn}
        onPress={() => navigation.navigate('GardenDiagnoseDetailScreen')}>
        <Typography size={10} color={G.forest}>How It Works →</Typography>
      </TouchableOpacity>
    </View>

    <TouchableOpacity
      style={[gardenUi.card, cardPad]}
      activeOpacity={0.88}
      onPress={() => navigation.navigate('GardenDiagnoseDetailScreen')}>
      <Image source={lesson1} style={styles.treatmentHero} />
      <View style={styles.treatmentTitleRow}>
        <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
          Leaf Spot (Fungal)
        </Typography>
        <View style={[styles.tag, { backgroundColor: G.orangeLight }]}>
          <Typography size={9} color={G.orange} style={{ fontWeight: '500' }}>
            Needs Attention
          </Typography>
        </View>
      </View>
      {TREATMENT_STEPS.map((a, i) => (
        <View key={a.title} style={[styles.treatmentStep, i > 0 && styles.taskDivider]}>
          <Typography size={14}>{a.icon}</Typography>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Typography size={12} color={G.forest} style={{ fontWeight: '600' }}>
              {a.title}
            </Typography>
            <Typography size={10} color={G.muted}>{a.desc}</Typography>
          </View>
          <Typography size={10} color={G.muted}>{a.when}</Typography>
        </View>
      ))}
      <View style={styles.treatmentActions}>
        <TouchableOpacity
          style={styles.addTasksBtn}
          onPress={() => navigation.navigate('GardenDiagnoseDetailScreen')}>
          <IconPlus size={16} color="#FFFFFF" />
          <Typography size={13} color="#fff" style={{ fontWeight: '600', marginLeft: 4 }}>
            Add to My Tasks
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shopBtn}
          onPress={() => navigation.navigate('MainTabs', { screen: 'ShopScreen' })}>
          <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
            Shop Treatment
          </Typography>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>

    <View style={styles.tipRow}>
      <IconLightbulb />
      <Typography size={11} color={G.forest} style={{ flex: 1, marginLeft: 8, lineHeight: 16 }}>
        Tip: Inspect leaves in the morning when moisture makes spots easier to spot.
      </Typography>
    </View>
  </>
);

const styles = StyleSheet.create({
  gardenHeaderShell: { paddingBottom: Sizer.vSize(6) },
  pageTitle: { fontWeight: '700', lineHeight: Sizer.fS(32) },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 8 },
  bellBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  bellDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: G.sage,
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginTop: 8,
    gap: 10,
  },
  selectorCopy: { flex: 1, minWidth: 0 },
  selectorImg: { width: 68, height: 44, borderRadius: 6 },
  subNav: { flexDirection: 'row', marginTop: 12 },
  subTab: { flex: 1, alignItems: 'center', paddingTop: 4, paddingBottom: 8 },
  subNavLine: { height: 2, backgroundColor: G.divider, marginTop: 0, position: 'relative' },
  subNavIndicator: { position: 'absolute', top: 0, width: '25%', height: 2, backgroundColor: G.forest },
  tabContent: { gap: CARD_GAP, marginTop: CARD_GAP, paddingBottom: 8 },
  healthRow: { flexDirection: 'row', marginTop: 4, justifyContent: 'space-between' },
  healthLeft: { flex: 1, minWidth: 0, paddingRight: 8 },
  healthRight: { alignItems: 'flex-end', gap: 8 },
  scoreLine: { flexDirection: 'row', alignItems: 'baseline', gap: 8 },
  scoreBig: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    lineHeight: Sizer.fS(44),
  },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: G.sageLight,
    marginTop: 10,
    overflow: 'hidden',
    maxWidth: 200,
  },
  progressFill: { height: '100%', backgroundColor: G.sage, borderRadius: 4 },
  progressTrackSm: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: G.sageLight,
    overflow: 'hidden',
  },
  detailsBtn: {
    borderWidth: 1,
    borderColor: G.sage,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  focusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 4,
  },
  focusMeta: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  taskPill: {
    backgroundColor: G.sageLight,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  taskList: { paddingHorizontal: 14, paddingBottom: 8 },
  taskRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, gap: 10 },
  taskDivider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: G.divider },
  taskIconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: G.cardTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskCopy: { flex: 1, minWidth: 0 },
  sunCard: { flexDirection: 'row', alignItems: 'center', padding: 12, gap: 12 },
  sunCopy: { flex: 1, minWidth: 0 },
  sunThumb: { width: 56, height: 48, borderRadius: 6 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAllRow: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  edgeScroll: { marginHorizontal: -Sizer.hSize(16) },
  planScroll: { paddingBottom: 6 },
  statLabel: { lineHeight: Sizer.fS(12), textAlign: 'center' },
  statValue: { lineHeight: Sizer.fS(14), textAlign: 'center', marginTop: 2 },
  statSub: { lineHeight: Sizer.fS(11), textAlign: 'center', marginTop: 1 },
  planCard: {
    padding: Sizer.hSize(10),
    flexShrink: 0,
    overflow: 'hidden',
  },
  planCardActive: { borderWidth: 2, borderColor: G.sage },
  planImgWrap: {
    position: 'relative',
    alignSelf: 'stretch',
    overflow: 'hidden',
    borderRadius: 6,
  },
  planImg: { borderRadius: 6 },
  planTitle: { fontWeight: '600', lineHeight: Sizer.fS(15) },
  planCheck: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: G.sage,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planNew: { borderWidth: 1, borderStyle: 'dashed', borderColor: G.muted },
  planNewInner: {
    alignSelf: 'stretch',
    borderRadius: 6,
    backgroundColor: G.cardTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewCard: { overflow: 'hidden', position: 'relative' },
  previewImg: { width: '100%', height: 148, borderRadius: 8 },
  zoneLabel: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
    shadowColor: '#1A3020',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  previewFabs: { position: 'absolute', right: 8, top: 8, gap: 6 },
  statsGrid: {
    flexDirection: 'row',
    padding: 10,
    gap: 4,
  },
  statCell: { flex: 1, alignItems: 'center' },
  toolsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  toolTile: {
    width: '48%',
    backgroundColor: G.cardTint,
    borderRadius: 8,
    padding: 10,
  },
  createPlanBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: G.sageLight,
  },
  filterScroll: { gap: 8, paddingBottom: 4, paddingHorizontal: Sizer.hSize(16) },
  filterChip: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: G.cardTint,
  },
  filterChipActive: { backgroundColor: G.forest },
  projectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 10,
  },
  projectImg: { width: 56, height: 56, borderRadius: 6 },
  projectCopy: { flex: 1, minWidth: 0 },
  projectTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 6, flexWrap: 'wrap' },
  statusPill: {
    backgroundColor: G.sageLight,
    borderRadius: 999,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  projectProgress: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 },
  projectMeta: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 6 },
  metaItem: { flexDirection: 'row', alignItems: 'center' },
  projectBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    borderRadius: 8,
    backgroundColor: G.sageBanner,
  },
  bannerIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: G.sage,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newProjectBtn: {
    borderWidth: 1,
    borderColor: G.forest,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  scanRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: G.sageLight,
  },
  diagRow: { flexDirection: 'row', padding: 12, gap: 10, alignItems: 'flex-start' },
  diagImg: { width: 44, height: 44, borderRadius: 6 },
  diagCopy: { flex: 1, minWidth: 0 },
  tag: { alignSelf: 'flex-start', borderRadius: 999, paddingHorizontal: 6, paddingVertical: 2, marginTop: 4 },
  smartPlanRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: G.sageLight,
  },
  howBtn: { borderWidth: 1, borderColor: G.sage, borderRadius: 8, paddingHorizontal: 8, paddingVertical: 4 },
  treatmentHero: { width: '100%', height: 128, borderRadius: 6, marginBottom: 8 },
  treatmentTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  treatmentStep: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  treatmentActions: { flexDirection: 'row', gap: 8, marginTop: 8 },
  addTasksBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: G.forest,
    borderRadius: 8,
    paddingVertical: 10,
  },
  shopBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: G.forest,
    borderRadius: 8,
    paddingVertical: 10,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    borderRadius: 8,
    backgroundColor: G.sageLight,
  },
});

export default GardenScreen;
