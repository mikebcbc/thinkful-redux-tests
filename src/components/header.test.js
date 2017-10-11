import React from 'react';
import {shallow} from 'enzyme';

import {Header} from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Hides the info modal initially', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('InfoModal').exists()).toEqual(false);
    });

    // it('Should render the info modal when toggled', () => { // Do I test this here? It's not even in the component anymore.
    //     const wrapper = shallow(<Header />);
    //     wrapper.instance().toggleInfoModal(true);
    //     expect(wrapper.find('InfoModal').exists()).toEqual(true);
    // });
});