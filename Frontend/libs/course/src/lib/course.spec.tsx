import { render } from '@testing-library/react';

import Course from './course';

describe('Course', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Course />);
    expect(baseElement).toBeTruthy();
  });
});
