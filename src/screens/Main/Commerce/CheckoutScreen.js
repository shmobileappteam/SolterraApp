import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import Flex from '../../../atomComponents/Flex';
import Sizer from '../../../helpers/Sizer';
import { G, gardenUi } from '../../_partials/gardenUi';
import { CommerceStackHeader } from './CommerceFlowHeader';
import { commerceStyles as styles } from '../../_partials/commerceStyles';

const DeliveryOption = ({ o, selected, onSelect }) => (
  <TouchableOpacity
    style={[styles.optionRow, selected && styles.optionRowOn]}
    activeOpacity={0.88}
    onPress={onSelect}>
    <View style={[styles.radioOuter, selected && styles.radioOuterOn]}>
      {selected ? <View style={styles.radioInner} /> : null}
    </View>
    <View style={styles.optionCopy}>
      <Typography size={13.5} color={G.forest} style={{ fontWeight: '600' }}>
        {o.t}
      </Typography>
      <Typography size={11} color={G.muted} mT={2}>
        {o.d}
      </Typography>
    </View>
    <Typography size={13} color={G.forest} style={{ fontWeight: '600' }}>
      {o.p}
    </Typography>
  </TouchableOpacity>
);

const PaymentOption = ({ o, selected, onSelect }) => (
  <TouchableOpacity
    style={[styles.optionRow, selected && styles.optionRowOn]}
    activeOpacity={0.88}
    onPress={onSelect}>
    <Typography size={18}>{o.e}</Typography>
    <View style={[styles.optionCopy, { marginLeft: 12 }]}>
      <Typography size={13.5} color={G.forest} style={{ fontWeight: '600' }}>
        {o.t}
      </Typography>
      <Typography size={11} color={G.muted} mT={2}>
        {o.d}
      </Typography>
    </View>
    <View style={[styles.radioOuter, selected && styles.radioOuterOn]}>
      {selected ? <View style={styles.radioInner} /> : null}
    </View>
  </TouchableOpacity>
);

const CheckoutScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [delivery, setDelivery] = useState(0);
  const [payment, setPayment] = useState(0);

  return (
    <View style={local.page}>
      <CommerceStackHeader navigation={navigation} title="Checkout" />
      <ScrollView
        contentContainerStyle={[
          gardenUi.pageX,
          local.scroll,
          { paddingBottom: insets.bottom + Sizer.vSize(100) },
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={local.steps}>
          {['Cart', 'Shipping', 'Pay'].map((s, i) => (
            <View key={s} style={local.stepItem}>
              <View style={[styles.step, i <= 1 && styles.stepOn]}>
                <Typography size={11} color={i <= 1 ? G.accent : G.muted} style={{ fontWeight: '700' }}>
                  {i + 1}
                </Typography>
              </View>
              <Typography size={12} color={i <= 1 ? G.forest : G.muted} style={{ fontWeight: i <= 1 ? '600' : '400' }}>
                {s}
              </Typography>
              {i < 2 ? <View style={styles.stepLine} /> : null}
            </View>
          ))}
        </View>

        <Typography size={15} color={G.forest} mT={8} style={{ fontWeight: '700' }}>
          Shipping Address
        </Typography>
        <View style={[styles.addressCard, { marginTop: 8 }]}>
          <Flex jusContent="space-between" extraStyle={{ width: '100%' }}>
            <View style={{ flex: 1 }}>
              <Typography size={13.5} color={G.forest} style={{ fontWeight: '600' }}>
                Emma Richardson
              </Typography>
              <Typography size={12.5} color={G.muted} mT={4}>
                128 Willow Lane, Apt 3B{'\n'}Portland, OR 97204
              </Typography>
              <Typography size={12.5} color={G.muted} mT={2}>
                +1 (503) 555-0143
              </Typography>
            </View>
            <Typography size={12} color={G.primary} style={{ fontWeight: '600' }}>
              Change
            </Typography>
          </Flex>
        </View>

        <Typography size={15} color={G.forest} mT={20} style={{ fontWeight: '700' }}>
          Delivery
        </Typography>
        <View style={{ marginTop: 8 }}>
          <DeliveryOption
            o={{ t: 'Standard', d: '3–5 business days', p: '$6.00' }}
            selected={delivery === 0}
            onSelect={() => setDelivery(0)}
          />
          <DeliveryOption
            o={{ t: 'Express', d: '1–2 business days', p: '$14.00' }}
            selected={delivery === 1}
            onSelect={() => setDelivery(1)}
          />
        </View>

        <Typography size={15} color={G.forest} mT={20} style={{ fontWeight: '700' }}>
          Payment
        </Typography>
        <View style={{ marginTop: 8 }}>
          {[
            { t: 'Visa •••• 4242', d: 'Expires 06/27', e: '💳' },
            { t: 'Apple Pay', d: 'Touch ID', e: '' },
            { t: 'PayPal', d: 'emma@solterra.app', e: '🅿️' },
          ].map((o, i) => (
            <PaymentOption key={o.t} o={o} selected={payment === i} onSelect={() => setPayment(i)} />
          ))}
        </View>
      </ScrollView>

      <View style={[styles.stickyFooter, { paddingBottom: insets.bottom + Sizer.vSize(16) }]}>
        <TouchableOpacity
          style={local.placeBtn}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('OrderCompleteScreen')}>
          <Typography size={14} color={G.accent} style={{ fontWeight: '600' }}>
            Place Order · $89.00
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const local = StyleSheet.create({
  page: { flex: 1, backgroundColor: G.cream },
  scroll: { paddingTop: Sizer.vSize(16) },
  steps: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  stepItem: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 6 },
  placeBtn: {
    flex: 1,
    height: 48,
    borderRadius: 16,
    backgroundColor: G.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CheckoutScreen;
