import boxen from 'boxen'

import { RequestOptions } from '../../typings/domain-types'

/**
 * Request configuration options
 */
export const REQUEST_OPTIONS: Readonly<RequestOptions> = {
    url: 'https://styled-quotes.vercel.app/api',
}

/**
 * Output configuration options
 */
export const OUTPUT_OPTIONS: Readonly<boxen.Options> = {
    padding: 1,
    margin: 1,
    borderStyle: 'single',
    borderColor: 'yellow',
}
