import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messages } from './loginContainer.i18n';

export const useLoginContainer = (locale: 'nb' | 'en') => {
	const showToasts = true;

	const localeMessages = messages[locale];

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const loginState = useSelector((state: any) => state.login);
	const dispatch = useDispatch();

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		console.log(e.target.value);
		if ((e.target.name = 'email')) {
			setUsername(e.target.value);
		}
		// TODO PASSWORD
	};
	const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
		const params = { showToasts, localeMessages, username, password };
		// dispatch(dispatchLoginUser(params));
	};
	const hasError = (field: string) => {
		return false;
	};
	const authError = '';

	const submitGlemtPassordHandler = (e: any) => {};

	return {
		localeMessages,
		showToasts,
		loginState,
		handleChange,
		submitHandler,
		hasError,
		authError,
		submitGlemtPassordHandler,
		username,
		password,
	};
};
