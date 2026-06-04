import React, { useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, TextField } from '../../components';
import Typography from '../../atomComponents/Typography';
import AuthShell, { authScreenStyles } from '../_partials/AuthShell';
import { trellisAuthStyles, T } from '../_partials/trellisAuthUi';
import Sizer from '../../helpers/Sizer';

const SignUpScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);

  return (
    <AuthShell variant="trellis" showRegistered onBack={() => navigation.goBack()}>
      <Typography style={trellisAuthStyles.displayTitle}>Create Account</Typography>
      <Typography style={[trellisAuthStyles.bodyMuted, { marginTop: 4 }]}>
        Start growing with Trellis today.
      </Typography>

      <View style={authScreenStyles.formBlock}>
        <TextField label="Full Name" variant="trellis" defaultValue="Emma Richardson" />
        <TextField
          label="Email Address"
          variant="trellis"
          defaultValue="emma@solterra.app"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextField
          label="Password"
          variant="trellis"
          defaultValue="password123"
          secureTextEntry={!showPassword}
          right={
            <TouchableOpacity onPress={() => setShowPassword(v => !v)}>
              <Typography size={11} color={T.muted}>
                {showPassword ? 'Hide' : 'Show'}
              </Typography>
            </TouchableOpacity>
          }
        />

        <Pressable style={styles.consentRow} onPress={() => setAgreed(a => !a)}>
          <View style={[styles.checkbox, agreed && styles.checkboxOn]}>
            {agreed ? (
              <Typography size={12} color={T.accent}>
                ✓
              </Typography>
            ) : null}
          </View>
          <Typography size={11} color={T.muted} style={styles.consentText}>
            I agree to the Terms of Service and Privacy Policy.
          </Typography>
        </Pressable>

        <Button
          label="Create Account →"
          height={44}
          btnStyle={trellisAuthStyles.btnPrimary}
          textStyle={trellisAuthStyles.btnPrimaryText}
          onPress={() => navigation.navigate('ProfileSetupScreen')}
        />

        <Typography size={13} color={T.forest} textAlign="center" mT={4}>
          Already have an account?{' '}
          <Typography
            size={13}
            color={T.sage}
            onPress={() => navigation.navigate('SignInScreen')}
            style={styles.signInLink}>
            Sign in
          </Typography>
        </Typography>
      </View>
    </AuthShell>
  );
};

const styles = StyleSheet.create({
  consentRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginTop: 4 },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: T.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkboxOn: { backgroundColor: T.primary, borderColor: T.primary },
  consentText: { flex: 1, lineHeight: Sizer.fS(18) },
  signInLink: { fontWeight: '600' },
});

export default SignUpScreen;
