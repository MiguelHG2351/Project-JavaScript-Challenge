import Header_ from "components/Header";
import App from "next/app";
import '../styles/global.css'
import { SessionProvider } from "next-auth/react"
import { ApolloProvider } from "@apollo/client";
import { useApolloClient } from "lib/apollo";

export default  function MyApp({
    Component,
    pageProps: { session, ...pageProps },
    uri
}) {
    const client = useApolloClient(pageProps.initialApolloState, uri);


    return (
        <>
            <SessionProvider session={session} refetchInterval={5*60}>
                <ApolloProvider client={client}>
                    <Header_ />
                    <Component {...pageProps} />
                </ApolloProvider>
            </SessionProvider>
        </>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const uri = process.env.GRAPHQL_URI || "http://localhost:3000/api/graphql";
    const appProps = await App.getInitialProps(appContext);

    return {
        ...appProps,
        uri
    }
}
