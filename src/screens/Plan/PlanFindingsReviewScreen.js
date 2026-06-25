import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button } from '../../components';
import { accountFound } from '../../assets/images';
import OnboardingPagination from '../../components/solterra/OnboardingPagination';
import Typography from '../../atomComponents/Typography';
import { ONBOARDING_UI } from '../OnBoard/onboardingUi';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import {
  PLAN_ANALYSIS_STEPS,
  PLAN_BOTTOM_IMAGE,
  PlanBottomImage,
  PlanFindingRow,
  planUiStyles,
} from './_partials/planUi';

const FINDINGS_IMAGE_BOX = {
  ...PLAN_BOTTOM_IMAGE,
  minHeight: 140,
  maxHeight: 170,
};

const FINDINGS = [
  { icon: 'leaf', label: 'Zone', value: '9b' },
  { icon: 'climate', label: 'Sun exposure', value: 'Mostly full sun' },
  { icon: 'ruler', label: 'Property size', value: '2,000 sq ft' },
  { icon: 'harvest', label: 'Existing features', value: 'Raised beds, patio' },
  { icon: 'droplet', label: 'Irrigation opportunity', value: 'Medium' },
  { icon: 'soil', label: 'Soil type', value: 'Loamy' },
];

const PlanFindingsReviewScreen = ({ navigation }) => {
  const goNext = () => navigation.navigate('PlanRecommendedStyleScreen');

  return (
    <PlanFlowLayout
      stepIndex={4}
      stepCount={PLAN_ANALYSIS_STEPS}
      headerIcon="magnify"
      title="Here's what we found."
      subtitle="Review and confirm your space details."
      hideButton
      hidePagination
      footer={
        <>
          <OnboardingPagination count={PLAN_ANALYSIS_STEPS} index={4} />
          <View style={planUiStyles.dualFooter}>
            <TouchableOpacity style={planUiStyles.outlineBtn} activeOpacity={0.8}>
              <Typography size={15} color={ONBOARDING_UI.primary} style={planUiStyles.outlineBtnText}>
                Edit Findings
              </Typography>
            </TouchableOpacity>
            <Button
              label="Looks Good"
              onPress={goNext}
              height={52}
              btnStyle={[planUiStyles.primaryBtn, { flex: 1 }]}
              textStyle={planUiStyles.primaryBtnText}
            />
          </View>
        </>
      }>
      <View style={planUiStyles.listCard}>
        {FINDINGS.map((item, index) => (
          <View key={item.label}>
            <PlanFindingRow
              icon={item.icon}
              label={item.label}
              value={item.value}
              onEdit={() => {}}
            />
            {index < FINDINGS.length - 1 ? <View style={planUiStyles.listDivider} /> : null}
          </View>
        ))}
      </View>
      <PlanBottomImage
        imageSource={accountFound}
        imageScale={1.05}
        imageBox={FINDINGS_IMAGE_BOX}
      />
    </PlanFlowLayout>
  );
};

export default PlanFindingsReviewScreen;
