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
  IconDroplet,
  IconLeaf,
  IconPackage,
  IconPlusOutline,
  IconPlusCategory,
  IconShovel,
  IconStar,
  IconTruck,
} from '../../../components/solterra/shop/ShopUiParts';
import {
  shopDripKit,
  shopGardenProfile,
  shopGreenhouseKit,
  shopRaisedBed,
  shopSoilBag,
} from '../../../assets/images';
import CartIconButton from '../../../components/solterra/shop/CartIconButton';
import { getCartItemCount } from './cartItems';
import { G, gardenUi } from '../../_partials/gardenUi';
import { ONBOARDING_UI } from '../../OnBoard/onboardingUi';
import Sizer from '../../../helpers/Sizer';

const SHOP_TABS = ['Recommended for You', 'Kits for My Plan'];

const TOP_PICKS = [
  {
    id: 'drip',
    n: 'Drip Irrigation Kit',
    sub: 'Raised Bed System',
    p: '$129.99',
    r: 4.8,
    img: shopDripKit,
  },
  {
    id: 'bed',
    n: 'Cedar Raised Bed',
    sub: '4×8 ft Kit',
    p: '$189.00',
    r: 4.9,
    img: shopRaisedBed,
  },
  {
    id: 'soil',
    n: 'Premium Soil Mix',
    sub: 'Organic Blend',
    p: '$34.99',
    r: 4.7,
    img: shopSoilBag,
  },
];

const KITS = [
  {
    id: 'food',
    n: 'Backyard Food Garden Kit',
    d: 'Everything you need to build and grow a thriving edible garden.',
    p: '$599.00',
    r: 4.9,
    img: shopGardenProfile,
    badge: true,
  },
  {
    id: 'greenhouse',
    n: 'Greenhouse Starter Kit',
    d: 'Frame, panels, shelving, and climate controls for year-round growing.',
    p: '$1,240.00',
    r: 4.8,
    img: shopGreenhouseKit,
    badge: false,
  },
];

const CATEGORIES = [
  { id: 'irrigation', n: 'Irrigation', Icon: IconDroplet },
  { id: 'beds', n: 'Raised Beds', Icon: IconPackage },
  { id: 'soil', n: 'Soil & Mulch', Icon: IconLeaf },
  { id: 'plants', n: 'Plants', Icon: IconLeaf },
  { id: 'tools', n: 'Tools', Icon: IconShovel },
  { id: 'more', n: 'More', Icon: IconPlusCategory },
];

const RatingStars = ({ rating, size = 10 }) => (
  <View style={styles.ratingRow}>
    {[0, 1, 2, 3, 4].map(i => (
      <IconStar key={i} size={size} color={G.sage} />
    ))}
    <Typography size={10} color={G.muted} style={{ marginLeft: 4 }}>
      {rating}
    </Typography>
  </View>
);

const SectionHead = ({ title, onPress }) => (
  <View style={styles.sectionHead}>
    <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
      {title}
    </Typography>
    <TouchableOpacity style={styles.viewAllRow} onPress={onPress} hitSlop={8}>
      <Typography size={11} color={G.sage} style={{ fontWeight: '500' }}>
        View all
      </Typography>
      <ChevronRight size={12} color={G.sage} />
    </TouchableOpacity>
  </View>
);

