import React from 'react';
import { useAuth } from '../hooks/useAuth';
import AuthStack from './AuthStack';
import UserStack from './UserStack';

export default function RootNavigation() {
  //const { user } = useAuth();

  const ja = true;

  return ja ? <UserStack /> : <AuthStack />;
}