import React, { useCallback, useRef, useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components';
import OnboardingPagination from '../../components/solterra/OnboardingPagination';
import { COLORS, FONTS } from '../../globalStyle/Theme';
import Sizer from '../../helpers/Sizer';
import OnboardingSlide from './OnboardingSlide';
import {
  getOnboardingPagination,
  getOnboardingSlideIndexForDot,
  shouldShowOnboardingPagination,
} from './onboardingPagination';
import { FOOTER, ONBOARDING_UI } from './onboardingUi';
import { ONBOARDING_SLIDES } from './onboardingSlides';

const OnboardingScreen = ({ navigation }) => {
  const listRef = useRef(null);
  const [index, setIndex] = useState(0);
  const isLast = index === ONBOARDING_SLIDES.length - 1;
  const currentSlide = ONBOARDING_SLIDES[index];
  const useWelcomeFooter = currentSlide.footer === FOOTER.welcome;
  const showPagination = shouldShowOnboardingPagination(index);
  const pagination = getOnboardingPagination(index);
  const nextLabel = currentSlide.nextLabel ?? 'Next';

  const goNext = useCallback(() => {
    if (isLast) {
      navigation.replace('AuthWelcomeScreen');
      return;
    }
    const next = index + 1;
    listRef.current?.scrollToIndex({ index: next, animated: true });
    setIndex(next);
  }, [index, isLast, navigation]);

  const onMomentumScrollEnd = useCallback(e => {
    const nextIndex = Math.round(e.nativeEvent.contentOffset.x / ONBOARDING_UI.screenW);
    setIndex(nextIndex);
  }, []);

  const goToSlide = useCallback(dotIndex => {
    const target = getOnboardingSlideIndexForDot(dotIndex);
    listRef.current?.scrollToIndex({ index: target, animated: true });
    setIndex(target);
  }, []);

  return (
    <SafeAreaView style={styles.root} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor={ONBOARDING_UI.cream} />

      <View style={styles.screenBody}>
        <FlatList
          ref={listRef}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={ONBOARDING_SLIDES}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onMomentumScrollEnd}
          getItemLayout={(_, i) => ({
            length: ONBOARDING_UI.screenW,
            offset: ONBOARDING_UI.screenW * i,
            index: i,
          })}
          renderItem={({ item }) => (
            <View style={styles.slidePage}>
              <OnboardingSlide
                slide={item}
                onWelcomeNext={item.footer === FOOTER.welcome ? goNext : undefined}
                welcomeNextLabel={nextLabel}
              />
            </View>
          )}
        />

        {!useWelcomeFooter ? (
          <View style={[styles.footer, styles.footerStandard]}>
            {showPagination && pagination ? (
              <OnboardingPagination
                count={pagination.count}
                index={pagination.index}
                onSelect={goToSlide}
              />
            ) : null}
            <Button
              label={nextLabel}
              onPress={goNext}
              height={52}
              btnStyle={styles.nextBtn}
              textStyle={styles.nextBtnText}
            />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: ONBOARDING_UI.cream,
  },
  screenBody: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
  },
  slidePage: {
    width: ONBOARDING_UI.screenW,
    height: '100%',
  },
  footer: {
    backgroundColor: ONBOARDING_UI.cream,
  },
  footerStandard: {
    paddingHorizontal: ONBOARDING_UI.padX,
    paddingTop: Sizer.vSize(10),
    paddingBottom: Sizer.vSize(10),
    gap: 16,
  },
  nextBtn: {
    borderRadius: ONBOARDING_UI.radiusMd,
    backgroundColor: ONBOARDING_UI.primary,
  },
  nextBtnText: {
    color: ONBOARDING_UI.white,
    fontFamily: FONTS.bodySemiBold,
    fontSize: Sizer.fS(16),
    fontWeight: '600',
  },
});

export default OnboardingScreen;
