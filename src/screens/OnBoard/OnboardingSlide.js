import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OnboardingFeatureIcon } from '../../components/solterra/OnboardingFeatureIcons';
import { OnboardingPreviewBlock } from '../../components/solterra/OnboardingPreviewBlocks';
import OnboardingImagePlaceholder from '../../components/solterra/OnboardingImagePlaceholder';
import Typography from '../../atomComponents/Typography';
import { solterraLogoOnboard } from '../../assets/images';
import { FONTS } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';
import {
  CONTENT_ALIGN,
  IMAGE_POSITION,
  LIST_VARIANT,
  ONBOARDING_IMAGE,
  ONBOARDING_UI,
} from './onboardingUi';

const ONBOARD_LOGO_ASPECT = 1366 / 546;

function OnboardLogo({ centered = false }) {
  const height = Sizer.fS(44);
  const width = height * ONBOARD_LOGO_ASPECT;

  return (
    <Image
      source={solterraLogoOnboard}
      style={[styles.onboardLogo, { width, height }, centered && styles.onboardLogoCenter]}
      resizeMode="contain"
      accessibilityRole="image"
      accessibilityLabel="Trellis"
    />
  );
}

function normalizeItem(item) {
  if (typeof item === 'string') {
    return { label: item, icon: null };
  }
  return item;
}

function FeatureRow({ label, icon, checked = false }) {
  return (
    <View style={styles.row}>
      <View style={styles.iconWrap}>
        {icon || checked ? (
          <OnboardingFeatureIcon name={icon ?? 'check'} />
        ) : null}
      </View>
      <Typography size={15} color={ONBOARDING_UI.green} style={styles.rowText}>
        {label}
      </Typography>
    </View>
  );
}

function ChecklistRow({ label }) {
  return (
    <View style={styles.checkRow}>
      <Typography size={16} color={ONBOARDING_UI.primary} style={styles.checkMark}>
        ✓
      </Typography>
      <Typography size={15} color={ONBOARDING_UI.green} style={styles.checkText}>
        {label}
      </Typography>
    </View>
  );
}

function getScaledImageSize(source, contentWidth, scale = 1) {
  const resolved = Image.resolveAssetSource(source);
  if (!resolved?.width || !resolved?.height) {
    return null;
  }

  const width = contentWidth * scale;
  const height = width / (resolved.width / resolved.height);
  return { width, height };
}

function WelcomeHeroImage({ source }) {
  return (
    <Image
      source={source}
      style={styles.welcomeHeroImage}
      resizeMode="contain"
      accessibilityIgnoresInvertColors
      accessibilityLabel="Welcome garden illustration"
    />
  );
}

function ImageSlot({ slide, position }) {
  if (slide.imagePosition !== position) {
    return null;
  }

  const preset = ONBOARDING_IMAGE[position] ?? ONBOARDING_IMAGE.plan;
  const box = slide.imageBox ?? preset;
  const flexFill = slide.imageFlexFill ?? true;
  const borderRadius = box.borderRadius ?? ONBOARDING_UI.radiusMd;
  const contentWidth = slide.imageFullBleed
    ? ONBOARDING_UI.screenW
    : ONBOARDING_UI.screenW - ONBOARDING_UI.padX * 2;
  const scaledSize =
    !flexFill && slide.imageSource
      ? getScaledImageSize(slide.imageSource, contentWidth, slide.imageScale ?? 1)
      : null;

  if (scaledSize) {
    return (
      <View
        style={[
          styles.scaledImageClip,
          {
            width: contentWidth,
            height: scaledSize.height,
            borderRadius,
          },
        ]}
        accessibilityLabel={`${slide.imageKey} illustration`}>
        <Image
          source={slide.imageSource}
          style={{
            width: scaledSize.width,
            height: scaledSize.height,
          }}
          resizeMode={slide.imageResizeMode ?? 'contain'}
          accessibilityIgnoresInvertColors
        />
      </View>
    );
  }

  const scaledHeight =
    box.height != null
      ? Sizer.vSize(box.height)
      : !flexFill && box.maxHeight != null
        ? Sizer.vSize(box.maxHeight)
        : undefined;

  return (
    <OnboardingImagePlaceholder
      source={slide.imageSource}
      imageKey={slide.imageKey}
      minHeight={box.minHeight != null ? Sizer.vSize(box.minHeight) : box.minHeight}
      maxHeight={box.maxHeight != null ? Sizer.vSize(box.maxHeight) : box.maxHeight}
      height={scaledHeight}
      maxWidth={box.maxWidth}
      borderRadius={borderRadius}
      resizeMode={slide.imageResizeMode ?? 'cover'}
      flexFill={flexFill}
    />
  );
}

