import { render, screen } from '@testing-library/react';

import Layout from './index';

describe('Layout', () => {
  test('should show the Layout component', () => {
    render(
      <Layout>
        <section>
          <h1 data-testid="test-title">Memory gameee</h1>
        </section>
      </Layout>,
    );
    expect(screen.getByTestId('test-title')).toBeDefined();
  });
});
