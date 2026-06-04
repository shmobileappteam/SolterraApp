import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Typography from '../../../atomComponents/Typography';
import TabScreenLayout from '../../../components/layout/TabScreenLayout';
import {
  ChevronRight,
  IconBellSmall,
  IconBookmark,
  IconCamera,
  IconHeart,
  IconMessageCircle,
  IconMoreHorizontal,
  IconSearch,
  IconTrophy,
} from '../../../components/solterra/community/CommunityUiParts';
import { heroGarden, lesson1, lesson2, lesson3 } from '../../../assets/images';
import { CARD_GAP, G, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const FEED_TABS = ['Feed', 'Local', 'Questions', 'Challenges', 'Wins'];

const POSTS = [
  {
    name: 'Maya Chen',
    meta: 'Zone 9b • 2h ago',
    text: 'First harvest of the season! These heirloom tomatoes are incredible.',
    img: lesson1,
    likes: 24,
    comments: 8,
    liked: true,
  },
  {
    name: 'James Patel',
    meta: 'Zone 8a • 5h ago',
    text: 'Built these raised beds last weekend. Ready for spring planting!',
    img: heroGarden,
    likes: 41,
    comments: 12,
    liked: false,
  },
  {
    name: 'Lila Park',
    meta: 'Zone 7b • 1d ago',
    text: 'Any tips for powdery mildew on cucumbers? Trying organic solutions first.',
    img: lesson2,
    likes: 15,
    comments: 22,
    liked: false,
  },
];

const TRENDING = [
  { t: 'Tomatoes', n: '128 posts', e: '🍅' },
  { t: 'Raised Beds', n: '94 posts', e: '📦' },
  { t: 'Composting', n: '76 posts', e: '♻️' },
  { t: 'Herbs', n: '62 posts', e: '🌿' },
];

const CommunityScreen = ({ navigation }) => {
  const [tab, setTab] = useState(0);

  return (
    <TabScreenLayout
      headerStyle={styles.communityHeaderShell}
      header={
        <>
          <View style={styles.headerRow}>
            <Typography size={28} color={G.forest} style={styles.pageTitle}>
              Community
            </Typography>
            <TouchableOpacity style={styles.bellBtn} accessibilityLabel="Notifications">
              <IconBellSmall />
              <View style={styles.bellDot} />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tabsBar}
            contentContainerStyle={styles.tabsContent}>
            {FEED_TABS.map((t, i) => (
              <TouchableOpacity
                key={t}
                onPress={() => setTab(i)}
                style={[styles.feedTab, tab === i && styles.feedTabActive]}
                activeOpacity={0.8}>
                <Typography
                  size={13}
                  color={tab === i ? G.forest : G.muted}
                  style={{ fontWeight: '500' }}>
                  {t}
                </Typography>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </>
      }>
        <View style={[gardenUi.pageX, styles.body]}>
          <View style={styles.composeRow}>
            <TouchableOpacity style={styles.composeInput} activeOpacity={0.88}>
              <IconSearch />
              <Typography size={13} color={G.muted} style={styles.composePlaceholder}>
                What's growing in your garden?
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cameraBtn} activeOpacity={0.88}>
              <IconCamera />
            </TouchableOpacity>
          </View>

          {POSTS.map(post => (
            <View key={post.name} style={styles.postBlock}>
              <View style={styles.postRow}>
                <View style={styles.avatar}>
                  <Typography size={14}>🌿</Typography>
                </View>
                <View style={styles.postMain}>
                  <View style={styles.postHead}>
                    <View style={styles.postHeadCopy}>
                      <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                        {post.name}
                      </Typography>
                      <Typography size={11} color={G.muted}>{post.meta}</Typography>
                    </View>
                    <TouchableOpacity hitSlop={8} activeOpacity={0.7}>
                      <IconMoreHorizontal />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.postContent} activeOpacity={0.88}>
                    <Typography size={13} color={G.forest} style={styles.postText}>
                      {post.text}
                    </Typography>
                    <Image source={post.img} style={styles.postImg} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.postActions}>
                <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8}>
                  <IconHeart color={post.liked ? G.sage : G.muted} filled={post.liked} />
                  <Typography size={11} color={G.muted} style={{ marginLeft: 4 }}>
                    {post.likes}
                  </Typography>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8}>
                  <IconMessageCircle />
                  <Typography size={11} color={G.muted} style={{ marginLeft: 4 }}>
                    {post.comments}
                  </Typography>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookmarkBtn} activeOpacity={0.8}>
                  <IconBookmark />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.challengeCard} activeOpacity={0.88}>
            <IconTrophy />
            <View style={styles.challengeCopy}>
              <Typography size={12} color={G.forest} style={{ fontWeight: '600' }}>
                Challenge Spotlight
              </Typography>
              <Typography size={13} color={G.forest} mT={2} style={{ fontWeight: '600' }}>
                Pollinator Garden Challenge
              </Typography>
              <Typography size={11} color={G.muted} mT={4} style={{ lineHeight: 16 }}>
                Plant native flowers and share your progress.
              </Typography>
              <View style={styles.joinBtn}>
                <Typography size={11} color="#fff" style={{ fontWeight: '600' }}>
                  Join Challenge
                </Typography>
              </View>
              <Typography size={10} color={G.muted} mT={4}>
                5 days left
              </Typography>
            </View>
            <Image source={lesson3} style={styles.challengeImg} />
          </TouchableOpacity>

          <TouchableOpacity style={[gardenUi.card, styles.expertCard]} activeOpacity={0.88}>
            <View style={styles.expertAvatar}>
              <Typography size={18}>👩‍🌾</Typography>
            </View>
            <View style={styles.expertCopy}>
              <Typography size={12} color={G.forest} style={{ fontWeight: '600' }}>
                Garden Plan Review
              </Typography>
              <Typography size={11} color={G.muted} mT={4} style={{ lineHeight: 16 }}>
                Alex, Landscape Consultant — personalized advice for your layout.
              </Typography>
              <View style={styles.reviewLink}>
                <Typography size={11} color={G.sage} style={{ fontWeight: '600' }}>
                  View Full Review
                </Typography>
                <ChevronRight size={12} color={G.sage} />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.trendingSection}>
            <View style={styles.trendingHead}>
              <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
                Trending in the Community
              </Typography>
              <TouchableOpacity hitSlop={8} activeOpacity={0.8}>
                <Typography size={12} color={G.muted} style={{ fontWeight: '500' }}>
                  View all
                </Typography>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.trendScroll}>
              {TRENDING.map(item => (
                <TouchableOpacity key={item.t} style={styles.trendCard} activeOpacity={0.88}>
                  <Typography size={18}>{item.e}</Typography>
                  <Typography size={11} color={G.forest} mT={4} style={{ fontWeight: '600' }}>
                    {item.t}
                  </Typography>
                  <Typography size={9} color={G.muted}>{item.n}</Typography>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
    </TabScreenLayout>
  );
};

const styles = StyleSheet.create({
  communityHeaderShell: { paddingBottom: 0 },
  pageTitle: { fontWeight: '700', lineHeight: Sizer.fS(32) },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
  },
  bellBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  bellDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: G.sage,
  },
  tabsBar: { borderBottomWidth: 1, borderBottomColor: G.divider },
  tabsContent: { gap: 16, paddingRight: 16 },
  feedTab: {
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  feedTabActive: { borderBottomColor: G.forest },
  body: { gap: CARD_GAP + 6, marginTop: 12, paddingBottom: 8 },
  composeRow: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  composeInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: G.cardTint,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  composePlaceholder: { flex: 1 },
  cameraBtn: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: G.forest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postBlock: { marginBottom: 4 },
  postRow: { flexDirection: 'row', gap: 8 },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: G.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postMain: { flex: 1, minWidth: 0 },
  postHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  postHeadCopy: { flex: 1, minWidth: 0, paddingRight: 8 },
  postContent: { flexDirection: 'row', marginTop: 8, gap: 8, alignItems: 'flex-start' },
  postText: { flex: 1, lineHeight: 18 },
  postImg: { width: 64, height: 64, borderRadius: 6 },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 44,
    marginTop: 8,
    marginBottom: 4,
    gap: 16,
  },
  actionBtn: { flexDirection: 'row', alignItems: 'center' },
  bookmarkBtn: { marginLeft: 'auto' },
  challengeCard: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: G.sageLight,
  },
  challengeCopy: { flex: 1, minWidth: 0 },
  challengeImg: { width: 64, height: 64, borderRadius: 6 },
  joinBtn: {
    alignSelf: 'flex-start',
    backgroundColor: G.forest,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginTop: 8,
  },
  expertCard: { flexDirection: 'row', padding: 12, gap: 12 },
  expertAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: G.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expertCopy: { flex: 1, minWidth: 0 },
  reviewLink: { flexDirection: 'row', alignItems: 'center', marginTop: 6, gap: 2 },
  trendingSection: { marginTop: 4 },
  trendingHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  trendScroll: { gap: 8, paddingBottom: 4 },
  trendCard: {
    minWidth: 88,
    borderWidth: 1,
    borderColor: G.divider,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center',
    shadowColor: '#1A3020',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
});

export default CommunityScreen;
