import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import CartIconButton from '../../../components/solterra/shop/CartIconButton';
import { getCartItemCount } from './cartItems';
import { FONTS } from '../../../globalStyle/Theme';
import Sizer from '../../../helpers/Sizer';
import { G, gardenUi } from '../../_partials/gardenUi';

const NAV_SIDE = 48;

/** Web cart/checkout: white bar, divider, centered 17px display title */
export const CommerceStackHeader = ({ navigation, title, onBack, right }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.bar,
        gardenUi.pageX,
        { paddingTop: insets.top + Sizer.vSize(12), paddingBottom: Sizer.vSize(16) },
      ]}>
      <TouchableOpacity
        onPress={onBack ?? (() => navigation.goBack())}
        style={styles.hit}
        hitSlop={12}
        accessibilityLabel="Go back">
        <Typography size={18} color={G.forest}>
          ←
        </Typography>
      </TouchableOpacity>
      <Typography size={17} color={G.forest} style={styles.title} numberOfLines={1}>
        {title}
      </Typography>
      <View style={styles.hit}>{right ?? <View style={styles.navSpacer} />}</View>
    </View>
  );
};

/** Web shop-list: back | title | cart icon */
export const CommerceListHeader = ({ navigation, title }) => (
  <CommerceStackHeader
    navigation={navigation}
    title={title}
    right={
      <CartIconButton
        count={getCartItemCount()}
        iconSize={20}
        hitSize={48}
        onPress={() => navigation.navigate('CartScreen')}
      />
    }
  />
);

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: G.divider,
  },
  hit: {
    minWidth: NAV_SIDE,
    minHeight: NAV_SIDE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navSpacer: {
    minWidth: NAV_SIDE,
    minHeight: NAV_SIDE,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTS.display,
    fontWeight: '700',
    marginHorizontal: 4,
  },
});

export default CommerceStackHeader;
