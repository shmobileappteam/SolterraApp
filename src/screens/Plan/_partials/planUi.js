import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { OnboardingFeatureIcon } from '../../../components/solterra/OnboardingFeatureIcons';
import OnboardingImagePlaceholder from '../../../components/solterra/OnboardingImagePlaceholder';
import Typography from '../../../atomComponents/Typography';
import { FONTS } from '../../../globalStyle/Theme';
import { G } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';
import { getOnboardingThumbSource } from '../../OnBoard/onboardingPlaceholderImages';
import { ONBOARDING_IMAGE, ONBOARDING_UI } from '../../OnBoard/onboardingUi';

export const PLAN_BOTTOM_IMAGE = {
  ...ONBOARDING_IMAGE.bottom,
  minHeight: 120,
  maxHeight: 150,
};

export const PLAN_ANALYSIS_STEPS = 6;
export const PLAN_FINAL_STEPS = 4;

export function PlanHeaderIcon({ name }) {
  return (
    <View style={styles.headerIconWrap}>
      <View style={styles.headerIconCircle}>
        <OnboardingFeatureIcon name={name} />
      </View>
    </View>
  );
}

export function PlanBottomImage({ imageKey, imageBox = PLAN_BOTTOM_IMAGE }) {
  const source = getOnboardingThumbSource(imageKey, imageBox.maxHeight ?? 150);
  return (
    <View style={[styles.bottomImageArea, { height: imageBox.maxHeight ?? 150 }]}>
      <OnboardingImagePlaceholder
        source={source}
        imageKey={imageKey}
        minHeight={imageBox.minHeight}
        maxHeight={imageBox.maxHeight}
        borderRadius={imageBox.borderRadius ?? ONBOARDING_UI.radiusMd}
        resizeMode="contain"
        flexFill={false}
        style={styles.bottomImageFill}
      />
    </View>
  );
}

export function PlanStatusRow({ icon, label, status = 'done' }) {
  return (
    <View style={styles.statusRow}>
      <View style={styles.rowIcon}>
        <OnboardingFeatureIcon name={icon} />
      </View>
      <Typography size={14} color={ONBOARDING_UI.green} style={styles.rowLabel}>
        {label}
      </Typography>
      {status === 'loading' ? (
        <ActivityIndicator size="small" color={ONBOARDING_UI.primary} />
      ) : (
        <Typography size={14} color={ONBOARDING_UI.primary} style={styles.statusCheck}>
          ✓
        </Typography>
      )}
    </View>
  );
}

export function PlanFindingRow({ icon, label, value, onEdit }) {
  return (
    <View style={styles.findingRow}>
      <View style={styles.rowIcon}>
        <OnboardingFeatureIcon name={icon} />
      </View>
      <View style={styles.findingCopy}>
        <Typography size={12} color={ONBOARDING_UI.text} style={styles.findingLabel}>
          {label}
        </Typography>
        <Typography size={14} color={ONBOARDING_UI.green} style={styles.findingValue}>
          {value}
        </Typography>
      </View>
      <TouchableOpacity style={styles.editBtn} activeOpacity={0.7} onPress={onEdit}>
        <Typography size={12} color={ONBOARDING_UI.primary} style={styles.editBtnText}>
          Edit
        </Typography>
      </TouchableOpacity>
    </View>
  );
}

export function MatchRing({ percent, size = 46 }) {
  const stroke = 3;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <View style={[styles.matchRing, { width: size, height: size }]}>
      <Svg width={size} height={size} style={styles.matchRingSvg}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={G.divider}
          strokeWidth={stroke}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={ONBOARDING_UI.primary}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      <Typography size={11} color={ONBOARDING_UI.green} style={styles.matchPercent}>
        {percent}%
      </Typography>
    </View>
  );
}

export function StyleCard({ imageKey, title, matchLabel, percent }) {
  return (
    <View style={styles.styleCard}>
      <OnboardingImagePlaceholder
        source={getOnboardingThumbSource(imageKey, 56)}
        imageKey={imageKey}
        compact
        minHeight={56}
        maxHeight={56}
        maxWidth={56}
        borderRadius={ONBOARDING_UI.radiusMd}
        style={styles.styleThumb}
      />
      <View style={styles.styleCopy}>
        <Typography size={14} color={ONBOARDING_UI.green} style={styles.styleTitle}>
          {title}
        </Typography>
        <Typography size={12} color={ONBOARDING_UI.text} style={styles.styleMatch}>
          {matchLabel}
        </Typography>
      </View>
      <MatchRing percent={percent} />
    </View>
  );
}

