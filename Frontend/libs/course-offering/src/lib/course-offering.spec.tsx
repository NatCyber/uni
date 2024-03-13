import { render } from '@testing-library/react';

import CourseOffering from './course-offering';

describe('CourseOffering', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseOffering />);
    expect(baseElement).toBeTruthy();
  });
});
