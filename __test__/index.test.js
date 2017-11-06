/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import {
  Button,
  Checkbox,
  Checkboxes,
  Dropdown,
  FluidBox,
  Grid,
  InputField,
  NavSelect,
  RadioButton,
  Select,
  Theme,
} from '../src';

describe('Welcome (Snapshot)', () => {
  it('Welcome renders hello world', () => {
    const component = renderer.create(<Checkbox />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('Welcome renders hello world', () => {
    const component = renderer.create(<Checkbox />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
