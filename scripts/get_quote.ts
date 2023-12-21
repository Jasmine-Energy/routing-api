/**
 * ts-node --project=tsconfig.cdk.json scripts/get_quote.ts
 */
import axios, { AxiosResponse } from 'axios'
import dotenv from 'dotenv'
import { QuoteQueryParams } from '../lib/handlers/quote/schema/quote-schema'
import { QuoteResponse } from '../lib/handlers/schema'
dotenv.config()
  ; (async function () {
    const quotePost: QuoteQueryParams = {
      tokenInAddress: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
      tokenInChainId: 137,
      tokenOutAddress: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
      tokenOutChainId: 137,
      amount: '123000000000000000000',
      type: 'exactIn',
      recipient: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
      slippageTolerance: '5',
      deadline: '360',
      algorithm: 'alpha',
    }

    const response: AxiosResponse<QuoteResponse> = await axios.post<QuoteResponse>(
      process.env.UNISWAP_ROUTING_API! + 'quote',
      quotePost
    )

    console.log({ response })
  })()
