import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import { CommerceListHeader } from './CommerceFlowHeader';
import { fert1, heroGarden, heroShop, plant2, tools1 } from '../../../assets/images';
import { CARD_GAP, G, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const PRODUCTS = [
  { n: 'Drip Irrigation Kit', sub: 'Raised Bed System', p: '$129.99', img: heroShop },
  { n: 'Cedar Raised Bed', sub: '4×8 ft', p: '$189.00', img: tools1 },
  { n: 'Shade Cloth', sub: '40% UV block', p: '$34.99', img: plant2 },
  { n: 'Compost Bin', sub: 'Dual chamber', p: '$89.00', img: fert1 },
];

const ShopProductListScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState(0);

  return (
    <View style={gardenUi.page}>
      <CommerceListHeader navigation={navigation} title="Recommended for You" />
      <View style={[gardenUi.pageX, styles.tabs]}>
        {['Product List', 'Kits for My Plan'].map((label, i) => (
          <TouchableOpacity
            key={label}
            style={[styles.tab, tab === i && styles.tabActive]}
            onPress={() => setTab(i)}>
            <Typography
              size={12}
              color={tab === i ? '#FFFFFF' : G.forest}
              style={{ fontWeight: '500', textAlign: 'center' }}>
              {label}
            </Typography>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          gardenUi.pageX,
          styles.list,
          { paddingBottom: insets.bottom + Sizer.vSize(100) },
        ]}>
        {PRODUCTS.map(p => (
          <View key={p.n} style={[gardenUi.card, styles.productRow]}>
            <TouchableOpacity
              style={styles.productMain}
              activeOpacity={0.88}
              onPress={() => navigation.navigate('ProductDetailScreen')}>
              <Image source={p.img} style={styles.productImg} resizeMode="cover" />
              <View style={styles.productCopy}>
                <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
                  {p.n}
                </Typography>
                <Typography size={11} color={G.muted} mT={2}>
                  {p.sub}
                </Typography>
                <Typography size={13} color={G.forest} mT={4} style={{ fontWeight: '700' }}>
                  {p.p}
                </Typography>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate('CartScreen')}>
              <Typography size={12} color="#FFFFFF" style={{ fontWeight: '600' }}>
                Add
              </Typography>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity
          style={[styles.kitBanner]}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('ProductDetailScreen')}>
          <View style={styles.kitCopy}>
            <Typography size={10} color={G.sage} style={{ fontWeight: '600', letterSpacing: 1 }}>
              COMPLETE YOUR PLAN
            </Typography>
            <Typography size={15} color={G.forest} mT={4} style={{ fontWeight: '700' }}>
              Backyard Food Garden Kit
            </Typography>
            <Typography size={12} color={G.muted} mT={4}>
              Everything your space needs to thrive.
            </Typography>
            <Typography size={14} color={G.forest} mT={6} style={{ fontWeight: '700' }}>
              $599.00
            </Typography>
          </View>
          <Image source={heroGarden} style={styles.kitImg} resizeMode="cover" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    gap: 8,
    paddingBottom: 12,
  },
  tab: {
    flex: 1,
    borderRadius: 999,
    paddingVertical: 8,
    backgroundColor: G.sageLight,
  },
  tabActive: { backgroundColor: G.forest },
  list: { gap: CARD_GAP, paddingTop: 4 },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 8,
  },
  productMain: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    minWidth: 0,
  },
  productImg: { width: 64, height: 64, borderRadius: 6 },
  productCopy: { flex: 1, minWidth: 0 },
  addBtn: {
    backgroundColor: G.forest,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  kitBanner: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: G.sageLight,
    padding: 12,
    gap: 8,
    overflow: 'hidden',
  },
  kitCopy: { flex: 1, minWidth: 0 },
  kitImg: { width: 96, height: 80, borderRadius: 6 },
});

export default ShopProductListScreen;
