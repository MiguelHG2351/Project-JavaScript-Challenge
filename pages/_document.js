import Document, { NextScript, Main,  Html, Head} from "next/document";

class MyDoc extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@600&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet"></link>
                </Head>
                <Html>
                    <Main></Main>
                    <NextScript></NextScript>
                </Html>
            </Html>
        )
    }
}

export default MyDoc;
