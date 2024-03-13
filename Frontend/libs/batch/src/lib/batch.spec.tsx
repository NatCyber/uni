import { render } from '@testing-library/react';

import Batch from './batch';

describe('Batch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Batch />);
    expect(baseElement).toBeTruthy();
  });
});
