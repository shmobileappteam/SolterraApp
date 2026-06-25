import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { Button } from '../../components';
import OnboardingPagination from '../../components/solterra/OnboardingPagination';
import Typography from '../../atomComponents/Typography';
import { FONTS } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';
import { accountGardenBlueprint } from '../../assets/images';
import { G } from '../_partials/gardenUi';
import { ONBOARDING_UI } from '../OnBoard/onboardingUi';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import { PLAN_FINAL_STEPS, PlanInlineImage, planUiStyles } from './_partials/planUi';

const TABS = ['Overview', 'Layout', 'Plants', 'Projects'];

const LEGEND_ROW_ONE = [
  { type: 'fullSun', label: 'Full sun' },
  { type: 'partialSun', label: 'Partial sun' },
  { type: 'shade', label: 'Shade' },
];

const LEGEND_ROW_TWO = [
  { type: 'path', label: 'Path' },
  { type: 'water', label: 'Water' },
];

const LEGEND_ICON = 18;

function BlueprintLegendIcon({ type }) {
  switch (type) {
    case 'fullSun':
      return (
        <Svg width={LEGEND_ICON} height={LEGEND_ICON} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="4.5" fill="#E8B923" />
          <Path
            d="M12 4v2.2M12 17.8V20M4 12h2.2M17.8 12H20M6.1 6.1l1.6 1.6M16.3 16.3l1.6 1.6M17.9 6.1l-1.6 1.6M7.7 16.3l-1.6 1.6"
            stroke="#E8B923"
            strokeWidth={1.6}
            strokeLinecap="round"
          />
        </Svg>
      );
    case 'partialSun':
      return (
        <Svg width={LEGEND_ICON} height={LEGEND_ICON} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="7.5" fill="#E8B923" />
          <Path d="M12 4.5A7.5 7.5 0 0012 19.5V4.5z" fill={G.sage} />
        </Svg>
      );
    case 'shade':
      return (
        <Svg width={LEGEND_ICON} height={LEGEND_ICON} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 5c-3.5 2.5-5.5 5-5.5 8a5.5 5.5 0 1011 0c0-3-2-5.5-5.5-8z"
            fill={G.forest}
          />
          <Path d="M12 5v14" stroke={G.forest} strokeWidth={1.2} strokeLinecap="round" />
        </Svg>
      );
    case 'path':
      return (
        <Svg width={LEGEND_ICON} height={LEGEND_ICON} viewBox="0 0 24 24" fill="none">
          <Rect x="5" y="5" width="14" height="14" rx="2" fill="#C8C4B8" />
          <Path
            d="M8 9h8M8 12h8M8 15h5"
            stroke="#9A968A"
            strokeWidth={1.2}
            strokeLinecap="round"
          />
        </Svg>
      );
    case 'water':
      return (
        <Svg width={LEGEND_ICON} height={LEGEND_ICON} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 5c2.8 4 4.5 6.5 4.5 8.8a4.5 4.5 0 01-9 0C7.5 11.5 9.2 9 12 5z"
            fill="#4A90D9"
          />
        </Svg>
      );
    default:
      return null;
  }
}

function LegendItem({ type, label }) {
  return (
    <View style={styles.legendItem}>
      <BlueprintLegendIcon type={type} />
      <Typography size={12} color={ONBOARDING_UI.green} style={styles.legendLabel}>
        {label}
      </Typography>
    </View>
  );
}

const PlanBlueprintRevealScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <PlanFlowLayout
      stepIndex={3}
      stepCount={PLAN_FINAL_STEPS}
      title="Your garden blueprint is ready!"
      subtitle="Here's your custom garden plan."
      subtitleColor={ONBOARDING_UI.green}
      hideButton
      hidePagination
      footer={
        <>
          <OnboardingPagination count={PLAN_FINAL_STEPS} index={3} />
          <View style={planUiStyles.dualFooter}>
            <TouchableOpacity style={planUiStyles.outlineBtn} activeOpacity={0.8}>
              <Typography size={15} color={ONBOARDING_UI.primary} style={planUiStyles.outlineBtnText}>
                Edit Plan
              </Typography>
            </TouchableOpacity>
            <Button
              label="Approve Plan"
              onPress={() => navigation.navigate('PlanDashboardHandoffScreen')}
              height={52}
              btnStyle={[planUiStyles.primaryBtn, { flex: 1 }]}
              textStyle={planUiStyles.primaryBtnText}
            />
          </View>
        </>
      }>
      <View style={styles.tabRow}>
        {TABS.map(tab => {
          const active = tab === activeTab;
          return (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, active && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.85}>
              <Typography
                size={11}
                color={active ? ONBOARDING_UI.white : ONBOARDING_UI.primary}
                textAlign="center"
                style={[styles.tabText, active && styles.tabTextActive]}>
                {tab}
              </Typography>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.blueprintCard}>
        <PlanInlineImage
          imageSource={accountGardenBlueprint}
          imageScale={1}
          widthRatio={1}
        />
      </View>

      <View style={styles.legendCard}>
        <Typography size={14} color={ONBOARDING_UI.green} style={styles.legendTitle}>
          Legend
        </Typography>
        <View style={styles.legendRow}>
          {LEGEND_ROW_ONE.map(item => (
            <LegendItem key={item.label} type={item.type} label={item.label} />
          ))}
        </View>
        <View style={styles.legendRowSecondary}>
          {LEGEND_ROW_TWO.map(item => (
            <LegendItem key={item.label} type={item.type} label={item.label} />
          ))}
        </View>
      </View>
    </PlanFlowLayout>
  );
};

const styles = StyleSheet.create({
  tabRow: {
    flexDirection: 'row',
    gap: Sizer.hSize(6),
  },
  tab: {
    flex: 1,
    paddingHorizontal: Sizer.hSize(4),
    paddingVertical: Sizer.vSize(9),
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.primary,
    backgroundColor: ONBOARDING_UI.cardBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: ONBOARDING_UI.primary,
    borderColor: ONBOARDING_UI.primary,
  },
  tabText: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
    lineHeight: Sizer.fS(14),
  },
  tabTextActive: {
    color: ONBOARDING_UI.white,
  },
  blueprintCard: {
    width: '100%',
    marginTop: Sizer.vSize(14),
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: ONBOARDING_UI.cardBg,
    overflow: 'hidden',
  },
  legendCard: {
    marginTop: Sizer.vSize(14),
    paddingHorizontal: Sizer.hSize(14),
    paddingVertical: Sizer.vSize(14),
    borderRadius: ONBOARDING_UI.radiusMd,
    backgroundColor: G.sageBanner,
    gap: Sizer.vSize(10),
  },
  legendTitle: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Sizer.hSize(6),
  },
  legendRowSecondary: {
    flexDirection: 'row',
    gap: Sizer.hSize(28),
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(6),
    flexShrink: 1,
  },
  legendLabel: {
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(16),
    flexShrink: 1,
  },
});

export default PlanBlueprintRevealScreen;
