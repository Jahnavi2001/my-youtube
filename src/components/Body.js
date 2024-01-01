import { Outlet } from 'react-router-dom';
import React from 'react';
import useAuth from '../hooks/useAuth';

const Body = () => {
	// Created custom hook
	useAuth();

	return <Outlet />;
};

export default Body;
