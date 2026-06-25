import React from 'react';
import { StyleSheet, View } from 'react-native';
import Sizer from '../../helpers/Sizer';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import { PLAN_ANALYSIS_STEPS, StyleCard } from './_partials/planUi';

const STYLES = [
  {
    id: 'edible',
    imageKey: 'style-edible-garden',
    title: 'Edible Garden',
    matchLabel: 'Best fit for you',
    percent: 92,
  },
  {
    id: 'cottage',
    imageKey: 'style-cottage-garden',
    title: 'Cottage Garden',
    matchLabel: 'Great match',
    percent: 85,
  },
  {
    id: 'pollinator',
    imageKey: 'style-pollinator-garden',
    title: 'Pollinator Garden',
    matchLabel: 'Good match',
    percent: 78,
  },
  {
    id: 'lowMaintenance',
    imageKey: 'style-low-maintenance',
    title: 'Low-Maintenance Garden',
    matchLabel: 'Good match',
    percent: 70,
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
            imageKey={style.imageKey}
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
