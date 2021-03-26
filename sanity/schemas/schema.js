import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import movie from './documents/movie'
import actor from './documents/actor'

export default createSchema({

  name: 'default',

  types: schemaTypes.concat([
    movie,
    actor
  ]),
})