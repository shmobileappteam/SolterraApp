import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import { IconCamera, IconInfo, IconSend } from '../../../components/solterra/ask/AskSolUiParts';
import { plant1, solMascot } from '../../../assets/images';
import { COLORS, FONTS, SHADOWS } from '../../../globalStyle/Theme';
import { G } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const PROMPTS = [
  '🌱 How do I start a veggie garden?',
  '🐛 My plant has yellow leaves',
  '☀️ What to plant this season?',
  '💧 Watering schedule help',
];

const TIPS = [
  '• Let soil dry between waterings',
  '• Check drainage holes',
  '• Trim yellowed leaves',
];

const AskSolScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const [active, setActive] = useState(route.params?.active ?? false);

  const startChat = () => setActive(true);

  const goShop = () => {
    navigation.navigate('MainTabs', { screen: 'ShopScreen' });
  };

  return (
    <View style={styles.page}>
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={12}>
          <Typography size={18} color="rgba(255,255,255,0.8)">
            ←
          </Typography>
        </TouchableOpacity>
        <Typography size={18} color={COLORS.white} style={styles.headerTitle}>
          Ask Sol 🤖
        </Typography>
        <TouchableOpacity hitSlop={12} accessibilityLabel="Info">
          <IconInfo />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}>
        {active ? (
          <ScrollView
            contentContainerStyle={styles.chatScroll}
            showsVerticalScrollIndicator={false}>
            <Typography size={10.5} color={G.muted} style={styles.timestamp}>
              Today, 9:42 AM
            </Typography>

            <View style={styles.userBubble}>
              <Typography size={14} color={COLORS.white}>
                My monstera has yellow leaves on the bottom. What's wrong?
              </Typography>
            </View>

            <View style={styles.solRow}>
              <View style={styles.solAvatar}>
                <Typography size={11} color={COLORS.accent} style={{ fontWeight: '700' }}>
                  S
                </Typography>
              </View>
              <View style={styles.solBubble}>
                <Text style={styles.solBubbleText}>
                  That's usually a sign of <Text style={{ fontWeight: '700' }}>overwatering</Text> 🌱.
                  Let me show you what I see.
                </Text>
              </View>
            </View>

            <View style={styles.diagnosisCard}>
              <View style={styles.diagnosisHead}>
                <Image source={plant1} style={styles.diagnosisImg} />
                <View style={styles.diagnosisCopy}>
                  <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
                    Root Rot (Early Stage)
                  </Typography>
                  <View style={styles.confidence}>
                    <Typography size={10} color={COLORS.success} style={{ fontWeight: '600' }}>
                      92% Confidence
                    </Typography>
                  </View>
                </View>
              </View>
              {TIPS.map(tip => (
                <Typography key={tip} size={12.5} color={G.forest} mT={6} style={{ opacity: 0.85 }}>
                  {tip}
                </Typography>
              ))}
              <TouchableOpacity style={styles.shopBtn} activeOpacity={0.88} onPress={goShop}>
                <Typography size={12.5} color={COLORS.accent} style={{ fontWeight: '600' }}>
                  Shop Treatment →
                </Typography>
              </TouchableOpacity>
            </View>

            <View style={styles.solRow}>
              <View style={styles.solAvatar}>
                <Typography size={11} color={COLORS.accent} style={{ fontWeight: '700' }}>
                  S
                </Typography>
              </View>
              <View style={styles.typingBubble}>
                <View style={styles.typingDots}>
                  {[0, 1, 2].map(i => (
                    <View key={i} style={styles.typingDot} />
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>
        ) : (
          <ScrollView
            contentContainerStyle={styles.idleScroll}
            showsVerticalScrollIndicator={false}>
            <Image source={solMascot} style={styles.mascot} resizeMode="contain" />
            <Text style={styles.idleTitle}>Hi! I'm Sol 🌿</Text>
            <Typography size={14.5} color={G.muted} lineHeight={20} style={styles.idleSub}>
              Your personal garden expert. Ask me anything!
            </Typography>
            <View style={styles.promptList}>
              {PROMPTS.map(p => (
                <TouchableOpacity
                  key={p}
                  style={styles.promptChip}
                  activeOpacity={0.88}
                  onPress={startChat}>
                  <Typography size={13.5} color={G.forest}>
                    {p}
                  </Typography>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        )}

        <View style={[styles.inputBar, { paddingBottom: insets.bottom + 12 }]}>
          <View style={styles.inputInner}>
            <TouchableOpacity style={styles.camBtn} activeOpacity={0.8}>
              <IconCamera />
            </TouchableOpacity>
            <TextInput
              placeholder="Message Sol..."
              placeholderTextColor={G.muted}
              style={styles.input}
            />
            <TouchableOpacity style={styles.sendBtn} activeOpacity={0.88} onPress={startChat}>
              <IconSend />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: G.cream },
  flex: { flex: 1 },
  header: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    lineHeight: 24,
    includeFontPadding: false,
  },
  chatScroll: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 100,
  },
  timestamp: { textAlign: 'center', marginBottom: 12 },
  userBubble: {
    alignSelf: 'flex-end',
    maxWidth: '78%',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    borderBottomRightRadius: 4,
    marginBottom: 12,
  },
  solRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    marginBottom: 12,
  },
  solAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  solBubble: {
    maxWidth: '78%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: G.divider,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    borderBottomLeftRadius: 4,
  },
  diagnosisCard: {
    marginLeft: 40,
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.accent,
    borderRadius: 16,
    padding: 16,
    ...SHADOWS.soft,
    marginBottom: 12,
  },
  solBubbleText: { fontSize: 14, color: G.forest, lineHeight: 20 },
  diagnosisHead: { flexDirection: 'row', gap: 12 },
  diagnosisImg: { width: 64, height: 64, borderRadius: 12 },
  diagnosisCopy: { flex: 1, minWidth: 0 },
  confidence: {
    alignSelf: 'flex-start',
    marginTop: 4,
    backgroundColor: 'rgba(45,122,82,0.12)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
  },
  shopBtn: {
    marginTop: 12,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typingBubble: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: G.divider,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    borderBottomLeftRadius: 4,
  },
  typingDots: { flexDirection: 'row', gap: 4, alignItems: 'center' },
  typingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
  },
  idleScroll: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 100,
    alignItems: 'center',
  },
  mascot: { width: 176, height: 176, marginTop: 8 },
  idleTitle: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    fontSize: 26,
    lineHeight: 36,
    color: G.forest,
    textAlign: 'center',
    marginTop: 10,
    includeFontPadding: false,
  },
  idleSub: {
    textAlign: 'center',
    marginTop: 8,
    maxWidth: 280,
  },
  promptList: { width: '100%', marginTop: 24, gap: 10 },
  promptChip: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: G.divider,
    ...SHADOWS.soft,
  },
  inputBar: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: G.cream,
  },
  inputInner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: G.divider,
    height: 56,
    paddingHorizontal: 12,
    gap: 8,
    ...SHADOWS.card,
  },
  camBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: G.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: G.forest,
    paddingVertical: 0,
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AskSolScreen;
