import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components';
import Typography from '../../atomComponents/Typography';
import { FONTS } from '../../globalStyle/Theme';
import { G } from '../_partials/gardenUi';
import Sizer from '../../helpers/Sizer';
import { ONBOARDING_IMAGE, ONBOARDING_UI } from '../OnBoard/onboardingUi';
import SetupFlowLayout from './_partials/SetupFlowLayout';

const PLAN_IMAGE_BOX = {
  ...ONBOARDING_IMAGE.middle,
  minHeight: 170,
  maxHeight: 190,
};

const PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started and building your garden.',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$4.99 / month',
    description: 'Advanced tools, smart recommendations, and more.',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$9.99 / month',
    description: 'Everything in Pro, plus custom plans and priority support.',
  },
];

function PlanRadio({ selected }) {
  return (
    <View style={[styles.radioOuter, selected && styles.radioOuterOn]}>
      {selected ? <View style={styles.radioInner} /> : null}
    </View>
  );
}

function PlanOption({ plan, selected, onSelect }) {
  return (
    <TouchableOpacity
      style={[styles.planCard, selected && styles.planCardSelected]}
      activeOpacity={0.88}
      onPress={onSelect}>
      <PlanRadio selected={selected} />
      <View style={styles.planCopy}>
        <View style={styles.planTitleRow}>
          <Typography size={15} color={ONBOARDING_UI.green} style={styles.planName}>
            {plan.name}
          </Typography>
          <Typography size={14} color={ONBOARDING_UI.green} style={styles.planPrice}>
            {plan.price}
          </Typography>
        </View>
        <Typography size={12} color={ONBOARDING_UI.green} style={styles.planDescription}>
          {plan.description}
        </Typography>
      </View>
    </TouchableOpacity>
  );
}

const ChoosePlanScreen = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState('free');

  return (
    <SetupFlowLayout
      centered
      title="Choose the plan that grows with you."
      subtitle="All plans include core features to help your garden thrive."
      subtitleColor={ONBOARDING_UI.green}
      imageKey="setup-choose-plan"
      imageBox={PLAN_IMAGE_BOX}
      imageResizeMode="contain"
      footer={
        <>
          <Button
            label="Continue"
            onPress={() => navigation.navigate('InviteHouseholdScreen')}
            height={52}
            btnStyle={styles.primaryBtn}
            textStyle={styles.primaryBtnText}
          />
          <Typography size={11} color={ONBOARDING_UI.green} textAlign="center" style={styles.footerNote}>
            You can change your plan anytime.
          </Typography>
        </>
      }>
      <View style={styles.planList}>
        {PLANS.map(plan => (
          <PlanOption
            key={plan.id}
            plan={plan}
            selected={selectedPlan === plan.id}
            onSelect={() => setSelectedPlan(plan.id)}
          />
        ))}
      </View>
    </SetupFlowLayout>
  );
};

const styles = StyleSheet.create({
  planList: {
    gap: Sizer.vSize(10),
    paddingBottom: Sizer.vSize(4),
  },
  planCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(14),
    paddingHorizontal: Sizer.hSize(16),
    paddingVertical: Sizer.vSize(15),
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: ONBOARDING_UI.cream,
  },
  planCardSelected: {
    borderColor: ONBOARDING_UI.primary,
    borderWidth: 1.5,
    backgroundColor: ONBOARDING_UI.cream,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: G.divider,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  radioOuterOn: {
    borderColor: ONBOARDING_UI.primary,
    backgroundColor: ONBOARDING_UI.primary,
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: G.accent,
  },
  planCopy: {
    flex: 1,
    minWidth: 0,
    gap: Sizer.vSize(4),
  },
  planTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Sizer.hSize(8),
  },
  planName: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
  },
  planPrice: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
    flexShrink: 0,
  },
  planDescription: {
    fontFamily: FONTS.body,
    fontWeight: '400',
    lineHeight: Sizer.fS(18),
    opacity: 0.82,
  },
  primaryBtn: {
    borderRadius: ONBOARDING_UI.radiusMd,
    backgroundColor: ONBOARDING_UI.primary,
  },
  primaryBtnText: {
    color: ONBOARDING_UI.white,
    fontWeight: '600',
    fontSize: Sizer.fS(16),
  },
  footerNote: {
    lineHeight: Sizer.fS(16),
    opacity: 0.85,
  },
});

export default ChoosePlanScreen;
