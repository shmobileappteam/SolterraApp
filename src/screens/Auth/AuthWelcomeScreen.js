import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components';
import Typography from '../../atomComponents/Typography';
import Flex from '../../atomComponents/Flex';
import ImageReadabilityOverlay from '../../components/solterra/ImageReadabilityOverlay';
import { onb5 } from '../../assets/images';
import AuthShell, { authScreenStyles } from '../_partials/AuthShell';
import { trellisAuthStyles, T } from '../_partials/trellisAuthUi';

const GoogleMark = () => (
  <Text style={styles.googleG}>
    <Text style={{ color: '#4285F4' }}>G</Text>
  </Text>
);

const AuthWelcomeScreen = ({ navigation }) => (
  <ImageBackground
    source={onb5}
    style={styles.heroRoot}
    imageStyle={styles.heroImage}
    resizeMode="cover">
    <ImageReadabilityOverlay variant="onboarding" />
    <AuthShell variant="trellis" heroBg>
    <Typography style={trellisAuthStyles.displayTitle}>Welcome to Trellis</Typography>
    <Typography style={[trellisAuthStyles.bodyMuted, { marginTop: 4 }]}>
      Your personal garden companion.
    </Typography>

    <View style={authScreenStyles.authActions}>
      <Button
        label="Continue with Apple"
        type="secondary"
        height={44}
        btnStyle={trellisAuthStyles.btnSecondary}
        textStyle={trellisAuthStyles.btnSecondaryText}
        onPress={() => navigation.navigate('ProfileSetupScreen')}
      />
      <Button
        label="Continue with Google"
        type="secondary"
        height={44}
        icon={<GoogleMark />}
        btnStyle={trellisAuthStyles.btnSecondary}
        textStyle={trellisAuthStyles.btnSecondaryText}
        onPress={() => navigation.navigate('ProfileSetupScreen')}
      />

      <Flex algItems="center" gap={12} mT={4} mB={4} extraStyle={{ width: '100%' }}>
        <View style={authScreenStyles.divider} />
        <Typography size={12} color={T.muted}>
          or
        </Typography>
        <View style={authScreenStyles.divider} />
      </Flex>

      <Button
        label="Sign In with Email"
        height={44}
        btnStyle={trellisAuthStyles.btnPrimary}
        textStyle={trellisAuthStyles.btnPrimaryText}
        onPress={() => navigation.navigate('SignInScreen')}
      />
      <Button
        label="Create Account"
        type="outline"
        height={44}
        btnStyle={trellisAuthStyles.btnOutline}
        textStyle={trellisAuthStyles.btnOutlineText}
        onPress={() => navigation.navigate('SignUpScreen')}
      />
    </View>

    <Typography size={10} color={T.muted} textAlign="center" mT={16} style={{ lineHeight: 16 }}>
      By continuing, you agree to our Terms & Privacy Policy
    </Typography>
    </AuthShell>
  </ImageBackground>
);

const styles = StyleSheet.create({
  heroRoot: { flex: 1 },
  heroImage: { width: '100%', height: '100%' },
  googleG: { fontSize: 18, fontWeight: '700' },
});

export default AuthWelcomeScreen;
