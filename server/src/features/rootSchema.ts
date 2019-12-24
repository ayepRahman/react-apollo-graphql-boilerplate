import { mergeSchemas } from 'graphql-tools';
import todosSchema from './todos/schema';
/* CODE-GENERATOR - ROOTSCEHMA IMPORT */

export default mergeSchemas({
  schemas: [
    todosSchema,
    /* CODE-GENERATOR - ROOTSCEHMA DEFAULT */
  ],
});
