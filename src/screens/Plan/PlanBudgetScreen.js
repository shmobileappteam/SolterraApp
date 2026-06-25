import React, { useState } from 'react';
import { View } from 'react-native';
import { accountBudget } from '../../assets/images';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import {
  PLAN_BOTTOM_IMAGE,
  PLAN_QUESTION_STEPS,
  PlanBottomImage,
  PlanChoiceDivider,
  PlanChoiceList,
  PlanRadioRow,
} from './_partials/planUi';

const BUDGET_IMAGE_BOX = {
  ...PLAN_BOTTOM_IMAGE,
  minHeight: 140,
  maxHeight: 170,
};

const BUDGET_OPTIONS = [
  { id: 'under100', prefix: '$', label: 'Under $100' },
  { id: '100to300', prefix: '$$', label: '$100 – $300' },
  { id: '300to600', prefix: '$$$', label: '$300 – $600' },
  { id: '600plus', prefix: '$$$$', label: '$600+' },
  { id: 'notSure', prefix: '—', label: 'Not sure yet' },
];

const PlanBudgetScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('100to300');

  return (
    <PlanFlowLayout
      stepIndex={4}
      stepCount={PLAN_QUESTION_STEPS}
      title="What's your budget for this garden?"
      subtitle="This helps us recommend the best options for you."
      onNext={() => navigation.navigate('PlanPlantInterestsScreen')}>
      <PlanChoiceList>
        {BUDGET_OPTIONS.map((option, index) => (
          <View key={option.id}>
            <PlanRadioRow
              prefix={option.prefix}
              label={option.label}
              selected={selected === option.id}
              onPress={() => setSelected(option.id)}
            />
            {index < BUDGET_OPTIONS.length - 1 ? <PlanChoiceDivider /> : null}
          </View>
        ))}
      </PlanChoiceList>
      <PlanBottomImage
        imageSource={accountBudget}
        imageScale={1.05}
        imageBox={BUDGET_IMAGE_BOX}
      />
    </PlanFlowLayout>
  );
};

export default PlanBudgetScreen;
