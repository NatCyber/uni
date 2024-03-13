import { render } from '@testing-library/react';

import Student from './student';

describe('Student', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Student />);
    expect(baseElement).toBeTruthy();
  });
});
