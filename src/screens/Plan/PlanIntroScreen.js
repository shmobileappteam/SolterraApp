import React from 'react';
import { StyleSheet, View } from 'react-native';
import { OnboardingFeatureIcon } from '../../components/solterra/OnboardingFeatureIcons';
import Typography from '../../atomComponents/Typography';
import { FONTS } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';
import { ONBOARDING_IMAGE, ONBOARDING_UI } from '../OnBoard/onboardingUi';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import { accountPlanIntro } from '../../assets/images';

const INTRO_FEATURES = [
  { icon: 'award', label: 'Tailored to your space and goals' },
  { icon: 'sprout', label: "Plant picks you'll love" },
  { icon: 'budget', label: 'Realistic for your time and budget' },
  { icon: 'actionPlan', label: 'Actionable every step of the way' },
];

const BOTTOM_IMAGE_BOX = {
  ...ONBOARDING_IMAGE.bottom,
  minHeight: 140,
  maxHeight: 170,
};

function FeatureRow({ icon, label }) {
  return (
    <View style={styles.featureRow}>
      <View style={styles.iconSlot}>
        <OnboardingFeatureIcon name={icon} />
      </View>
      <Typography size={15} color={ONBOARDING_UI.green} style={styles.featureLabel}>
        {label}
      </Typography>
    </View>
  );
}

const PlanIntroScreen = ({ navigation }) => {
  return (
    <PlanFlowLayout
      stepIndex={0}
      title="Let's create your personalized garden plan."
      subtitle="Answer a few quick questions so we can build a plan that's just right for you."
      subtitleColor={ONBOARDING_UI.green}
      bottomImageSource={accountPlanIntro}
      bottomImageScale={1.05}
      bottomImageBox={BOTTOM_IMAGE_BOX}
      footerLabel="Let's Begin"
      onNext={() => navigation.navigate('PlanAboutYouScreen')}>
      <View style={styles.featureList}>
        {INTRO_FEATURES.map(item => (
          <FeatureRow key={item.label} icon={item.icon} label={item.label} />
        ))}
      </View>
    </PlanFlowLayout>
  );
};

const styles = StyleSheet.create({
  featureList: {
    gap: Sizer.vSize(14),
    alignSelf: 'center',
    width: '100%',
    maxWidth: Sizer.hSize(320),
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizer.hSize(14),
  },
  iconSlot: {
    width: 28,
    alignItems: 'center',
    flexShrink: 0,
  },
  featureLabel: {
    flex: 1,
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(22),
  },
});

export default PlanIntroScreen;
