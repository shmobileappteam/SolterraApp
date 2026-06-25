import React from 'react';
import { StyleSheet, View } from 'react-native';
import Sizer from '../../helpers/Sizer';
import { ONBOARDING_UI } from '../OnBoard/onboardingUi';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import { PLAN_BOTTOM_IMAGE, PlanBottomImage, PlanChecklistRow } from './_partials/planUi';

const CHECKLIST = [
  'Your garden is ready',
  "We've personalized your plan",
  "Let's get growing!",
];

const PlanDashboardHandoffScreen = ({ navigation }) => {
  return (
    <PlanFlowLayout
      hidePagination
      title="Welcome to your garden!"
      subtitle="You're all set and ready to grow."
      subtitleColor={ONBOARDING_UI.green}
      footerLabel="Go to My Garden"
      onNext={() => navigation.replace('MainTabs')}>
      <PlanBottomImage imageKey="plan-handoff-plants" imageBox={PLAN_BOTTOM_IMAGE} />
      <View style={styles.checklist}>
        {CHECKLIST.map(label => (
          <PlanChecklistRow key={label} label={label} />
        ))}
      </View>
    </PlanFlowLayout>
  );
};

const styles = StyleSheet.create({
  checklist: {
    marginTop: Sizer.vSize(24),
    gap: Sizer.vSize(14),
    alignSelf: 'center',
    width: '100%',
    maxWidth: Sizer.hSize(280),
  },
});

export default PlanDashboardHandoffScreen;
