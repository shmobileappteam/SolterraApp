import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components';
import Typography from '../../atomComponents/Typography';
import { FONTS } from '../../globalStyle/Theme';
import { G } from '../_partials/gardenUi';
import Sizer from '../../helpers/Sizer';
import { ONBOARDING_IMAGE, ONBOARDING_UI } from '../OnBoard/onboardingUi';
import SetupFlowLayout from './_partials/SetupFlowLayout';
import { accountPlan } from '../../assets/images';

const PLAN_IMAGE_BOX = {
  ...ONBOARDING_IMAGE.middle,
  minHeight: 180,
  maxHeight: 220,
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
      style={styles.planCard}
      activeOpacity={0.88}
      onPress={onSelect}>
      <View style={styles.radioWrap}>
        <PlanRadio selected={selected} />
      </View>
      <View style={styles.planCopy}>
        <View style={styles.planTitleRow}>
          <Typography size={15} color={ONBOARDING_UI.green} style={styles.planName}>
            {plan.name}
          </Typography>
          <Typography size={14} color={ONBOARDING_UI.green} style={styles.planPrice}>
            {plan.price}
          </Typography>
        </View>
        <Typography size={13} color={ONBOARDING_UI.green} style={styles.planDescription}>
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
      imageSource={accountPlan}
      imageScale={1.08}
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
          <Typography size={12} color={ONBOARDING_UI.green} textAlign="center" style={styles.footerNote}>
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
    gap: Sizer.vSize(12),
    marginTop: Sizer.vSize(4),
    paddingBottom: Sizer.vSize(4),
  },
  planCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Sizer.hSize(12),
    paddingHorizontal: Sizer.hSize(16),
    paddingVertical: Sizer.vSize(16),
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: G.cardTint,
  },
  radioWrap: {
    paddingTop: Sizer.vSize(1),
    flexShrink: 0,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: ONBOARDING_UI.green,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  radioOuterOn: {
    borderColor: ONBOARDING_UI.green,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: ONBOARDING_UI.green,
  },
  planCopy: {
    flex: 1,
    minWidth: 0,
    gap: Sizer.vSize(6),
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
    lineHeight: Sizer.fS(19),
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
    fontFamily: FONTS.body,
    lineHeight: Sizer.fS(18),
    marginTop: Sizer.vSize(14),
  },
});

export default ChoosePlanScreen;
