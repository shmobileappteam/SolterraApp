import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Typography from '../../atomComponents/Typography';
import { COLORS, FONTS, SPACING } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';

export default function SectionHeader({ title, onAll }) {
  return (
    <View style={styles.row}>
      <Typography variant="h3" size={17} color={COLORS.foreground} style={{ fontFamily: FONTS.display, fontWeight: '700' }}>
        {title}
      </Typography>
      {onAll ? (
        <TouchableOpacity onPress={onAll}>
          <Typography variant="caption" color={COLORS.green600} style={{ fontWeight: '600' }}>
            View All →
          </Typography>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Sizer.hSize(SPACING.screenPx),
    marginTop: Sizer.vSize(20),
    marginBottom: Sizer.vSize(10),
  },
});
