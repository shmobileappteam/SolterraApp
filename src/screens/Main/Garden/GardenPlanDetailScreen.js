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
import { IconCalendar, IconSunSmall } from '../../../components/solterra/garden/GardenUiParts';
import GardenDetailHeader from '../../_partials/GardenDetailHeader';
import { heroGarden } from '../../../assets/images';
import { CARD_GAP, G, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const PLAN_TABS = ['Layout', 'Plants', 'Schedule', 'Budget'];

const ZONE_LABELS = [
  { label: 'Greenhouse', top: 12, left: 12 },
  { label: 'Raised Beds', top: 80, left: 100 },
  { label: 'Herb Garden', top: 140, left: 20 },
  { label: 'Compost', top: 100, left: 180 },
];

const PLANTS = [
  { name: 'Tomatoes', zone: 'Raised Beds', qty: '6 plants' },
  { name: 'Basil', zone: 'Herb Garden', qty: '4 plants' },
  { name: 'Peppers', zone: 'Raised Beds', qty: '4 plants' },
];

const SCHEDULE = [
  { week: 'Week 1', task: 'Prepare soil & compost' },
  { week: 'Week 2', task: 'Transplant seedlings' },
  { week: 'Week 3–4', task: 'Mulch and set irrigation' },
];

const BUDGET = [
  { item: 'Soil & compost', cost: '$320' },
  { item: 'Plants & seeds', cost: '$180' },
  { item: 'Irrigation supplies', cost: '$240' },
  { item: 'Tools & mulch', cost: '$460' },
];

const compactText = { includeFontPadding: false, lineHeight: Sizer.fS(14) };

const GardenPlanDetailScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [planTab, setPlanTab] = useState(0);

  return (
    <View style={gardenUi.page}>
      <GardenDetailHeader navigation={navigation} title="Garden Plan" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          gardenUi.scrollPad,
          gardenUi.pageX,
          styles.scroll,
          { paddingBottom: insets.bottom + 24 },
        ]}>
        <View style={styles.subTabs}>
          {PLAN_TABS.map((t, i) => (
            <TouchableOpacity key={t} style={styles.subTab} onPress={() => setPlanTab(i)}>
              <Typography
                size={13}
                color={planTab === i ? G.forest : G.muted}
                style={{ fontWeight: '500' }}>
                {t}
              </Typography>
              {planTab === i && <View style={styles.subTabLine} />}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.statRow}>
          {[
            { label: '20 Plants', icon: '🪴' },
            { label: '8h+ Sunlight', icon: '☀️' },
          ].map(s => (
            <View key={s.label} style={styles.statChip}>
              <Typography size={14} style={compactText}>
                {s.icon}
              </Typography>
              <Typography size={12} color={G.forest} style={[compactText, { fontWeight: '500' }]}>
                {s.label}
              </Typography>
            </View>
          ))}
        </View>

        {planTab === 0 && (
          <>
            <View style={[gardenUi.cardLift, styles.mapCard]}>
              <Image source={heroGarden} style={styles.mapImg} />
              {ZONE_LABELS.map(z => (
                <View key={z.label} style={[styles.zoneLabel, { top: z.top, left: z.left }]}>
                  <Typography size={9} color={G.forest} style={{ fontWeight: '500', lineHeight: 12 }}>
                    {z.label}
                  </Typography>
                </View>
              ))}
            </View>

            <Typography size={14} color={G.forest} mT={8} style={{ fontWeight: '600' }}>
              Sun Exposure
            </Typography>
            <View style={[gardenUi.cardLift, styles.sunCard]}>
              <View style={styles.sunRow}>
                {['Morning', 'Midday', 'Evening'].map(period => (
                  <View key={period} style={styles.sunCol}>
                    <IconSunSmall size={20} />
                    <Typography size={10} color={G.muted} mT={4} style={{ lineHeight: Sizer.fS(14) }}>
                      {period}
                    </Typography>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.plantingRow}>
              <IconCalendar size={20} color={G.forest} />
              <View style={styles.plantingCopy}>
                <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                  Best Planting Window
                </Typography>
                <View style={styles.plantingPill}>
                  <Typography size={11} color={G.forest} style={{ lineHeight: Sizer.fS(16) }}>
                    Apr 15 – May 15
                  </Typography>
                </View>
              </View>
            </View>
          </>
        )}

        {planTab === 1 && (
          <View style={[gardenUi.cardLift, styles.listCard]}>
            {PLANTS.map((p, i) => (
              <View key={p.name} style={[styles.listRow, i > 0 && styles.listRowBorder]}>
                <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                  {p.name}
                </Typography>
                <Typography size={11} color={G.muted}>
                  {p.zone} • {p.qty}
                </Typography>
              </View>
            ))}
          </View>
        )}

        {planTab === 2 && (
          <View style={[gardenUi.cardLift, styles.listCard]}>
            {SCHEDULE.map((s, i) => (
              <View key={s.week} style={[styles.listRow, i > 0 && styles.listRowBorder]}>
                <Typography size={12} color={G.sage} style={{ fontWeight: '600' }}>
                  {s.week}
                </Typography>
                <Typography size={13} color={G.forest} mT={2}>
                  {s.task}
                </Typography>
              </View>
            ))}
          </View>
        )}

        {planTab === 3 && (
          <View style={[gardenUi.cardLift, styles.listCard]}>
            {BUDGET.map((b, i) => (
              <View key={b.item} style={[styles.budgetRow, i > 0 && styles.listRowBorder]}>
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
                Estimated Total
              </Typography>
              <Typography size={14} color={G.sage} style={{ fontWeight: '700' }}>
                $1,200
              </Typography>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: { paddingBottom: 32, gap: CARD_GAP },
  subTabs: {
    flexDirection: 'row',
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: G.divider,
    marginBottom: 4,
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
  statRow: { flexDirection: 'row', gap: 8 },
  statChip: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: G.cardTint,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  mapCard: { overflow: 'hidden', padding: 0, position: 'relative', minHeight: 208 },
  mapImg: { width: '100%', height: 208 },
  zoneLabel: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    shadowColor: '#1A3020',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  sunCard: { padding: 16 },
  sunRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 8 },
  sunCol: { alignItems: 'center', flex: 1 },
  plantingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: G.cardTint,
    borderRadius: 8,
    padding: 12,
  },
  plantingCopy: { flex: 1 },
  plantingPill: {
    alignSelf: 'flex-start',
    marginTop: 6,
    backgroundColor: G.sageLight,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  listCard: { padding: 12 },
  listRow: { paddingVertical: 10 },
  listRowBorder: { borderTopWidth: 1, borderTopColor: G.divider },
  budgetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  budgetTotal: {
    borderTopWidth: 1,
    borderTopColor: G.divider,
    marginTop: 4,
  },
});

export default GardenPlanDetailScreen;
