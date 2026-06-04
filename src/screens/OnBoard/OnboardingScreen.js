import React, { useState } from 'react';
import {
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../atomComponents/Typography';
import Flex from '../../atomComponents/Flex';
import OnboardingGradientOverlay from '../../components/solterra/OnboardingGradientOverlay';
import { onb1, onb2, onb3, onb4, onb5 } from '../../assets/images';
import { COLORS, FONTS, RADIUS, SHADOWS } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';

const SLIDES = [
  {
    pill: 'Welcome',
    title: 'Your Personal Garden Consultant.',
    body: 'AI-powered advice, expert learning, and everything you need to grow a thriving garden.',
    image: onb1,
    chips: [],
    final: false,
  },
  {
    pill: 'AI Assistant',
    title: 'Meet Sol, Your Garden AI.',
    body: 'Chat with Sol anytime. Get care advice, diagnose issues, and receive personalized seasonal tips.',
    image: onb2,
    chips: ['🌱 Plant Care', '🐛 Diagnose', '☀️ Seasonal'],
    final: false,
  },
  {
    pill: 'Learn',
    title: 'A Garden School in Your Pocket.',
    body: 'Tutorials, guides, videos, and expert tips — organized by plant type, skill level, and season.',
    image: onb3,
    chips: ['📚 Tutorials', '🎬 Videos', '🌿 Guides'],
    final: false,
  },
  {
    pill: 'Shop',
    title: 'Everything Your Garden Needs.',
    body: 'Shop plants, seeds, tools, fertilizers, and irrigation — curated for your garden type.',
    image: onb4,
    chips: ['🌱 Plants', '🛠 Tools', '🪴 Pots', '💧 Irrigation'],
    final: false,
  },
  {
    pill: 'Get Started',
    title: 'Grow Something Beautiful.',
    body: 'Join thousands of gardeners growing smarter with SolTerra.',
    image: onb5,
    chips: [],
    final: true,
  },
];

const OnboardingDots = ({ count, index, onSelect, style }) => (
  <View style={[styles.dotsRow, style]}>
    {Array.from({ length: count }).map((_, i) => (
      <Pressable
        key={i}
        onPress={() => onSelect(i)}
        style={[styles.dot, i === index && styles.dotActive]}
      />
    ))}
  </View>
);

const OnboardingScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];
  const last = slide.final;
  const isFirst = index === 0;

  const next = () => {
    if (index < SLIDES.length - 1) setIndex(index + 1);
    else navigation.replace('AuthWelcomeScreen');
  };

  return (
    <ImageBackground
      source={slide.image}
      style={styles.root}
      imageStyle={styles.bgImage}
      resizeMode="cover">
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <OnboardingGradientOverlay />

      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <View style={[styles.topBar, { paddingTop: insets.top + Sizer.vSize(8) }]}>
          <Typography variant="label" color="rgba(255,255,255,0.85)">
            SOLTERRA
          </Typography>
          <TouchableOpacity
            style={styles.skip}
            onPress={() => navigation.replace('AuthWelcomeScreen')}
            activeOpacity={0.8}>
            <Typography size={13} color="rgba(255,255,255,0.9)" style={styles.skipText}>
              Skip
            </Typography>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPanel}>
          <View style={styles.pill}>
            <Typography variant="label" color={COLORS.primary}>
              {slide.pill.toUpperCase()}
            </Typography>
          </View>

          <Typography size={30} color={COLORS.white} mT={16} style={styles.title}>
            {slide.title}
          </Typography>

          <Typography size={14.5} color="rgba(255,255,255,0.9)" mT={12} style={styles.body}>
            {slide.body}
          </Typography>

          {slide.chips.length > 0 && (
            <Flex direction="row" flexWrap="wrap" gap={8} mT={14}>
              {slide.chips.map(c => (
                <View key={c} style={styles.chip}>
                  <Typography variant="caption" color={COLORS.white}>
                    {c}
                  </Typography>
                </View>
              ))}
            </Flex>
          )}

          {/* Slide 1 mock: dots left + Next right on one row; later slides: dots, then Back | Next */}
          {isFirst ? (
            <View style={styles.controlsRow}>
              <OnboardingDots count={SLIDES.length} index={index} onSelect={setIndex} />
              <TouchableOpacity style={styles.nextBtn} onPress={next} activeOpacity={0.85}>
                <Typography variant="bodySm" color={COLORS.primary} style={styles.nextLabel}>
                  Next →
                </Typography>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <OnboardingDots
                count={SLIDES.length}
                index={index}
                onSelect={setIndex}
                style={styles.dotsSpaced}
              />
              <View style={styles.navRow}>
                <TouchableOpacity
                  onPress={() => setIndex(index - 1)}
                  activeOpacity={0.7}
                  style={styles.backBtn}>
                  <Typography variant="bodySm" color="rgba(255,255,255,0.8)" style={styles.backText}>
                    ← Back
                  </Typography>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextBtn} onPress={next} activeOpacity={0.85}>
                  <Typography variant="bodySm" color={COLORS.primary} style={styles.nextLabel}>
                    {last ? 'Get Started' : 'Next'} →
                  </Typography>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {last && (
            <Pressable
              onPress={() => navigation.navigate('SignInScreen')}
              style={styles.signInLink}>
              <Typography variant="bodySm" color="rgba(255,255,255,0.9)" textAlign="center">
                Already have an account? Sign In
              </Typography>
            </Pressable>
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, overflow: 'hidden' },
  bgImage: { width: '100%', height: '100%' },
  safe: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    zIndex: 2,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Sizer.hSize(24),
    zIndex: 2,
  },
  skip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: RADIUS.pill,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  skipText: { fontWeight: '500' },
  bottomPanel: {
    paddingHorizontal: Sizer.hSize(24),
    paddingBottom: Sizer.vSize(28),
    paddingTop: Sizer.vSize(12),
    zIndex: 2,
  },
  pill: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.accent,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: RADIUS.pill,
  },
  title: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    lineHeight: Sizer.fS(33),
  },
  body: { lineHeight: Sizer.fS(22), maxWidth: '95%' },
  chip: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: RADIUS.pill,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Sizer.vSize(22),
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dotsSpaced: { marginTop: Sizer.vSize(22) },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  dotActive: {
    width: 28,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accent,
  },
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Sizer.vSize(18),
  },
  backBtn: { paddingHorizontal: 12, paddingVertical: 8 },
  backText: { fontWeight: '500' },
  nextBtn: {
    minHeight: Sizer.vSize(48),
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.soft,
  },
  nextLabel: { fontWeight: '600', fontSize: Sizer.fS(14) },
  signInLink: { marginTop: 16, alignSelf: 'center' },
});

export default OnboardingScreen;
