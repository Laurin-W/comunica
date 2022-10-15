import { QueryEngineBase } from '@comunica/actor-init-query';
import type { ActorInitQueryBase } from '@comunica/actor-init-query';
import type { IQueryContextCommon } from '@comunica/types';
const engineDefault = require('../engine-default.js');

/**
 * A Comunica SPARQL query engine.
 */
export class QueryEngine<QueryContext extends IQueryContextCommon = IQueryContextCommon> extends QueryEngineBase {
  public constructor(engine: ActorInitQueryBase = engineDefault) {
    super(engine);
  }
}
