import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../customButtons/Button';
import { OnboardingFeatureIcon } from './OnboardingFeatureIcons';
import OnboardingImagePlaceholder from './OnboardingImagePlaceholder';
import { getOnboardingThumbSource } from '../../screens/OnBoard/onboardingPlaceholderImages';
import Typography from '../../atomComponents/Typography';
import { FONTS, RADIUS } from '../../globalStyle/Theme';
import { G } from '../../screens/_partials/gardenUi';
import { ONBOARDING_UI } from '../../screens/OnBoard/onboardingUi';
import Sizer from '../../helpers/Sizer';

function PreviewCard({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

function CardHeader({ title, actionLabel }) {
  return (
    <View style={styles.cardHeader}>
      <Typography size={14} color={ONBOARDING_UI.green} style={styles.cardHeaderTitle}>
        {title}
      </Typography>
      {actionLabel ? (
        <Typography size={12} color={ONBOARDING_UI.primary} style={styles.link}>
          {actionLabel}
        </Typography>
      ) : null}
    </View>
  );
}

function LinkText({ label, style }) {
  return (
    <Typography size={12} color={ONBOARDING_UI.primary} textAlign="center" style={[styles.link, style]}>
      {label}
    </Typography>
  );
}

function TaskCheckbox({ checked }) {
  return (
    <View style={[styles.taskCheck, checked && styles.taskCheckOn]}>
      {checked ? (
        <Typography size={10} color={ONBOARDING_UI.white} style={styles.taskCheckMark}>
          ✓
        </Typography>
      ) : null}
    </View>
  );
}

function ThumbPlaceholder({ size = 44, radius = RADIUS.sm, imageKey }) {
  return (
    <OnboardingImagePlaceholder
      source={getOnboardingThumbSource(imageKey, size)}
      imageKey={imageKey}
      compact
      minHeight={size}
      maxHeight={size}
      maxWidth={size}
      borderRadius={radius}
      style={styles.thumb}
    />
  );
}

export function TaskPreviewCard({ data }) {
  return (
    <PreviewCard>
      <CardHeader title={data.title} actionLabel={data.date} />
      <View style={styles.cardBody}>
        {data.tasks.map(task => (
          <View key={task.label} style={styles.taskRow}>
            <TaskCheckbox checked={task.checked} />
            <Typography size={13} color={ONBOARDING_UI.green} style={styles.taskLabel}>
              {task.label}
            </Typography>
            {task.checked ? (
              <Typography size={12} color={ONBOARDING_UI.primary} style={styles.taskDone}>
                ✓
              </Typography>
            ) : null}
          </View>
        ))}
        <LinkText label={data.footerLink} style={styles.taskFooterLink} />
      </View>
    </PreviewCard>
  );
}

export function CommunityPreviewCard({ data }) {
  return (
    <PreviewCard>
      <CardHeader title={data.title} actionLabel={data.actionLabel} />
      <View style={styles.tabRow}>
        {data.tabs.map(tab => (
          <View
            key={tab.label}
            style={[styles.tabPill, tab.active && styles.tabPillActive]}>
            <Typography
              size={11}
              color={tab.active ? ONBOARDING_UI.green : ONBOARDING_UI.text}
              style={styles.tabLabel}>
              {tab.label}
            </Typography>
          </View>
        ))}
      </View>
      <View style={styles.postHeader}>
        <ThumbPlaceholder size={28} radius={RADIUS.pill} imageKey="community-avatar" />
        <View style={styles.postMeta}>
          <Typography size={12} color={ONBOARDING_UI.green} style={styles.postName}>
            {data.post.author}
          </Typography>
          <Typography size={10} color={ONBOARDING_UI.text}>
            {data.post.time}
          </Typography>
        </View>
      </View>
      <Typography size={12} color={ONBOARDING_UI.green} style={styles.postText}>
        {data.post.text}
      </Typography>
      <View style={styles.postPhotos}>
        <ThumbPlaceholder size={54} imageKey="community-photo-1" />
        <ThumbPlaceholder size={54} imageKey="community-photo-2" />
      </View>
      <View style={styles.reactionRow}>
        <View style={styles.reactionItem}>
          <OnboardingFeatureIcon name="heart" />
          <Typography size={11} color={ONBOARDING_UI.text}>
            {data.post.likes}
          </Typography>
        </View>
        <View style={styles.reactionItem}>
          <OnboardingFeatureIcon name="comment" />
          <Typography size={11} color={ONBOARDING_UI.text}>
            {data.post.comments}
          </Typography>
        </View>
      </View>
    </PreviewCard>
  );
}

export function ProjectsPreviewCard({ data }) {
  return (
    <PreviewCard>
      <CardHeader title={data.title} actionLabel={data.actionLabel} />
      <View style={styles.cardBody}>
        {data.items.map(item => (
          <View key={item.title} style={styles.projectRow}>
            <ThumbPlaceholder size={44} imageKey={`project-${item.title}`} />
            <View style={styles.projectCopy}>
              <Typography size={13} color={ONBOARDING_UI.green} style={styles.projectTitle}>
                {item.title}
              </Typography>
              <Typography size={11} color={ONBOARDING_UI.text}>
                {item.subtitle}
              </Typography>
            </View>
          </View>
        ))}
      </View>
    </PreviewCard>
  );
}

export function DiagnosePreviewCard({ data }) {
  if (!data) {
    return null;
  }

  return (
    <PreviewCard>
      <Typography size={14} color={ONBOARDING_UI.green} style={styles.diagnoseEyebrow}>
        {data.eyebrow}
      </Typography>
      <Typography size={11} color={ONBOARDING_UI.text} mT={6}>
        {data.issueLabel}
      </Typography>
      <Typography size={20} color={ONBOARDING_UI.green} mT={4} style={styles.diagnoseTitle}>
        {data.issue}
      </Typography>
      <Typography size={12} color={ONBOARDING_UI.text} mT={6} style={styles.diagnoseBody}>
        {data.description}
      </Typography>
      <Button
        label={data.actionLabel}
        type="secondary"
        height={40}
        onPress={() => {}}
        btnStyle={styles.diagnoseBtn}
        textStyle={styles.diagnoseBtnText}
      />
    </PreviewCard>
  );
}

function StatRow({ icon, label, value }) {
  return (
    <View style={styles.statRow}>
      <View style={styles.statLeft}>
        <OnboardingFeatureIcon name={icon} />
        <Typography size={12} color={ONBOARDING_UI.green} style={styles.statLabel}>
          {label}
        </Typography>
      </View>
      <Typography size={12} color={ONBOARDING_UI.green} style={styles.statValue}>
        {value}
      </Typography>
    </View>
  );
}

export function ProgressPreviewCard({ data }) {
  const scoreItem = data.stats.find(item => item.score);
  const regularStats = data.stats.filter(item => !item.score);

  return (
    <PreviewCard>
      <CardHeader title={data.title} actionLabel={data.periodLabel} />
      <View style={styles.cardBody}>
        {regularStats.map(item => (
          <StatRow key={item.label} icon={item.icon} label={item.label} value={item.value} />
        ))}
        {scoreItem ? (
          <View style={styles.scoreBlock}>
            <StatRow icon={scoreItem.icon} label={scoreItem.label} value={scoreItem.value} />
            <Typography size={11} color={ONBOARDING_UI.text} style={styles.scoreSubtext}>
              {scoreItem.subtext}
            </Typography>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${scoreItem.progress ?? 92}%` }]} />
            </View>
          </View>
        ) : null}
      </View>
    </PreviewCard>
  );
}

export function OnboardingPreviewBlock({ variant, data }) {
  if (!variant || !data) {
    return null;
  }

  switch (variant) {
    case 'taskCard':
      return <TaskPreviewCard data={data} />;
    case 'communityCard':
      return <CommunityPreviewCard data={data} />;
    case 'projectsCard':
      return <ProjectsPreviewCard data={data} />;
    case 'diagnoseCard':
      return <DiagnosePreviewCard data={data} />;
    case 'progressCard':
      return <ProgressPreviewCard data={data} />;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: Sizer.vSize(12),
    backgroundColor: ONBOARDING_UI.cardBg,
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    paddingHorizontal: Sizer.hSize(14),
    paddingVertical: Sizer.vSize(12),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Sizer.vSize(10),
  },
  cardHeaderTitle: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
  cardBody: {
    gap: Sizer.vSize(10),
  },
  link: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(10),
  },
  taskCheck: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: G.divider,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskCheckOn: {
    backgroundColor: ONBOARDING_UI.primary,
    borderColor: ONBOARDING_UI.primary,
  },
  taskCheckMark: {
    fontWeight: '700',
    lineHeight: Sizer.fS(12),
  },
  taskLabel: {
    flex: 1,
    fontFamily: FONTS.body,
    fontWeight: '500',
  },
  taskDone: {
    fontWeight: '700',
  },
  taskFooterLink: {
    marginTop: Sizer.vSize(2),
  },
  tabRow: {
    flexDirection: 'row',
    gap: Sizer.hSize(6),
    marginBottom: Sizer.vSize(10),
  },
  tabPill: {
    paddingHorizontal: Sizer.hSize(10),
    paddingVertical: Sizer.vSize(5),
    borderRadius: RADIUS.pill,
  },
  tabPillActive: {
    backgroundColor: G.sageLight,
  },
  tabLabel: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(8),
    marginBottom: Sizer.vSize(6),
  },
  postMeta: {
    flex: 1,
  },
  postName: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
  postText: {
    lineHeight: Sizer.fS(17),
    marginBottom: Sizer.vSize(8),
  },
  postPhotos: {
    flexDirection: 'row',
    gap: Sizer.hSize(8),
    marginBottom: Sizer.vSize(8),
  },
  reactionRow: {
    flexDirection: 'row',
    gap: Sizer.hSize(14),
  },
  reactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(4),
  },
  projectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(10),
  },
  projectCopy: {
    flex: 1,
    gap: Sizer.vSize(2),
  },
  projectTitle: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
  thumb: {
    flex: 0,
  },
  diagnoseEyebrow: {
    fontFamily: FONTS.display,
    fontWeight: '700',
  },
  diagnoseTitle: {
    fontFamily: FONTS.display,
    fontWeight: '700',
  },
  diagnoseBody: {
    lineHeight: Sizer.fS(17),
    marginBottom: Sizer.vSize(10),
  },
  diagnoseBtn: {
    width: '100%',
    marginTop: Sizer.vSize(2),
  },
  diagnoseBtnText: {
    color: ONBOARDING_UI.green,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(8),
    flex: 1,
  },
  statLabel: {
    fontFamily: FONTS.body,
    fontWeight: '500',
  },
  statValue: {
    fontFamily: FONTS.bodySemiBold,
    fontWeight: '600',
  },
  scoreBlock: {
    gap: Sizer.vSize(4),
  },
  scoreSubtext: {
    marginLeft: Sizer.hSize(30),
  },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: G.sageLight,
    marginTop: Sizer.vSize(4),
    marginLeft: Sizer.hSize(30),
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: G.sage,
    borderRadius: 4,
  },
});
