import React, { useEffect } from 'react';
import { View } from 'react-native';
import { accountBuildingPlan } from '../../assets/images';
import OnboardingPagination from '../../components/solterra/OnboardingPagination';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import {
  PLAN_BOTTOM_IMAGE,
  PLAN_FINAL_STEPS,
  PlanBanner,
  PlanBottomImage,
  PlanStatusRow,
  planUiStyles,
} from './_partials/planUi';

const BUILDING_IMAGE_BOX = {
  ...PLAN_BOTTOM_IMAGE,
  minHeight: 140,
  maxHeight: 170,
};

const BUILD_STEPS = [
  { icon: 'leaf', label: 'Matching plants to your space' },
  { icon: 'ruler', label: 'Designing your layout' },
  { icon: 'sprout', label: 'Creating your plant list' },
  { icon: 'projects', label: 'Building project plan', status: 'loading' },
  { icon: 'calendar', label: 'Creating care timeline', status: 'loading' },
];

const PlanBuildingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('PlanBlueprintRevealScreen');
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <PlanFlowLayout
      stepIndex={3}
      stepCount={PLAN_FINAL_STEPS}
      title="We're building your plan"
      subtitle="Almost there! We're putting everything together."
      hideButton
      hidePagination
      footer={
        <>
          <PlanBanner icon="trowel" text="You'll be in your garden soon!" />
          <OnboardingPagination count={PLAN_FINAL_STEPS} index={3} />
        </>
      }>
      <PlanBottomImage
        imageSource={accountBuildingPlan}
        imageScale={1.05}
        imageBox={BUILDING_IMAGE_BOX}
      />
      <View style={[planUiStyles.listCard, { marginTop: 16 }]}>
        {BUILD_STEPS.map((item, index) => (
          <View key={item.label}>
            <PlanStatusRow icon={item.icon} label={item.label} status={item.status ?? 'done'} />
            {index < BUILD_STEPS.length - 1 ? <View style={planUiStyles.listDivider} /> : null}
          </View>
        ))}
      </View>
    </PlanFlowLayout>
  );
};

export default PlanBuildingScreen;
