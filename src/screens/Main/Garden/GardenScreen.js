import React, { useRef, useState } from 'react';
import {
  Animated,
  Image,
  Pressable,
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
  IconBottle,
  IconCalendar,
  IconCamera,
  IconDollar,
  IconCropRotation,
  IconDroplet,
  IconHammerWhite,
  IconLayers,
  IconLightbulb,
  IconPlus,
  IconPrune,
  IconScanPlant,
  IconSunSmall,
  IconUsers,
  PlanOverlayFab,
  SunExposureIcon,
  TabGrid,
  TabHammer,
  TabLeaf,
  TabStethoscope,
  TaskDropletIcon,
  TaskLeafIcon,
} from '../../../components/solterra/garden/GardenUiParts';
import {
  diagCucumberThumb,
  diagLeafSpotHero,
  diagPepperThumb,
  diagTomatoThumb,
  heroGarden,
  lesson1,
  lesson2,
  lesson3,
  onb2,
  onb3,
  plan2dLayoutPreview,
  planBackyardFoodGarden,
  planFrontYardXeriscape,
  planGreenhouseLayout,
  projectGreenhouse,
  projectIrrigation,
  projectRaisedBeds,
  projectXeriscape,
} from '../../../assets/images';
import { FONTS } from '../../../globalStyle/Theme';
import { CARD_GAP, CARD_LIFT_SHADOW, G, gardenUi } from '../../_partials/gardenUi';
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

const SAVED_PLANS = [
  {
    id: 'backyard',
    title: 'Backyard Food Garden',
    updated: 'Updated May 1',
    img: planBackyardFoodGarden,
    preview: plan2dLayoutPreview,
    summary: '6 beds · 24 plants',
    zones: [
      { label: 'Herb Garden', top: 12, left: 14 },
      { label: 'Vegetables', top: 52, left: 88 },
      { label: 'Raised Beds', top: 108, left: 24 },
      { label: 'Patio', top: 88, left: 148 },
      { label: 'Lounge Area', top: 138, left: 118 },
    ],
    stats: [
      { Icon: IconSunSmall, label: 'Sunlight', value: '6–8 hrs', sub: 'Mostly afternoon', color: '#E8A838', iconBg: '#FFF6E6' },
      {
        Icon: props => <IconDroplet {...props} filled color="#4A8FD4" />,
        label: 'Irrigation',
        value: '3 zones',
        sub: 'Drip system',
        color: '#4A8FD4',
        iconBg: '#E6F0FA',
      },
      {
        Icon: IconDollar,
        label: 'Est. Budget',
        value: '$1,245',
        sub: 'Medium range',
        color: G.sage,
        subColor: G.sage,
        iconBg: G.sageLight,
      },
      {
        Icon: IconCalendar,
        label: 'Planting',
        value: 'Apr–Jun',
        sub: 'Spring start',
        color: G.forest,
        iconBg: G.cardTint,
      },
    ],
  },
  {
    id: 'greenhouse',
    title: 'Greenhouse Layout',
    updated: 'Updated Apr 28',
    img: planGreenhouseLayout,
    preview: planGreenhouseLayout,
    summary: '4 benches · Climate controlled',
    zones: [
      { label: 'Seedling Bench', top: 18, left: 16 },
      { label: 'Tomato Row', top: 58, left: 72 },
      { label: 'Ventilation', top: 14, left: 130 },
      { label: 'Storage', top: 120, left: 148 },
    ],
    stats: [
      { Icon: IconSunSmall, label: 'Sunlight', value: '4–6 hrs', sub: 'Diffused light', color: '#E8A838', iconBg: '#FFF6E6' },
      {
        Icon: props => <IconDroplet {...props} filled color="#4A8FD4" />,
        label: 'Irrigation',
        value: '2 zones',
        sub: 'Mist system',
        color: '#4A8FD4',
        iconBg: '#E6F0FA',
      },
      {
        Icon: IconDollar,
        label: 'Est. Budget',
        value: '$890',
        sub: 'Compact setup',
        color: G.sage,
        subColor: G.sage,
        iconBg: G.sageLight,
      },
      {
        Icon: IconCalendar,
        label: 'Planting',
        value: 'Year-round',
        sub: 'Extended season',
        color: G.forest,
        iconBg: G.cardTint,
      },
    ],
  },
  {
    id: 'xeriscape',
    title: 'Front Yard Xeriscape',
    updated: 'Updated Apr 20',
    img: planFrontYardXeriscape,
    preview: planFrontYardXeriscape,
    summary: 'Low water · Native focus',
    zones: [
      { label: 'Native Shrubs', top: 20, left: 18 },
      { label: 'Gravel Path', top: 72, left: 88 },
      { label: 'Drought Grass', top: 110, left: 28 },
      { label: 'Rock Feature', top: 48, left: 142 },
    ],
    stats: [
      { Icon: IconSunSmall, label: 'Sunlight', value: '8+ hrs', sub: 'Full sun', color: '#E8A838', iconBg: '#FFF6E6' },
      {
        Icon: props => <IconDroplet {...props} filled color="#4A8FD4" />,
        label: 'Irrigation',
        value: '1 zone',
        sub: 'Low drip',
        color: '#4A8FD4',
        iconBg: '#E6F0FA',
      },
      {
        Icon: IconDollar,
        label: 'Est. Budget',
        value: '$620',
        sub: 'Water-wise',
        color: G.sage,
        subColor: G.sage,
        iconBg: G.sageLight,
      },
      {
        Icon: IconCalendar,
        label: 'Planting',
        value: 'Mar–May',
        sub: 'Early spring',
        color: G.forest,
        iconBg: G.cardTint,
      },
    ],
  },
];

const LAYOUT_MODES = ['2D Layout', 'Sun Map', 'Zones'];

