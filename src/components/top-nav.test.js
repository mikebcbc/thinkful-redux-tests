import React from 'react';
import {shallow} from 'enzyme';

import {toggleInfoModal, newGame} from '../actions';

import {TopNav} from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    // it('Should call onNewGame when new game is clicked', () => {
    //     const dispatch = jest.fn();
    //     const wrapper = shallow(<TopNav dispatch={dispatch} />);
    //     const link = wrapper.find('.new');
    //     link.simulate('click', {
    //         preventDefault() {}
    //     });
    //     expect(dispatch).toHaveBeenCalledWith(newGame(correctAnswer)); // error with correct answer?
    // });

    it('Should dispatch toggleInfoModal when info is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
    });
});