// RootNavigation.js

import * as React from 'react';
import { StackActions } from '@react-navigation/native';
export const navigationRef = React.createRef();
export function push(...args) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(...args));
  }
}

