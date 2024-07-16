import React from 'react';
import renderer from 'react-test-renderer';
import { MainPage } from './MainPage';
import '@testing-library/jest-dom';


describe('MainPage', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<MainPage />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  