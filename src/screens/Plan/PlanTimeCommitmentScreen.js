import React, { useState } from 'react';
import { View } from 'react-native';
import { accountTime } from '../../assets/images';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import {
  PLAN_BOTTOM_IMAGE,
  PLAN_QUESTION_STEPS,
  PlanBottomImage,
  PlanChoiceDivider,
  PlanChoiceList,
  PlanRadioRow,
} from './_partials/planUi';

const TIME_IMAGE_BOX = {
  ...PLAN_BOTTOM_IMAGE,
  minHeight: 140,
  maxHeight: 170,
};

const TIME_OPTIONS = [
  { id: 'under1', label: 'Less than 1 hour per week' },
  { id: '1to3', label: '1–3 hours per week' },
  { id: '3to5', label: '3–5 hours per week' },
  { id: '5plus', label: '5+ hours per week' },
];

const PlanTimeCommitmentScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('1to3');

  return (
    <PlanFlowLayout
      stepIndex={3}
      stepCount={PLAN_QUESTION_STEPS}
      title="How much time can you spend on your garden?"
      subtitle="We'll build a plan that fits your lifestyle."
      onNext={() => navigation.navigate('PlanBudgetScreen')}>
      <PlanChoiceList>
        {TIME_OPTIONS.map((option, index) => (
          <View key={option.id}>
            <PlanRadioRow
              icon="clockSlice"
              label={option.label}
              selected={selected === option.id}
              onPress={() => setSelected(option.id)}
            />
            {index < TIME_OPTIONS.length - 1 ? <PlanChoiceDivider /> : null}
          </View>
        ))}
      </PlanChoiceList>
      <PlanBottomImage
        imageSource={accountTime}
        imageScale={1.05}
        imageBox={TIME_IMAGE_BOX}
      />
    </PlanFlowLayout>
  );
};

export default PlanTimeCommitmentScreen;
