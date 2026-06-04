import React, { useState } from 'react';
import {
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../atomComponents/Typography';
import GlassSelect from '../../components/solterra/setup/GlassSelect';
import SetupGradientOverlay from '../../components/solterra/SetupGradientOverlay';
import { onb4 } from '../../assets/images';
import { T } from '../_partials/trellisAuthUi';
import { FONTS } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';

const GOALS = ['Grow Food', 'Aesthetics', 'Pollinators', 'Low Water'];
const EXPERIENCE = ['Beginner', 'Intermediate', 'Expert'];
const SPACES = ['Backyard', 'Balcony', 'Community Plot', 'Indoor'];

const GlassField = ({ label, children }) => (
  <View style={styles.field}>
    <Text style={styles.fieldLabel}>{label.toUpperCase()}</Text>
    <View style={styles.fieldBody}>{children}</View>
  </View>
);

const ProfileSetupScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [zip, setZip] = useState('80202');
  const [experience, setExperience] = useState('Beginner');
  const [space, setSpace] = useState('Backyard');
  const [goals, setGoals] = useState(new Set(['Grow Food', 'Pollinators']));

  const toggleGoal = g => {
    setGoals(prev => {
      const next = new Set(prev);
      if (next.has(g)) next.delete(g);
      else next.add(g);
      return next;
    });
  };

  return (
    <ImageBackground
      source={onb4}
      style={styles.root}
      imageStyle={styles.bgImage}
      resizeMode="cover">
      <SetupGradientOverlay />
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <View style={[styles.topBar, { paddingTop: insets.top + Sizer.vSize(10) }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={12}>
          <Typography size={22} color="rgba(255,255,255,0.9)">
            ←
          </Typography>
        </TouchableOpacity>
        <Typography size={11} color="rgba(255,255,255,0.7)" style={{ fontWeight: '500' }}>
          Step 1 of 2
        </Typography>
        <View style={styles.topSpacer} />
      </View>

      <View
        style={[
          styles.bottomPanel,
          { paddingBottom: insets.bottom + Sizer.vSize(28), maxHeight: '78%' },
        ]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.panelScroll}>
          <View style={styles.accentPill}>
            <Text style={styles.accentPillText}>YOUR GARDEN</Text>
          </View>

          <Text style={styles.title}>Welcome to Trellis</Text>
          <Text style={styles.subtitle}>
            Tell us about your space so we can personalize your garden plan.
          </Text>

          <View style={styles.form}>
            <GlassField label="ZIP Code">
              <TextInput
                value={zip}
                onChangeText={setZip}
                placeholder="80202"
                placeholderTextColor="rgba(255,255,255,0.5)"
                keyboardType="number-pad"
                style={styles.glassInput}
                selectionColor="#FFFFFF"
              />
            </GlassField>

            <GlassField label="Experience Level">
              <GlassSelect
                label="Experience Level"
                value={experience}
                options={EXPERIENCE}
                onChange={setExperience}
              />
            </GlassField>

            <GlassField label="Space Type">
              <GlassSelect
                label="Space Type"
                value={space}
                options={SPACES}
                onChange={setSpace}
              />
            </GlassField>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>PRIMARY GOALS</Text>
              <View style={styles.goalRow}>
                {GOALS.map(g => {
                  const on = goals.has(g);
                  return (
                    <Pressable
                      key={g}
                      onPress={() => toggleGoal(g)}
                      style={[styles.goalChip, on && styles.goalChipOn]}>
                      <Text style={[styles.goalChipText, on && styles.goalChipTextOn]}>{g}</Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.continueBtn}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('GardenScanScreen')}>
          <Text style={styles.continueBtnText}>Continue →</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, overflow: 'hidden' },
  bgImage: { width: '100%', height: '100%' },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  topSpacer: { width: 28 },
  bottomPanel: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    paddingHorizontal: 20,
    paddingTop: Sizer.vSize(32),
  },
  panelScroll: { paddingBottom: 8 },
  accentPill: {
    alignSelf: 'flex-start',
    backgroundColor: T.accent,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  accentPillText: {
    fontFamily: FONTS.label,
    fontSize: Sizer.fS(10),
    letterSpacing: 1.5,
    color: T.primary,
    fontWeight: '600',
  },
  title: {
    marginTop: 12,
    fontFamily: FONTS.display,
    fontWeight: '700',
    fontSize: Sizer.fS(28),
    lineHeight: Sizer.fS(31),
    color: '#FFFFFF',
  },
  subtitle: {
    marginTop: 8,
    fontSize: Sizer.fS(13.5),
    lineHeight: Sizer.fS(21),
    color: 'rgba(255,255,255,0.9)',
  },
  form: { marginTop: 16, gap: 12 },
  field: { gap: 4 },
  fieldLabel: {
    fontFamily: FONTS.label,
    fontSize: Sizer.fS(10),
    letterSpacing: 1.2,
    color: 'rgba(255,255,255,0.7)',
  },
  fieldBody: { marginTop: 4 },
  glassInput: {
    height: Sizer.hSize(40),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 12,
    fontSize: Sizer.fS(14),
    color: '#FFFFFF',
    width: '100%',
    ...Platform.select({
      android: { paddingVertical: 8, textAlignVertical: 'center' },
      ios: { paddingVertical: 10 },
    }),
  },
  goalRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  goalChip: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  goalChipOn: { borderColor: T.accent, backgroundColor: T.accent },
  goalChipText: { fontSize: Sizer.fS(12), fontWeight: '500', color: '#FFFFFF' },
  goalChipTextOn: { color: T.primary },
  continueBtn: {
    marginTop: 24,
    height: Sizer.hSize(44),
    borderRadius: 999,
    backgroundColor: T.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueBtnText: { fontSize: Sizer.fS(14), fontWeight: '600', color: T.primary },
});

export default ProfileSetupScreen;
