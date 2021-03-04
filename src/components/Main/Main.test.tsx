import { render, screen } from '@testing-library/react'

import { Main } from './Main'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument()
  })

  it('should match the snapshot', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
