import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  plantsFlowers01,
  plantsFlowers02,
  plantsFlowers03,
  plantsFlowers04,
  plantsHerbs01,
  plantsHerbs02,
  plantsHerbs03,
  plantsHerbs04,
  plantsVegetables01,
  plantsVegetables02,
  plantsVegetables03,
  plantsVegetables04,
} from '../../assets/images';
import Sizer from '../../helpers/Sizer';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import { PLAN_ANALYSIS_STEPS, PlantCategoryCard } from './_partials/planUi';

const CATEGORIES = [
  {
    title: 'Vegetables (12)',
    subtitle: 'Great for your climate',
    imageSources: [
      plantsVegetables01,
      plantsVegetables02,
      plantsVegetables03,
      plantsVegetables04,
    ],
  },
  {
    title: 'Herbs (6)',
    subtitle: 'Easy to grow',
    imageSources: [plantsHerbs01, plantsHerbs02, plantsHerbs03, plantsHerbs04],
  },
  {
    title: 'Flowers (10)',
    subtitle: 'Beautiful & pollinator-friendly',
    imageSources: [plantsFlowers01, plantsFlowers02, plantsFlowers03, plantsFlowers04],
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
            imageSources={category.imageSources}
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
