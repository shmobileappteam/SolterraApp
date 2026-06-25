import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import { ChevronRight } from '../../../components/solterra/garden/GardenUiParts';
import GardenDetailHeader, { IconCheckCircle, IconCircleEmpty } from '../../_partials/GardenDetailHeader';
import { lesson1 } from '../../../assets/images';
import { CARD_GAP, G, gardenUi } from '../../_partials/gardenUi';

const TREATMENT_STEPS = [
  { t: '1. Prune affected leaves', d: 'Remove infected foliage today', when: 'Today', done: true },
  { t: '2. Apply fungicide', d: 'Copper-based spray on remaining leaves', when: 'Tomorrow', done: false },
  { t: '3. Improve airflow', d: 'Space plants and trim nearby growth', when: 'This week', done: false },
];

const GardenDiagnoseDetailScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={gardenUi.page}>
      <GardenDetailHeader navigation={navigation} title="Diagnose" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          gardenUi.scrollPad,
          gardenUi.pageX,
          { paddingBottom: insets.bottom + 24, gap: CARD_GAP },
        ]}>
        <Typography size={16} color={G.forest} style={{ fontWeight: '600' }}>
          Diagnose Your Plants
        </Typography>
        <Typography size={12} color={G.muted}>
          Snap a photo to identify issues and get treatment steps.
        </Typography>

        <View style={[gardenUi.cardLift, styles.issueCard]}>
          <Image source={lesson1} style={styles.issueImg} />
          <View style={{ flex: 1 }}>
            <View style={styles.likelyPill}>
              <Typography size={9} color={G.orange} style={{ fontWeight: '500' }}>
                Likely Issue
              </Typography>
            </View>
            <Typography size={14} color={G.forest} mT={4} style={{ fontWeight: '600' }}>
              Fungal Leaf Spot
            </Typography>
            <Typography size={11} color={G.muted}>
              on Hydrangea
            </Typography>
            <Typography size={10} color={G.forest} mT={8} style={{ fontWeight: '500' }}>
              Confidence High
            </Typography>
            <View style={styles.confidenceTrack}>
              <View style={[styles.confidenceFill, { width: '88%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.treatmentHead}>
          <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
            Recommended Treatment
          </Typography>
          <View style={styles.aiPill}>
            <Typography size={9} color={G.sage}>
              AI Expert Advice
            </Typography>
          </View>
        </View>

        <View style={[gardenUi.cardLift, styles.treatmentCard]}>
          {TREATMENT_STEPS.map((step, i) => (
            <View key={step.t} style={[styles.stepRow, i > 0 && styles.stepBorder]}>
              {step.done ? <IconCheckCircle size={16} /> : <IconCircleEmpty size={16} />}
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Typography size={12} color={G.forest} style={{ fontWeight: '600' }}>
                  {step.t}
                </Typography>
                <Typography size={11} color={G.muted}>
                  {step.d}
                </Typography>
              </View>
              <Typography size={10} color={G.muted}>
                {step.when}
              </Typography>
            </View>
          ))}
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.primaryBtn}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('MainTabs', { screen: 'TasksScreen' })}>
            <Typography size={13} color="#fff" style={{ fontWeight: '600' }}>
              Add to Tasks
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.outlineBtn}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('MainTabs', { screen: 'ShopScreen' })}>
            <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
              Shop Treatment
            </Typography>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.tasksBanner}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('MainTabs', { screen: 'TasksScreen' })}>
          <Typography size={12} color={G.forest} style={{ fontWeight: '500', flex: 1 }}>
            Auto-Added to Your Tasks
          </Typography>
          <View style={styles.viewTasksPill}>
            <Typography size={11} color={G.forest} style={{ fontWeight: '500' }}>
              View My Tasks
            </Typography>
            <ChevronRight size={12} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  issueCard: { flexDirection: 'row', gap: 12, padding: 12 },
  issueImg: { width: 96, height: 96, borderRadius: 6 },
  likelyPill: {
    alignSelf: 'flex-start',
    backgroundColor: G.orangeLight,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  confidenceTrack: {
    marginTop: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: G.sageLight,
    overflow: 'hidden',
  },
  confidenceFill: { height: '100%', backgroundColor: G.sage, borderRadius: 2 },
  treatmentHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  aiPill: { backgroundColor: G.sageLight, borderRadius: 4, paddingHorizontal: 8, paddingVertical: 4 },
  treatmentCard: { padding: 12 },
  stepRow: { flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 10 },
  stepBorder: { borderTopWidth: 1, borderTopColor: G.divider },
  actionRow: { flexDirection: 'row', gap: 8 },
  primaryBtn: {
    flex: 1,
    backgroundColor: G.forest,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  outlineBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: G.forest,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tasksBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: G.sageBanner,
    borderRadius: 8,
    padding: 12,
    gap: 8,
  },
  viewTasksPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: G.cream,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});

export default GardenDiagnoseDetailScreen;
