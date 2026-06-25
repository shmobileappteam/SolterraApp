import React, { useState } from 'react';
import { View } from 'react-native';
import { ONBOARDING_UI } from '../OnBoard/onboardingUi';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import {
  PLAN_BOTTOM_IMAGE,
  PLAN_QUESTION_STEPS,
  PlanBottomImage,
  PlanCheckboxRow,
  PlanChoiceDivider,
  PlanChoiceList,
} from './_partials/planUi';
import { accountSpaceType } from '../../assets/images';

const SPACE_OPTIONS = [
  { id: 'backyard', icon: 'tree', label: 'Backyard' },
  { id: 'frontyard', icon: 'house', label: 'Front yard' },
  { id: 'balcony', icon: 'balcony', label: 'Balcony' },
  { id: 'patio', icon: 'patio', label: 'Patio / Deck' },
  { id: 'community', icon: 'communityGarden', label: 'Community garden' },
  { id: 'indoor', icon: 'indoor', label: 'Indoor' },
  { id: 'other', icon: 'space', label: 'Other' },
];

const PlanSpaceTypeScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(() => new Set(['backyard']));

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
      stepIndex={2}
      stepCount={PLAN_QUESTION_STEPS}
      title="What type of space are you planning?"
      subtitle="Choose all that apply."
      subtitleColor={ONBOARDING_UI.green}
      onNext={() => navigation.navigate('PlanTimeCommitmentScreen')}>
      <PlanChoiceList>
        {SPACE_OPTIONS.map((option, index) => (
          <View key={option.id}>
            <PlanCheckboxRow
              icon={option.icon}
              label={option.label}
              checked={selected.has(option.id)}
              onToggle={() => toggle(option.id)}
            />
            {index < SPACE_OPTIONS.length - 1 ? <PlanChoiceDivider /> : null}
          </View>
        ))}
      </PlanChoiceList>
      <PlanBottomImage imageSource={accountSpaceType} imageScale={1.05} imageBox={PLAN_BOTTOM_IMAGE} />
    </PlanFlowLayout>
  );
};

export default PlanSpaceTypeScreen;
