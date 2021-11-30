import { css } from 'styled-components'

export const ResponsiveTo = (display = 'Desktop13') => {
  const range = {
    Tablet: '768px',
    Desktop13: '1024px',
    Desktop15: '1200px',
    Desktop22: '1400px'
  }
  return (css`@media only screen and (min-width: ${range[display]})`)
}
