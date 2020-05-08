import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({
  path,
  size = 24,
  color = 'black',
  className,
  onClick = x => x,
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path d={path} />
  </svg>
)

Icon.propTypes = {
  path: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export const CalendarIcon = props => (
  <Icon
    {...props}
    path="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
  />
)

export const ChevronRightIcon = props => (
  <Icon
    {...props}
    path="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
  />
)

export const ChevronLeftIcon = props => (
  <Icon
    {...props}
    path="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
  />
)
