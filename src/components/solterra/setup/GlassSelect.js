import React, { useState } from 'react';
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { ChevronDown } from '../garden/GardenUiParts';
import { trellisAuthStyles, T } from '../../../screens/_partials/trellisAuthUi';
import { FONTS } from '../../../globalStyle/Theme';
import Sizer from '../../../helpers/Sizer';

const IconCheck = ({ size = 18, color = T.primary }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M20 6L9 17l-5-5" stroke={color} strokeWidth={2.5} strokeLinecap="round" />
  </Svg>
);

/**
 * Glass field trigger + iOS-style sheet picker (matches mobile web native select).
 */
const GlassSelect = ({ label, value, options, onChange }) => {
  const insets = useSafeAreaInsets();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  const pick = option => {
    onChange(option);
    close();
  };

  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        style={[trellisAuthStyles.glassInput, styles.trigger, open && styles.triggerOpen]}
        activeOpacity={0.88}
        onPress={() => setOpen(true)}>
        <Text style={styles.value} numberOfLines={1}>
          {value}
        </Text>
        <View style={[styles.chevronWrap, open && styles.chevronOpen]}>
          <ChevronDown size={16} color="rgba(255,255,255,0.7)" />
        </View>
      </TouchableOpacity>

      <Modal
        visible={open}
        transparent
        animationType="slide"
        onRequestClose={close}>
        <View style={styles.modalRoot}>
          <Pressable style={styles.backdrop} onPress={close} />

          <View style={[styles.sheet, { paddingBottom: insets.bottom + 12 }]}>
            <View style={styles.handle} />

            {label ? (
              <Text style={styles.sheetTitle}>{label}</Text>
            ) : null}

            <View style={styles.optionsCard}>
              {options.map((option, i) => {
                const selected = option === value;
                return (
                  <TouchableOpacity
                    key={option}
                    style={[styles.optionRow, i < options.length - 1 && styles.optionDivider]}
                    activeOpacity={0.7}
                    onPress={() => pick(option)}>
                    <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
                      {option}
                    </Text>
                    {selected ? <IconCheck /> : <View style={styles.checkSpacer} />}
                  </TouchableOpacity>
                );
              })}
            </View>

            <TouchableOpacity style={styles.cancelBtn} activeOpacity={0.85} onPress={close}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { zIndex: 1 },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
    overflow: 'hidden',
  },
  triggerOpen: {
    borderColor: 'rgba(255,255,255,0.45)',
    backgroundColor: 'rgba(255,255,255,0.22)',
  },
  value: {
    flex: 1,
    fontSize: Sizer.fS(14),
    color: '#FFFFFF',
    fontWeight: '400',
    ...Platform.select({ android: { includeFontPadding: false } }),
  },
  chevronWrap: { marginLeft: 8, flexShrink: 0 },
  chevronOpen: { transform: [{ rotate: '180deg' }] },
  modalRoot: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  handle: {
    alignSelf: 'center',
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(60,60,67,0.3)',
    marginBottom: 12,
  },
  sheetTitle: {
    textAlign: 'center',
    fontSize: Sizer.fS(13),
    fontWeight: '600',
    color: 'rgba(60,60,67,0.6)',
    marginBottom: 10,
    fontFamily: FONTS.body,
  },
  optionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    minHeight: Sizer.hSize(48),
  },
  optionDivider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(60,60,67,0.12)',
  },
  optionText: {
    fontSize: Sizer.fS(17),
    color: '#1A3020',
    fontWeight: '400',
    flex: 1,
  },
  optionTextSelected: {
    color: T.primary,
    fontWeight: '600',
  },
  checkSpacer: { width: 18 },
  cancelBtn: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: Sizer.fS(17),
    fontWeight: '600',
    color: T.primary,
  },
});

export default GlassSelect;
