import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { LOCALES } from './constants'
import { messages } from './messages/'

const Provider = ({ children, locale = LOCALES.ENGLISH }) => {
  return (
    <IntlProvider
      textComponent={Fragment}
      locale={locale}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  )
}
Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  locale: PropTypes.object,
}

export default Provider
