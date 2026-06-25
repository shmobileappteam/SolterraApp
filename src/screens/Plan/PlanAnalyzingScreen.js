import React, { useEffect } from 'react';
import { View } from 'react-native';
import OnboardingPagination from '../../components/solterra/OnboardingPagination';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import {
  PLAN_ANALYSIS_STEPS,
  PLAN_BOTTOM_IMAGE,
  PlanBottomImage,
  PlanStatusRow,
  planUiStyles,
} from './_partials/planUi';

const STATUS_ITEMS = [
  { icon: 'fence', label: 'Checking boundaries' },
  { icon: 'ruler', label: 'Measuring dimensions' },
  { icon: 'climate', label: 'Analyzing sunlight' },
  { icon: 'soil', label: 'Understanding soil & drainage' },
  { icon: 'zone', label: 'Identifying growing zones' },
  { icon: 'harvest', label: 'Building your plan', status: 'loading' },
];

const PlanAnalyzingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('PlanFindingsReviewScreen');
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <PlanFlowLayout
      stepIndex={5}
      stepCount={PLAN_ANALYSIS_STEPS}
      headerIcon="sprout"
      title="Analyzing your space..."
      subtitle="This may take about 30 seconds."
      hideButton
      hidePagination
      footer={<OnboardingPagination count={PLAN_ANALYSIS_STEPS} index={5} />}>
      <View style={planUiStyles.listCard}>
        {STATUS_ITEMS.map((item, index) => (
          <View key={item.label}>
            <PlanStatusRow icon={item.icon} label={item.label} status={item.status ?? 'done'} />
            {index < STATUS_ITEMS.length - 1 ? <View style={planUiStyles.listDivider} /> : null}
          </View>
        ))}
      </View>
      <PlanBottomImage imageKey="plan-analyzing-garden" imageBox={PLAN_BOTTOM_IMAGE} />
    </PlanFlowLayout>
  );
};

export default PlanAnalyzingScreen;
