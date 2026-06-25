import React from 'react';
import { StyleSheet, View } from 'react-native';
import { OnboardingFeatureIcon } from '../../components/solterra/OnboardingFeatureIcons';
import { OnboardingPreviewBlock } from '../../components/solterra/OnboardingPreviewBlocks';
import OnboardingImagePlaceholder from '../../components/solterra/OnboardingImagePlaceholder';
import TrellisWordmark from '../../components/solterra/TrellisWordmark';
import Typography from '../../atomComponents/Typography';
import { FONTS } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';
import {
  CONTENT_ALIGN,
  IMAGE_POSITION,
  LIST_VARIANT,
  ONBOARDING_IMAGE,
  ONBOARDING_UI,
} from './onboardingUi';

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

function ImageSlot({ slide, position, wrapperStyle }) {
  if (slide.imagePosition !== position) {
    return null;
  }

  const preset = ONBOARDING_IMAGE[position] ?? ONBOARDING_IMAGE.plan;
  const box = slide.imageBox ?? preset;

  return (
    <View style={[styles.imageSlot, wrapperStyle]}>
      <OnboardingImagePlaceholder
        source={slide.imageSource}
        imageKey={slide.imageKey}
        minHeight={box.minHeight}
        maxHeight={box.maxHeight}
        maxWidth={box.maxWidth}
        borderRadius={box.borderRadius ?? ONBOARDING_UI.radiusMd}
      />
    </View>
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
        <Typography size={14} color={ONBOARDING_UI.text} textAlign={textAlign} style={styles.intro}>
          {slide.intro}
        </Typography>
      ) : null}

      {slide.showLogo ? (
        <View style={[styles.logoWrap, isCenter && styles.logoWrapCenter]}>
          <TrellisWordmark color={ONBOARDING_UI.green} />
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
            mT={12}
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
export default function OnboardingSlide({ slide }) {
  const align = slide.contentAlign ?? CONTENT_ALIGN.left;
  const isCenter = align === CONTENT_ALIGN.center;
  const textAlign = isCenter ? 'center' : 'left';
  const titleSize = slide.titleSize ?? (isCenter ? 24 : 26);
  const hasTopImage = slide.imagePosition === IMAGE_POSITION.top;
  const hasMiddleImage = slide.imagePosition === IMAGE_POSITION.middle;
  const hasBottomImage = slide.imagePosition === IMAGE_POSITION.bottom;

  return (
    <View style={styles.slide}>
      {hasTopImage ? (
        <View style={styles.topImageSection}>
          <ImageSlot slide={slide} position={IMAGE_POSITION.top} />
        </View>
      ) : null}

      <View
        style={[
          styles.body,
          hasTopImage ? styles.bodyAfterTopImage : styles.bodyDefault,
        ]}>
        <View style={styles.textSection}>
          <TextBlock slide={slide} isCenter={isCenter} textAlign={textAlign} titleSize={titleSize} />
        </View>

        {hasMiddleImage ? (
          <ImageSlot
            slide={slide}
            position={IMAGE_POSITION.middle}
            wrapperStyle={styles.imageSection}
          />
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
          <ImageSlot
            slide={slide}
            position={IMAGE_POSITION.bottom}
            wrapperStyle={styles.imageSection}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: ONBOARDING_UI.screenW,
    height: '100%',
    backgroundColor: ONBOARDING_UI.cream,
  },
  topImageSection: {
    flex: 54,
    minHeight: 0,
    paddingHorizontal: ONBOARDING_UI.padX,
  },
  body: {
    flex: 1,
    minHeight: 0,
  },
  bodyDefault: {
    paddingHorizontal: ONBOARDING_UI.padX,
    paddingTop: Sizer.vSize(20),
  },
  bodyAfterTopImage: {
    flex: 46,
    paddingHorizontal: ONBOARDING_UI.padX,
    paddingTop: Sizer.vSize(22),
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
  imageSlot: {
    flex: 1,
    minHeight: 0,
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
