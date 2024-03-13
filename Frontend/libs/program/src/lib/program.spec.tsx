import { render } from '@testing-library/react';

import Program from './program';

describe('Program', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Program />);
    expect(baseElement).toBeTruthy();
  });
});
