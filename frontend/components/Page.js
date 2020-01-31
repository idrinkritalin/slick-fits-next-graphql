import { theme } from '../theme/theme'
import { ThemeProvider } from 'styled-components'
import { Inner, StyledPage } from '../theme/globals'
import Header from './Header'
import Meta from './Meta'

const Page = (props) => {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header />
        <Inner>
          {children}
        </Inner>
      </StyledPage>
    </ThemeProvider>
  )
}
export default Page
