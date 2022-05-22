// Types
import type { MediaType, Request } from 'express-serve-static-core'

export const providedNumber = 123

export const providedBoolean = true

export const providedString = 'Provided String'

export const providedStringArray = ['One', 'Two', 'Three', 'Four']

export const providedFunction = jest.fn().mockName('Provided Mock Function')

export const providedObject = {
  one: {
    two: 'three',
  },
  four: ['five'],
}

export const providedStringObject: { [key: string]: string | undefined } = {
  one: 'two',
  three: 'four',
}

export const providedParams: Request['params'] = {
  one: 'two',
  three: 'four',
}

export const providedMediaTypeArray: MediaType[] = [
  {
    value: 'value',
    quality: 1,
    type: 'type',
    subtype: 'subtype',
  },
]
