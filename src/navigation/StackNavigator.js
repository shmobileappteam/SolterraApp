import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SplashScreen,
  OnboardingScreen,
  AuthWelcomeScreen,
  SignInScreen,
  SignUpScreen,
  ChoosePlanScreen,
  InviteHouseholdScreen,
  ConnectExperienceScreen,
  PlanIntroScreen,
  PlanAboutYouScreen,
  PlanLocationScreen,
  PlanSpaceTypeScreen,
  PlanTimeCommitmentScreen,
  PlanBudgetScreen,
  PlanPlantInterestsScreen,
  PlanGardenPhotoScreen,
  PlanAnalyzingScreen,
  PlanFindingsReviewScreen,
  PlanRecommendedStyleScreen,
  PlanPlantsChosenScreen,
  PlanReviewSummaryScreen,
  PlanBuildingScreen,
  PlanBlueprintRevealScreen,
  PlanDashboardHandoffScreen,
  PreferencesScreen,
  AskSolScreen,
  LearnScreen,
  LessonDetailScreen,
  ShopProductListScreen,
  ProductDetailScreen,
  CartScreen,
  CheckoutScreen,
  OrderCompleteScreen,
  ProfileScreen,
  ProfileMenuScreen,
  NotificationsScreen,
  EditProfileScreen,
  TasksCalendarScreen,
  TaskDetailScreen,
  GardenPlanDetailScreen,
  GardenPlansListScreen,
  GardenAuditScreen,
  GardenDiagnoseDetailScreen,
  GardenProjectDetailScreen,
  ProfileSetupScreen,
  GardenScanScreen,
} from '../screens';
import { G } from '../screens/_partials/gardenUi';
import MainTabNavigator from './MainTabNavigator';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: G.cream },
      }}
      initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ contentStyle: { backgroundColor: 'transparent' } }}
      />
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="AuthWelcomeScreen"
        component={AuthWelcomeScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="ChoosePlanScreen"
        component={ChoosePlanScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="InviteHouseholdScreen"
        component={InviteHouseholdScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="ConnectExperienceScreen"
        component={ConnectExperienceScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanIntroScreen"
        component={PlanIntroScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanAboutYouScreen"
        component={PlanAboutYouScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanLocationScreen"
        component={PlanLocationScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanSpaceTypeScreen"
        component={PlanSpaceTypeScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanTimeCommitmentScreen"
        component={PlanTimeCommitmentScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanBudgetScreen"
        component={PlanBudgetScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanPlantInterestsScreen"
        component={PlanPlantInterestsScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanGardenPhotoScreen"
        component={PlanGardenPhotoScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanAnalyzingScreen"
        component={PlanAnalyzingScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanFindingsReviewScreen"
        component={PlanFindingsReviewScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanRecommendedStyleScreen"
        component={PlanRecommendedStyleScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanPlantsChosenScreen"
        component={PlanPlantsChosenScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanReviewSummaryScreen"
        component={PlanReviewSummaryScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanBuildingScreen"
        component={PlanBuildingScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanBlueprintRevealScreen"
        component={PlanBlueprintRevealScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen
        name="PlanDashboardHandoffScreen"
        component={PlanDashboardHandoffScreen}
        options={{ contentStyle: { backgroundColor: G.cream } }}
      />
      <Stack.Screen name="PreferencesScreen" component={PreferencesScreen} />
      <Stack.Screen
        name="ProfileSetupScreen"
        component={ProfileSetupScreen}
        options={{ contentStyle: { backgroundColor: 'transparent' } }}
      />
      <Stack.Screen
        name="GardenScanScreen"
        component={GardenScanScreen}
        options={{ contentStyle: { backgroundColor: 'transparent' } }}
      />
      <Stack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{ animation: 'fade', animationDuration: 150 }}
      />
      <Stack.Screen name="AskSolScreen" component={AskSolScreen} />
      <Stack.Screen name="LearnScreen" component={LearnScreen} />
      <Stack.Screen name="LessonDetailScreen" component={LessonDetailScreen} />
      <Stack.Screen name="TasksCalendarScreen" component={TasksCalendarScreen} />
      <Stack.Screen name="TaskDetailScreen" component={TaskDetailScreen} />
      <Stack.Screen name="GardenPlanDetailScreen" component={GardenPlanDetailScreen} />
      <Stack.Screen name="GardenPlansListScreen" component={GardenPlansListScreen} />
      <Stack.Screen name="GardenAuditScreen" component={GardenAuditScreen} />
      <Stack.Screen name="GardenDiagnoseDetailScreen" component={GardenDiagnoseDetailScreen} />
      <Stack.Screen name="GardenProjectDetailScreen" component={GardenProjectDetailScreen} />
      <Stack.Screen name="ShopProductListScreen" component={ShopProductListScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen name="OrderCompleteScreen" component={OrderCompleteScreen} />
      <Stack.Screen name="ProfileMenuScreen" component={ProfileMenuScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
