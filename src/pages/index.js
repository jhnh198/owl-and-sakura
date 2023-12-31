import Image from 'next/image';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import {PostCard, Categories, PostWidget} from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Owl And Sakura</title>
          <meta name="description" content="Language learning blog" />
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <FeaturedPosts />

        {/* posts */}        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" >
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => <PostCard post={post.node} key={post.title}/>)}
        </div>
        
        <div className="lg:col-span-4 col-span-1">
           <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
           </div>
        </div>              
        </div>

       
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
