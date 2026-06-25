import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../../components';
import OnboardingImagePlaceholder from '../../../components/solterra/OnboardingImagePlaceholder';
import OnboardingPagination from '../../../components/solterra/OnboardingPagination';
import { OnboardingFeatureIcon } from '../../../components/solterra/OnboardingFeatureIcons';
import Typography from '../../../atomComponents/Typography';
import { FONTS } from '../../../globalStyle/Theme';
import Sizer from '../../../helpers/Sizer';
import { getOnboardingPlaceholderSource } from '../../OnBoard/onboardingPlaceholderImages';
import { ONBOARDING_IMAGE, ONBOARDING_UI } from '../../OnBoard/onboardingUi';

export const PLAN_FLOW_STEPS = 5;

export default function PlanFlowLayout({
  stepIndex,
  stepCount = PLAN_FLOW_STEPS,
  title,
  subtitle,
  subtitleColor = ONBOARDING_UI.text,
  headerIcon,
  bottomImageKey,
  bottomImageBox = ONBOARDING_IMAGE.bottom,
  footerLabel = 'Next',
  onNext,
  hideButton = false,
  hidePagination = false,
  footer,
  scrollable = true,
  children,
}) {
  const bottomSource = bottomImageKey
    ? getOnboardingPlaceholderSource(bottomImageKey, bottomImageBox)
    : null;
  const bottomHeight = bottomImageBox.maxHeight ?? 160;

  const mainContent = (
    <>
      {headerIcon ? (
        <View style={styles.headerIconWrap}>
          <View style={styles.headerIconCircle}>
            <OnboardingFeatureIcon name={headerIcon} />
          </View>
        </View>
      ) : null}
      <View style={styles.headingBlock}>
        {title ? (
          <Typography size={24} color={ONBOARDING_UI.green} textAlign="center" style={styles.title}>
            {title}
          </Typography>
        ) : null}
        {subtitle ? (
          <Typography
            size={14}
            color={subtitleColor}
            textAlign="center"
            mT={8}
            style={styles.subtitle}>
            {subtitle}
          </Typography>
        ) : null}
      </View>

      <View style={styles.content}>{children}</View>

      {bottomImageKey ? (
        <View style={[styles.bottomImageArea, { height: bottomHeight }]}>
          <OnboardingImagePlaceholder
            source={bottomSource}
            imageKey={bottomImageKey}
            minHeight={bottomImageBox.minHeight}
            maxHeight={bottomHeight}
            maxWidth={bottomImageBox.maxWidth}
            borderRadius={bottomImageBox.borderRadius ?? ONBOARDING_UI.radiusMd}
            resizeMode="contain"
            flexFill={false}
            style={styles.bottomImageFill}
          />
        </View>
      ) : null}
    </>
  );

  const defaultFooter = (
    <>
      {!hidePagination ? <OnboardingPagination count={stepCount} index={stepIndex} /> : null}
      {!hideButton && onNext ? (
        <Button
          label={footerLabel}
          onPress={onNext}
          height={52}
          btnStyle={styles.primaryBtn}
          textStyle={styles.primaryBtnText}
        />
      ) : null}
    </>
  );

  const footerContent = footer ?? defaultFooter;

  return (
    <SafeAreaView style={styles.root} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={ONBOARDING_UI.cream} />

      {scrollable ? (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          {mainContent}
        </ScrollView>
      ) : (
        <View style={styles.body}>{mainContent}</View>
      )}

      <View style={styles.footerPinned}>{footerContent}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: ONBOARDING_UI.cream,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: ONBOARDING_UI.padX,
    paddingTop: Sizer.vSize(12),
    paddingBottom: Sizer.vSize(8),
  },
  body: {
    flex: 1,
    paddingHorizontal: ONBOARDING_UI.padX,
    paddingTop: Sizer.vSize(12),
    paddingBottom: Sizer.vSize(8),
  },
  headingBlock: {
    alignItems: 'center',
    paddingHorizontal: Sizer.hSize(4),
    flexShrink: 0,
  },
  headerIconWrap: {
    alignItems: 'center',
    marginBottom: Sizer.vSize(10),
  },
  headerIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: ONBOARDING_UI.cardBg,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    lineHeight: Sizer.fS(30),
  },
  subtitle: {
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(21),
    maxWidth: '92%',
  },
  content: {
    flexShrink: 0,
    marginTop: Sizer.vSize(20),
  },
  bottomImageArea: {
    width: '100%',
    marginTop: Sizer.vSize(20),
    marginBottom: Sizer.vSize(4),
    alignSelf: 'center',
  },
  bottomImageFill: {
    flex: 1,
    height: '100%',
  },
  footerPinned: {
    flexShrink: 0,
    paddingHorizontal: ONBOARDING_UI.padX,
    paddingTop: Sizer.vSize(8),
    paddingBottom: Sizer.vSize(10),
    gap: Sizer.vSize(14),
    backgroundColor: ONBOARDING_UI.cream,
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
});
