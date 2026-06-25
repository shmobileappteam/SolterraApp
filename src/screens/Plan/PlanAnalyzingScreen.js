import React, { useEffect } from 'react';
import { View } from 'react-native';
import { accountAnalyzeSpace } from '../../assets/images';
import OnboardingPagination from '../../components/solterra/OnboardingPagination';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import {
  PLAN_ANALYSIS_STEPS,
  PLAN_BOTTOM_IMAGE,
  PlanBottomImage,
  PlanStatusRow,
  planUiStyles,
} from './_partials/planUi';

const ANALYZE_IMAGE_BOX = {
  ...PLAN_BOTTOM_IMAGE,
  minHeight: 140,
  maxHeight: 170,
};

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
      <PlanBottomImage
        imageSource={accountAnalyzeSpace}
        imageScale={1.05}
        imageBox={ANALYZE_IMAGE_BOX}
      />
    </PlanFlowLayout>
  );
};

export default PlanAnalyzingScreen;
