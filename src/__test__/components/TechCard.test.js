import React from 'react';
import { render, screen } from '@testing-library/react';
import TechCard from '../../components/TechCard';
import TechCardMock from '../../__mocks__/TechCardMock';

describe('TechCard', () => {
  test('render the correct tech name', () => {
    render(<TechCard data={TechCardMock} />);

    expect(screen.getByRole('heading').textContent).toMatch(/Node/);
  });

  test('TechCard snapshot', () => {
    const { asFragment } = render(<TechCard data={TechCardMock} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
