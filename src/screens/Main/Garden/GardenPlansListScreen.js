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
import { IconPlus, IconSunSmall } from '../../../components/solterra/garden/GardenUiParts';
import { IconMoreHorizontal } from '../../_partials/GardenDetailHeader';
import { heroGarden, lesson2, lesson3, onb2 } from '../../../assets/images';
import { CARD_GAP, G, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const LIST_TABS = ['My Plans', 'Templates', 'Shared with Me'];

const OTHER_PLANS = [
  { title: 'Greenhouse Layout', date: 'Apr 28, 2025', img: onb2 },
  { title: 'Pollinator Garden Plan', date: 'Mar 15, 2025', img: lesson3 },
  { title: 'Front Yard Xeriscape', date: 'Feb 2, 2025', img: lesson2 },
];

const PLAN_TOOLS = ['Sunlight Map', 'Irrigation', 'Schedule', 'Budget'];

const GardenPlansListScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState(0);

  return (
    <View style={gardenUi.page}>
      <View style={[gardenUi.pageX, styles.top, { paddingTop: insets.top + Sizer.vSize(12) }]}>
        <View style={styles.titleRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={12} style={styles.back}>
            <Typography size={18} color={G.muted}>
              ←
            </Typography>
          </TouchableOpacity>
          <Typography size={22} color={G.forest} style={{ fontWeight: '700', flex: 1 }}>
            Plans
          </Typography>
          <TouchableOpacity
            style={styles.newPlanBtn}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
            <IconPlus size={14} color="#fff" />
            <Typography size={12} color="#fff" style={{ fontWeight: '500', marginLeft: 4 }}>
              New Plan
            </Typography>
          </TouchableOpacity>
        </View>

        <View style={styles.tabs}>
          {LIST_TABS.map((t, i) => (
            <TouchableOpacity key={t} style={styles.tabBtn} onPress={() => setTab(i)}>
              <Typography
                size={13}
                color={tab === i ? G.forest : G.muted}
                style={{ fontWeight: '500' }}>
                {t}
              </Typography>
              {tab === i && <View style={styles.tabLine} />}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          gardenUi.scrollPad,
          gardenUi.pageX,
          { paddingBottom: insets.bottom + 24, gap: CARD_GAP },
        ]}>
        <TouchableOpacity
          style={[gardenUi.card, styles.featureCard]}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
          <View style={styles.featureHead}>
            <View style={{ flex: 1 }}>
              <Typography size={15} color={G.forest} style={{ fontWeight: '600' }}>
                Backyard Garden Plan
              </Typography>
              <Typography size={11} color={G.muted} mT={2}>
                Updated May 12, 2025
              </Typography>
            </View>
            <View style={styles.activePill}>
              <Typography size={10} color={G.sage} style={{ fontWeight: '500' }}>
                Active
              </Typography>
            </View>
          </View>
          <Image source={heroGarden} style={styles.featureImg} />
          <View style={styles.actionRow}>
            {['Edit Plan', 'View Details', 'Share', 'Duplicate'].map(a => (
              <TouchableOpacity
                key={a}
                hitSlop={8}
                onPress={() => {
                  if (a === 'View Details') navigation.navigate('GardenPlanDetailScreen');
                }}>
                <Typography size={9} color={G.muted}>
                  {a}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>

        <View style={gardenUi.card}>
          {OTHER_PLANS.map((p, i) => (
            <TouchableOpacity
              key={p.title}
              style={[styles.listRow, i > 0 && styles.listRowBorder]}
              activeOpacity={0.88}
              onPress={() => navigation.navigate('GardenPlanDetailScreen')}>
              <View style={{ flex: 1 }}>
                <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
                  {p.title}
                </Typography>
                <Typography size={11} color={G.muted} mT={2}>
                  Updated {p.date}
                </Typography>
              </View>
              <Image source={p.img} style={styles.listThumb} />
              <IconMoreHorizontal size={16} />
            </TouchableOpacity>
          ))}
        </View>

        <View>
          <Typography size={14} color={G.forest} style={{ fontWeight: '600', marginBottom: 8 }}>
            Plan Tools
          </Typography>
          <View style={styles.toolsGrid}>
            {PLAN_TOOLS.map(t => (
              <View key={t} style={styles.toolTile}>
                <IconSunSmall size={16} />
                <Typography size={9} color={G.forest} mT={4} style={{ textAlign: 'center' }}>
                  {t}
                </Typography>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  top: { paddingBottom: 4 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  back: { width: 28 },
  newPlanBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: G.forest,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tabs: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: G.divider,
  },
  tabBtn: { paddingBottom: 10, alignItems: 'center' },
  tabLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: G.forest,
  },
  featureCard: { padding: 12 },
  featureHead: { flexDirection: 'row', alignItems: 'flex-start' },
  activePill: {
    backgroundColor: G.sageLight,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  featureImg: {
    width: '100%',
    height: 160,
    borderRadius: 6,
    marginTop: 12,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingHorizontal: 4,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
  },
  listRowBorder: { borderTopWidth: 1, borderTopColor: G.divider },
  listThumb: { width: 56, height: 44, borderRadius: 6 },
  toolsGrid: { flexDirection: 'row', gap: 8 },
  toolTile: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: G.cardTint,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
});

export default GardenPlansListScreen;
