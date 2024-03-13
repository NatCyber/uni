import { render } from '@testing-library/react';

import Applicant from './applicant';

describe('Applicant', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Applicant />);
    expect(baseElement).toBeTruthy();
  });
});
