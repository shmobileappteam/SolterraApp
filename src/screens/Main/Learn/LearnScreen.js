import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { PlaceholderImage, SectionHeader } from '../../../components';
import Typography from '../../../atomComponents/Typography';
import Flex from '../../../atomComponents/Flex';
import SafeAreaWrapper from '../../../atomComponents/SafeAreaWrapper';
import { COLORS, SHADOWS, SPACING } from '../../../globalStyle/Theme';
import Sizer from '../../../helpers/Sizer';
import { learnStyles as styles } from '../../_partials/learnStyles';

const CATS = ['All', 'Vegetables 🥬', 'Indoor 🪴', 'Hydro 💧', 'Flowers 🌸', 'Video'];

const LearnScreen = ({ navigation }) => {
  const [activeCat, setActiveCat] = useState(0);

  return (
    <SafeAreaWrapper bgColor={COLORS.cream} contentStyle={{ flex: 1 }}>
      <View style={styles.top}>
        <Typography variant="h1">Learning Hub</Typography>
        <Typography variant="bodySm" color={COLORS.textMuted} mT={4}>
          Grow your garden knowledge
        </Typography>
        <View style={styles.search}>
          <Typography color={COLORS.textMuted}>🔍</Typography>
          <TextInput
            placeholder="Search tutorials, guides..."
            placeholderTextColor={COLORS.textMuted}
            style={styles.searchInput}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: Sizer.vSize(110) }} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.featured}
          onPress={() => navigation.navigate('LessonDetailScreen')}>
          <PlaceholderImage height={160} color={COLORS.primary} borderRadius={20} emoji="📚" />
          <View style={styles.featuredOverlay}>
            <View style={styles.featuredBadge}>
              <Typography variant="micro" color={COLORS.primary} style={{ fontWeight: '600' }}>
                Featured · Course
              </Typography>
            </View>
            <Typography variant="h3" color={COLORS.white} mT={8}>
              Build Your First Edible Backyard Garden
            </Typography>
            <Typography variant="micro" color="rgba(255,255,255,0.8)" mT={4}>
              12 lessons · 1h 45m
            </Typography>
          </View>
        </TouchableOpacity>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.catRow}>
          {CATS.map((c, i) => (
            <TouchableOpacity
              key={c}
              onPress={() => setActiveCat(i)}
              style={[styles.catChip, activeCat === i && styles.catChipOn]}>
              <Typography
                variant="caption"
                color={activeCat === i ? COLORS.accent : COLORS.textPrimary}
                style={{ fontWeight: '500' }}>
                {c}
              </Typography>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <SectionHeader title="Continue Where You Left Off" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.hPad}>
          {[
            { t: 'Heirloom Tomatoes', p: 65, color: '#4A7058' },
            { t: 'Hydroponics 101', p: 40, color: '#3D6B4F' },
          ].map(l => (
            <TouchableOpacity
              key={l.t}
              style={styles.continueCard}
              onPress={() => navigation.navigate('LessonDetailScreen')}>
              <PlaceholderImage height={56} width={56} color={l.color} borderRadius={10} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Typography variant="bodySm" style={{ fontWeight: '600' }}>
                  {l.t}
                </Typography>
                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: `${l.p}%` }]} />
                </View>
                <Typography variant="micro" color={COLORS.textMuted} mT={4}>
                  {l.p}% complete
                </Typography>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <SectionHeader title="Popular This Week" />
        <View style={styles.hPad}>
          {[
            { c: 'Vegetables', t: '10 Tomato Varieties Every Gardener Should Grow', a: 'Maya Chen', d: '8 min · Guide', color: '#5A8F6E' },
            { c: 'Flowers', t: 'How to Prune Roses for Bigger Blooms', a: 'James Patel', d: '12 min · Video', color: '#7A9E7A' },
            { c: 'Hydroponics', t: 'Setting Up Your First Hydroponic System', a: 'Lila Park', d: '6 min · Blog', color: '#4A8F72' },
          ].map(l => (
            <TouchableOpacity
              key={l.t}
              style={styles.listRow}
              onPress={() => navigation.navigate('LessonDetailScreen')}>
              <PlaceholderImage height={72} width={72} color={l.color} borderRadius={10} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Typography variant="micro" color={COLORS.primary} style={{ fontWeight: '600' }}>
                  {l.c}
                </Typography>
                <Typography variant="bodySm" mT={4} numberOfLines={2} style={{ fontWeight: '600' }}>
                  {l.t}
                </Typography>
                <Typography variant="micro" color={COLORS.textMuted} mT={4}>
                  {l.a} · {l.d}
                </Typography>
              </View>
              <Typography color={COLORS.textMuted}>♡</Typography>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

    </SafeAreaWrapper>
  );
}

export default LearnScreen;
