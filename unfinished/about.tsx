import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import { TITLE } from '../lib/constants'

export default function() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{ TITLE }</title>
                </Head>
                <Header />
                <Container >
                    <Navbar />
                    <div className="grid justify-center m-10 gap-2">
                        <div className="font-hindsiliguri font-zinc-600 text-3xl lg:text-6xl">
                            Welcome!
                        </div>
                        <div className="font-hindsiliguri max-w-screen-lg my-5">
                            After studying Cognitive Science and later Machine Learning, I worked as a data analyst for 5 years at 
                            data providers and SAAS companies, where I queried, crunched, and presented data findings
                            to internal and external clients. After years of simple calculations, I decided to re-apply myself to
                            advanced data science. This blog is a way of organizing and sharing my learnings as 
                            I transition away from data analytics back into applied machine learning. I hope you find something of use!
                        </div>
                    </div>
                <Footer />
                </Container>
            </Layout>
        </>
    )
}