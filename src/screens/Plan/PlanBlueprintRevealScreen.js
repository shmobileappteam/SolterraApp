import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button } from '../../components';
import OnboardingImagePlaceholder from '../../components/solterra/OnboardingImagePlaceholder';
import OnboardingPagination from '../../components/solterra/OnboardingPagination';
import { OnboardingFeatureIcon } from '../../components/solterra/OnboardingFeatureIcons';
import Typography from '../../atomComponents/Typography';
import { FONTS } from '../../globalStyle/Theme';
import { getOnboardingPlaceholderSource } from '../OnBoard/onboardingPlaceholderImages';
import { ONBOARDING_UI } from '../OnBoard/onboardingUi';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import { PLAN_FINAL_STEPS, planUiStyles } from './_partials/planUi';

const TABS = ['Overview', 'Layout', 'Plants', 'Projects'];

const LEGEND = [
  { icon: 'climate', label: 'Full sun' },
  { icon: 'track', label: 'Partial sun' },
  { icon: 'leaf', label: 'Shade' },
  { icon: 'space', label: 'Path' },
  { icon: 'droplet', label: 'Water' },
];

const PlanBlueprintRevealScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const mapSource = getOnboardingPlaceholderSource('plan-blueprint-map', {
    maxWidth: 320,
    maxHeight: 180,
  });

  return (
    <PlanFlowLayout
      stepIndex={3}
      stepCount={PLAN_FINAL_STEPS}
      title="Your garden blueprint is ready!"
      subtitle="Here's your custom garden plan."
      subtitleColor={ONBOARDING_UI.green}
      hideButton
      hidePagination
      footer={
        <>
          <OnboardingPagination count={PLAN_FINAL_STEPS} index={3} />
          <View style={planUiStyles.dualFooter}>
            <TouchableOpacity style={planUiStyles.outlineBtn} activeOpacity={0.8}>
              <Typography size={15} color={ONBOARDING_UI.primary} style={planUiStyles.outlineBtnText}>
                Edit Plan
              </Typography>
            </TouchableOpacity>
            <Button
              label="Approve Plan"
              onPress={() => navigation.navigate('PlanDashboardHandoffScreen')}
              height={52}
              btnStyle={[planUiStyles.primaryBtn, { flex: 1 }]}
              textStyle={planUiStyles.primaryBtnText}
            />
          </View>
        </>
      }>
      <View style={planUiStyles.tabRow}>
        {TABS.map(tab => {
          const active = tab === activeTab;
          return (
            <TouchableOpacity
              key={tab}
              style={[planUiStyles.tab, active && planUiStyles.tabActive]}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.85}>
              <Typography
                size={12}
                color={active ? ONBOARDING_UI.white : ONBOARDING_UI.primary}
                style={[planUiStyles.tabText, active && planUiStyles.tabTextActive]}>
                {tab}
              </Typography>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={planUiStyles.mapImage}>
        <OnboardingImagePlaceholder
          source={mapSource}
          imageKey="plan-blueprint-map"
          minHeight={180}
          maxHeight={180}
          borderRadius={ONBOARDING_UI.radiusMd}
          resizeMode="cover"
          flexFill={false}
          style={{ flex: 1, height: '100%' }}
        />
      </View>

      <View style={planUiStyles.legendCard}>
        <Typography size={14} color={ONBOARDING_UI.green} style={{ fontFamily: FONTS.bodySemiBold, fontWeight: '700' }}>
          Legend
        </Typography>
        {LEGEND.map(item => (
          <View key={item.label} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <OnboardingFeatureIcon name={item.icon} />
            <Typography size={13} color={ONBOARDING_UI.green}>
              {item.label}
            </Typography>
          </View>
        ))}
      </View>
    </PlanFlowLayout>
  );
};

export default PlanBlueprintRevealScreen;
