import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Typography from '../../../atomComponents/Typography';
import { G } from '../../../screens/_partials/gardenUi';
import { IconShoppingCart } from './ShopUiParts';

/**
 * Web shop header: h-9 w-9 touch target, h-4 w-4 sage badge, 9px white count.
 * Badge hidden when count is 0.
 */
const CartIconButton = ({
  onPress,
  count = 0,
  iconSize = 20,
  hitSize = 36,
  accessibilityLabel = 'Cart',
}) => {
  const showBadge = count > 0;
  const badgeLabel = count > 99 ? '99+' : String(count);

  return (
    <TouchableOpacity
      style={[styles.wrap, { width: hitSize, height: hitSize }]}
      onPress={onPress}
      activeOpacity={0.7}
      hitSlop={4}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={showBadge ? `${count} items in cart` : undefined}>
      <IconShoppingCart size={iconSize} color={G.forest} />
      {showBadge ? (
        <View style={styles.badge}>
          <Typography size={9} color="#FFFFFF" style={styles.badgeText}>
            {badgeLabel}
          </Typography>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const BADGE_SIZE = 16;

const styles = StyleSheet.create({
  wrap: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    minWidth: BADGE_SIZE,
    height: BADGE_SIZE,
    paddingHorizontal: 3,
    borderRadius: BADGE_SIZE / 2,
    backgroundColor: G.sage,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: G.cream,
  },
  badgeText: {
    fontWeight: '700',
    lineHeight: 11,
    textAlign: 'center',
    includeFontPadding: false,
  },
});

export default CartIconButton;