export function PlantCategoryCard({ title, subtitle, imageKeys }) {
  return (
    <View style={styles.plantCard}>
      <View style={styles.plantCardHeader}>
        <View style={styles.plantCardCopy}>
          <Typography size={15} color={ONBOARDING_UI.green} style={styles.plantCardTitle}>
            {title}
          </Typography>
          <Typography size={12} color={ONBOARDING_UI.text} style={styles.plantCardSubtitle}>
            {subtitle}
          </Typography>
        </View>
        <Typography size={18} color={ONBOARDING_UI.text} style={styles.plantChevron}>
          ›
        </Typography>
      </View>
      <View style={styles.plantThumbs}>
        {imageKeys.map(key => (
          <OnboardingImagePlaceholder
            key={key}
            source={getOnboardingThumbSource(key, 52)}
            imageKey={key}
            compact
            minHeight={52}
            maxHeight={52}
            maxWidth={52}
            borderRadius={ONBOARDING_UI.radiusMd}
            style={styles.plantThumb}
          />
        ))}
      </View>
    </View>
  );
}

export function PlanSummaryRow({ icon, label, value, onEdit }) {
  return (
    <View style={styles.summaryRow}>
      <View style={styles.rowIcon}>
        <OnboardingFeatureIcon name={icon} />
      </View>
      <View style={styles.summaryCopy}>
        <Typography size={13} color={ONBOARDING_UI.green} style={styles.summaryLabel}>
          {label}
        </Typography>
        <Typography size={14} color={ONBOARDING_UI.text} style={styles.summaryValue}>
          {value}
        </Typography>
      </View>
      <TouchableOpacity onPress={onEdit} activeOpacity={0.7}>
        <Typography size={13} color={ONBOARDING_UI.primary} style={styles.summaryEdit}>
          Edit
        </Typography>
      </TouchableOpacity>
    </View>
  );
}

export function PlanBanner({ icon = 'sprout', text }) {
  return (
    <View style={styles.banner}>
      <View style={styles.bannerIcon}>
        <OnboardingFeatureIcon name={icon} />
      </View>
      <Typography size={13} color={ONBOARDING_UI.green} style={styles.bannerText}>
        {text}
      </Typography>
    </View>
  );
}

export function PlanChecklistRow({ label }) {
  return (
    <View style={styles.checklistRow}>
      <View style={styles.checklistIcon}>
        <Typography size={12} color={ONBOARDING_UI.white} style={styles.checklistMark}>
          ✓
        </Typography>
      </View>
      <Typography size={15} color={ONBOARDING_UI.green} style={styles.checklistLabel}>
        {label}
      </Typography>
    </View>
  );
}

export const planUiStyles = StyleSheet.create({
  primaryBtn: {
    borderRadius: ONBOARDING_UI.radiusMd,
    backgroundColor: ONBOARDING_UI.primary,
  },
  primaryBtnText: {
    color: ONBOARDING_UI.white,
    fontWeight: '600',
    fontSize: Sizer.fS(16),
  },
  outlineBtn: {
    flex: 1,
    height: Sizer.hSize(52),
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1.5,
    borderColor: ONBOARDING_UI.primary,
    backgroundColor: ONBOARDING_UI.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineBtnText: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
    fontSize: Sizer.fS(15),
    color: ONBOARDING_UI.primary,
  },
  dualFooter: {
    flexDirection: 'row',
    gap: Sizer.hSize(10),
  },
  listCard: {
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: ONBOARDING_UI.cream,
    overflow: 'hidden',
  },
  listDivider: {
    height: 1,
    backgroundColor: G.divider,
    marginHorizontal: Sizer.hSize(14),
  },
  tabRow: {
    flexDirection: 'row',
    gap: Sizer.hSize(8),
    flexWrap: 'wrap',
  },
  tab: {
    paddingHorizontal: Sizer.hSize(12),
    paddingVertical: Sizer.vSize(8),
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.primary,
    backgroundColor: ONBOARDING_UI.cream,
  },
  tabActive: {
    backgroundColor: ONBOARDING_UI.primary,
    borderColor: ONBOARDING_UI.primary,
  },
  tabText: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
    fontSize: Sizer.fS(12),
    color: ONBOARDING_UI.primary,
  },
  tabTextActive: {
    color: ONBOARDING_UI.white,
  },
  mapImage: {
    width: '100%',
    height: Sizer.vSize(180),
    borderRadius: ONBOARDING_UI.radiusMd,
    overflow: 'hidden',
    marginTop: Sizer.vSize(14),
  },
  legendCard: {
    marginTop: Sizer.vSize(12),
    padding: Sizer.hSize(14),
    borderRadius: ONBOARDING_UI.radiusMd,
    backgroundColor: G.sageBanner,
    gap: Sizer.vSize(8),
  },
});