const ShopScreen = ({ navigation }) => {
  const [tab, setTab] = useState(0);

  return (
    <TabScreenLayout
      header={
        <>
          <View style={styles.headerRow}>
            <View>
              <Typography size={22} color={G.forest} style={styles.pageTitle}>
                Shop
              </Typography>
              <Typography size={13} color={G.muted} mT={2}>
                Recommended for your garden
              </Typography>
            </View>
            <CartIconButton
              count={getCartItemCount()}
              onPress={() => navigation.navigate('CartScreen')}
            />
          </View>
          <View style={styles.shopTabs}>
            {SHOP_TABS.map((label, i) => {
              const active = tab === i;
              return (
                <Pressable
                  key={label}
                  style={[styles.shopTab, active && styles.shopTabActive]}
                  onPress={() => setTab(i)}>
                  <Typography
                    size={12}
                    color={active ? '#fff' : G.forest}
                    style={{ fontWeight: '600', textAlign: 'center' }}>
                    {label}
                  </Typography>
                </Pressable>
              );
            })}
          </View>
        </>
      }>
      <View style={[gardenUi.pageX, styles.body]}>
        <Pressable
          style={styles.gardenContext}
          onPress={() => navigation.navigate('GardenScreen')}>
          <View style={styles.gardenCopy}>
            <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
              Backyard Edible Garden
            </Typography>
            <Typography size={11} color={G.muted} mT={3}>
              Zone 9b • Full Sun • 1,420 sq ft
            </Typography>
          </View>
          <Image source={shopGardenProfile} style={styles.gardenThumb} resizeMode="cover" />
        </Pressable>

        <SectionHead
          title="Top Picks for You"
          onPress={() => navigation.navigate('ShopProductListScreen')}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.picksScroll}>
          {TOP_PICKS.map(p => (
            <View key={p.id} style={styles.pickCard}>
              <Pressable onPress={() => navigation.navigate('ProductDetailScreen')}>
                <View style={styles.pickImgWrap}>
                  <Image source={p.img} style={styles.pickImg} resizeMode="contain" />
                </View>
                <Typography size={12} color={G.forest} mT={10} style={styles.pickTitle}>
                  {p.n}
                </Typography>
                <Typography size={10} color={G.muted} mT={2}>
                  {p.sub}
                </Typography>
                <Typography size={13} color={G.forest} mT={6} style={{ fontWeight: '700' }}>
                  {p.p}
                </Typography>
                <RatingStars rating={p.r} />
              </Pressable>
              <Pressable
                style={styles.addFab}
                onPress={() => navigation.navigate('CartScreen')}
                accessibilityLabel="Add to cart">
                <IconPlusOutline size={14} color={G.forest} />
              </Pressable>
            </View>
          ))}
        </ScrollView>

        <SectionHead
          title="Complete Kits"
          onPress={() => navigation.navigate('ProductDetailScreen')}
        />
        {KITS.map(kit => (
          <Pressable
            key={kit.id}
            style={styles.kitCard}
            onPress={() => navigation.navigate('ProductDetailScreen')}>
            <Image source={kit.img} style={styles.kitImg} resizeMode="cover" />
            <View style={styles.kitCopy}>
              {kit.badge ? (
                <View style={styles.kitTag}>
                  <Typography size={9} color={G.sage} style={{ fontWeight: '600' }}>
                    Perfect for your plan
                  </Typography>
                </View>
              ) : null}
              <Typography
                size={14}
                color={G.forest}
                mT={kit.badge ? 6 : 0}
                style={{ fontWeight: '600', lineHeight: Sizer.fS(18) }}>
                {kit.n}
              </Typography>
              <Typography size={11} color={G.muted} mT={4} numberOfLines={2} style={styles.kitDesc}>
                {kit.d}
              </Typography>
              <View style={styles.kitFooter}>
                <View style={styles.kitPriceRow}>
                  <Typography size={14} color={G.forest} style={{ fontWeight: '700' }}>
                    {kit.p}
                  </Typography>
                  <RatingStars rating={kit.r} />
                </View>
                <Pressable style={styles.viewKitBtn}>
                  <Typography size={11} color="#fff" style={{ fontWeight: '600' }}>
                    View Kit
                  </Typography>
                </Pressable>
              </View>
            </View>
          </Pressable>
        ))}

        <Typography size={14} color={G.forest} style={{ fontWeight: '600', marginTop: 6 }}>
          Shop by Category
        </Typography>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.catScroll}>
          {CATEGORIES.map(({ id, n, Icon }) => (
            <Pressable
              key={id}
              style={styles.catItem}
              onPress={() => navigation.navigate('ProductDetailScreen')}>
              <View style={styles.catTile}>
                <Icon size={22} />
              </View>
              <Typography size={10} color={G.forest} mT={6} style={{ fontWeight: '500', textAlign: 'center' }}>
                {n}
              </Typography>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.shippingCard}>
          <IconTruck size={22} />
          <View style={styles.shippingCopy}>
            <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
              Free shipping on orders over $75
            </Typography>
            <Typography size={11} color={G.muted} mT={3}>
              30-day returns • Expert support
            </Typography>
          </View>
        </View>
      </View>
    </TabScreenLayout>
  );
};

const styles = StyleSheet.create({
  pageTitle: { fontWeight: '700', lineHeight: Sizer.fS(28) },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 4,
    overflow: 'visible',
  },
  shopTabs: { flexDirection: 'row', gap: 8, marginTop: 12 },
  shopTab: {
    flex: 1,
    borderRadius: ONBOARDING_UI.radiusMd,
    paddingVertical: 9,
    paddingHorizontal: 8,
    backgroundColor: G.sageBanner,
  },
  shopTabActive: { backgroundColor: G.forest },
  body: { gap: 14, marginTop: 12, paddingBottom: 12 },
  gardenContext: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 16,
    backgroundColor: G.sageBanner,
    gap: 12,
  },
  gardenCopy: { flex: 1, minWidth: 0 },
  gardenThumb: { width: 72, height: 52, borderRadius: 10 },
  sectionHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  viewAllRow: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  picksScroll: { gap: 10, paddingBottom: 4, paddingTop: 2 },
  pickCard: {
    width: 148,
    padding: 12,
    borderRadius: 16,
    backgroundColor: G.cream,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: G.divider,
    position: 'relative',
  },
  pickImgWrap: {
    height: 104,
    borderRadius: 10,
    backgroundColor: G.cardTint,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  pickImg: { width: '90%', height: '90%' },
  pickTitle: { fontWeight: '600', lineHeight: Sizer.fS(16) },
  addFab: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: G.forest,
    backgroundColor: G.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  kitCard: {
    flexDirection: 'row',
    padding: 14,
    gap: 12,
    borderRadius: 16,
    backgroundColor: G.sageBanner,
  },
  kitImg: { width: 104, height: 104, borderRadius: 12, flexShrink: 0 },
  kitCopy: { flex: 1, minWidth: 0 },
  kitTag: {
    alignSelf: 'flex-start',
    backgroundColor: G.sageLight,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  kitDesc: { lineHeight: Sizer.fS(16) },
  kitFooter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 8,
  },
  kitPriceRow: { flex: 1, minWidth: 0, gap: 4 },
  viewKitBtn: {
    backgroundColor: G.forest,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    flexShrink: 0,
  },
  catScroll: { gap: 12, paddingTop: 10, paddingBottom: 4 },
  catItem: { alignItems: 'center', width: 72 },
  catTile: {
    width: 64,
    height: 64,
    borderRadius: 14,
    backgroundColor: G.cream,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: G.divider,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shippingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: 16,
    backgroundColor: G.sageBanner,
    marginTop: 4,
  },
  shippingCopy: { flex: 1, minWidth: 0 },
});

export default ShopScreen;