function IconListBlock({ items, featureTitle }) {
  if (!items?.length) {
    return null;
  }

  const rows = items.map(item => {
    const { label, icon } = normalizeItem(item);
    return <FeatureRow key={label} label={label} icon={icon} />;
  });

  return (
    <View style={[styles.list, featureTitle && styles.featureGroup]}>
      {featureTitle ? (
        <Typography size={15} color={ONBOARDING_UI.green} style={styles.groupTitle}>
          {featureTitle}
        </Typography>
      ) : null}
      {rows}
    </View>
  );
}

function ChecklistBlock({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <View style={styles.checklist}>
      {items.map(label => (
        <ChecklistRow key={label} label={label} />
      ))}
    </View>
  );
}

function TextBlock({ slide, isCenter, textAlign, titleSize }) {
  const bodyWrapStyle = slide.bodyMaxWidthRatio
    ? { maxWidth: ONBOARDING_UI.screenW * slide.bodyMaxWidthRatio, alignSelf: 'center' }
    : null;

  return (
    <>
      {slide.intro ? (
        <Typography
          size={14}
          color={ONBOARDING_UI.text}
          textAlign={textAlign}
          style={styles.intro}>
          {slide.intro}
        </Typography>
      ) : null}

      {slide.showLogo ? (
        <View style={[styles.logoWrap, isCenter && styles.logoWrapCenter]}>
          <OnboardLogo centered={isCenter} />
        </View>
      ) : null}

      <Typography
        size={titleSize}
        color={ONBOARDING_UI.green}
        textAlign={textAlign}
        mT={slide.showLogo ? 12 : slide.intro ? 8 : 0}
        style={[
          styles.title,
          slide.showLogo ? styles.titleWelcome : isCenter ? styles.titleCenter : styles.titleLeft,
          slide.listVariant === LIST_VARIANT.checklist && styles.titlePlan,
        ]}>
        {slide.title}
      </Typography>

      {slide.subtitle ? (
        <Typography
          size={16}
          color={ONBOARDING_UI.green}
          textAlign={textAlign}
          mT={6}
          style={styles.subtitle}>
          {slide.subtitle}
        </Typography>
      ) : null}

      {slide.body ? (
        <View style={bodyWrapStyle}>
          <Typography
            size={14}
            color={ONBOARDING_UI.text}
            textAlign={textAlign}
            mT={slide.bodyMarginTop ?? 12}
            style={[styles.bodyText, slide.listVariant === LIST_VARIANT.checklist && styles.bodyPlan]}>
            {slide.body}
          </Typography>
        </View>
      ) : null}

      {slide.lead ? (
        <Typography
          size={16}
          color={ONBOARDING_UI.green}
          textAlign={textAlign}
          mT={isCenter ? 14 : 28}
          style={styles.lead}>
          {slide.lead}
        </Typography>
      ) : null}
    </>
  );
}

