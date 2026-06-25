import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components';
import OnboardingPagination from '../../components/solterra/OnboardingPagination';
import Typography from '../../atomComponents/Typography';
import Sizer from '../../helpers/Sizer';
import { ONBOARDING_UI } from '../OnBoard/onboardingUi';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import {
  PLAN_FINAL_STEPS,
  PlanBanner,
  PlanSummaryRow,
  planUiStyles,
} from './_partials/planUi';

const SUMMARY_ITEMS = [
  { icon: 'sprout', label: 'Garden style', value: 'Edible Garden' },
  { icon: 'budget', label: 'Budget range', value: '$100 – $250' },
  { icon: 'leaf', label: 'Plants', value: '28 plants selected' },
  { icon: 'projects', label: 'Projects', value: '2 projects planned' },
  { icon: 'timeClock', label: 'Time commitment', value: '2–4 hours per week' },
  { icon: 'beginner', label: 'Experience level', value: 'Beginner' },
];

const PlanReviewSummaryScreen = ({ navigation }) => {
  const goNext = () => navigation.navigate('PlanBuildingScreen');

  return (
    <PlanFlowLayout
      stepIndex={3}
      stepCount={PLAN_FINAL_STEPS}
      title="Review your plan summary"
      subtitle="Here's what we're planning for your garden."
      subtitleColor={ONBOARDING_UI.green}
      hideButton
      hidePagination
      footer={
        <>
          <PlanBanner text="You'll be in your garden soon!" />
          <OnboardingPagination count={PLAN_FINAL_STEPS} index={3} />
          <View style={planUiStyles.dualFooter}>
            <TouchableOpacity style={[planUiStyles.outlineBtn, styles.editBtn]} activeOpacity={0.8}>
              <Typography
                size={14}
                color={ONBOARDING_UI.primary}
                numberOfLines={1}
                style={planUiStyles.outlineBtnText}>
                Edit Selections
              </Typography>
            </TouchableOpacity>
            <Button
              label="Confirm & Build Plan"
              onPress={goNext}
              height={52}
              btnStyle={[planUiStyles.primaryBtn, styles.confirmBtn]}
              textStyle={[planUiStyles.primaryBtnText, styles.confirmBtnText]}
            />
          </View>
        </>
      }>
      <View style={[planUiStyles.listCard, { backgroundColor: ONBOARDING_UI.cardBg }]}>
        {SUMMARY_ITEMS.map((item, index) => (
          <View key={item.label}>
            <PlanSummaryRow
              icon={item.icon}
              label={item.label}
              value={item.value}
              onEdit={() => {}}
            />
            {index < SUMMARY_ITEMS.length - 1 ? <View style={planUiStyles.listDivider} /> : null}
          </View>
        ))}
      </View>
    </PlanFlowLayout>
  );
};

const styles = StyleSheet.create({
  editBtn: {
    flex: 0.9,
    paddingHorizontal: Sizer.hSize(8),
  },
  confirmBtn: {
    flex: 1.1,
    minWidth: 0,
    paddingHorizontal: Sizer.hSize(8),
  },
  confirmBtnText: {
    fontSize: Sizer.fS(13),
  },
});

export default PlanReviewSummaryScreen;
