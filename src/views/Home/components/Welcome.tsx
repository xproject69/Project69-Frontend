import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text, Link } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;
`
const StyledLink = styled(Link)`
  align-self: center;
  margin-top: 16px;
  margin: auto;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(999, 'Welcome to Balanced by Project69')}
        </Heading>
        <>
          <Text color="textSubtle">
            {TranslateString(
              999,
              'Stake and enjoy the passive income while your investment works for you on our network application.',
            )}
          </Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
