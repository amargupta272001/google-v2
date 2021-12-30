import {API_KEY, CONTEXT_KEY} from "../keys";

import Head from "next/head";
import Header from "../components/Header";
import Response from "../response";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";

function Search({results}) {
    const router = useRouter();
    console.log('results',results);
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
        
            <SearchResults results={results}/>
        </div>
    )
}

export default Search;

export async function getServerSideProps(context){
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then((response) => response.json());

    //After the server has render..... Pass the result to the client...pageProps

    return {
        props:{
            results: data
        }
    }
}
