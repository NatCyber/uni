import { render } from '@testing-library/react';

import Instructor from './instructor';

describe('Instructor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Instructor />);
    expect(baseElement).toBeTruthy();
  });
});