/** Single onboarding layout — flex only, no vertical scroll */
export default function OnboardingSlide({ slide, onWelcomeNext, welcomeNextLabel = 'Next' }) {
  const align = slide.contentAlign ?? CONTENT_ALIGN.left;
  const isCenter = align === CONTENT_ALIGN.center;
  const textAlign = isCenter ? 'center' : 'left';
  const titleSize = slide.titleSize ?? (isCenter ? 24 : 26);
  const hasTopImage = slide.imagePosition === IMAGE_POSITION.top;
  const hasMiddleImage = slide.imagePosition === IMAGE_POSITION.middle;
  const hasBottomImage = slide.imagePosition === IMAGE_POSITION.bottom;
  const isWelcome = slide.id === 'welcome';

  if (isWelcome) {
    return (
      <View style={styles.slide}>
        <View style={styles.topImageSectionWelcome}>
          <WelcomeHeroImage source={slide.imageSource} />
        </View>

        <View style={styles.welcomeBottom}>
          <TextBlock slide={slide} isCenter={false} textAlign="left" titleSize={titleSize} />

          {onWelcomeNext ? (
            <View style={styles.welcomeActionRow}>
              <TouchableOpacity
                style={styles.welcomeNextBtn}
                onPress={onWelcomeNext}
                activeOpacity={0.88}
                accessibilityRole="button"
                accessibilityLabel={welcomeNextLabel}>
                <Text style={styles.welcomeNextText}>{welcomeNextLabel}</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.slide}>
      {hasTopImage ? (
        <View style={styles.topImageSection}>
          <ImageSlot slide={slide} position={IMAGE_POSITION.top} />
        </View>
      ) : null}

      <ScrollView
        style={styles.bodyScroll}
        contentContainerStyle={[
          hasTopImage ? styles.bodyAfterTopImage : styles.bodyDefault,
          styles.bodyScrollContent,
        ]}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.textSection}>
          <TextBlock slide={slide} isCenter={isCenter} textAlign={textAlign} titleSize={titleSize} />
        </View>

        {hasMiddleImage ? (
          <View
            style={[
              styles.imageSection,
              isCenter && styles.imageSectionCentered,
              slide.imageFlexFill === false && styles.imageSectionCompact,
              slide.imageFullBleed && styles.imageSectionFullBleed,
              slide.imageMarginTop != null && { marginTop: Sizer.vSize(slide.imageMarginTop) },
              slide.imageMarginBottom != null && {
                marginBottom: Sizer.vSize(slide.imageMarginBottom),
              },
            ]}>
            <ImageSlot slide={slide} position={IMAGE_POSITION.middle} />
          </View>
        ) : null}

        <View style={styles.listsSection}>
          {slide.blockVariant ? (
            <OnboardingPreviewBlock variant={slide.blockVariant} data={slide.previewBlock} />
          ) : slide.listVariant === LIST_VARIANT.checklist ? (
            <ChecklistBlock items={slide.checklist} />
          ) : (
            <>
              <IconListBlock items={slide.bullets} featureTitle={slide.listHeading} />
              <IconListBlock
                items={slide.featureBox?.items}
                featureTitle={slide.featureBox?.title}
              />
            </>
          )}
        </View>

        {hasBottomImage ? (
          <View
            style={[
              styles.imageSection,
              isCenter && styles.imageSectionCentered,
              slide.imageFlexFill === false && styles.imageSectionCompact,
              slide.imageFullBleed && styles.imageSectionFullBleed,
              slide.imageMarginTop != null && { marginTop: Sizer.vSize(slide.imageMarginTop) },
              slide.imageMarginBottom != null && {
                marginBottom: Sizer.vSize(slide.imageMarginBottom),
              },
            ]}>
            <ImageSlot slide={slide} position={IMAGE_POSITION.bottom} />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: ONBOARDING_UI.screenW,
    flex: 1,
    backgroundColor: ONBOARDING_UI.cream,
  },
  topImageSection: {
    flex: 54,
    minHeight: 0,
    paddingHorizontal: ONBOARDING_UI.padX,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImageSectionWelcome: {
    flex: 1,
    paddingHorizontal: 0,
    paddingTop: Sizer.vSize(12),
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  welcomeHeroImage: {
    width: '100%',
    flex: 1,
  },
  imageSectionFullBleed: {
    width: ONBOARDING_UI.screenW,
    marginHorizontal: -ONBOARDING_UI.padX,
    alignSelf: 'center',
  },
  bodyScroll: {
    flex: 1,
    minHeight: 0,
  },
  bodyScrollContent: {
    flexGrow: 1,
    paddingBottom: Sizer.vSize(16),
  },
  body: {
    minHeight: 0,
  },
  bodyFill: {
    flex: 1,
  },
  welcomeBottom: {
    flexShrink: 0,
    paddingHorizontal: ONBOARDING_UI.padX,
    paddingTop: Sizer.vSize(10),
    paddingBottom: Sizer.vSize(16),
  },
  welcomeActionRow: {
    alignItems: 'flex-end',
    marginTop: Sizer.vSize(22),
  },
  welcomeNextBtn: {
    height: Sizer.hSize(44),
    minWidth: Sizer.hSize(108),
    paddingHorizontal: Sizer.hSize(36),
    borderRadius: ONBOARDING_UI.radiusMd,
    backgroundColor: ONBOARDING_UI.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeNextText: {
    color: ONBOARDING_UI.white,
    fontFamily: FONTS.bodySemiBold,
    fontSize: Sizer.fS(16),
    fontWeight: '600',
  },
  bodyDefault: {
    paddingHorizontal: ONBOARDING_UI.padX,
    paddingTop: Sizer.vSize(20),
  },
  bodyAfterTopImage: {
    paddingHorizontal: ONBOARDING_UI.padX,
    paddingTop: Sizer.vSize(16),
    justifyContent: 'flex-start',
  },
  textSection: {
    flexShrink: 0,
  },
  imageSection: {
    flex: 1,
    minHeight: 0,
    marginTop: Sizer.vSize(14),
    marginBottom: Sizer.vSize(8),
    width: '100%',
  },
  imageSectionCompact: {
    flex: 0,
    flexGrow: 0,
    flexShrink: 0,
  },
  imageSectionCentered: {
    alignItems: 'center',
  },
  scaledImageClip: {
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    fontFamily: FONTS.body,
    fontWeight: '400',
  },
  logoWrap: {
    marginTop: Sizer.vSize(2),
  },
  logoWrapCenter: {
    alignItems: 'center',
  },
  onboardLogo: {
    alignSelf: 'flex-start',
  },
  onboardLogoCenter: {
    alignSelf: 'center',
  },
  title: {
    fontWeight: '700',
  },
  titleWelcome: {
    fontFamily: FONTS.body,
    lineHeight: Sizer.fS(26),
  },
  titleLeft: {
    fontFamily: FONTS.display,
    lineHeight: Sizer.fS(32),
    paddingRight: Sizer.hSize(12),
  },
  titleCenter: {
    fontFamily: FONTS.display,
    lineHeight: Sizer.fS(30),
    paddingHorizontal: Sizer.hSize(4),
  },
  titlePlan: {
    lineHeight: Sizer.fS(28),
  },
  subtitle: {
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(22),
  },
  bodyText: {
    fontFamily: FONTS.body,
    fontWeight: '400',
    lineHeight: Sizer.fS(21),
    paddingHorizontal: Sizer.hSize(2),
  },
  bodyPlan: {
    lineHeight: Sizer.fS(20),
  },
  lead: {
    fontFamily: FONTS.body,
    fontWeight: '700',
  },
  listsSection: {
    flexShrink: 0,
  },
  list: {
    marginTop: Sizer.vSize(18),
    gap: Sizer.vSize(14),
  },
  featureGroup: {
    marginTop: Sizer.vSize(16),
  },
  groupTitle: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    marginBottom: Sizer.vSize(2),
  },
  checklist: {
    alignSelf: 'stretch',
    marginTop: Sizer.vSize(4),
    gap: Sizer.vSize(10),
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(10),
  },
  checkMark: {
    width: 18,
    fontWeight: '700',
    lineHeight: Sizer.fS(20),
  },
  checkText: {
    flex: 1,
    fontFamily: FONTS.body,
    fontWeight: '400',
    lineHeight: Sizer.fS(21),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(14),
  },
  iconWrap: {
    width: 26,
    alignItems: 'center',
  },
  rowText: {
    flex: 1,
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(21),
  },
});
