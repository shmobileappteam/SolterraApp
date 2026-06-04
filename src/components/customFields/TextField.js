import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS } from '../../globalStyle/Theme';
import Typography from '../../atomComponents/Typography';
import Sizer from '../../helpers/Sizer';
import { T } from '../../screens/_partials/trellisAuthUi';

function TextField({ label, right, style, tall = false, variant = 'default', ...props }) {
  const isTrellis = variant === 'trellis';

  return (
    <View>
      <Typography
        variant="label"
        color={isTrellis ? T.muted : COLORS.textMuted}
        mB={6}
        style={isTrellis ? styles.trellisLabel : undefined}>
        {isTrellis ? label : label.toUpperCase()}
      </Typography>
      <View style={styles.inputWrap}>
        <TextInput
          placeholderTextColor={isTrellis ? T.muted : COLORS.textMuted}
          style={[
            styles.input,
            isTrellis && styles.inputTrellis,
            tall && styles.inputTall,
            style,
          ]}
          {...props}
        />
        {right ? <View style={styles.right}>{right}</View> : null}
      </View>
    </View>
  );
}

export default TextField;

const styles = StyleSheet.create({
  trellisLabel: {
    fontSize: Sizer.fS(10),
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  inputWrap: { position: 'relative' },
  inputTrellis: {
    height: Sizer.hSize(40),
    borderRadius: 8,
    borderColor: T.border,
    color: T.forest,
  },
  input: {
    height: Sizer.hSize(48),
    borderRadius: Sizer.hSize(14),
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    paddingHorizontal: Sizer.hSize(14),
    fontSize: Sizer.fS(14),
    color: COLORS.textPrimary,
  },
  inputTall: {
    height: Sizer.hSize(52),
  },
  right: {
    position: 'absolute',
    right: Sizer.hSize(12),
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
