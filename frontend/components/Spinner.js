import React from 'react'
import Loader from 'react-loader'
import { theme } from '../theme/theme'

const Spinner = () =>
  <Loader
    loaded={false}
    width={10}
    radius={50}
    corners={5}
    rotate={0}
    color={theme.red}
    speed={2}
    className="spinner"
  />

export default Spinner
