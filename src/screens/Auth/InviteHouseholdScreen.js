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
import { accountInvite } from '../../assets/images';

const INVITE_IMAGE_BOX = {
  ...ONBOARDING_IMAGE.middle,
  minHeight: 180,
  maxHeight: 220,
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
      imageSource={accountInvite}
      imageScale={1.05}
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
            <Typography size={14} color={ONBOARDING_UI.green} textAlign="center" style={styles.footerLink}>
              Skip for now
            </Typography>
          </TouchableOpacity>
        </>
      }>
      <View style={styles.formBlock}>
        <TextInput
          placeholder="Email address"
          placeholderTextColor={G.muted}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.field}
        />

        <TouchableOpacity style={styles.addBtn} activeOpacity={0.7} accessibilityRole="button">
          <Typography size={18} color={ONBOARDING_UI.green} style={styles.addIcon}>
            +
          </Typography>
          <Typography size={14} color={ONBOARDING_UI.green} style={styles.addLabel}>
            Add another person
          </Typography>
        </TouchableOpacity>
      </View>

      <View style={styles.callout}>
        <View style={styles.calloutIcon}>
          <OnboardingFeatureIcon name="group" color={ONBOARDING_UI.green} />
        </View>
        <Typography size={13} color={ONBOARDING_UI.green} style={styles.calloutText}>
          You can invite members anytime from your account settings.
        </Typography>
      </View>
    </SetupFlowLayout>
  );
};

const styles = StyleSheet.create({
  formBlock: {
    gap: Sizer.vSize(10),
    marginTop: Sizer.vSize(4),
  },
  field: {
    height: FIELD_HEIGHT,
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: ONBOARDING_UI.cardBg,
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
    backgroundColor: ONBOARDING_UI.cardBg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Sizer.hSize(6),
  },
  addIcon: {
    fontWeight: '500',
    lineHeight: Sizer.fS(20),
  },
  addLabel: {
    fontFamily: FONTS.body,
    fontWeight: '500',
  },
  callout: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(12),
    marginTop: Sizer.vSize(14),
    paddingHorizontal: Sizer.hSize(14),
    paddingVertical: Sizer.vSize(14),
    borderRadius: ONBOARDING_UI.radiusMd,
    backgroundColor: G.sageBanner,
  },
  calloutIcon: {
    width: 28,
    alignItems: 'center',
    flexShrink: 0,
  },
  calloutText: {
    flex: 1,
    lineHeight: Sizer.fS(19),
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
    fontFamily: FONTS.body,
    fontWeight: '500',
    marginTop: Sizer.vSize(14),
  },
});

export default InviteHouseholdScreen;
