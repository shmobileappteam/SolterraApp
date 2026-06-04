import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import { ChevronDown, ChevronRight } from '../../../components/solterra/garden/GardenUiParts';
import GardenDetailHeader, { IconCheckCircle, IconCircleEmpty } from '../../_partials/GardenDetailHeader';
import { onb2 } from '../../../assets/images';
import { CARD_GAP, G, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const compactText = { includeFontPadding: false };

const PHASE_TASKS = [
  { t: 'Choose location', s: 'Completed', done: true },
  { t: 'Prepare foundation', s: 'Completed', done: true },
  { t: 'Install frame', s: 'In progress', done: false },
  { t: 'Seal base', s: 'Upcoming', done: false },
];

const OTHER_PHASES = [
  { phase: 'Phase 2: Irrigation', status: 'In progress', active: true },
  { phase: 'Phase 3: Planting', status: 'Upcoming', active: false },
  { phase: 'Phase 4: Maintenance', status: 'Upcoming', active: false },
];

const PROJECT_TABS = ['Tasks', 'Timeline', 'Budget'];

const GardenProjectDetailScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState(0);

  return (
    <View style={gardenUi.page}>
      <GardenDetailHeader navigation={navigation} title="Greenhouse Build" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          gardenUi.scrollPad,
          gardenUi.pageX,
          { paddingBottom: insets.bottom + 24, gap: CARD_GAP },
        ]}>
        <View style={styles.heroWrap}>
          <Image source={onb2} style={styles.heroImg} />
          <View style={styles.heroOverlay}>
            <Typography size={13} color="#fff" style={[compactText, { fontWeight: '600', lineHeight: Sizer.fS(18) }]}>
              72% Complete
            </Typography>
            <View style={styles.heroTrack}>
              <View style={[styles.heroFill, { width: '72%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.subTabs}>
          {PROJECT_TABS.map((t, i) => (
            <TouchableOpacity key={t} style={styles.subTab} onPress={() => setTab(i)}>
              <Typography
                size={13}
                color={tab === i ? G.forest : G.muted}
                style={{ fontWeight: '500' }}>
                {t}
              </Typography>
              {tab === i && <View style={styles.subTabLine} />}
            </TouchableOpacity>
          ))}
        </View>

        {tab === 0 && (
          <>
            <View style={[gardenUi.cardLift, styles.phaseCard]}>
              <View style={styles.phaseHead}>
                <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
                  Phase 1: Foundation
                </Typography>
                <ChevronDown size={16} />
              </View>
              {PHASE_TASKS.map((task, i) => (
                <TouchableOpacity
                  key={task.t}
                  style={[styles.taskRow, i > 0 && styles.taskBorder]}
                  activeOpacity={0.88}
                  onPress={() => navigation.navigate('TaskDetailScreen')}>
                  {task.done ? <IconCheckCircle size={20} /> : <IconCircleEmpty size={20} />}
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Typography size={13} color={G.forest} style={{ fontWeight: '500' }}>
                      {task.t}
                    </Typography>
                    <Typography size={11} color={G.muted}>
                      {task.s}
                    </Typography>
                  </View>
                  <ChevronRight size={16} />
                </TouchableOpacity>
              ))}
            </View>

            {OTHER_PHASES.map(p => (
              <View key={p.phase} style={[gardenUi.cardLift, styles.phaseRow]}>
                <Typography size={13} color={G.forest} style={{ fontWeight: '500' }}>
                  {p.phase}
                </Typography>
                <View style={[styles.statusPill, { backgroundColor: p.active ? G.sageLight : G.cardTint }]}>
                  <Typography size={10} color={p.active ? G.sage : G.muted}>
                    {p.status}
                  </Typography>
                </View>
              </View>
            ))}
          </>
        )}

        {tab === 1 && (
          <View style={[gardenUi.cardLift, styles.phaseCard]}>
            {[
              { label: 'May 1', event: 'Foundation complete' },
              { label: 'May 12', event: 'Frame installation' },
              { label: 'May 20', event: 'Irrigation hookup' },
              { label: 'Jun 5', event: 'Planting begins' },
            ].map((e, i) => (
              <View key={e.label} style={[styles.timelineRow, i > 0 && styles.taskBorder]}>
                <Typography size={11} color={G.sage} style={{ fontWeight: '600' }}>
                  {e.label}
                </Typography>
                <Typography size={13} color={G.forest} mT={2}>
                  {e.event}
                </Typography>
              </View>
            ))}
          </View>
        )}

        {tab === 2 && (
          <View style={[gardenUi.cardLift, styles.phaseCard]}>
            {[
              { item: 'Materials', cost: '$840' },
              { item: 'Labor', cost: '$520' },
              { item: 'Permits', cost: '$120' },
            ].map((b, i) => (
              <View key={b.item} style={[styles.budgetRow, i > 0 && styles.taskBorder]}>
                <Typography size={13} color={G.forest}>
                  {b.item}
                </Typography>
                <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                  {b.cost}
                </Typography>
              </View>
            ))}
            <View style={[styles.budgetRow, styles.budgetTotal]}>
              <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                Total
              </Typography>
              <Typography size={14} color={G.sage} style={{ fontWeight: '700' }}>
                $1,480
              </Typography>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heroWrap: { borderRadius: 8, overflow: 'hidden' },
  heroImg: { width: '100%', height: 176 },
  heroOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  heroTrack: {
    marginTop: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
    overflow: 'hidden',
  },
  heroFill: { height: '100%', backgroundColor: '#fff', borderRadius: 3 },
  subTabs: {
    flexDirection: 'row',
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: G.divider,
  },
  subTab: { paddingBottom: 10, alignItems: 'center' },
  subTabLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: G.forest,
  },
  phaseCard: { padding: 12 },
  phaseHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 },
  taskRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  taskBorder: { borderTopWidth: 1, borderTopColor: G.divider },
  phaseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  statusPill: { borderRadius: 999, paddingHorizontal: 8, paddingVertical: 4 },
  timelineRow: { paddingVertical: 10 },
  budgetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  budgetTotal: {
    borderTopWidth: 1,
    borderTopColor: G.divider,
    marginTop: 4,
  },
});

export default GardenProjectDetailScreen;
