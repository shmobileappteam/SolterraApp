import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  accountCottageGarden,
  accountEdibleGarden,
  accountLowManagementGarden,
  accountPollinatorGarden,
} from '../../assets/images';
import Sizer from '../../helpers/Sizer';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import { PLAN_ANALYSIS_STEPS, StyleCard } from './_partials/planUi';

const STYLES = [
  {
    id: 'edible',
    title: 'Edible Garden',
    matchLabel: 'Best fit for you',
    percent: 92,
    imageSource: accountEdibleGarden,
  },
  {
    id: 'cottage',
    title: 'Cottage Garden',
    matchLabel: 'Great match',
    percent: 85,
    imageSource: accountCottageGarden,
  },
  {
    id: 'pollinator',
    title: 'Pollinator Garden',
    matchLabel: 'Good match',
    percent: 78,
    imageSource: accountPollinatorGarden,
  },
  {
    id: 'lowMaintenance',
    title: 'Low-Maintenance Garden',
    matchLabel: 'Good match',
    percent: 70,
    imageSource: accountLowManagementGarden,
  },
];

const PlanRecommendedStyleScreen = ({ navigation }) => {
  return (
    <PlanFlowLayout
      stepIndex={4}
      stepCount={PLAN_ANALYSIS_STEPS}
      headerIcon="leaf"
      title="Recommended garden style for you"
      subtitle="Based on your space, goals and preferences."
      footerLabel="Choose This Style"
      onNext={() => navigation.navigate('PlanPlantsChosenScreen')}>
      <View style={styles.styleList}>
        {STYLES.map(style => (
          <StyleCard
            key={style.id}
            imageSource={style.imageSource}
            title={style.title}
            matchLabel={style.matchLabel}
            percent={style.percent}
          />
        ))}
      </View>
    </PlanFlowLayout>
  );
};

const styles = StyleSheet.create({
  styleList: {
    gap: Sizer.vSize(10),
  },
});

export default PlanRecommendedStyleScreen;
