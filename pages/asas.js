import React, { useState } from 'react';
import { QueryBuilderDnD } from '@react-querybuilder/dnd';
import * as ReactDnD from 'react-dnd';
import * as ReactDndHtml5Backend from 'react-dnd-html5-backend';
import * as ReactDndTouchBackend from 'react-dnd-touch-backend';
import { QueryBuilder } from 'react-querybuilder';
// import { fields } from './fields';
import 'react-querybuilder/dist/query-builder.css';

// import { QueryBuilderMaterial } from '@react-querybuilder/material';
import { fieldsss } from '@/Components/fieldss';


// Define initial query (removed RuleGroupType typing)
const initialQuery = { combinator: 'and', rules: [] };

const App = () => {
  const [query, setQuery] = useState(initialQuery);

  return (
    <QueryBuilderDnD
      dnd={{ ...ReactDnD, ...ReactDndHtml5Backend, ...ReactDndTouchBackend }}
    >
   
 
          <QueryBuilder
            fields={fieldsss}
            query={query}
            onQueryChange={setQuery}
            addRuleToNewGroups
            debugMode
            showCloneButtons
            useDateTimePackage
            controlClassnames={{
              queryBuilder: 'queryBuilder-branches queryBuilder-justified',
            }}
          />
    
      
    </QueryBuilderDnD>
  );
};

export default App;
