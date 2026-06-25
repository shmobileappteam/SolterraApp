import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  accountEdible,
  accountFlowers,
  accountHerbs,
  accountLowMaintenance,
  accountOtherPlants,
  accountPollinators,
  accountVegetables,
} from '../../assets/images';
import Sizer from '../../helpers/Sizer';
import { ONBOARDING_UI } from '../OnBoard/onboardingUi';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import {
  PLAN_BOTTOM_IMAGE,
  PLAN_QUESTION_STEPS,
  PlanBottomImage,
  PlanCheckboxRow,
  PlanChoiceList,
  PlanInterestCard,
} from './_partials/planUi';

const INTERESTS = [
  { id: 'flowers', label: 'Flowers', imageSource: accountFlowers },
  { id: 'vegetables', label: 'Vegetables', imageSource: accountVegetables },
  { id: 'herbs', label: 'Herbs', imageSource: accountHerbs },
  { id: 'pollinators', label: 'Pollinators', imageSource: accountPollinators },
  { id: 'edibles', label: 'Edibles', imageSource: accountEdible },
  { id: 'lowMaintenance', label: 'Low Maintenance', imageSource: accountLowMaintenance },
];

const INTERESTS_IMAGE_BOX = {
  ...PLAN_BOTTOM_IMAGE,
  minHeight: 120,
  maxHeight: 150,
};

const PlanPlantInterestsScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(() => new Set(['flowers', 'vegetables', 'herbs']));

  const toggle = id => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <PlanFlowLayout
      stepIndex={5}
      stepCount={PLAN_QUESTION_STEPS}
      title="What plants are you most interested in?"
      subtitle="Choose all that you love."
      subtitleColor={ONBOARDING_UI.green}
      onNext={() => navigation.navigate('PlanGardenPhotoScreen')}>
      <View style={styles.grid}>
        {INTERESTS.map(item => (
          <PlanInterestCard
            key={item.id}
            imageSource={item.imageSource}
            label={item.label}
            checked={selected.has(item.id)}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </View>

      <View style={styles.otherCard}>
        <PlanChoiceList>
          <PlanCheckboxRow
            label="Other (tell us in the next step)"
            checked={selected.has('other')}
            onToggle={() => toggle('other')}
          />
        </PlanChoiceList>
      </View>

      <PlanBottomImage
        imageSource={accountOtherPlants}
        imageScale={1.05}
        imageBox={INTERESTS_IMAGE_BOX}
      />
    </PlanFlowLayout>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: Sizer.vSize(10),
  },
  otherCard: {
    marginTop: Sizer.vSize(12),
  },
});

export default PlanPlantInterestsScreen;
