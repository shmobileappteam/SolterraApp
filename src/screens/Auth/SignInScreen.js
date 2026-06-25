import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, TextField } from '../../components';
import Typography from '../../atomComponents/Typography';
import Flex from '../../atomComponents/Flex';
import AuthShell, { authScreenStyles } from '../_partials/AuthShell';
import { trellisAuthStyles, T } from '../_partials/trellisAuthUi';

const SignInScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthShell variant="trellis" onBack={() => navigation.goBack()}>
      <Typography style={trellisAuthStyles.displayTitle}>Welcome Back</Typography>
      <Typography style={[trellisAuthStyles.bodyMuted, { marginTop: 4 }]}>
        Sign in to your Trellis account
      </Typography>

      <View style={authScreenStyles.formBlock}>
        <TextField
          label="Email Address"
          variant="trellis"
          defaultValue="sarah@solterra.app"
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

        <TouchableOpacity style={styles.forgotWrap}>
          <Typography size={12} color={T.sage} style={styles.forgotLink}>
            Forgot Password?
          </Typography>
        </TouchableOpacity>

        <Button
          label="Sign In"
          height={44}
          btnStyle={trellisAuthStyles.btnPrimary}
          textStyle={trellisAuthStyles.btnPrimaryText}
          onPress={() => navigation.replace('MainTabs')}
        />

        <Flex algItems="center" gap={12} mT={8} extraStyle={{ width: '100%' }}>
          <View style={authScreenStyles.divider} />
          <Typography size={12} color={T.muted}>
            new here?
          </Typography>
          <View style={authScreenStyles.divider} />
        </Flex>

        <Typography size={13} color={T.forest} textAlign="center">
          Don't have an account?{' '}
          <Typography
            size={13}
            color={T.sage}
            onPress={() => navigation.navigate('SignUpScreen')}
            style={styles.createLink}>
            Create one →
          </Typography>
        </Typography>
      </View>
    </AuthShell>
  );
};

const styles = StyleSheet.create({
  forgotWrap: { alignSelf: 'flex-end', marginTop: -4 },
  forgotLink: { textDecorationLine: 'underline' },
  createLink: { fontWeight: '600' },
});

export default SignInScreen;
