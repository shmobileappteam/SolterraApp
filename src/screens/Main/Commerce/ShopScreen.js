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
  IconDroplet,
  IconLeaf,
  IconPackage,
  IconPlus,
  IconPlusCategory,
  IconShovel,
  IconStar,
  IconTruck,
} from '../../../components/solterra/shop/ShopUiParts';
import { heroGarden, heroShop, onb2, plant2, tools1 } from '../../../assets/images';
import CartIconButton from '../../../components/solterra/shop/CartIconButton';
import { getCartItemCount } from './cartItems';
import { CARD_GAP, G, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const SHOP_TABS = ['Recommended for You', 'Kits for My Plan'];

const TOP_PICKS = [
  { n: 'Drip Irrigation Kit', p: '$129.99', r: 4.8, img: heroShop },
  { n: 'Cedar Raised Bed', p: '$189.00', r: 4.9, img: tools1 },
  { n: 'Shade Cloth', p: '$34.99', r: 4.7, img: plant2 },
];

const KITS = [
  {
    n: 'Backyard Food Garden Kit',
    d: 'Everything your space needs to thrive — beds, soil, irrigation, and starter plants.',
    p: '$599.00',
    r: 4.9,
    img: heroGarden,
  },
  {
    n: 'Greenhouse Starter Kit',
    d: 'Frame, panels, shelving, and climate controls for year-round growing.',
    p: '$1,240.00',
    r: 4.8,
    img: onb2,
  },
];

const CATEGORIES = [
  { n: 'Irrigation', Icon: IconDroplet },
  { n: 'Raised Beds', Icon: IconPackage },
  { n: 'Soil', Icon: IconLeaf },
  { n: 'Plants', Icon: IconLeaf },
  { n: 'Tools', Icon: IconShovel },
  { n: 'More', Icon: IconPlusCategory },
];

const RatingStars = ({ rating }) => (
  <View style={styles.ratingRow}>
    <IconStar size={12} />
    <Typography size={10} color={G.muted} style={{ marginLeft: 2 }}>
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
      <Typography size={12} color={G.muted} style={{ fontWeight: '500' }}>
        View all
      </Typography>
      <ChevronRight size={14} />
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
              <Typography size={28} color={G.forest} style={styles.pageTitle}>
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
            {SHOP_TABS.map((label, i) => (
              <TouchableOpacity
                key={label}
                style={[styles.shopTab, tab === i && styles.shopTabActive]}
                onPress={() => setTab(i)}
                activeOpacity={0.88}>
                <Typography
                  size={12}
                  color={tab === i ? '#fff' : G.forest}
                  style={{ fontWeight: '500', textAlign: 'center' }}>
                  {label}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>
        </>
      }>
        <View style={[gardenUi.pageX, styles.body]}>
          <TouchableOpacity
            style={styles.gardenContext}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('GardenScreen')}>
            <View style={styles.gardenCopy}>
              <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
                Backyard Edible Garden
              </Typography>
              <Typography size={11} color={G.muted}>
                Zone 9b • Full Sun • 1,420 sq ft
              </Typography>
            </View>
            <Image source={tools1} style={styles.gardenThumb} />
          </TouchableOpacity>

          <SectionHead
            title="Top Picks for You"
            onPress={() => navigation.navigate('ShopProductListScreen')}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.picksScroll}>
            {TOP_PICKS.map(p => (
              <View key={p.n} style={styles.pickCard}>
                <TouchableOpacity
                  activeOpacity={0.88}
                  onPress={() => navigation.navigate('ProductDetailScreen')}>
                  <Image source={p.img} style={styles.pickImg} />
                  <Typography size={11} color={G.forest} mT={8} style={{ fontWeight: '600', lineHeight: 14 }}>
                    {p.n}
                  </Typography>
                  <Typography size={12} color={G.forest} style={{ fontWeight: '700' }}>
                    {p.p}
                  </Typography>
                  <RatingStars rating={p.r} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addFab}
                  onPress={() => navigation.navigate('CartScreen')}
                  accessibilityLabel="Add to cart">
                  <IconPlus />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          <SectionHead
            title="Complete Kits"
            onPress={() => navigation.navigate('ProductDetailScreen')}
          />
          {KITS.map(kit => (
            <TouchableOpacity
              key={kit.n}
              style={[gardenUi.card, styles.kitCard]}
              activeOpacity={0.88}
              onPress={() => navigation.navigate('ProductDetailScreen')}>
              <Image source={kit.img} style={styles.kitImg} />
              <View style={styles.kitCopy}>
                <View style={styles.kitTag}>
                  <Typography size={9} color={G.sage} style={{ fontWeight: '500' }}>
                    Perfect for your plan
                  </Typography>
                </View>
                <Typography size={13} color={G.forest} mT={4} style={{ fontWeight: '600', lineHeight: 18 }}>
                  {kit.n}
                </Typography>
                <Typography size={11} color={G.muted} mT={2} numberOfLines={2} style={{ lineHeight: 15 }}>
                  {kit.d}
                </Typography>
                <View style={styles.kitFooter}>
                  <Typography size={13} color={G.forest} style={{ fontWeight: '700' }}>
                    {kit.p}
                  </Typography>
                  <RatingStars rating={kit.r} />
                  <View style={styles.viewKitBtn}>
                    <Typography size={11} color="#fff" style={{ fontWeight: '600' }}>
                      View Kit
                    </Typography>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}

          <Typography size={14} color={G.forest} style={{ fontWeight: '600', marginTop: 4 }}>
            Shop by Category
          </Typography>
          <View style={styles.catGrid}>
            {CATEGORIES.map(({ n, Icon }) => (
              <TouchableOpacity
                key={n}
                style={styles.catItem}
                activeOpacity={0.88}
                onPress={() => navigation.navigate('ProductDetailScreen')}>
                <Icon size={20} />
                <Typography size={10} color={G.forest} mT={4} style={{ textAlign: 'center' }}>
                  {n}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.shippingCard}>
            <IconTruck />
            <View style={styles.shippingCopy}>
              <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
                Free shipping on orders over $75
              </Typography>
              <Typography size={11} color={G.muted} mT={2}>
                30-day returns • Expert support
              </Typography>
            </View>
          </View>

          <TouchableOpacity
            style={[gardenUi.card, styles.completeCard]}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('ProductDetailScreen')}>
            <View style={styles.completeCopy}>
              <Typography size={12} color={G.forest} style={{ fontWeight: '600' }}>
                Complete Your Plan
              </Typography>
              <Typography size={14} color={G.forest} mT={2} style={{ fontWeight: '700' }}>
                Backyard Food Garden Kit
              </Typography>
              <Typography size={12} color={G.muted} mT={2}>
                $599.00
              </Typography>
            </View>
            <Image source={heroGarden} style={styles.completeImg} />
          </TouchableOpacity>
        </View>
    </TabScreenLayout>
  );
};

const styles = StyleSheet.create({
  pageTitle: { fontWeight: '700', lineHeight: Sizer.fS(32) },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 4,
    overflow: 'visible',
  },
  shopTabs: { flexDirection: 'row', gap: 8, marginTop: 10 },
  shopTab: {
    flex: 1,
    borderRadius: 999,
    paddingVertical: 8,
    backgroundColor: G.sageLight,
  },
  shopTabActive: { backgroundColor: G.forest },
  body: { gap: CARD_GAP, marginTop: CARD_GAP, paddingBottom: 8 },
  gardenContext: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: G.cardTint,
    gap: 12,
  },
  gardenCopy: { flex: 1, minWidth: 0 },
  gardenThumb: { width: 56, height: 44, borderRadius: 6 },
  sectionHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  viewAllRow: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  picksScroll: { gap: 8, paddingBottom: 4 },
  pickCard: {
    width: 130,
    borderWidth: 1,
    borderColor: G.divider,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 8,
    position: 'relative',
  },
  pickImg: { width: '100%', height: 100, borderRadius: 6 },
  addFab: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: G.forest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  kitCard: { flexDirection: 'row', padding: 12, gap: 12 },
  kitImg: { width: 96, height: 96, borderRadius: 6 },
  kitCopy: { flex: 1, minWidth: 0 },
  kitTag: {
    alignSelf: 'flex-start',
    backgroundColor: G.sageLight,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  kitFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  viewKitBtn: {
    marginLeft: 'auto',
    backgroundColor: G.forest,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  catGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },
  catItem: {
    width: '30%',
    alignItems: 'center',
    paddingVertical: 4,
  },
  shippingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: G.sageLight,
  },
  shippingCopy: { flex: 1, minWidth: 0 },
  completeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: G.sageBanner,
  },
  completeCopy: { flex: 1, minWidth: 0, paddingRight: 8 },
  completeImg: { width: 80, height: 64, borderRadius: 6 },
});

export default ShopScreen;
