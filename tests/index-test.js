import { assert, expect } from 'chai';
import index from '../lib/index'

describe('It can sort an out of order array', () => {
  sampleArray = [3,2,1]
  assert.equal(bubleSort(sampleArray), [1,2,3])
})
