import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components';
import Typography from '../../atomComponents/Typography';
import Flex from '../../atomComponents/Flex';
import { authScreenStyles } from '../_partials/AuthShell';
import { trellisAuthStyles, T } from '../_partials/trellisAuthUi';
import { ONBOARDING_UI } from '../OnBoard/onboardingUi';
import SetupFlowLayout from './_partials/SetupFlowLayout';
import Sizer from '../../helpers/Sizer';

const GoogleMark = () => (
  <Text style={styles.googleG}>
    <Text style={{ color: '#4285F4' }}>G</Text>
  </Text>
);

const AuthWelcomeScreen = ({ navigation }) => (
  <SetupFlowLayout
    imageFirst
    title="Let's get started"
    subtitle="Create your account."
    imageKey="setup-create-account"
    footer={
      <Typography size={10} color={ONBOARDING_UI.text} textAlign="center" style={styles.legal}>
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </Typography>
    }>
    <View style={styles.actions}>
      <Button
        label="Continue with Apple"
        type="secondary"
        height={44}
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

      <Typography size={13} color={ONBOARDING_UI.green} textAlign="center">
        Already have an account?{' '}
        <Typography
          size={13}
          color={ONBOARDING_UI.primary}
          onPress={() => navigation.navigate('SignInScreen')}
          style={styles.logInLink}>
          Log In
        </Typography>
      </Typography>
    </View>
  </SetupFlowLayout>
);

const styles = StyleSheet.create({
  actions: {
    marginTop: Sizer.vSize(4),
    gap: 10,
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
  },
});

export default AuthWelcomeScreen;
