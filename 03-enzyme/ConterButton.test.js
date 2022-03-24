import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('renders CounterButton component', () => {
    const mockColor = 'red';
    //                                                      if snapshot doesn't exist, creates it on 1st call
    //                                                      2nd call compare w/ snapshot
    expect(shallow(< CounterButton color={mockColor} />)).toMatchSnapshot();
})

it('increments counter in component state', () => {
    const mockColor = 'red';
    const wrapper = shallow(< CounterButton color={mockColor} />);
    //            by id  
    //                                      event in browser  
    wrapper.find('[id]="counter"').simulate('click');
    wrapper.find('[id]="counter"').simulate('click');
    //              get state
    expect(wrapper.state()).toEqual({ conter: 2});
    
    //              get props
    expect(wrapper.props().color).toEqual('red');
    
    //              get instance like after new keyword
    expect(wrapper.instance()).methodForTest().toEqual('returned value from methodForTest');
})
