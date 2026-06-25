import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingImagePlaceholder from '../../../components/solterra/OnboardingImagePlaceholder';
import OnboardingPagination from '../../../components/solterra/OnboardingPagination';
import Typography from '../../../atomComponents/Typography';
import { FONTS } from '../../../globalStyle/Theme';
import Sizer from '../../../helpers/Sizer';
import { getOnboardingPlaceholderSource } from '../../OnBoard/onboardingPlaceholderImages';
import { ONBOARDING_IMAGE, ONBOARDING_UI } from '../../OnBoard/onboardingUi';
import {
  getSetupFlowPagination,
  getSetupFlowRouteForDot,
} from './setupFlowPagination';

function getScaledImageSize(source, contentWidth, scale = 1) {
  const resolved = Image.resolveAssetSource(source);
  if (!resolved?.width || !resolved?.height) {
    return null;
  }

  const width = contentWidth * scale;
  const height = width / (resolved.width / resolved.height);
  return { width, height };
}

/**
 * Auth setup shell (screens 13–16) — scrollable body + optional pinned footer.
 * Post–create-account flow may scroll; onboarding slides stay flex-only elsewhere.
 */
export default function SetupFlowLayout({
  title,
  subtitle,
  subtitleColor = ONBOARDING_UI.text,
  imageKey,
  imageSource,
  imageScale,
  imageBox = ONBOARDING_IMAGE.middle,
  imageFirst = false,
  centered = false,
  imageResizeMode = 'contain',
  scrollable = true,
  pinFooter = true,
  setupRoute,
  navigation,
  hidePagination = false,
  children,
  footer,
}) {
  const source = imageSource || getOnboardingPlaceholderSource(imageKey, imageBox);
  const textAlign = centered ? 'center' : 'left';
  const imageHeight = imageBox.maxHeight ?? 220;
  const pagination =
    setupRoute && navigation && !hidePagination ? getSetupFlowPagination(setupRoute) : null;

  const onDotSelect = dotIndex => {
    const target = getSetupFlowRouteForDot(dotIndex);
    if (target && target !== setupRoute) {
      navigation.navigate(target);
    }
  };

  const footerContent = (
    <>
      {pagination ? (
        <OnboardingPagination
          count={pagination.count}
          index={pagination.index}
          onSelect={onDotSelect}
        />
      ) : null}
      {footer}
    </>
  );

  const headingBlock = (
    <View style={[styles.headingBlock, centered && styles.headingBlockCenter]}>
      {title ? (
        <Typography
          size={centered ? 24 : 26}
          color={ONBOARDING_UI.green}
          textAlign={textAlign}
          style={[styles.title, centered && styles.titleCenter]}>
          {title}
        </Typography>
      ) : null}
      {subtitle ? (
        <Typography
          size={14}
          color={subtitleColor}
          textAlign={textAlign}
          mT={8}
          style={[styles.subtitle, centered && styles.subtitleCenter]}>
          {subtitle}
        </Typography>
      ) : null}
    </View>
  );

  const imageArea = (() => {
    const borderRadius = imageBox.borderRadius ?? ONBOARDING_UI.radiusMd;
    const contentWidth = ONBOARDING_UI.screenW - ONBOARDING_UI.padX * 2;
    const scaledSize = imageScale && source ? getScaledImageSize(source, contentWidth, imageScale) : null;

    if (scaledSize) {
      return (
        <View style={[styles.imageArea, { height: scaledSize.height }]}>
          <View
            style={[
              styles.scaledImageClip,
              {
                width: contentWidth,
                height: scaledSize.height,
                borderRadius,
              },
            ]}>
            <Image
              source={source}
              style={{
                width: scaledSize.width,
                height: scaledSize.height,
              }}
              resizeMode={imageResizeMode}
              accessibilityIgnoresInvertColors
            />
          </View>
        </View>
      );
    }

    return (
      <View style={[styles.imageArea, { height: imageHeight }]}>
        <OnboardingImagePlaceholder
          source={source}
          imageKey={imageKey}
          minHeight={imageBox.minHeight}
          maxHeight={imageHeight}
          maxWidth={imageBox.maxWidth}
          borderRadius={borderRadius}
          resizeMode={imageResizeMode}
          flexFill={false}
          style={styles.imageFill}
        />
      </View>
    );
  })();

  const mainContent = (
    <>
      {imageFirst ? imageArea : null}
      {!imageFirst ? headingBlock : null}
      {!imageFirst ? imageArea : null}
      {imageFirst ? headingBlock : null}
      <View style={styles.content}>{children}</View>
    </>
  );

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
          {!pinFooter && footer ? <View style={styles.footerInline}>{footerContent}</View> : null}
        </ScrollView>
      ) : (
        <View style={styles.body}>{mainContent}</View>
      )}

      {pinFooter && footer ? <View style={styles.footerPinned}>{footerContent}</View> : null}
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
    paddingBottom: Sizer.vSize(10),
  },
  headingBlock: {
    flexShrink: 0,
  },
  headingBlockCenter: {
    alignItems: 'center',
    paddingHorizontal: Sizer.hSize(4),
  },
  title: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    lineHeight: Sizer.fS(32),
    paddingRight: Sizer.hSize(8),
  },
  titleCenter: {
    lineHeight: Sizer.fS(30),
    paddingRight: 0,
  },
  subtitle: {
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(21),
  },
  subtitleCenter: {
    maxWidth: '92%',
    paddingHorizontal: Sizer.hSize(8),
  },
  imageArea: {
    width: '100%',
    marginTop: Sizer.vSize(16),
    marginBottom: Sizer.vSize(16),
    alignSelf: 'center',
  },
  scaledImageClip: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageFill: {
    flex: 1,
    height: '100%',
  },
  content: {
    flexShrink: 0,
  },
  footerPinned: {
    flexShrink: 0,
    paddingHorizontal: ONBOARDING_UI.padX,
    paddingTop: Sizer.vSize(8),
    paddingBottom: Sizer.vSize(10),
    gap: Sizer.vSize(10),
    backgroundColor: ONBOARDING_UI.cream,
  },
  footerInline: {
    marginTop: Sizer.vSize(16),
    gap: Sizer.vSize(10),
  },
});
