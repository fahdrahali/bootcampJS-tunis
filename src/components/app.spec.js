import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/app';

describe('app-component', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
});
