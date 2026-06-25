import React, { useState } from 'react';
import {
  Image,
  Pressable,
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
import {
  communityAvatarEmma,
  communityAvatarJames,
  communityChallengePollinator,
  communityPost1,
  communityPost2,
  lesson2,
} from '../../../assets/images';
import { G, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const FEED_TABS = ['Feed', 'Local', 'Questions', 'Challenges', 'Wins'];

const POSTS = [
  {
    id: 'emma',
    name: 'Emma R.',
    meta: 'Zone 9b • 2h ago',
    text: 'First harvest of the season! These heirloom tomatoes are incredible.',
    avatar: communityAvatarEmma,
    img: communityPost1,
    likes: 24,
    comments: 6,
    liked: true,
  },
  {
    id: 'james',
    name: 'James Patel',
    meta: 'Zone 8a • 5h ago',
    text: 'Built these raised beds last weekend. Ready for spring planting!',
    avatar: communityAvatarJames,
    img: communityPost2,
    likes: 41,
    comments: 12,
    liked: false,
  },
  {
    id: 'lila',
    name: 'Lila Park',
    meta: 'Zone 7b • 1d ago',
    text: 'Any tips for powdery mildew on cucumbers? Trying organic solutions first.',
    avatar: communityAvatarEmma,
    img: lesson2,
    likes: 15,
    comments: 22,
    liked: false,
  },
];

const TRENDING = [
  { id: 'tomatoes', t: 'Tomatoes', n: '128 posts', e: '🍅' },
  { id: 'beds', t: 'Raised Beds', n: '94 posts', e: '🪴' },
  { id: 'succulents', t: 'Succulents', n: '76 posts', e: '🌵' },
];

const CommunityFeedTabs = ({ tabs, activeIndex, onChange }) => (
  <View style={styles.tabsWrap}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabsContent}>
      {tabs.map((t, i) => {
        const active = activeIndex === i;
        return (
          <Pressable
            key={t}
            onPress={() => onChange(i)}
            style={[styles.feedTab, active && styles.feedTabActive]}
            hitSlop={4}>
            <Typography
              size={12}
              color={active ? G.forest : G.muted}
              style={{ fontWeight: active ? '600' : '500' }}>
              {t}
            </Typography>
          </Pressable>
        );
      })}
    </ScrollView>
    <View style={styles.tabsDivider} />
  </View>
);

const PostCard = ({ post }) => (
  <View style={[styles.homeCard, styles.postCard]}>
    <View style={styles.postRow}>
      <View style={styles.avatarWrap}>
        <Image source={post.avatar} style={styles.avatarImg} />
        <View style={styles.onlineDot} />
      </View>
      <View style={styles.postMain}>
        <View style={styles.postHead}>
          <View style={styles.postHeadCopy}>
            <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
              {post.name}
            </Typography>
            <Typography size={10} color={G.muted} mT={2}>
              {post.meta}
            </Typography>
          </View>
          <TouchableOpacity hitSlop={8} activeOpacity={0.7}>
            <IconMoreHorizontal size={16} />
          </TouchableOpacity>
        </View>
        <Pressable style={styles.postContent}>
          <Typography size={12} color={G.forest} style={styles.postText}>
            {post.text}
          </Typography>
          <View style={styles.postImgWrap}>
            <Image source={post.img} style={styles.postImg} resizeMode="cover" />
          </View>
        </Pressable>
      </View>
    </View>
    <View style={styles.postActions}>
      <Pressable style={styles.actionBtn}>
        <IconHeart color={post.liked ? G.sage : G.muted} filled={post.liked} size={16} />
        <Typography size={10} color={G.muted} style={{ marginLeft: 4 }}>
          {post.likes}
        </Typography>
      </Pressable>
      <Pressable style={styles.actionBtn}>
        <IconMessageCircle size={16} />
        <Typography size={10} color={G.muted} style={{ marginLeft: 4 }}>
          {post.comments}
        </Typography>
      </Pressable>
      <Pressable style={styles.bookmarkBtn}>
        <IconBookmark size={16} />
      </Pressable>
    </View>
  </View>
);

const CommunityScreen = ({ navigation }) => {
  const [tab, setTab] = useState(0);

  return (
    <TabScreenLayout
      headerStyle={styles.communityHeaderShell}
      header={
        <>
          <View style={styles.headerRow}>
            <Typography size={22} color={G.forest} style={styles.pageTitle}>
              Community
            </Typography>
            <TouchableOpacity style={styles.bellBtn} accessibilityLabel="Notifications">
              <IconBellSmall />
              <View style={styles.bellDot} />
            </TouchableOpacity>
          </View>
          <CommunityFeedTabs tabs={FEED_TABS} activeIndex={tab} onChange={setTab} />
        </>
      }>
      <View style={[gardenUi.pageX, styles.body]}>
        <View style={styles.composeRow}>
          <Pressable style={styles.composeInput}>
            <IconSearch size={16} />
            <Typography size={12} color={G.muted} style={styles.composePlaceholder}>
              What's growing in your garden?
            </Typography>
          </Pressable>
          <Pressable style={styles.cameraBtn}>
            <IconCamera size={17} />
          </Pressable>
        </View>

        {POSTS.map(post => (
          <PostCard key={post.id} post={post} />
        ))}

        <View style={styles.challengeCard}>
          <View style={styles.challengeLeft}>
            <View style={styles.challengeLabelRow}>
              <IconTrophy size={16} color={G.sage} />
              <Typography size={11} color={G.forest} style={{ fontWeight: '600', marginLeft: 6 }}>
                Challenge Spotlight
              </Typography>
            </View>
            <Typography size={14} color={G.forest} mT={8} style={{ fontWeight: '600' }}>
              Pollinator Garden Challenge
            </Typography>
            <Typography size={11} color={G.muted} mT={6} style={styles.challengeDesc}>
              Plant for pollinators and support biodiversity in your community.
            </Typography>
          </View>
          <View style={styles.challengeRight}>
            <Image source={communityChallengePollinator} style={styles.challengeImg} resizeMode="cover" />
            <Pressable style={styles.joinBtn}>
              <Typography size={11} color="#fff" style={{ fontWeight: '600' }}>
                Join Challenge
              </Typography>
            </Pressable>
            <Typography size={9} color={G.muted} mT={4} style={{ textAlign: 'center' }}>
              5 days left
            </Typography>
          </View>
        </View>

        <View style={styles.trendingSection}>
          <View style={styles.trendingHead}>
            <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
              Trending in the Community
            </Typography>
            <TouchableOpacity style={styles.viewAllRow} hitSlop={8} activeOpacity={0.8}>
              <Typography size={11} color={G.sage} style={{ fontWeight: '500' }}>
                View all
              </Typography>
              <ChevronRight size={12} color={G.sage} />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trendScroll}>
            {TRENDING.map(item => (
              <Pressable key={item.id} style={styles.trendCard}>
                <Typography size={22}>{item.e}</Typography>
                <Typography size={11} color={G.forest} mT={6} style={{ fontWeight: '600' }}>
                  {item.t}
                </Typography>
                <Typography size={9} color={G.muted} mT={2}>
                  {item.n}
                </Typography>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </TabScreenLayout>
  );
};

const styles = StyleSheet.create({
  communityHeaderShell: { paddingBottom: 0, borderBottomWidth: 0 },
  pageTitle: { fontWeight: '700', lineHeight: Sizer.fS(28) },
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
    borderWidth: 1.2,
    borderColor: G.cream,
  },
  tabsWrap: { marginTop: 2 },
  tabsContent: { gap: 16, paddingRight: 16, paddingBottom: 0 },
  feedTab: {
    paddingBottom: 10,
    paddingTop: 2,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  feedTabActive: { borderBottomColor: G.forest },
  tabsDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: G.divider,
  },
  body: { gap: 12, marginTop: 12, paddingBottom: 12 },
  composeRow: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  composeInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: G.cardTint,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  composePlaceholder: { flex: 1 },
  cameraBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: G.forest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeCard: {
    ...gardenUi.card,
    borderRadius: 16,
  },
  postCard: { padding: 14 },
  postRow: { flexDirection: 'row', gap: 10 },
  avatarWrap: { position: 'relative', flexShrink: 0 },
  avatarImg: { width: 36, height: 36, borderRadius: 18 },
  onlineDot: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: G.sage,
    borderWidth: 1.5,
    borderColor: G.cream,
  },
  postMain: { flex: 1, minWidth: 0 },
  postHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  postHeadCopy: { flex: 1, minWidth: 0, paddingRight: 8 },
  postContent: { flexDirection: 'row', marginTop: 8, gap: 10, alignItems: 'flex-start' },
  postText: { flex: 1, lineHeight: Sizer.fS(17) },
  postImgWrap: {
    width: 64,
    height: 64,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: G.cardTint,
    flexShrink: 0,
  },
  postImg: { width: '100%', height: '100%' },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 46,
    marginTop: 10,
    gap: 16,
  },
  actionBtn: { flexDirection: 'row', alignItems: 'center' },
  bookmarkBtn: { marginLeft: 'auto' },
  challengeCard: {
    flexDirection: 'row',
    gap: 12,
    padding: 14,
    borderRadius: 16,
    backgroundColor: G.sageBanner,
  },
  challengeLeft: { flex: 1, minWidth: 0 },
  challengeLabelRow: { flexDirection: 'row', alignItems: 'center' },
  challengeDesc: { lineHeight: Sizer.fS(16) },
  challengeRight: { alignItems: 'center', width: 96, flexShrink: 0 },
  challengeImg: { width: 72, height: 72, borderRadius: 12 },
  joinBtn: {
    backgroundColor: G.forest,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 8,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  trendingSection: { marginTop: 4 },
  trendingHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  viewAllRow: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  trendScroll: { gap: 10, paddingBottom: 4 },
  trendCard: {
    minWidth: 92,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: G.cream,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: G.divider,
  },
});

export default CommunityScreen;