const PLAN_TOOLS = [
  { title: 'Sunlight Map', desc: 'See light patterns', Icon: IconSunSmall, iconColor: '#E8A838', iconBg: '#FFF6E6' },
  {
    title: 'Irrigation Planner',
    desc: 'Plan watering zones',
    Icon: props => <IconDroplet {...props} filled color="#4A8FD4" />,
    iconColor: '#4A8FD4',
    iconBg: '#E6F0FA',
  },
  { title: 'Crop Rotation', desc: 'Improve soil health', Icon: IconCropRotation, iconColor: G.sage, iconBg: G.sageLight },
  { title: 'Planting Schedule', desc: 'Week-by-week guide', Icon: IconCalendar, iconColor: G.forest, iconBg: G.cardTint },
];

const PROJECT_FILTERS = ['All Projects', 'In Progress', 'Planned', 'Completed'];

const PROJECT_STATUS_STYLES = {
  'In Progress': { bg: G.sageLight, color: G.sage },
  Planned: { bg: G.orangeLight, color: G.orange },
  Completed: { bg: '#E8EBE4', color: G.muted },
};

const PROJECTS = [
  {
    id: 'greenhouse',
    title: 'Build Greenhouse',
    status: 'In Progress',
    step: 'Step 5 of 8 • Install ventilation',
    pct: 63,
    img: projectGreenhouse,
    dateLabel: 'Due May 24',
    trait: { label: 'Medium', type: 'fan' },
  },
  {
    id: 'irrigation',
    title: 'Install Drip Irrigation',
    status: 'In Progress',
    step: 'Step 2 of 4 • Lay main line',
    pct: 50,
    img: projectIrrigation,
    dateLabel: 'Due May 18',
    trait: { label: 'High Impact', type: 'drop' },
  },
  {
    id: 'raised-beds',
    title: 'Build Raised Beds',
    status: 'Planned',
    step: 'Step 0 of 6 • Not started',
    pct: 0,
    img: projectRaisedBeds,
    dateLabel: 'Starts May 25',
    trait: { label: 'Medium', type: 'leaf' },
  },
  {
    id: 'xeriscape',
    title: 'Xeriscape Conversion',
    status: 'Completed',
    step: 'Completed Apr 10',
    pct: 100,
    img: projectXeriscape,
    dateLabel: 'Completed Apr 10',
    trait: { label: 'Low', type: 'leaf' },
  },
];

const ProjectTraitIcon = ({ type, size = 11 }) => {
  if (type === 'drop') return <IconDroplet size={size} filled color={G.muted} />;
  if (type === 'leaf') return <TaskLeafIcon size={size} />;
  return <IconSunSmall size={size} color={G.muted} />;
};

const DIAG_TAG_STYLES = {
  attention: { bg: '#FCEBD3', color: '#8B6331' },
  treated: { bg: '#E8F5E9', color: '#2E7D32' },
  low: { bg: '#E8F5E9', color: '#2E7D32' },
};

const DIAG_THUMB_W = 86;
const DIAG_THUMB_H = 64;

const DIAGNOSES = [
  {
    id: 'tomato',
    plant: 'Tomato Plant',
    issue: 'Leaf Spot (Fungal)',
    tag: 'Needs Attention',
    tagStyle: 'attention',
    img: diagTomatoThumb,
    date: 'Diagnosed May 12',
  },
  {
    id: 'cucumber',
    plant: 'Cucumber Plant',
    issue: 'Powdery Mildew',
    tag: 'Treated',
    tagStyle: 'treated',
    img: diagCucumberThumb,
    date: 'Diagnosed May 5',
  },
  {
    id: 'pepper',
    plant: 'Pepper Plant',
    issue: 'Aphids',
    tag: 'Low Severity',
    tagStyle: 'low',
    img: diagPepperThumb,
    date: 'Diagnosed Apr 28',
  },
];

const TREATMENT_STEPS = [
  {
    title: 'Prune affected leaves',
    desc: 'Remove infected leaves to stop spread',
    when: 'Today',
    Icon: IconPrune,
  },
  {
    title: 'Apply fungicide',
    desc: 'Use a copper-based fungicide',
    when: 'Tomorrow',
    Icon: IconBottle,
  },
  {
    title: 'Reduce watering frequency',
    desc: 'Water at the base, avoid wetting leaves',
    when: 'In 2 days',
    Icon: props => <IconDroplet {...props} filled color={G.forest} />,
  },
  {
    title: 'Improve airflow',
    desc: 'Space plants and remove excess foliage',
    when: 'This week',
    Icon: IconSunSmall,
  },
];

