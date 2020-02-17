import React from 'react'
import { NonFoundWrapper, StyledButton, StyledResult } from './style'

const NotFount = () => {
  return (
    <NonFoundWrapper>
      <StyledResult
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<StyledButton type="primary">Back Home</StyledButton>}
      />
    </NonFoundWrapper>
  )
}

export default NotFount
