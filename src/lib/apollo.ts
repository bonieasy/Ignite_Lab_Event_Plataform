import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-eu-central-1.graphcms.com/v2/cl4qu0uol06ws01z63sak7hkz/master',
    cache: new InMemoryCache()
})