const GardenSubNav = ({ tabs, activeId, onChange }) => {
  const [navWidth, setNavWidth] = useState(0);
  const [, setLayoutTick] = useState(0);
  const labelLayouts = useRef(tabs.map(() => ({ x: 0, width: 0 })));
  const activeIndex = tabs.findIndex(t => t.id === activeId);

  const indicatorStyle = (() => {
    if (!navWidth) return { left: 0, width: 36 };
    const tabW = navWidth / tabs.length;
    const { x, width } = labelLayouts.current[activeIndex] || { x: 0, width: 36 };
    const barW = Math.max(width, 28);
    return {
      left: activeIndex * tabW + x + (width - barW) / 2,
      width: barW,
    };
  })();

  const onLabelLayout = (index, e) => {
    const { x, width } = e.nativeEvent.layout;
    const prev = labelLayouts.current[index];
    if (prev.x === x && prev.width === width) return;
    labelLayouts.current[index] = { x, width };
    if (index === activeIndex) setLayoutTick(t => t + 1);
  };

  return (
    <View style={styles.subNavWrap}>
      <View style={styles.subNav} onLayout={e => setNavWidth(e.nativeEvent.layout.width)}>
        {tabs.map((t, index) => {
          const active = t.id === activeId;
          return (
            <TouchableOpacity
              key={t.id}
              style={styles.subTab}
              activeOpacity={0.7}
              onPress={() => onChange(t.id)}
              accessibilityRole="tab"
              accessibilityState={{ selected: active }}>
              <t.TabIcon active={active} size={18} />
              <Typography
                size={10}
                color={active ? G.forest : G.muted}
                onLayout={e => onLabelLayout(index, e)}
                style={[styles.subTabLabel, active && styles.subTabLabelActive]}>
                {t.label}
              </Typography>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.subNavLine}>
        <View style={[styles.subNavIndicator, indicatorStyle]} />
      </View>
    </View>
  );
};

const GardenScreen = ({ navigation }) => {
  const [tab, setTab] = useState('overview');

  return (
    <TabScreenLayout
      headerStyle={styles.gardenHeaderShell}
      header={
        <>
          <View style={styles.headerRow}>
            <View>
              <Typography size={22} color={G.forest} style={styles.pageTitle}>
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
            style={styles.selector}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
            <View style={styles.selectorCopy}>
              <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                Backyard Garden
              </Typography>
              <Typography size={11} color={G.muted} mT={2}>Zone 9b • Full Sun</Typography>
            </View>
            <Image source={heroGarden} style={styles.selectorImg} />
            <ChevronRight size={14} color={G.forest} />
          </TouchableOpacity>

          <GardenSubNav tabs={TABS} activeId={tab} onChange={setTab} />
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
    <View style={[styles.homeCard, styles.healthCard]}>
      <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
        Garden Health Score
      </Typography>
      <View style={styles.healthRow}>
        <View style={styles.healthLeft}>
          <View style={styles.scoreLine}>
            <Typography size={48} color={G.forest} style={styles.scoreBig}>
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
          <HealthStemArt width={48} height={72} />
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

    <View style={styles.focusSection}>
      <TouchableOpacity
        style={styles.focusHeader}
        activeOpacity={0.88}
        onPress={() => navigation.navigate('TasksScreen')}>
        <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
          This Week's Focus
        </Typography>
        <View style={styles.focusMeta}>
          <View style={styles.taskPill}>
            <Typography size={11} color={G.sage} style={{ fontWeight: '500' }}>
              3 tasks
            </Typography>
          </View>
          <ChevronRight size={14} color={G.muted} />
        </View>
      </TouchableOpacity>
      <View style={[styles.homeCard, styles.taskList]}>
        {FOCUS_TASKS.map((t, i) => (
          <TouchableOpacity
            key={t.title}
            style={[styles.taskRow, i > 0 && styles.taskDivider]}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('TaskDetailScreen')}>
            <View style={[styles.taskIconSlot, t.type === 'droplet' ? styles.iconBgBlue : styles.iconBgGreen]}>
              {t.type === 'droplet' ? <TaskDropletIcon /> : <TaskLeafIcon />}
            </View>
            <View style={styles.taskCopy}>
              <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                {t.title}
              </Typography>
              <Typography size={11} color={G.muted} mT={1}>{t.sub}</Typography>
            </View>
            <Typography size={11} color={G.muted}>{t.time}</Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>

    <TouchableOpacity
      style={[styles.homeCard, styles.sunCard]}
      activeOpacity={0.88}
      onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
      <SunExposureIcon size={24} />
      <View style={styles.sunCopy}>
        <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
          Sun Exposure
        </Typography>
        <Typography size={12} color={G.muted} mT={1}>6–8 hrs of sunlight</Typography>
        <Typography size={11} color={G.muted} mT={1}>Mostly afternoon sun</Typography>
      </View>
      <Image source={onb3} style={styles.sunThumb} />
      <ChevronRight size={14} color={G.muted} />
    </TouchableOpacity>
  </>
);

const compactText = { includeFontPadding: false };

const PlansTab = ({ navigation }) => {
  const [activePlanId, setActivePlanId] = useState('backyard');
  const [layoutMode, setLayoutMode] = useState(0);
  const [overlay, setOverlay] = useState('zones');
  const previewOpacity = useRef(new Animated.Value(1)).current;
  const { width: screenWidth } = useWindowDimensions();
  const pagePad = Sizer.hSize(16);
  const planGap = Sizer.hSize(10);
  const planCardWidth = Math.round((screenWidth - pagePad * 2 - planGap * 2) * 0.38);
  const planImageHeight = Math.round(planCardWidth * 0.78);
  const planCardSize = { width: planCardWidth };
  const planImgSize = { height: planImageHeight };
  const snapInterval = planCardWidth + planGap;

  const activePlan = SAVED_PLANS.find(p => p.id === activePlanId) || SAVED_PLANS[0];
  const showZones = overlay === 'zones' || overlay === 'irrigation';
  const showSun = overlay === 'sun';

  const selectPlan = id => {
    if (id === activePlanId) return;
    Animated.timing(previewOpacity, {
      toValue: 0.35,
      duration: 140,
      useNativeDriver: true,
    }).start(() => {
      setActivePlanId(id);
      Animated.timing(previewOpacity, {
        toValue: 1,
        duration: 220,
        useNativeDriver: true,
      }).start();
    });
  };

  const toggleOverlay = key => {
    setOverlay(prev => (prev === key ? 'zones' : key));
  };

  const cycleLayoutMode = () => {
    setLayoutMode(i => {
      const next = (i + 1) % LAYOUT_MODES.length;
      const overlays = ['zones', 'sun', 'irrigation'];
      setOverlay(overlays[next]);
      return next;
    });
  };

  return (
    <>
      <View style={[styles.sectionHeader, styles.plansSectionHead]}>
        <View style={styles.sectionTitleRow}>
          <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
            Your Plans
          </Typography>
          <View style={styles.planCountPill}>
            <Typography size={9} color={G.sage} style={{ fontWeight: '600' }}>
              {SAVED_PLANS.length} saved
            </Typography>
          </View>
        </View>
        <TouchableOpacity style={styles.viewAllRow} onPress={() => navigation.navigate('GardenPlansListScreen')}>
          <Typography size={11} color={G.sage} style={{ fontWeight: '500' }}>
            View all
          </Typography>
          <ChevronRight size={12} color={G.sage} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={snapInterval}
        snapToAlignment="start"
        style={styles.edgeScroll}
        contentContainerStyle={[styles.planScroll, { gap: planGap, paddingHorizontal: pagePad }]}>
        {SAVED_PLANS.map(plan => {
          const isActive = plan.id === activePlanId;
          return (
            <Pressable
              key={plan.id}
              style={({ pressed }) => [
                styles.homeCard,
                styles.planCard,
                isActive ? styles.planCardActive : styles.planCardIdle,
                planCardSize,
                pressed && styles.planCardPressed,
              ]}
              onPress={() => selectPlan(plan.id)}
              onLongPress={() => navigation.navigate('GardenPlanDetailScreen')}>
              <View style={styles.planImgWrap}>
                <Image source={plan.img} style={[styles.planImg, planImgSize, { width: '100%' }]} />
                {isActive ? (
                  <View style={styles.planCheck}>
                    <Typography size={10} color="#fff" style={{ fontWeight: '700' }}>
                      ✓
                    </Typography>
                  </View>
                ) : null}
              </View>
              <Typography
                size={11}
                color={G.forest}
                mT={8}
                numberOfLines={2}
                style={[compactText, styles.planTitle]}>
                {plan.title}
              </Typography>
              <Typography size={9} color={G.muted} mT={2} style={compactText}>
                {plan.updated}
              </Typography>
            </Pressable>
          );
        })}
        <Pressable
          style={({ pressed }) => [
            styles.homeCard,
            styles.planCard,
            styles.planNew,
            planCardSize,
            pressed && styles.planCardPressed,
          ]}
          onPress={() => navigation.navigate('GardenPlansListScreen')}>
          <View style={[styles.planNewInner, { height: planImageHeight }]}>
            <IconPlus size={22} color={G.sage} />
          </View>
          <Typography
            size={11}
            color={G.muted}
            mT={8}
            style={[compactText, styles.planTitle, { textAlign: 'center', fontWeight: '500' }]}>
            New Plan
          </Typography>
        </Pressable>
      </ScrollView>

      <View style={[styles.sectionHeader, styles.plansSectionGap]}>
        <View style={styles.previewHeaderCopy}>
          <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
            Active Plan Preview
          </Typography>
          <Typography size={10} color={G.muted} mT={2} numberOfLines={1}>
            {activePlan.title} · {activePlan.summary}
          </Typography>
        </View>
        <Pressable
          style={({ pressed }) => [styles.layoutPill, pressed && styles.layoutPillPressed]}
          onPress={cycleLayoutMode}>
          <Typography size={11} color={G.forest} style={{ fontWeight: '500' }}>
            {LAYOUT_MODES[layoutMode]}
          </Typography>
          <ChevronDown size={12} color={G.forest} />
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => [styles.homeCard, styles.previewCard, pressed && styles.previewCardPressed]}
        onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
        <Animated.View style={{ opacity: previewOpacity }}>
          <Image source={activePlan.preview} style={styles.previewImg} resizeMode="cover" />
          <View style={styles.previewShade} />
          {showZones
            ? activePlan.zones.map(zone => (
                <View key={zone.label} style={[styles.zoneLabel, { top: zone.top, left: zone.left }]}>
                  <Typography size={8} color={G.forest} style={{ fontWeight: '500' }}>
                    {zone.label}
                  </Typography>
                </View>
              ))
            : null}
          {showSun ? (
            <View style={styles.sunOverlay}>
              <View style={[styles.sunHotspot, { top: 28, left: 48 }]} />
              <View style={[styles.sunHotspot, styles.sunHotspotMid, { top: 72, left: 110 }]} />
              <View style={[styles.sunHotspot, styles.sunHotspotLow, { top: 120, left: 64 }]} />
            </View>
          ) : null}
          {overlay === 'irrigation' ? <View style={styles.irrigationOverlay} pointerEvents="none" /> : null}
        </Animated.View>
        <View style={styles.previewFooter}>
          <Typography size={10} color="#fff" style={{ fontWeight: '500' }}>
            Tap to open full editor
          </Typography>
          <ChevronRight size={12} color="#fff" />
        </View>
        <View style={styles.previewFabs}>
          <PlanOverlayFab size={30} active={overlay === 'irrigation'} onPress={() => toggleOverlay('irrigation')}>
            <IconDroplet size={13} filled color={overlay === 'irrigation' ? G.sage : G.forest} />
          </PlanOverlayFab>
          <PlanOverlayFab size={30} active={overlay === 'sun'} onPress={() => toggleOverlay('sun')}>
            <IconSunSmall size={13} color={overlay === 'sun' ? G.sage : G.forest} />
          </PlanOverlayFab>
          <PlanOverlayFab size={30} active={overlay === 'zones'} onPress={() => toggleOverlay('zones')}>
            <IconLayers size={13} color={overlay === 'zones' ? G.sage : G.forest} />
          </PlanOverlayFab>
        </View>
      </Pressable>

      <View style={styles.statsRow}>
        {activePlan.stats.map(({ Icon, label, value, sub, color, subColor, iconBg }) => (
          <View key={label} style={[styles.homeCard, styles.statCard]}>
            <View style={[styles.statIconWrap, { backgroundColor: iconBg }]}>
              <Icon size={14} color={color} />
            </View>
            <Typography size={9} color={G.muted} mT={8} style={[compactText, styles.statLabel]}>
              {label}
            </Typography>
            <Typography size={11} color={G.forest} style={[compactText, styles.statValue, { fontWeight: '600' }]}>
              {value}
            </Typography>
            <Typography size={8} color={subColor || G.muted} style={[compactText, styles.statSub]}>
              {sub}
            </Typography>
          </View>
        ))}
      </View>

      <View style={[styles.sectionHeader, styles.plansSectionGap]}>
        <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
          Planning Tools
        </Typography>
        <Typography size={10} color={G.muted}>
          Quick access
        </Typography>
      </View>
      <View style={styles.toolsGrid}>
        {PLAN_TOOLS.map(({ title, desc, Icon, iconColor, iconBg }) => (
          <Pressable
            key={title}
            style={({ pressed }) => [styles.homeCard, styles.toolTile, pressed && styles.toolTilePressed]}
            onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
            <View style={styles.toolTileTop}>
              <View style={[styles.toolIconWrap, { backgroundColor: iconBg }]}>
                <Icon size={18} color={iconColor} />
              </View>
              <ChevronRight size={14} color={G.muted} />
            </View>
            <Typography size={11} color={G.forest} mT={10} style={{ fontWeight: '600' }}>
              {title}
            </Typography>
            <Typography size={9} color={G.muted} style={styles.statSub}>
              {desc}
            </Typography>
          </Pressable>
        ))}
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.homeCard,
          styles.createPlanBtn,
          pressed && styles.createPlanBtnPressed,
        ]}
        onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
        <IconPlus size={14} color={G.forest} />
        <Typography size={13} color={G.forest} style={{ fontWeight: '600', marginLeft: 6 }}>
          Create New Plan
        </Typography>
      </Pressable>
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
      <View style={[styles.sectionHeader, styles.plansSectionHead]}>
        <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
          Your Projects
        </Typography>
        <TouchableOpacity
          style={styles.viewAllRow}
          onPress={() => navigation.navigate('GardenProjectDetailScreen')}>
          <Typography size={11} color={G.sage} style={{ fontWeight: '500' }}>
            View all
          </Typography>
          <ChevronRight size={12} color={G.sage} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.projectFilterScroll}>
        {PROJECT_FILTERS.map((f, i) => {
          const active = i === filter;
          return (
            <Pressable
              key={f}
              style={[styles.filterChip, active && styles.filterChipActive]}
              onPress={() => setFilter(i)}>
              <Typography
                size={11}
                color={active ? '#fff' : G.forest}
                style={{ fontWeight: '500' }}>
                {f}
              </Typography>
            </Pressable>
          );
        })}
      </ScrollView>

      {filteredProjects.map(p => {
        const statusStyle = PROJECT_STATUS_STYLES[p.status] || PROJECT_STATUS_STYLES['In Progress'];
        return (
          <Pressable
            key={p.id}
            style={({ pressed }) => [
              styles.homeCard,
              styles.projectCard,
              pressed && styles.projectCardPressed,
            ]}
            onPress={() => navigation.navigate('GardenProjectDetailScreen')}>
            <Image source={p.img} style={styles.projectImg} />
            <View style={styles.projectCopy}>
              <View style={styles.projectTitleRow}>
                <Typography
                  size={13}
                  color={G.forest}
                  numberOfLines={1}
                  style={[styles.projectTitle, { flexShrink: 1 }]}>
                  {p.title}
                </Typography>
                <View style={[styles.statusPill, { backgroundColor: statusStyle.bg }]}>
                  <Typography size={9} color={statusStyle.color} style={{ fontWeight: '500' }}>
                    {p.status}
                  </Typography>
                </View>
              </View>
              <Typography size={10} color={G.muted} mT={3} numberOfLines={1}>
                {p.step}
              </Typography>
              <View style={styles.projectProgress}>
                <View style={styles.progressTrackSm}>
                  <View
                    style={[
                      styles.progressFillProject,
                      { width: `${p.pct}%` },
                      p.status === 'Completed' && styles.progressFillComplete,
                    ]}
                  />
                </View>
                <Typography size={10} color={G.muted} style={styles.projectPct}>
                  {p.pct}%
                </Typography>
              </View>
              <View style={styles.projectMeta}>
                <View style={styles.metaItem}>
                  <IconCalendar size={11} color={G.muted} />
                  <Typography size={9} color={G.muted} style={styles.metaText}>
                    {p.dateLabel}
                  </Typography>
                </View>
                <View style={styles.metaItem}>
                  <ProjectTraitIcon type={p.trait.type} />
                  <Typography size={9} color={G.muted} style={styles.metaText}>
                    {p.trait.label}
                  </Typography>
                </View>
                <IconUsers size={11} color={G.muted} />
              </View>
            </View>
            <ChevronRight size={14} color={G.muted} />
          </Pressable>
        );
      })}

      <View style={styles.projectBanner}>
        <View style={styles.bannerIcon}>
          <IconHammerWhite />
        </View>
        <View style={styles.bannerCopy}>
          <Typography size={12} color={G.forest} style={{ fontWeight: '600' }}>
            Track every step of your builds
          </Typography>
          <Typography size={10} color={G.muted} mT={3}>
            From planning to completion, stay on budget and on schedule.
          </Typography>
        </View>
        <Pressable
          style={({ pressed }) => [styles.newProjectBtn, pressed && styles.newProjectBtnPressed]}
          onPress={() => navigation.navigate('GardenProjectDetailScreen')}>
          <IconPlus size={11} color={G.forest} />
          <Typography size={10} color={G.forest} style={{ fontWeight: '600', marginLeft: 4 }}>
            New Project
          </Typography>
        </Pressable>
      </View>
    </>
  );
};

const DiagnoseTab = ({ navigation }) => (
  <>
    <View style={styles.diagHeader}>
      <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
        Diagnose Your Plants
      </Typography>
      <Typography size={11} color={G.muted} mT={4} style={styles.diagSubtitle}>
        Scan, identify issues, and get expert recommendations.
      </Typography>
    </View>

    <Pressable
      style={({ pressed }) => [styles.scanCard, pressed && styles.scanCardPressed]}
      onPress={() => navigation.navigate('GardenDiagnoseDetailScreen')}>
      <View style={styles.scanIconWrap}>
        <IconScanPlant size={22} />
      </View>
      <View style={styles.scanCopy}>
        <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
          Scan a Plant
        </Typography>
        <Typography size={10} color={G.muted} mT={2}>
          Take a photo to identify problems
        </Typography>
      </View>
      <ChevronRight size={14} color={G.muted} />
    </Pressable>

    <View style={[styles.homeCard, styles.diagListCard]}>
      <View style={styles.diagListHeader}>
        <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
          Recent Diagnoses
        </Typography>
        <TouchableOpacity
          style={styles.viewAllRow}
          onPress={() => navigation.navigate('GardenDiagnoseDetailScreen')}>
          <Typography size={11} color={G.forest} style={{ fontWeight: '500' }}>
            View all
          </Typography>
          <ChevronRight size={12} color={G.forest} />
        </TouchableOpacity>
      </View>

      {DIAGNOSES.map((d, i) => {
        const tagColors = DIAG_TAG_STYLES[d.tagStyle];
        return (
          <Pressable
            key={d.id}
            style={({ pressed }) => [
              styles.diagRow,
              i > 0 && styles.diagRowDivider,
              pressed && styles.diagRowPressed,
            ]}
            onPress={() => navigation.navigate('GardenDiagnoseDetailScreen')}>
            <View style={styles.diagImgWrap}>
              <Image source={d.img} style={styles.diagImg} resizeMode="cover" />
            </View>
            <View style={styles.diagCopy}>
              <Typography size={12} color={G.forest} style={styles.diagPlant}>
                {d.plant}
              </Typography>
              <Typography size={12} color={G.forest} mT={3} style={styles.diagIssue}>
                {d.issue}
              </Typography>
              <View style={[styles.diagTag, { backgroundColor: tagColors.bg }]}>
                <Typography size={9} color={tagColors.color} style={{ fontWeight: '500' }}>
                  {d.tag}
                </Typography>
              </View>
              <Typography size={10} color={G.muted} mT={5}>
                {d.date}
              </Typography>
            </View>
            <View style={styles.diagChevron}>
              <ChevronRight size={14} color={G.muted} />
            </View>
          </Pressable>
        );
      })}
    </View>

    <View style={styles.smartPlanCard}>
      <View style={styles.smartPlanIcon}>
        <TaskLeafIcon />
      </View>
      <View style={styles.smartPlanCopy}>
        <Typography size={12} color={G.forest} style={{ fontWeight: '600' }}>
          Smart Treatment Plan
        </Typography>
        <Typography size={10} color={G.muted} mT={3}>
          We'll create tasks for you automatically based on the diagnosis.
        </Typography>
      </View>
      <Pressable
        style={({ pressed }) => [styles.howBtn, pressed && styles.howBtnPressed]}
        onPress={() => navigation.navigate('GardenDiagnoseDetailScreen')}>
        <Typography size={10} color={G.forest} style={{ fontWeight: '500' }}>
          How It Works
        </Typography>
        <ChevronRight size={12} color={G.forest} />
      </Pressable>
    </View>

    <View style={[styles.homeCard, styles.treatmentCard]}>
      <View style={styles.treatmentTopRow}>
        <View style={styles.treatmentImgWrap}>
          <Image source={diagLeafSpotHero} style={styles.treatmentHeroSide} resizeMode="cover" />
          <View style={styles.treatmentCameraFab}>
            <IconCamera size={11} color="#fff" />
          </View>
        </View>
        <View style={styles.treatmentDetail}>
          <View style={styles.treatmentTitleRow}>
            <Typography size={13} color={G.forest} numberOfLines={2} style={styles.treatmentTitle}>
              Leaf Spot (Fungal)
            </Typography>
            <View style={[styles.treatmentBadge, { backgroundColor: DIAG_TAG_STYLES.attention.bg }]}>
              <Typography size={9} color={DIAG_TAG_STYLES.attention.color} style={{ fontWeight: '500' }}>
                Needs Attention
              </Typography>
            </View>
          </View>
          <Typography size={10} color={G.muted} mT={6} style={styles.treatmentDesc}>
            Common on tomatoes in humid conditions. Spreads quickly without action.
          </Typography>
          <Typography size={11} color={G.forest} mT={12} style={styles.treatmentSectionLabel}>
            Recommended Actions
          </Typography>
          <View style={styles.treatmentActionsList}>
            {TREATMENT_STEPS.map((a, i) => (
              <View key={a.title} style={[styles.treatmentStep, i > 0 && styles.treatmentStepDivider]}>
                <View style={styles.treatmentActionIcon}>
                  <a.Icon size={14} color={G.forest} />
                </View>
                <View style={styles.treatmentStepCopy}>
                  <Typography size={11} color={G.forest} style={{ fontWeight: '600' }}>
                    {a.title}
                  </Typography>
                  <Typography size={9} color={G.muted} mT={2} numberOfLines={2}>
                    {a.desc}
                  </Typography>
                </View>
                <Typography size={9} color={G.muted} style={styles.treatmentWhen}>
                  {a.when}
                </Typography>
              </View>
            ))}
          </View>
          <Pressable
            style={({ pressed }) => [styles.addTasksBtn, pressed && styles.addTasksBtnPressed]}
            onPress={() => navigation.navigate('GardenDiagnoseDetailScreen')}>
            <View style={styles.addTasksBtnSide} />
            <Typography size={12} color="#fff" style={styles.addTasksBtnText}>
              Add to My Tasks
            </Typography>
            <View style={styles.addTasksBtnSide}>
              <IconPlus size={14} color="#fff" />
            </View>
          </Pressable>
        </View>
      </View>
    </View>

    <Pressable
      style={({ pressed }) => [styles.tipCard, pressed && styles.tipCardPressed]}
      onPress={() => navigation.navigate('GardenDiagnoseDetailScreen')}>
      <View style={styles.tipIconWrap}>
        <IconLightbulb size={16} color={G.sage} />
      </View>
      <View style={styles.tipCopy}>
        <Typography size={12} color={G.forest} style={{ fontWeight: '600' }}>
          Garden Tip
        </Typography>
        <Typography size={10} color={G.muted} mT={3}>
          Water early in the day so leaves have time to dry and reduce fungal risk.
        </Typography>
      </View>
      <ChevronRight size={14} color={G.muted} />
    </Pressable>
  </>
);

const styles = StyleSheet.create({
  gardenHeaderShell: { paddingBottom: Sizer.vSize(6), borderBottomWidth: 0 },
  pageTitle: { fontWeight: '700', lineHeight: Sizer.fS(28) },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 6 },
  bellBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  bellDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: G.sage,
    borderWidth: 1.2,
    borderColor: G.cream,
  },
  selector: {
    ...gardenUi.card,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginTop: 8,
    gap: 10,
    borderRadius: 20,
  },
  selectorCopy: { flex: 1, minWidth: 0 },
  selectorImg: { width: 60, height: 40, borderRadius: 8 },
  subNavWrap: { marginTop: 10 },
  subNav: { flexDirection: 'row' },
  subTab: { flex: 1, alignItems: 'center', paddingTop: 4, paddingBottom: 8 },
  subTabLabel: {
    marginTop: 4,
    fontWeight: '500',
    textAlign: 'center',
  },
  subTabLabelActive: {
    fontWeight: '600',
  },
  subNavLine: {
    height: 2,
    backgroundColor: G.divider,
    position: 'relative',
  },
  subNavIndicator: {
    position: 'absolute',
    top: 0,
    height: 2,
    backgroundColor: G.forest,
  },
  tabContent: { gap: 8, marginTop: 10, paddingBottom: 8 },
  homeCard: {
    ...gardenUi.card,
    borderRadius: 14,
  },
  healthCard: {
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 14,
  },
  healthRow: { flexDirection: 'row', marginTop: 8, justifyContent: 'space-between' },
  healthLeft: { flex: 1, minWidth: 0, paddingRight: 12 },
  healthRight: { alignItems: 'flex-end', gap: 8 },
  scoreLine: { flexDirection: 'row', alignItems: 'baseline', gap: 8 },
  scoreBig: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
    lineHeight: Sizer.fS(52),
    letterSpacing: -1,
  },
  progressTrack: {
    height: 7,
    borderRadius: 3.5,
    backgroundColor: G.sageLight,
    marginTop: 12,
    overflow: 'hidden',
    maxWidth: 200,
  },
  progressFill: { height: '100%', backgroundColor: G.sage, borderRadius: 3.5 },
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
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  focusSection: { marginTop: 2 },
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
  taskPillText: { fontFamily: FONTS.body, fontWeight: '500' },
  taskList: { paddingHorizontal: 14, paddingBottom: 12 },
  taskRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, gap: 10 },
  taskDivider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: G.divider },
  taskIconSlot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBgBlue: { backgroundColor: '#E6F0FA' },
  iconBgGreen: { backgroundColor: '#E8F0E6' },
  taskCopy: { flex: 1, minWidth: 0 },
  sunCard: { flexDirection: 'row', alignItems: 'center', padding: 14, gap: 12 },
  sunCopy: { flex: 1, minWidth: 0 },
  sunThumb: { width: 52, height: 44, borderRadius: 8 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  planCountPill: {
    backgroundColor: G.sageLight,
    borderRadius: 999,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  plansSectionHead: { marginTop: 0 },
  plansSectionGap: { marginTop: 14 },
  previewHeaderCopy: { flex: 1, minWidth: 0, paddingRight: 10 },
  viewAllRow: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  edgeScroll: { marginHorizontal: -Sizer.hSize(16) },
  planScroll: { paddingBottom: 8, paddingTop: 2 },
  statLabel: { lineHeight: Sizer.fS(12), textAlign: 'center' },
  statValue: { lineHeight: Sizer.fS(14), textAlign: 'center', marginTop: 2 },
  statSub: { lineHeight: Sizer.fS(11), textAlign: 'left', marginTop: 2 },
  planCard: {
    padding: 10,
    flexShrink: 0,
    overflow: 'hidden',
  },
  planCardActive: {
    borderWidth: 1.5,
    borderColor: G.sage,
    ...CARD_LIFT_SHADOW,
  },
  planCardIdle: { opacity: 0.9 },
  planCardPressed: { opacity: 0.82, transform: [{ scale: 0.98 }] },
  planImgWrap: {
    position: 'relative',
    alignSelf: 'stretch',
    overflow: 'hidden',
    borderRadius: 8,
  },
  planImg: { borderRadius: 8 },
  planTitle: { fontWeight: '600', lineHeight: Sizer.fS(15) },
  planCheck: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: G.sage,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planNew: { borderWidth: 1.5, borderStyle: 'dashed', borderColor: G.sage },
  planNewInner: {
    alignSelf: 'stretch',
    borderRadius: 8,
    backgroundColor: G.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  layoutPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: G.divider,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: G.cream,
  },
  layoutPillPressed: { backgroundColor: G.sageLight },
  previewCard: { overflow: 'hidden', position: 'relative', padding: 0 },
  previewCardPressed: { opacity: 0.94 },
  previewImg: { width: '100%', height: 196, borderRadius: 10 },
  previewShade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 52,
    backgroundColor: 'rgba(26, 48, 32, 0.42)',
  },
  previewFooter: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  sunOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  sunHotspot: {
    position: 'absolute',
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(232, 168, 56, 0.38)',
  },
  sunHotspotMid: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: 'rgba(232, 168, 56, 0.24)',
  },
  sunHotspotLow: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(232, 168, 56, 0.16)',
  },
  irrigationOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(74, 143, 212, 0.14)',
    borderWidth: 1,
    borderColor: 'rgba(74, 143, 212, 0.28)',
    zIndex: 1,
  },
  zoneLabel: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
    zIndex: 3,
    shadowColor: '#1A3020',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  previewFabs: { position: 'absolute', right: 10, top: 10, gap: 8, zIndex: 4 },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    minWidth: 0,
  },
  statIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  toolTile: {
    width: '48%',
    padding: 14,
  },
  toolTileTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  toolTilePressed: { opacity: 0.88, transform: [{ scale: 0.99 }] },
  toolIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createPlanBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    backgroundColor: G.sageLight,
    borderRadius: 999,
    marginTop: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(74, 124, 68, 0.25)',
  },
  createPlanBtnPressed: {
    backgroundColor: '#DCE8D8',
    transform: [{ scale: 0.99 }],
  },
  filterScroll: { gap: 8, paddingBottom: 4, paddingHorizontal: Sizer.hSize(16) },
  projectFilterScroll: { gap: 8, paddingBottom: 10, paddingTop: 2 },
  filterChip: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 7,
    backgroundColor: G.sageLight,
  },
  filterChipActive: { backgroundColor: G.forest },
  projectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 10,
    marginBottom: 2,
  },
  projectCardPressed: { opacity: 0.9, transform: [{ scale: 0.995 }] },
  projectImg: { width: 56, height: 56, borderRadius: 10 },
  projectCopy: { flex: 1, minWidth: 0 },
  projectTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  projectTitle: { fontWeight: '600' },
  statusPill: {
    borderRadius: 999,
    paddingHorizontal: 7,
    paddingVertical: 2,
    flexShrink: 0,
  },
  projectProgress: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8 },
  projectPct: { fontWeight: '500', minWidth: 30, textAlign: 'right' },
  progressFillProject: {
    height: '100%',
    backgroundColor: G.sage,
    borderRadius: 2,
  },
  progressFillComplete: { backgroundColor: G.forest },
  projectMeta: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 8 },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 3 },
  metaText: { marginLeft: 1 },
  projectBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: 14,
    backgroundColor: G.sageBanner,
    marginTop: 8,
  },
  bannerIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: G.forest,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  bannerCopy: { flex: 1, minWidth: 0, paddingRight: 4 },
  newProjectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: G.forest,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: 'transparent',
    flexShrink: 0,
  },
  newProjectBtnPressed: { backgroundColor: 'rgba(26, 48, 32, 0.06)' },
  scanRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: G.sageLight,
    marginTop: 10,
  },
  diagHeader: { marginTop: 0 },
  diagSubtitle: { lineHeight: Sizer.fS(16) },
  scanCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
    backgroundColor: G.sageLight,
    marginTop: 10,
    gap: 12,
  },
  scanCardPressed: { opacity: 0.9 },
  scanIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.65)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanCopy: { flex: 1, minWidth: 0 },
  diagListCard: { padding: 16, overflow: 'hidden', marginTop: 10 },
  diagListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  diagRow: {
    flexDirection: 'row',
    paddingVertical: 14,
    gap: 12,
    alignItems: 'flex-start',
  },
  diagRowDivider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: G.divider,
  },
  diagRowPressed: { opacity: 0.88 },
  diagImgWrap: {
    width: DIAG_THUMB_W,
    height: DIAG_THUMB_H,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: G.cardTint,
    flexShrink: 0,
  },
  diagImg: { width: '100%', height: '100%' },
  diagCopy: { flex: 1, minWidth: 0, paddingTop: 1 },
  diagChevron: { alignSelf: 'center', flexShrink: 0 },
  diagPlant: { fontWeight: '600', lineHeight: Sizer.fS(16) },
  diagIssue: { fontWeight: '600', lineHeight: Sizer.fS(16) },
  diagTag: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 6,
  },
  tag: { alignSelf: 'flex-start', borderRadius: 999, paddingHorizontal: 6, paddingVertical: 2, marginTop: 4 },
  smartPlanCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
    backgroundColor: G.sageLight,
    marginTop: 10,
    gap: 10,
  },
  smartPlanIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  smartPlanCopy: { flex: 1, minWidth: 0 },
  howBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    borderWidth: 1,
    borderColor: G.forest,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexShrink: 0,
  },
  howBtnPressed: { backgroundColor: 'rgba(26, 48, 32, 0.06)' },
  treatmentCard: { padding: 14, overflow: 'hidden', marginTop: 10 },
  treatmentTopRow: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  treatmentImgWrap: { position: 'relative', flexShrink: 0 },
  treatmentHeroSide: { width: 108, height: 176, borderRadius: 12 },
  treatmentCameraFab: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    width: 26,
    height: 26,
    borderRadius: 8,
    backgroundColor: G.forest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  treatmentDetail: { flex: 1, minWidth: 0 },
  treatmentTitle: { fontWeight: '600', flex: 1, lineHeight: Sizer.fS(17) },
  treatmentBadge: {
    borderRadius: 999,
    paddingHorizontal: 7,
    paddingVertical: 3,
    flexShrink: 0,
    marginLeft: 4,
  },
  treatmentDesc: { lineHeight: Sizer.fS(15) },
  treatmentSectionLabel: { fontWeight: '600' },
  treatmentTitleRow: { flexDirection: 'row', alignItems: 'flex-start' },
  treatmentActionsList: { marginTop: 2 },
  treatmentStep: { flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 9, gap: 8 },
  treatmentStepDivider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: G.divider,
  },
  treatmentStepCopy: { flex: 1, minWidth: 0, paddingRight: 4 },
  treatmentWhen: { flexShrink: 0, marginTop: 2, textAlign: 'right', minWidth: 48 },
  treatmentActionIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#E9F0E6',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  treatmentHero: { width: '100%', height: 120, borderRadius: 10, marginBottom: 10 },
  treatmentActions: { flexDirection: 'row', gap: 8, marginTop: 10 },
  addTasksBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: G.forest,
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 12,
  },
  addTasksBtnSide: { width: 18, alignItems: 'flex-end' },
  addTasksBtnText: { flex: 1, fontWeight: '600', textAlign: 'center' },
  addTasksBtnPressed: { opacity: 0.92 },
  shopBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: G.forest,
    borderRadius: 10,
    paddingVertical: 12,
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
    backgroundColor: G.sageLight,
    marginTop: 10,
    gap: 10,
  },
  tipCardPressed: { opacity: 0.9 },
  tipIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  tipCopy: { flex: 1, minWidth: 0 },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    borderRadius: 12,
    backgroundColor: G.sageLight,
    marginTop: 10,
  },
  aiCard: {
    ...gardenUi.card,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 12,
    borderRadius: 12,
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
});

export default GardenScreen;