const styles = StyleSheet.create({
  headerIconWrap: {
    alignItems: 'center',
    marginBottom: Sizer.vSize(10),
  },
  headerIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: G.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomImageArea: {
    width: '100%',
    marginTop: Sizer.vSize(16),
    alignSelf: 'center',
  },
  bottomImageFill: {
    flex: 1,
    height: '100%',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(12),
    paddingHorizontal: Sizer.hSize(14),
    paddingVertical: Sizer.vSize(13),
  },
  findingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(12),
    paddingHorizontal: Sizer.hSize(14),
    paddingVertical: Sizer.vSize(12),
  },
  rowIcon: {
    width: 24,
    alignItems: 'center',
    flexShrink: 0,
  },
  rowLabel: {
    flex: 1,
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(20),
  },
  statusCheck: {
    fontWeight: '700',
    flexShrink: 0,
  },
  findingCopy: {
    flex: 1,
    minWidth: 0,
    gap: Sizer.vSize(2),
  },
  findingLabel: {
    fontFamily: FONTS.body,
    fontWeight: '400',
    lineHeight: Sizer.fS(16),
  },
  findingValue: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
    lineHeight: Sizer.fS(20),
  },
  editBtn: {
    paddingHorizontal: Sizer.hSize(12),
    paddingVertical: Sizer.vSize(6),
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.primary,
    flexShrink: 0,
  },
  editBtnText: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
  matchRing: {
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  matchRingSvg: {
    position: 'absolute',
  },
  matchPercent: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
  },
  styleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(12),
    padding: Sizer.hSize(12),
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: ONBOARDING_UI.cardBg,
  },
  styleThumb: {
    flexShrink: 0,
  },
  styleCopy: {
    flex: 1,
    minWidth: 0,
    gap: Sizer.vSize(2),
  },
  styleTitle: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
    lineHeight: Sizer.fS(20),
  },
  styleMatch: {
    fontFamily: FONTS.body,
    fontWeight: '400',
    lineHeight: Sizer.fS(17),
  },
  plantCard: {
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: ONBOARDING_UI.cardBg,
    padding: Sizer.hSize(14),
    gap: Sizer.vSize(12),
  },
  plantCardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Sizer.hSize(8),
  },
  plantCardCopy: {
    flex: 1,
    gap: Sizer.vSize(2),
  },
  plantCardTitle: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
    lineHeight: Sizer.fS(20),
  },
  plantCardSubtitle: {
    fontFamily: FONTS.body,
    fontWeight: '400',
    lineHeight: Sizer.fS(17),
  },
  plantChevron: {
    fontWeight: '400',
    lineHeight: Sizer.fS(22),
    marginTop: -2,
  },
  plantThumbs: {
    flexDirection: 'row',
    gap: Sizer.hSize(8),
  },
  plantThumb: {
    flex: 1,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(12),
    paddingHorizontal: Sizer.hSize(14),
    paddingVertical: Sizer.vSize(13),
  },
  summaryCopy: {
    flex: 1,
    minWidth: 0,
    gap: Sizer.vSize(2),
  },
  summaryLabel: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '700',
    lineHeight: Sizer.fS(18),
  },
  summaryValue: {
    fontFamily: FONTS.body,
    fontWeight: '400',
    lineHeight: Sizer.fS(19),
  },
  summaryEdit: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
    textDecorationLine: 'underline',
    flexShrink: 0,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(10),
    marginTop: Sizer.vSize(14),
    paddingHorizontal: Sizer.hSize(14),
    paddingVertical: Sizer.vSize(12),
    borderRadius: ONBOARDING_UI.radiusMd,
    backgroundColor: G.sageLight,
  },
  bannerIcon: {
    width: 24,
    alignItems: 'center',
    flexShrink: 0,
  },
  bannerText: {
    flex: 1,
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(19),
  },
  checklistRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(12),
  },
  checklistIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: ONBOARDING_UI.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  checklistMark: {
    fontWeight: '700',
    lineHeight: Sizer.fS(14),
  },
  checklistLabel: {
    flex: 1,
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(22),
  },
});
