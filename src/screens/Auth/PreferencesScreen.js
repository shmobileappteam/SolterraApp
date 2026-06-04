import React, { useEffect } from 'react';

/** Legacy route — forwards to profile setup (web mobile) */
const PreferencesScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.replace('ProfileSetupScreen');
  }, [navigation]);
  return null;
};

export default PreferencesScreen;
