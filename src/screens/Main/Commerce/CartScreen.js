import React from 'react';
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import { G, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';
import { CommerceStackHeader } from './CommerceFlowHeader';
import { commerceStyles as styles, SummaryRow } from '../../_partials/commerceStyles';
import { CART_ITEMS } from './cartItems';

const CartScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const sub = CART_ITEMS.reduce((s, i) => s + i.p * i.q, 0);
  const total = sub + 6 - 9;

  return (
    <View style={local.page}>
      <CommerceStackHeader navigation={navigation} title={`My Cart (${CART_ITEMS.length})`} />
      <ScrollView
        contentContainerStyle={[
          gardenUi.pageX,
          local.scroll,
          { paddingBottom: insets.bottom + Sizer.vSize(100) },
        ]}
        showsVerticalScrollIndicator={false}>
        {CART_ITEMS.map(it => (
          <View key={it.n} style={styles.cartRow}>
            <Image source={it.img} style={local.itemImg} resizeMode="cover" />
            <View style={local.itemCopy}>
              <Typography size={13.5} color={G.forest} style={{ fontWeight: '600' }}>
                {it.n}
              </Typography>
              <Typography size={11} color={G.muted} mT={2}>
                {it.c}
              </Typography>
              <View style={local.itemFooter}>
                <Typography size={14} color={G.primary} style={{ fontWeight: '700' }}>
                  ${it.p}.00
                </Typography>
                <View style={styles.qtyWrap}>
                  <Typography size={12} color={G.forest}>
                    −
                  </Typography>
                  <Typography size={12} color={G.forest} style={{ fontWeight: '600', minWidth: 16, textAlign: 'center' }}>
                    {it.q}
                  </Typography>
                  <View style={styles.qtyPlus}>
                    <Typography size={12} color={G.accent}>
                      +
                    </Typography>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.promoRow}>
          <Typography>🎟️</Typography>
          <TextInput
            placeholder="Promo code"
            placeholderTextColor={G.muted}
            style={local.promoInput}
          />
          <Typography size={12} color={G.primary} style={{ fontWeight: '600' }}>
            Apply
          </Typography>
        </View>

        <View style={styles.summary}>
          <SummaryRow label="Subtotal" value={`$${sub}.00`} />
          <SummaryRow label="Shipping" value="$6.00" />
          <SummaryRow label="Discount" value="−$9.00" accent />
          <View style={styles.divider} />
          <SummaryRow label="Total" value={`$${total}.00`} bold />
        </View>
      </ScrollView>

      <View style={[styles.stickyFooter, { paddingBottom: insets.bottom + Sizer.vSize(16) }]}>
        <TouchableOpacity
          style={local.checkoutBtn}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('CheckoutScreen')}>
          <Typography size={14} color={G.accent} style={{ fontWeight: '600' }}>
            {`Checkout · $${total}.00 →`}
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const local = StyleSheet.create({
  page: { flex: 1, backgroundColor: G.cream },
  scroll: { paddingTop: Sizer.vSize(16), gap: 12 },
  itemImg: { width: 80, height: 80, borderRadius: 12 },
  itemCopy: { flex: 1, marginLeft: 12 },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  promoInput: { flex: 1, fontSize: Sizer.fS(14), color: G.forest },
  checkoutBtn: {
    flex: 1,
    height: 48,
    borderRadius: 16,
    backgroundColor: G.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartScreen;
