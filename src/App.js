/* eslint-disable react/jsx-no-undef */
import { Suspense } from 'react';
import Quote from './components/query/Quote';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {

  const client = new QueryClient({
    defaultOptions:{
      queries:{
        suspense:true,
      }
    }
  });

  return (
    <div>
      <QueryClientProvider client={client}>
      <Suspense fallback={<h1>loading...</h1>}>
        <Quote />
        <Quote />
        </Suspense>
      </QueryClientProvider>

     {/* <Suspense fallback={<h1>Data is loading...</h1>}>
     <Quote />
     </Suspense> */}

    </div>
  );
}

export default App;
