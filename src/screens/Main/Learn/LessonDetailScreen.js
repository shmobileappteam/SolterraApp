import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, PlaceholderImage } from '../../../components';
import Typography from '../../../atomComponents/Typography';
import Flex from '../../../atomComponents/Flex';
import { COLORS, SHADOWS, SPACING } from '../../../globalStyle/Theme';
import Sizer from '../../../helpers/Sizer';
import { learnStyles as styles } from '../../_partials/learnStyles';

const LessonDetailScreen = ({ navigation }) => {
  const lessons = [
    { t: 'Intro · Choosing your varieties', d: '6 min', done: true },
    { t: 'Starting seeds indoors', d: '9 min', done: true },
    { t: 'Transplanting & spacing', d: '7 min', done: true },
    { t: 'Staking, pruning & feeding', d: '12 min', current: true },
    { t: 'Pest & disease watch', d: '10 min' },
    { t: 'Harvesting & saving seeds', d: '8 min' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <View style={styles.hero}>
        <PlaceholderImage height={220} color={COLORS.green700} emoji="🍅" />
        <View style={styles.heroNav}>
          <TouchableOpacity style={styles.glassBtn} onPress={() => navigation.goBack()}>
            <Typography color={COLORS.white}>←</Typography>
          </TouchableOpacity>
          <Flex gap={8}>
            <TouchableOpacity style={styles.glassBtn}>
              <Typography color={COLORS.white}>♡</Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.glassBtn}>
              <Typography color={COLORS.white}>↗</Typography>
            </TouchableOpacity>
          </Flex>
        </View>
        <View style={styles.heroTitle}>
          <View style={styles.featuredBadge}>
            <Typography variant="micro" color={COLORS.primary} style={{ fontWeight: '600' }}>
              VEGETABLES · COURSE
            </Typography>
          </View>
          <Typography variant="h2" color={COLORS.white} mT={8}>
            Growing Heirloom Tomatoes
          </Typography>
          <Typography variant="caption" color="rgba(255,255,255,0.8)" mT={4}>
            12 lessons · 1h 45m · By Maya Chen
          </Typography>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: Sizer.hSize(SPACING.screenPx), paddingBottom: 40 }}>
        <View style={styles.progressCard}>
          <View>
            <Typography variant="caption" color={COLORS.textMuted}>
              Your Progress
            </Typography>
            <Typography variant="h3" mT={2}>
              65% complete
            </Typography>
          </View>
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.navigate('AskSolScreen', { active: true })}>
            <Typography variant="caption" color={COLORS.accent} style={{ fontWeight: '600' }}>
              Continue →
            </Typography>
          </TouchableOpacity>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: '65%' }]} />
        </View>

        <Typography variant="h3" mT={20} mB={8}>
          About this course
        </Typography>
        <Typography variant="bodySm" color={COLORS.textMuted}>
          Learn how to grow rich, flavorful heirloom tomatoes from seed to harvest. Covers soil prep,
          transplanting, staking, pest care, and harvest timing.
        </Typography>

        <Typography variant="h3" mT={20} mB={10}>
          Lessons
        </Typography>
        {lessons.map((l, i) => (
          <View
            key={l.t}
            style={[styles.lessonRow, l.current && styles.lessonRowCurrent]}>
            <View
              style={[
                styles.lessonNum,
                (l.done || l.current) && { backgroundColor: COLORS.primary },
              ]}>
              <Typography
                variant="caption"
                color={l.done || l.current ? COLORS.accent : COLORS.textMuted}
                style={{ fontWeight: '600' }}>
                {l.done ? '✓' : i + 1}
              </Typography>
            </View>
            <View style={{ flex: 1 }}>
              <Typography variant="bodySm" style={{ fontWeight: '600' }}>
                {l.t}
              </Typography>
              <Typography variant="micro" color={COLORS.textMuted}>
                {l.d}
                {l.current ? ' · In progress' : ''}
              </Typography>
            </View>
            <Typography color={COLORS.textMuted}>›</Typography>
          </View>
        ))}

        <TouchableOpacity
          style={styles.outlineBtn}
          onPress={() => navigation.navigate('ShopScreen')}>
          <Typography variant="bodySm" color={COLORS.primary} style={{ fontWeight: '600' }}>
            Shop supplies for this course
          </Typography>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default LessonDetailScreen;
