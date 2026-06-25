import React from 'react';
import { StyleSheet, View } from 'react-native';
import Sizer from '../../helpers/Sizer';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import { PLAN_ANALYSIS_STEPS, PlantCategoryCard } from './_partials/planUi';

const CATEGORIES = [
  {
    title: 'Vegetables (12)',
    subtitle: 'Great for your climate',
    imageKeys: ['plant-tomato', 'plant-lettuce', 'plant-bok-choy', 'plant-pepper'],
  },
  {
    title: 'Herbs (6)',
    subtitle: 'Easy to grow',
    imageKeys: ['plant-basil', 'plant-rosemary', 'plant-parsley', 'plant-chives'],
  },
  {
    title: 'Flowers (10)',
    subtitle: 'Beautiful & pollinator-friendly',
    imageKeys: ['plant-coneflower', 'plant-lavender', 'plant-susan', 'plant-dianthus'],
  },
];

const PlanPlantsChosenScreen = ({ navigation }) => {
  return (
    <PlanFlowLayout
      stepIndex={4}
      stepCount={PLAN_ANALYSIS_STEPS}
      headerIcon="sprout"
      title="Plants chosen just for you"
      subtitle="We've selected the best plants for your space and goals."
      footerLabel="Looks Great!"
      onNext={() => navigation.navigate('PlanReviewSummaryScreen')}>
      <View style={styles.list}>
        {CATEGORIES.map(category => (
          <PlantCategoryCard
            key={category.title}
            title={category.title}
            subtitle={category.subtitle}
            imageKeys={category.imageKeys}
          />
        ))}
      </View>
    </PlanFlowLayout>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: Sizer.vSize(10),
  },
});

export default PlanPlantsChosenScreen;
