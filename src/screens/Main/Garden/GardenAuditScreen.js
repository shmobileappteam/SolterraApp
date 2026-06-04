import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Line, Path, Rect } from 'react-native-svg';
import Typography from '../../../atomComponents/Typography';
import { ChevronDown, IconPlus } from '../../../components/solterra/garden/GardenUiParts';
import GardenDetailHeader from '../../_partials/GardenDetailHeader';
import { heroGarden, lesson1, lesson2 } from '../../../assets/images';
import { FONTS } from '../../../globalStyle/Theme';
import Sizer from '../../../helpers/Sizer';
import { CARD_GAP, G, gardenUi } from '../../_partials/gardenUi';
const stroke = (color, w = 1.5) => ({
  stroke: color,
  strokeWidth: w,
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

const IconCheckSmall = ({ color = G.sage }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path d="M20 6L9 17l-5-5" {...stroke(color, 2.5)} />
  </Svg>
);

const IconAlert = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" {...stroke('#C47A3A', 2)} />
  </Svg>
);

const IconCalendarSmall = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="4" width="18" height="18" rx="2" {...stroke(G.forest)} />
    <Line x1="16" y1="2" x2="16" y2="6" {...stroke(G.forest)} />
    <Line x1="8" y1="2" x2="8" y2="6" {...stroke(G.forest)} />
    <Line x1="3" y1="10" x2="21" y2="10" {...stroke(G.forest)} />
  </Svg>
);

const IconLeafSmall = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M11 20A7 7 0 019.5 6.5C13 3 20 4 20 4s-1 7-4.5 10.5A7 7 0 0111 20z"
      {...stroke(G.sage, 2)}
    />
  </Svg>
);

const IconSparkles = () => (
  <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
    <Path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" {...stroke(G.muted, 1.5)} />
  </Svg>
);

const SECTIONS = [
  {
    title: 'What Looks Good',
    Icon: IconCheckSmall,
    iconBg: G.sageLight,
    iconColor: G.sage,
    items: ['Healthy foliage and strong growth', 'Great use of raised beds', 'Good plant spacing'],
  },
  {
    title: 'What Needs Attention',
    Icon: IconAlert,
    iconBg: G.orangeLight,
    iconColor: '#C47A3A',
    items: [
      'Tomatoes showing early signs of stress',
      'Overcrowding in the herb bed',
      'Mulch could use a refresh',
    ],
  },
  {
    title: 'What To Do This Week',
    Icon: IconCalendarSmall,
    iconBg: G.sageLight,
    iconColor: G.forest,
    items: [
      'Add compost to vegetable beds',
      'Prune basil and remove yellow leaves',
      'Water deeply 2–3 times per week',
    ],
  },
  {
    title: "Next Month's Focus",
    Icon: IconLeafSmall,
    iconBg: G.sageLight,
    iconColor: G.sage,
    items: [
      'Support tomatoes as they fruit',
      'Sow fall greens in empty spaces',
      'Refresh mulch and edge beds',
    ],
  },
];

const UPLOAD_PHOTOS = [heroGarden, lesson1, lesson2];

const GardenAuditScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={gardenUi.page}>
      <GardenDetailHeader navigation={navigation} title="Monthly Garden Audit" />
      <Typography
        size={12}
        color={G.muted}
        style={[styles.subtitle, gardenUi.pageX]}
        textAlign="center">
        Our AI analyzes your photos, then a garden expert reviews and sends personalized advice.
      </Typography>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          gardenUi.scrollPad,
          gardenUi.pageX,
          { paddingBottom: insets.bottom + 32, gap: CARD_GAP, paddingTop: 8 },
        ]}>
        <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
          Upload Photos
        </Typography>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.photoRow}>
          {UPLOAD_PHOTOS.map((src, i) => (
            <Image key={i} source={src} style={styles.photoThumb} />
          ))}
          <TouchableOpacity style={styles.addPhoto} activeOpacity={0.88}>
            <IconPlus size={20} />
            <Typography size={9} color={G.muted} mT={4}>
              Add more
            </Typography>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.sparkleRow}>
          <IconSparkles />
          <Typography size={11} color={G.muted} style={{ marginLeft: 4 }}>
            Upload up to 8 photos
          </Typography>
        </View>

        <View style={[gardenUi.cardLift, styles.scoreCard]}>
          <Typography size={12} color={G.forest} style={{ fontWeight: '600' }}>
            Garden Health Score
          </Typography>
          <View style={styles.scoreLine}>
            <Typography size={40} color={G.forest} style={styles.scoreBig}>
              82
            </Typography>
            <Typography size={14} color={G.sage} style={styles.scoreLabel}>
              Good
            </Typography>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '82%' }]} />
          </View>
        </View>

        {SECTIONS.map(sec => (
          <View key={sec.title} style={[gardenUi.cardLift, styles.sectionCard]}>
            <View style={styles.sectionHead}>
              <View style={styles.sectionTitleRow}>
                <View style={[styles.sectionIcon, { backgroundColor: sec.iconBg }]}>
                  <sec.Icon color={sec.iconColor} />
                </View>
                <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                  {sec.title}
                </Typography>
              </View>
              <ChevronDown size={16} />
            </View>
            {sec.items.map(item => (
              <View key={item} style={styles.bulletRow}>
                <Typography size={12} color={G.muted}>
                  • {item}
                </Typography>
              </View>
            ))}
          </View>
        ))}

        <View style={[gardenUi.cardLift, styles.expertRow]}>
          <View style={styles.avatarStack}>
            {['🌿', '🪴', '🌱'].map(emoji => (
              <View key={emoji} style={styles.avatar}>
                <Typography size={14}>{emoji}</Typography>
              </View>
            ))}
          </View>
          <Typography size={11} color={G.muted} style={{ flex: 1, lineHeight: 16 }}>
            1 human-reviewed response each month. From our garden experts.
          </Typography>
          <View style={styles.verifiedPill}>
            <Typography size={9} color={G.sage} style={{ fontWeight: '500' }}>
              ✓ verified
            </Typography>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: { lineHeight: 18, marginBottom: 4 },
  photoRow: { gap: 8, paddingVertical: 4 },
  photoThumb: { width: 80, height: 80, borderRadius: 6 },
  addPhoto: {
    width: 80,
    height: 80,
    borderRadius: 6,
    backgroundColor: G.cardTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sparkleRow: { flexDirection: 'row', alignItems: 'center' },
  scoreCard: { padding: 14 },
  scoreLine: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 4,
    gap: 8,
    flexWrap: 'wrap',
  },
  scoreBig: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    lineHeight: Sizer.fS(40),
    includeFontPadding: false,
  },
  scoreLabel: {
    fontWeight: '600',
    lineHeight: Sizer.fS(18),
    includeFontPadding: false,
  },
  progressTrack: {
    marginTop: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: G.sageLight,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: G.sage, borderRadius: 4 },
  sectionCard: { padding: 12 },
  sectionHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  sectionIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bulletRow: { marginTop: 6, paddingLeft: 36 },
  expertRow: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 12 },
  avatarStack: { flexDirection: 'row' },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: G.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  verifiedPill: {
    backgroundColor: G.sageLight,
    borderRadius: 999,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
});

export default GardenAuditScreen;
