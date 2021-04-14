import _ from 'lodash'

import { Optional } from '../../typings/standard-types'

export const toString = (value: string | string[]): string => (Array.isArray(value) ? value[0] : value)

export const mergeProps = <T>(...obj: unknown[]): T =>
    _.mergeWith({}, ...obj, (o, s) => {
        return _.isArray(s) && _.isArray(o) ? _.union(o, s) : _.isNull(s) ? o : s
    })

/**
 * Utility function to create a K:V from a list of strings
 * @param values initial input array to operate by
 */
export const strToEnum = <T extends string>(values: T[]): { [K in T]: K } => {
    return toEnum(values)
}

/**
 * Utility function to create a K:V from a list of strings
 * @param values initial input array to operate by
 * @param func
 */
export const toEnum = <T extends string, V>(values: T[], func?: (v: T) => V): { [K in T]: V } => {
    // eslint-disable-next-line unicorn/no-array-reduce
    return values.reduce((res, key) => {
        res[key] = (func && func(key)) || key
        return res
    }, Object.create(null))
}

export const isInRange = (actual: number, min: number, max: number): boolean => {
    return actual >= min && actual <= max
}

export const toInt = (str: string): number => {
    return Number.parseInt(str)
}

export const getUrlName = (url: string): Optional<string> => {
    const value = url.split('/').pop()

    return value && value.split('#')[0].split('?')[0]
}
