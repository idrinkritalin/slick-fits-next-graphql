import React, { Component } from 'react'
import { theme } from '../theme/theme'
import { ThemeProvider } from 'styled-components'
import { Inner, StyledPage } from '../theme/globals'
import Header from './Header'
import Meta from './Meta'

export default class Page extends Component {
  render () {
    const { children } = this.props
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
}
