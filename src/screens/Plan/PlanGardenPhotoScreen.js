import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { OnboardingFeatureIcon } from '../../components/solterra/OnboardingFeatureIcons';
import Typography from '../../atomComponents/Typography';
import { FONTS } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';
import { ONBOARDING_UI } from '../OnBoard/onboardingUi';
import { accountGardenPhoto } from '../../assets/images';
import PlanFlowLayout from './_partials/PlanFlowLayout';
import { PLAN_PHOTO_STEPS, PlanBanner, PlanInlineImage, PlanPhotoAction } from './_partials/planUi';

const PHOTO_TIPS = [
  { icon: 'camera', label: 'Capture 3-5 photos of your space' },
  { icon: 'puzzle', label: 'Include your entire space' },
  { icon: 'flower', label: 'Show your garden beds and features' },
  { icon: 'climate', label: 'Get photos of sunny and shady areas' },
];

const HERO_IMAGE_RATIO = 0.9;
const HERO_IMAGE_SCALE = 1;

const PlanGardenPhotoScreen = ({ navigation }) => {
  const [tipsVisible, setTipsVisible] = useState(false);

  return (
    <PlanFlowLayout
      stepIndex={3}
      stepCount={PLAN_PHOTO_STEPS}
      title="Add a photo or scan your space."
      subtitle="This helps us understand your space and create a better plan."
      footerLabel="Get Started"
      onNext={() => navigation.navigate('PlanAnalyzingScreen')}>
      <View style={[styles.heroSection, tipsVisible && styles.heroRow]}>
        <PlanInlineImage
          imageSource={accountGardenPhoto}
          imageScale={tipsVisible ? 1 : HERO_IMAGE_SCALE}
          widthRatio={tipsVisible ? 0.46 : HERO_IMAGE_RATIO}
          centered={!tipsVisible}
          onPress={() => setTipsVisible(visible => !visible)}
        />

        {tipsVisible ? (
          <View style={styles.tipsPanel}>
            {PHOTO_TIPS.map(tip => (
              <View key={tip.label} style={styles.tipRow}>
                <View style={styles.tipIcon}>
                  <OnboardingFeatureIcon name={tip.icon} color={ONBOARDING_UI.green} />
                </View>
                <Typography size={12} color={ONBOARDING_UI.green} style={styles.tipLabel}>
                  {tip.label}
                </Typography>
              </View>
            ))}
          </View>
        ) : null}
      </View>

      {tipsVisible ? (
        <PlanBanner icon="camera" text="You can skip this and add photos later" />
      ) : null}

      <View style={styles.photoActions}>
        <PlanPhotoAction icon="camera" label="Take a Photo" onPress={() => {}} />
        <PlanPhotoAction icon="gallery" label="Upload from Gallery" onPress={() => {}} />
      </View>
    </PlanFlowLayout>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    width: '100%',
    marginTop: Sizer.vSize(4),
  },
  heroRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Sizer.hSize(10),
  },
  tipsPanel: {
    flex: 1,
    minWidth: 0,
    borderRadius: ONBOARDING_UI.radiusMd,
    borderWidth: 1,
    borderColor: ONBOARDING_UI.cardBorder,
    backgroundColor: ONBOARDING_UI.cardBg,
    paddingHorizontal: Sizer.hSize(10),
    paddingVertical: Sizer.vSize(12),
    gap: Sizer.vSize(10),
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Sizer.hSize(8),
  },
  tipIcon: {
    width: 22,
    alignItems: 'center',
    flexShrink: 0,
    marginTop: 1,
  },
  tipLabel: {
    flex: 1,
    fontFamily: FONTS.body,
    fontWeight: '500',
    lineHeight: Sizer.fS(17),
  },
  photoActions: {
    flexDirection: 'row',
    gap: Sizer.hSize(12),
    marginTop: Sizer.vSize(18),
  },
});

export default PlanGardenPhotoScreen;
