import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components';
import { OnboardingFeatureIcon } from '../../components/solterra/OnboardingFeatureIcons';
import Typography from '../../atomComponents/Typography';
import { FONTS } from '../../globalStyle/Theme';
import { G } from '../_partials/gardenUi';
import Sizer from '../../helpers/Sizer';
import { ONBOARDING_IMAGE, ONBOARDING_UI } from '../OnBoard/onboardingUi';
import SetupFlowLayout from './_partials/SetupFlowLayout';

const INVITE_IMAGE_BOX = {
  ...ONBOARDING_IMAGE.middle,
  minHeight: 170,
  maxHeight: 200,
};

const FIELD_HEIGHT = Sizer.hSize(44);

const InviteHouseholdScreen = ({ navigation }) => {
  const goNext = () => navigation.navigate('ConnectExperienceScreen');

  return (
    <SetupFlowLayout
      centered
      title="Invite your household to garden together."
      subtitle="Add people you live with so you can plan and grow together."
      subtitleColor={ONBOARDING_UI.text}
      imageKey="setup-invite-household"
      imageBox={INVITE_IMAGE_BOX}
      imageResizeMode="contain"
      footer={
        <>
          <Button
            label="Send Invites"
            onPress={goNext}
            height={52}
            btnStyle={styles.primaryBtn}
            textStyle={styles.primaryBtnText}
          />
          <TouchableOpacity onPress={goNext} activeOpacity={0.7} accessibilityRole="button">
            <Typography size={13} color={ONBOARDING_UI.primary} textAlign="center" style={styles.footerLink}>
              Skip for now
            </Typography>
          </TouchableOpacity>
        </>
      }>
      <View style={styles.formBlock}>
        <TextInput
          placeholder="Email address"
          placeholderTextColor={ONBOARDING_UI.text}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.field}
        />

        <TouchableOpacity style={styles.addBtn} activeOpacity={0.7} accessibilityRole="button">
          <Typography size={20} color={ONBOARDING_UI.primary} style={styles.addIcon}>
            +
          </Typography>
          <Typography size={14} color={ONBOARDING_UI.green} style={styles.addLabel}>
            Add another person
          </Typography>
        </TouchableOpacity>
      </View>

      <View style={styles.callout}>
        <View style={styles.calloutIcon}>
          <OnboardingFeatureIcon name="group" />
        </View>
        <Typography size={12} color={ONBOARDING_UI.green} style={styles.calloutText}>
          You can invite members anytime from your account settings.
        </Typography>
      </View>
    </SetupFlowLayout>
  );
};

const styles = StyleSheet.create({
  formBlock: {
    gap: Sizer.vSize(10),
  },
  field: {
    height: FIELD_HEIGHT,
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: ONBOARDING_UI.cream,
    paddingHorizontal: Sizer.hSize(14),
    fontSize: Sizer.fS(14),
    fontFamily: FONTS.body,
    color: ONBOARDING_UI.green,
  },
  addBtn: {
    height: FIELD_HEIGHT,
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: ONBOARDING_UI.cream,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Sizer.hSize(8),
  },
  addIcon: {
    fontWeight: '600',
    lineHeight: Sizer.fS(22),
    marginTop: -1,
  },
  addLabel: {
    fontFamily: FONTS.body,
    fontWeight: '500',
  },
  callout: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(12),
    marginTop: Sizer.vSize(12),
    paddingHorizontal: Sizer.hSize(14),
    paddingVertical: Sizer.vSize(14),
    borderRadius: ONBOARDING_UI.radiusMd,
    backgroundColor: G.sageLight,
  },
  calloutIcon: {
    width: 28,
    alignItems: 'center',
    flexShrink: 0,
  },
  calloutText: {
    flex: 1,
    lineHeight: Sizer.fS(18),
    fontFamily: FONTS.body,
    fontWeight: '400',
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
  footerLink: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
});

export default InviteHouseholdScreen;
