import React, { useMemo, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import ProductFooterFade from '../../../components/solterra/shop/ProductFooterFade';
import ProductHeroOverlay, { PRODUCT_HERO_H } from '../../../components/solterra/shop/ProductHeroOverlay';
import {
  IconDroplet,
  IconShoppingCart,
  IconSun,
  IconThermometer,
  IconTruck,
} from '../../../components/solterra/shop/ShopUiParts';
import { plant1 } from '../../../assets/images';
import { FONTS, SHADOWS } from '../../../globalStyle/Theme';
import Sizer from '../../../helpers/Sizer';
import { G } from '../../_partials/gardenUi';
import { commerceStyles as c } from '../../_partials/commerceStyles';

const SIZES = ['Small', 'Medium', 'Large'];
const SIZE_PRICES = [28, 32, 38];

const CARE = [
  { Icon: IconSun, label: 'Bright indirect' },
  { Icon: IconDroplet, label: 'Water weekly' },
  { Icon: IconThermometer, label: '18–27°C' },
];

const formatPrice = n => `$${n.toFixed(2)}`;

const SectionHeader = ({ title, hint }) => (
  <View style={styles.sectionHead}>
    <Typography size={16} color={G.forest} style={styles.sectionTitle}>
      {title}
    </Typography>
    {hint ? (
      <Typography size={11} color={G.muted}>
        {hint}
      </Typography>
    ) : null}
  </View>
);

const StarRating = ({ rating = 4.9, reviews = 248 }) => (
  <View style={styles.ratingRow}>
    <View style={styles.ratingStars}>
      <Typography size={13} color={G.accent} style={{ letterSpacing: 0.5 }}>
        ★★★★★
      </Typography>
    </View>
    <View style={styles.ratingDot} />
    <Typography size={12} color={G.muted}>
      {rating}
    </Typography>
    <Typography size={12} color={G.muted} style={{ opacity: 0.7 }}>
      · {reviews} reviews
    </Typography>
  </View>
);

const QtyStepper = ({ qty, onMinus, onPlus }) => (
  <View style={c.qtyWrap}>
    <Pressable
      style={({ pressed }) => [styles.qtyBtn, pressed && styles.qtyBtnPressed]}
      onPress={onMinus}
      hitSlop={8}>
      <Typography size={15} color={G.forest} style={{ fontWeight: '600' }}>
        −
      </Typography>
    </Pressable>
    <Typography size={14} color={G.forest} style={styles.qtyValue}>
      {qty}
    </Typography>
    <Pressable
      style={({ pressed }) => [c.qtyPlus, pressed && styles.qtyPlusPressed]}
      onPress={onPlus}
      hitSlop={8}>
      <Typography size={15} color={G.accent} style={{ fontWeight: '600' }}>
        +
      </Typography>
    </Pressable>
  </View>
);

const ProductDetailScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(1);
  const [liked, setLiked] = useState(false);

  const unitPrice = SIZE_PRICES[size];
  const lineTotal = useMemo(() => unitPrice * qty, [unitPrice, qty]);

  return (
    <View style={styles.page}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + Sizer.vSize(118) },
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Image source={plant1} style={styles.heroImg} resizeMode="cover" />
          <ProductHeroOverlay />
        </View>

        <View style={styles.scrollBody}>
        <View style={[c.productCard, styles.productCardLift]}>
          <View style={c.pdpCategoryPill}>
            <Typography size={10} color={G.primary} style={styles.eyebrow}>
              INDOOR PLANT
            </Typography>
          </View>
          <View style={styles.titleWrap}>
            <Typography size={24} color={G.forest} style={styles.productTitle}>
              Monstera Deliciosa
            </Typography>
          </View>
          <StarRating />
          <View style={styles.priceRow}>
            <View>
              <Typography size={26} color={G.primary} style={styles.price}>
                {formatPrice(unitPrice)}
              </Typography>
              <Typography size={11} color={G.muted} mT={2}>
                {SIZES[size]} · {qty} {qty === 1 ? 'plant' : 'plants'}
              </Typography>
            </View>
            <QtyStepper
              qty={qty}
              onMinus={() => setQty(Math.max(1, qty - 1))}
              onPlus={() => setQty(q => q + 1)}
            />
          </View>
        </View>

        <SectionHeader title="Size" hint={formatPrice(unitPrice)} />
        <View style={styles.sizeRow}>
          {SIZES.map((s, i) => {
            const selected = size === i;
            return (
              <Pressable
                key={s}
                style={[c.sizeBtn, selected && c.sizeBtnOn]}
                onPress={() => setSize(i)}>
                <Typography
                  size={13}
                  color={selected ? G.accent : G.forest}
                  style={{ fontWeight: selected ? '600' : '500', opacity: selected ? 1 : 0.85 }}>
                  {s}
                </Typography>
                <Typography
                  size={10}
                  color={selected ? G.accent : G.muted}
                  mT={2}
                  style={{ opacity: selected ? 0.9 : 0.75 }}>
                  {formatPrice(SIZE_PRICES[i])}
                </Typography>
              </Pressable>
            );
          })}
        </View>

        <SectionHeader title="Description" />
        <View style={c.pdpDescCard}>
          <Typography size={13} color={G.muted} style={styles.body}>
            A lush tropical favorite with iconic split leaves. Easy to care for, thrives in bright
            indirect light. Ships in a nursery pot, ready for repotting.
          </Typography>
        </View>

        <SectionHeader title="Care at a glance" />
        <View style={styles.careRow}>
          {CARE.map((item, idx) => (
            <View key={`${item.label}-${idx}`} style={c.careCard}>
              <View style={styles.careIconWrap}>
                <item.Icon size={18} color={G.sage} />
              </View>
              <Typography size={10} color={G.muted} mT={6} textAlign="center" numberOfLines={2}>
                {item.label}
              </Typography>
            </View>
          ))}
        </View>

        <View style={c.pdpTrustRow}>
          <View style={styles.trustIcon}>
            <IconTruck size={20} color={G.sage} />
          </View>
          <View style={styles.trustCopy}>
            <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
              Free delivery over $75
            </Typography>
            <Typography size={11} color={G.muted} mT={2}>
              Est. 3–5 business days · 30-day returns
            </Typography>
          </View>
        </View>
        </View>
      </ScrollView>

      <View style={[c.productHeroNav, styles.heroNav, { top: insets.top + Sizer.vSize(12) }]}>
        <TouchableOpacity style={c.glassBtn} onPress={() => navigation.goBack()} hitSlop={8}>
          <Typography size={20} color={G.forest}>
            ←
          </Typography>
        </TouchableOpacity>
        <View style={styles.heroActions}>
          <TouchableOpacity
            style={[c.glassBtn, liked && styles.likedBtn]}
            onPress={() => setLiked(v => !v)}
            hitSlop={8}
            activeOpacity={0.7}>
            <Typography size={18} color={liked ? '#E85D5D' : G.forest}>
              {liked ? '♥' : '♡'}
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            style={c.glassBtn}
            onPress={() => navigation.navigate('CartScreen')}
            hitSlop={8}
            activeOpacity={0.7}>
            <IconShoppingCart size={18} color={G.forest} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.footerShell, { paddingBottom: insets.bottom + Sizer.vSize(16) }]}>
        <ProductFooterFade />
        <View style={styles.footerMeta}>
          <Typography size={12} color={G.muted}>
            Total
          </Typography>
          <Typography size={18} color={G.primary} style={styles.footerTotal}>
            {formatPrice(lineTotal)}
          </Typography>
        </View>
        <View style={styles.footerActions}>
          <TouchableOpacity
            style={styles.addBtn}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('CartScreen')}>
            <Typography size={14} color={G.primary} style={styles.footerBtnText}>
              Add to Cart
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buyBtn}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('CheckoutScreen')}>
            <Typography size={14} color={G.accent} style={styles.footerBtnText}>
              Buy Now
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: G.cream },
  hero: {
    width: '100%',
    alignSelf: 'stretch',
    height: PRODUCT_HERO_H,
    overflow: 'hidden',
    backgroundColor: G.cream,
  },
  heroNav: {
    zIndex: 20,
    elevation: 20,
  },
  scroll: { flex: 1 },
  heroImg: { ...StyleSheet.absoluteFillObject, width: '100%', height: '100%' },
  productCardLift: {
    marginTop: -Sizer.vSize(24),
  },
  heroActions: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  likedBtn: {
    backgroundColor: 'rgba(255,240,240,0.95)',
    borderColor: 'rgba(232,93,93,0.25)',
  },
  scrollContent: {
    flexGrow: 1,
  },
  scrollBody: {
    paddingHorizontal: Sizer.hSize(24),
  },
  titleWrap: {
    marginTop: 10,
  },
  eyebrow: { fontWeight: '700', letterSpacing: 1.4 },
  productTitle: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    fontSize: Sizer.fS(24),
    lineHeight: Sizer.fS(36),
    includeFontPadding: false,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 10,
  },
  ratingStars: {
    backgroundColor: 'rgba(208,236,126,0.25)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  ratingDot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: G.divider,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: G.divider,
  },
  price: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    fontSize: Sizer.fS(26),
    lineHeight: Sizer.fS(32),
    includeFontPadding: false,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtnPressed: { opacity: 0.65, transform: [{ scale: 0.96 }] },
  qtyPlusPressed: { opacity: 0.88, transform: [{ scale: 0.96 }] },
  qtyValue: {
    fontWeight: '600',
    minWidth: 16,
    textAlign: 'center',
  },
  sectionHead: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginTop: 22,
    marginBottom: 10,
  },
  sectionTitle: {
    fontFamily: FONTS.display,
    fontWeight: '700',
  },
  sizeRow: { flexDirection: 'row', gap: 8 },
  body: { lineHeight: Sizer.fS(21) },
  careRow: { flexDirection: 'row', gap: 8 },
  careIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: G.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trustIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trustCopy: { flex: 1, minWidth: 0 },
  footerShell: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: G.divider,
    paddingHorizontal: Sizer.hSize(16),
    paddingTop: 6,
    shadowColor: '#1A3020',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 14,
  },
  footerMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 10,
  },
  footerTotal: {
    fontFamily: FONTS.display,
    fontWeight: '700',
  },
  footerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 2,
  },
  addBtn: {
    flex: 1,
    height: 48,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: G.primary,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyBtn: {
    flex: 1,
    height: 48,
    borderRadius: 16,
    backgroundColor: G.primary,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.soft,
  },
  footerBtnText: { fontWeight: '600' },
});

export default ProductDetailScreen;
