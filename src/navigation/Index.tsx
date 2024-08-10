import React from 'react';
import { useAuth } from '../hooks/useAuth';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import NoConnectionScreen from '../screens/NoConnectionScreen';
import { useNetworkStatus } from '../hooks/useNetworkStatus';

export default function RootNavigation() {
  const { user } = useAuth();
  const isOnline = useNetworkStatus();
  const ja = true;

 
  return user ? <UserStack /> : <AuthStack />;
}
