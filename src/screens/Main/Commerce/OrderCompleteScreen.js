import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import Typography from '../../../atomComponents/Typography';
import Flex from '../../../atomComponents/Flex';
import { COLORS, FONTS } from '../../../globalStyle/Theme';
import Sizer from '../../../helpers/Sizer';
import { G } from '../../_partials/gardenUi';
import { commerceStyles as styles, SummaryRow } from '../../_partials/commerceStyles';

/** Text "✓" renders as a chevron on iOS system fonts — use SVG instead */
const OrderCheckMark = () => (
  <Svg width={44} height={44} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 6L9 17l-5-5"
      stroke={G.primary}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const OrderCompleteScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={local.page}
      contentContainerStyle={[
        styles.orderRoot,
        { paddingTop: insets.top + Sizer.vSize(48), paddingBottom: insets.bottom + 24 },
      ]}>
      <View style={styles.checkCircle}>
        <OrderCheckMark />
      </View>
      <Typography
        size={26}
        lineHeight={34}
        color={G.forest}
        mT={24}
        textAlign="center"
        style={local.title}>
        Order Confirmed!
      </Typography>
      <Typography size={14} color={G.muted} textAlign="center" mT={8} style={{ maxWidth: 280 }}>
        Thank you, Emma. Your garden essentials are on the way 🌿
      </Typography>

      <View style={styles.orderCard}>
        <Flex jusContent="space-between" extraStyle={{ width: '100%' }}>
          <View>
            <Typography size={11} color={G.muted} style={{ fontWeight: '600', letterSpacing: 1 }}>
              ORDER NUMBER
            </Typography>
            <Typography
              size={15}
              lineHeight={20}
              color={G.forest}
              mT={4}
              style={{ fontWeight: '700', fontFamily: FONTS.display }}>
              #SOL-24890
            </Typography>
          </View>
          <View style={styles.confirmedBadge}>
            <Typography size={11} color={COLORS.success} style={{ fontWeight: '600' }}>
              Confirmed
            </Typography>
          </View>
        </Flex>
        <View style={styles.divider} />
        <SummaryRow label="Items" value="4" />
        <SummaryRow label="Delivery" value="Standard · 3–5 days" />
        <SummaryRow label="Total Paid" value="$89.00" bold primary />
      </View>

      <View style={styles.deliveryCard}>
        <Typography size={15} color="#FFFFFF" style={{ fontWeight: '700' }}>
          📦 Arrives by Tue, Jun 4
        </Typography>
        <Typography size={12} color="rgba(255,255,255,0.75)" mT={4}>
          We'll send tracking once it ships.
        </Typography>
      </View>

      <View style={styles.orderActions}>
        <TouchableOpacity
          style={styles.primaryBtn}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('ProfileScreen')}>
          <Typography size={14} color={G.accent} style={{ fontWeight: '600' }}>
            Track Order
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.outlineBtn}
          activeOpacity={0.88}
          onPress={() => navigation.reset({ index: 0, routes: [{ name: 'MainTabs' }] })}>
          <Typography size={14} color={G.primary} style={{ fontWeight: '600' }}>
            Back to Home
          </Typography>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const local = StyleSheet.create({
  page: { flex: 1, backgroundColor: G.cream },
  title: {
    fontFamily: FONTS.display,
    fontWeight: '700',
    alignSelf: 'stretch',
    paddingHorizontal: 8,
  },
});

export default OrderCompleteScreen;
