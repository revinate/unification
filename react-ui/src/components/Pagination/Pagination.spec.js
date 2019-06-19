import React from 'react';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import Enzyme from 'enzyme'; // eslint-disable-line
import Adapter from 'enzyme-adapter-react-16'; // eslint-disable-line

Enzyme.configure({ adapter: new Adapter() });

chai.use(sinonChai);

import { Pagination } from './index';

describe('<Pagination/>', function () {
  let onChange;
  let testGeneratedLinks;

  beforeEach(() => {
    onChange = sinon.spy();

    testGeneratedLinks = (generatedLinks, generatedLinksMock) => {
      expect(generatedLinks).to.have.length(generatedLinksMock.length);
      generatedLinks.forEach(function (link, index) {
        expect(link.text()).to.equal(generatedLinksMock[index]);
      });
    };

  });

  it('Creates the correct number of page links', function () {
    const wrapper = mount(
      <Pagination
        pageSize={10}
        total={108}
        onChange={onChange}
      />);

    const generatedLinks = wrapper.find('.pagination li');
    // Last item on the array correspond to '>' as we are actually displaying the next
    // button with css (as a font icon), so we don't have any text.
    const generatedLinksMock = ['1', '2', '3', '...', '11', ''];

    // 1 2 3 ... 11 >
    testGeneratedLinks(generatedLinks, generatedLinksMock);
  });

  it('Calls onChange on page navigation', function () {
    const wrapper = mount(
      <Pagination
        pageSize={10}
        total={108}
        onChange={onChange}
      />);

    // Click at the third pagination link (at index 2)
    wrapper.find('.pagination a').at(2).simulate('click');

    expect(onChange).to.have.been.called;

    // Force a re-render before checking the render output
    wrapper.update();

    // The structure of the pagination has already changed so the third pagination link
    // will be now at index 3
    expect(wrapper.find('.pagination li').at(3).hasClass('active')).to.equal(true);
  });

  it('Generates the correct pagination structure after navigation', function () {
    const wrapper = mount(
      <Pagination
        pageSize={10}
        total={108}
        onChange={onChange}
      />);

    let generatedLinks;
    // Last/First item on the array correspond to '<'/'>' as we are actually displaying the next/prev
    // button with css (as a font icon), so we don't have any text.
    let generatedLinksMock;

    /* ---------------------------------------------------
      Test:  Click at the 2nd pagination link (at index 1)
      With test result: < 1 2 3 ... 11 >
    */

    // Simulate page click
    wrapper.find('.pagination a').at(1).simulate('click');

    // Force a re-render before checking the render output
    wrapper.update();

    generatedLinksMock = ['', '1', '2', '3', '...', '11', ''];
    generatedLinks = wrapper.find('.pagination li');
    // < 1 2 3 ... 11 >
    testGeneratedLinks(generatedLinks, generatedLinksMock);


    /* ---------------------------------------------------
     Test:  Click at the 3rd pagination link (at index 3)
     With test result: < 1 2 3 4 ... 11 >
     */

    // Simulate page click
    wrapper.find('.pagination a').at(3).simulate('click');

    // Force a re-render before checking the render output
    wrapper.update();

    generatedLinksMock = ['', '1', '2', '3', '4', '...', '11', ''];
    generatedLinks = wrapper.find('.pagination li');
    // < 1 2 3 4 ... 11 >
    testGeneratedLinks(generatedLinks, generatedLinksMock);

    /* ---------------------------------------------------
     Test:  Click at the 4th pagination link (at index 4)
     With test result: < 1 ... 3 4 5 ... 11 >
     Note: clicking on  5, 6, 7 and 8 will generate the same structure
     (i.e. < 1 ... 7 8 9 ... 11 >) that's why we will go and test clicking on
     9, 10 and 11 directly.
     We will use this opportunity to test the next link as well :)
     */

    // Simulate page click
    wrapper.find('.pagination a').at(4).simulate('click');

    // Force a re-render before checking the render output
    wrapper.update();

    generatedLinksMock = ['', '1', '...', '3', '4', '5', '...', '11', ''];
    generatedLinks = wrapper.find('.pagination li');
    // < 1 ... 3 4 5 ... 11 >
    testGeneratedLinks(generatedLinks, generatedLinksMock);

    // Simulate clicking the next link (at index 6 since '...' are ignored) 4 times
    wrapper.find('.pagination a').at(6).simulate('click');
    wrapper.find('.pagination a').at(6).simulate('click');
    wrapper.find('.pagination a').at(6).simulate('click');
    wrapper.find('.pagination a').at(6).simulate('click');

    /* ---------------------------------------------------
     Test:  Click at the 9th pagination link (at index 4)
     With test result: < 1 ... 8 9 10 11 >
     */

    // Simulate page click
    wrapper.find('.pagination a').at(4).simulate('click');

    // Force a re-render before checking the render output
    wrapper.update();

    generatedLinksMock = ['', '1', '...', '8', '9', '10', '11', ''];
    generatedLinks = wrapper.find('.pagination li');
    // < 1 ... 8 9 10 11 >
    testGeneratedLinks(generatedLinks, generatedLinksMock);

    /* ---------------------------------------------------
     Test:  Click at the 10th pagination link (at index 4)
     With test result: < 1 ... 9 10 11 >
     */

    // Simulate page click
    wrapper.find('.pagination a').at(4).simulate('click');

    // Force a re-render before checking the render output
    wrapper.update();

    generatedLinksMock = ['', '1', '...', '9', '10', '11', ''];
    generatedLinks = wrapper.find('.pagination li');
    // < 1 ... 8 9 10 11 >
    testGeneratedLinks(generatedLinks, generatedLinksMock);

    /* ---------------------------------------------------
     Test:  Click at the 11th pagination link (at index 4)
     With test result: < 1 ... 9 10 11
     */

    // Simulate page click
    wrapper.find('.pagination a').at(4).simulate('click');

    // Force a re-render before checking the render output
    wrapper.update();

    generatedLinksMock = ['', '1', '...', '9', '10', '11'];
    generatedLinks = wrapper.find('.pagination li');
    // < 1 ... 9 10 11
    testGeneratedLinks(generatedLinks, generatedLinksMock);
  });
});
