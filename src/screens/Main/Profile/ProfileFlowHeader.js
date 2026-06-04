import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import { FONTS } from '../../../globalStyle/Theme';
import Sizer from '../../../helpers/Sizer';
import { G, gardenUi } from '../../_partials/gardenUi';

const NAV_SIDE = 48;

/** Web profile-menu: back + 22px bold title on cream */
export const ProfileMenuHeader = ({ navigation, title }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.creamBar,
        gardenUi.pageX,
        { paddingTop: insets.top + Sizer.vSize(12), paddingBottom: Sizer.vSize(16) },
      ]}>
      <View style={styles.menuTitleRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.hit}
          hitSlop={12}
          accessibilityLabel="Go back">
          <Typography size={20} color={G.forest}>
            ←
          </Typography>
        </TouchableOpacity>
        <Typography size={22} color={G.forest} style={styles.menuTitle}>
          {title}
        </Typography>
      </View>
    </View>
  );
};

/** Web notifications: back | centered 16px title | spacer */
export const ProfileCenteredHeader = ({ navigation, title }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.creamBar,
        gardenUi.pageX,
        { paddingTop: insets.top + Sizer.vSize(12), paddingBottom: Sizer.vSize(16) },
      ]}>
      <View style={styles.centeredRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.hit}
          hitSlop={12}
          accessibilityLabel="Go back">
          <Typography size={20} color={G.forest}>
            ←
          </Typography>
        </TouchableOpacity>
        <Typography size={16} color={G.forest} style={styles.centeredTitle}>
          {title}
        </Typography>
        <View style={styles.navSpacer} />
      </View>
    </View>
  );
};

/** Web edit-profile: white bar, divider border, display title, sage Save */
export const ProfileEditHeader = ({ navigation, onSave }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.editBar,
        gardenUi.pageX,
        { paddingTop: insets.top + Sizer.vSize(12), paddingBottom: Sizer.vSize(12) },
      ]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.hit} hitSlop={12}>
        <Typography size={18} color={G.forest}>
          ←
        </Typography>
      </TouchableOpacity>
      <Typography size={16} color={G.forest} style={styles.editTitle}>
        Edit Profile
      </Typography>
      <TouchableOpacity onPress={onSave ?? (() => navigation.goBack())} style={styles.hit} hitSlop={12}>
        <Typography size={12} color={G.sage} style={styles.saveLabel}>
          Save
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  creamBar: {
    backgroundColor: G.cream,
  },
  menuTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuTitle: {
    fontFamily: FONTS.body,
    fontWeight: '700',
    flex: 1,
  },
  centeredRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centeredTitle: {
    fontFamily: FONTS.body,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  navSpacer: {
    minWidth: NAV_SIDE,
    minHeight: NAV_SIDE,
  },
  hit: {
    minWidth: NAV_SIDE,
    minHeight: NAV_SIDE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: G.divider,
  },
  editTitle: {
    fontFamily: FONTS.display,
    fontWeight: '700',
  },
  saveLabel: {
    fontWeight: '600',
  },
});

export default ProfileMenuHeader;
