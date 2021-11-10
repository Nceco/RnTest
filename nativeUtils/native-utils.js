import { NativeModules } from 'react-native';

export const CalendarManager = NativeModules.CalendarManager;

export const contactUtils = NativeModules.RNContact || {};

export const ToastNative = NativeModules.ToastExample;