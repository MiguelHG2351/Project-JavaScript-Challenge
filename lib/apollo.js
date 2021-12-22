import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { useMemo } from 'react'

let apolloClient;

function createApolloClient(url) {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: url,
            credentials: 'same-origin',
        }),
        cache: new InMemoryCache()
    })
}

export function initializeApollo(initialState = null, uri) {
    const _apolloClient = apolloClient ?? createApolloClient(uri);
    if(initialState) {
        const existingCache = _apolloClient.extract();
        _apolloClient.cache.restore({...existingCache, ...initialState});
    }

    if(typeof window === 'undefined') return _apolloClient;

    if(!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
}

export function useApolloClient(initialState, uri) {
    const store = useMemo(() => initializeApollo(initialState, uri), [initialState]);
    return store;
}
