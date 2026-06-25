import React, { useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import { OnboardingFeatureIcon } from '../../components/solterra/OnboardingFeatureIcons';
import Typography from '../../atomComponents/Typography';
import { FONTS } from '../../globalStyle/Theme';
import { G } from '../_partials/gardenUi';
import Sizer from '../../helpers/Sizer';
import { ONBOARDING_UI } from '../OnBoard/onboardingUi';
import PlanFlowLayout from './_partials/PlanFlowLayout';

const EXPERIENCE_LEVELS = [
  {
    id: 'beginner',
    icon: 'beginner',
    title: 'Beginner',
    description: 'New to gardening',
  },
  {
    id: 'some',
    icon: 'experience',
    title: 'Some experience',
    description: 'I know the basics',
  },
  {
    id: 'experienced',
    icon: 'expert',
    title: 'Experienced',
    description: 'I garden regularly',
  },
];

const GOALS = [
  { id: 'food', icon: 'apple', label: 'Grow my own food' },
  { id: 'beauty', icon: 'flower', label: 'Have a beautiful space' },
  { id: 'pollinators', icon: 'bee', label: 'Support pollinators' },
  { id: 'save', icon: 'budget', label: 'Save money' },
  { id: 'learn', icon: 'trowel', label: 'Learn gardening' },
];

function SelectedCheck() {
  return (
    <View style={styles.selectedCheck}>
      <Typography size={12} color={ONBOARDING_UI.white} style={styles.selectedCheckMark}>
        ✓
      </Typography>
    </View>
  );
}

function ExperienceCard({ option, selected, onSelect }) {
  return (
    <TouchableOpacity
      style={[styles.experienceCard, selected && styles.experienceCardSelected]}
      activeOpacity={0.88}
      onPress={onSelect}>
      <View style={[styles.experienceIcon, selected && styles.experienceIconSelected]}>
        <OnboardingFeatureIcon name={option.icon} />
      </View>
      <View style={styles.experienceCopy}>
        <Typography size={15} color={ONBOARDING_UI.green} style={styles.experienceTitle}>
          {option.title}
        </Typography>
        <Typography size={12} color={ONBOARDING_UI.text} style={styles.experienceDescription}>
          {option.description}
        </Typography>
      </View>
      {selected ? <SelectedCheck /> : null}
    </TouchableOpacity>
  );
}

function GoalCheckbox({ checked }) {
  return (
    <View style={[styles.goalCheck, checked && styles.goalCheckOn]}>
      {checked ? (
        <Typography size={11} color={ONBOARDING_UI.white} style={styles.goalCheckMark}>
          ✓
        </Typography>
      ) : null}
    </View>
  );
}

function GoalRow({ goal, checked, onToggle }) {
  return (
    <Pressable style={styles.goalRow} onPress={onToggle}>
      <View style={styles.goalIcon}>
        <OnboardingFeatureIcon name={goal.icon} />
      </View>
      <Typography size={14} color={ONBOARDING_UI.green} style={styles.goalLabel}>
        {goal.label}
      </Typography>
      <GoalCheckbox checked={checked} />
    </Pressable>
  );
}

const PlanAboutYouScreen = ({ navigation }) => {
  const [experience, setExperience] = useState('beginner');
  const [goals, setGoals] = useState(() => new Set(['food', 'beauty', 'learn']));

  const toggleGoal = id => {
    setGoals(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <PlanFlowLayout
      stepIndex={2}
      title="Tell us a bit about you."
      subtitle="This helps us personalize your experience and recommendations."
      onNext={() => navigation.navigate('PlanAnalyzingScreen')}>
      <View style={styles.section}>
        <Typography size={15} color={ONBOARDING_UI.green} style={styles.sectionTitle}>
          What's your experience level?
        </Typography>
        <View style={styles.experienceList}>
          {EXPERIENCE_LEVELS.map(option => (
            <ExperienceCard
              key={option.id}
              option={option}
              selected={experience === option.id}
              onSelect={() => setExperience(option.id)}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Typography size={15} color={ONBOARDING_UI.green} style={styles.sectionTitle}>
          What are your goals? (Select all that apply)
        </Typography>
        <View style={styles.goalsCard}>
          {GOALS.map((goal, index) => (
            <View key={goal.id}>
              <GoalRow
                goal={goal}
                checked={goals.has(goal.id)}
                onToggle={() => toggleGoal(goal.id)}
              />
              {index < GOALS.length - 1 ? <View style={styles.goalDivider} /> : null}
            </View>
          ))}
        </View>
      </View>
    </PlanFlowLayout>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: Sizer.vSize(22),
  },
  sectionTitle: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
    marginBottom: Sizer.vSize(12),
    lineHeight: Sizer.fS(21),
  },
  experienceList: {
    gap: Sizer.vSize(10),
  },
  experienceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(12),
    paddingHorizontal: Sizer.hSize(14),
    paddingVertical: Sizer.vSize(14),
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: G.divider,
    backgroundColor: ONBOARDING_UI.cream,
  },
  experienceCardSelected: {
    borderColor: ONBOARDING_UI.primary,
    borderWidth: 1.5,
  },
  experienceIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: G.cardTint,
    flexShrink: 0,
  },
  experienceIconSelected: {
    backgroundColor: G.sageLight,
  },
  experienceCopy: {
    flex: 1,
    minWidth: 0,
    gap: Sizer.vSize(2),
  },
  experienceTitle: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
    lineHeight: Sizer.fS(20),
  },
  experienceDescription: {
    fontFamily: FONTS.body,
    fontWeight: '400',
    lineHeight: Sizer.fS(17),
  },
  selectedCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: ONBOARDING_UI.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  selectedCheckMark: {
    fontWeight: '700',
    lineHeight: Sizer.fS(14),
  },
  goalsCard: {
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: ONBOARDING_UI.cream,
    overflow: 'hidden',
  },
  goalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(12),
    paddingHorizontal: Sizer.hSize(14),
    paddingVertical: Sizer.vSize(14),
  },
  goalIcon: {
    width: 24,
    alignItems: 'center',
    flexShrink: 0,
  },
  goalLabel: {
    flex: 1,
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(20),
  },
  goalCheck: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: G.divider,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  goalCheckOn: {
    backgroundColor: ONBOARDING_UI.primary,
    borderColor: ONBOARDING_UI.primary,
  },
  goalCheckMark: {
    fontWeight: '700',
    lineHeight: Sizer.fS(13),
  },
  goalDivider: {
    height: 1,
    backgroundColor: G.divider,
    marginHorizontal: Sizer.hSize(14),
  },
});

export default PlanAboutYouScreen;
