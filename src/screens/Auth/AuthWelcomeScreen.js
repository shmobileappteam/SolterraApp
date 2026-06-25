import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components';
import { OnboardingFeatureIcon } from '../../components/solterra/OnboardingFeatureIcons';
import Typography from '../../atomComponents/Typography';
import Flex from '../../atomComponents/Flex';
import { authScreenStyles } from '../_partials/AuthShell';
import { trellisAuthStyles, T } from '../_partials/trellisAuthUi';
import { ONBOARDING_UI } from '../OnBoard/onboardingUi';
import SetupFlowLayout from './_partials/SetupFlowLayout';
import Sizer from '../../helpers/Sizer';
import { accountCreate } from '../../assets/images';

const GoogleMark = () => (
  <Text style={styles.googleG}>
    <Text style={{ color: '#4285F4' }}>G</Text>
  </Text>
);

const AuthWelcomeScreen = ({ navigation }) => (
  <SetupFlowLayout
    imageFirst
    centered
    title="Let's get started"
    subtitle="Create your account"
    imageSource={accountCreate}
    imageScale={1.1}
    footer={
      <Typography size={10} color={ONBOARDING_UI.text} textAlign="center" style={styles.legal}>
        By continuing, you agree to{'\n'}Trellis Terms of Service and Privacy Policy.
      </Typography>
    }>
    <View style={styles.actions}>
      <Button
        label="Continue with Apple"
        type="secondary"
        height={44}
        icon={<OnboardingFeatureIcon name="apple" color={ONBOARDING_UI.green} />}
        btnStyle={trellisAuthStyles.btnSecondary}
        textStyle={trellisAuthStyles.btnSecondaryText}
        onPress={() => navigation.navigate('ChoosePlanScreen')}
      />
      <Button
        label="Continue with Google"
        type="secondary"
        height={44}
        icon={<GoogleMark />}
        btnStyle={trellisAuthStyles.btnSecondary}
        textStyle={trellisAuthStyles.btnSecondaryText}
        onPress={() => navigation.navigate('ChoosePlanScreen')}
      />
      <Button
        label="Continue with Email"
        type="secondary"
        height={44}
        icon={<OnboardingFeatureIcon name="email" color={ONBOARDING_UI.green} />}
        btnStyle={trellisAuthStyles.btnSecondary}
        textStyle={trellisAuthStyles.btnSecondaryText}
        onPress={() => navigation.navigate('SignUpScreen')}
      />

      <Flex algItems="center" gap={12} mT={4} mB={4} extraStyle={{ width: '100%' }}>
        <View style={authScreenStyles.divider} />
        <Typography size={12} color={T.muted}>
          or
        </Typography>
        <View style={authScreenStyles.divider} />
      </Flex>

      <Typography size={13} color={ONBOARDING_UI.text} textAlign="center">
        Already have an account?
      </Typography>
      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} activeOpacity={0.7}>
        <Typography
          size={14}
          color={ONBOARDING_UI.green}
          textAlign="center"
          mT={4}
          style={styles.logInLink}>
          Log In
        </Typography>
      </TouchableOpacity>
    </View>
  </SetupFlowLayout>
);

const styles = StyleSheet.create({
  actions: {
    marginTop: Sizer.vSize(16),
    gap: 12,
  },
  googleG: {
    fontSize: 18,
    fontWeight: '700',
  },
  logInLink: {
    fontWeight: '700',
  },
  legal: {
    lineHeight: Sizer.fS(16),
    marginTop: Sizer.vSize(16),
  },
});

export default AuthWelcomeScreen;
