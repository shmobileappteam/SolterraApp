import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '../../../atomComponents/Typography';
import {
  IconCheck,
  IconCircleEmpty,
  IconDroplet,
  IconLeaf,
} from '../../../components/solterra/tasks/TasksUiParts';
import { heroGarden } from '../../../assets/images';
import { G, gardenUi } from '../../_partials/gardenUi';
import Sizer from '../../../helpers/Sizer';

const RELATED = ['Check drip emitters', 'Mulch after watering'];

const TaskDetailScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={gardenUi.page}>
      <View style={[gardenUi.pageX, styles.header, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Typography size={18} color={G.muted}>
            ←
          </Typography>
        </TouchableOpacity>
        <Typography size={16} color={G.forest} style={{ fontWeight: '600' }}>
          Task Details
        </Typography>
        <View style={styles.backBtn} />
      </View>

      <ScrollView
        contentContainerStyle={[gardenUi.scrollPad, gardenUi.pageX, { gap: 12, paddingTop: 8 }]}>
        <Image source={heroGarden} style={styles.hero} />
        <View style={[gardenUi.card, styles.card]}>
          <View style={styles.taskHead}>
            <View style={styles.iconBox}>
              <IconDroplet size={20} />
            </View>
            <View style={{ flex: 1 }}>
              <Typography size={16} color={G.forest} style={{ fontWeight: '600' }}>
                Water raised beds
              </Typography>
              <Typography size={12} color={G.muted} mT={2}>
                Vegetables • 2 beds • Due today
              </Typography>
            </View>
          </View>
          <Typography size={13} color={G.muted} mT={12} style={{ lineHeight: 20 }}>
            Deep water both raised beds until moisture reaches 6 inches. Best done in early morning
            before heat peaks.
          </Typography>
          <TouchableOpacity style={styles.completeBtn} activeOpacity={0.88}>
            <IconCheck size={16} />
            <Typography size={14} color="#fff" style={{ fontWeight: '600', marginLeft: 8 }}>
              Mark Complete
            </Typography>
          </TouchableOpacity>
        </View>

        <Typography size={14} color={G.forest} style={{ fontWeight: '600' }}>
          Related tasks
        </Typography>
        {RELATED.map(t => (
          <TouchableOpacity key={t} style={[gardenUi.card, styles.relatedRow]} activeOpacity={0.88}>
            <IconLeaf size={16} />
            <Typography size={13} color={G.forest} style={{ flex: 1, marginLeft: 10, fontWeight: '500' }}>
              {t}
            </Typography>
            <IconCircleEmpty size={16} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  backBtn: { width: 36, alignItems: 'center' },
  hero: { width: '100%', height: Sizer.vSize(160), borderRadius: 8 },
  card: { padding: 14 },
  taskHead: { flexDirection: 'row', gap: 12 },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: G.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: G.forest,
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 16,
  },
  relatedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
});

export default TaskDetailScreen;
