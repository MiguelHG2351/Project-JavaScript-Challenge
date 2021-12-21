import Header_ from "components/Header";
import '../styles/global.css'
import { SessionProvider } from "next-auth/react"

export default  function App({
    Component,
    pageProps: { session, ...pageProps }
}) {
    return (
        <>
            <SessionProvider session={session} refetchInterval={5*60}>
                <Header_ />
                <Component {...pageProps} />
            </SessionProvider>
        </>
    );
}