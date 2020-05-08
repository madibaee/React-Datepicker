import React from 'react'
import PropTypes from 'prop-types'

import {ChevronRightIcon, ChevronLeftIcon} from './Icons'

const Chevron = ({dir, locale, goBack = x => x, goForward = x => x}) => {
  const props = {
    onClick: dir === 'back' ? goBack : goForward,
    size: 45,
    className: 'chevron',
  }
  const isRight =
    (locale === 'fa' && dir === 'back') ||
    (locale === 'en' && dir === 'forward')
  const isLeft =
    (locale === 'en' && dir === 'back') ||
    (locale === 'fa' && dir === 'forward')
  if (isRight) {
    return <ChevronRightIcon {...props} />
  } else if (isLeft) {
    return <ChevronLeftIcon {...props} />
  }
}

Chevron.prototype = {
  dir: PropTypes.oneOf(['back', 'forward']),
  locale: PropTypes.oneOf(['fa', 'en']),
  goBack: PropTypes.func,
  goForward: PropTypes.func,
}

export default Chevron
