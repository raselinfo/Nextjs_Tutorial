import Link from "next/link"
import Post from "../components/Post"
import posts from "../db/posts"
export default function Home() {
  return (
    <>
      <section>


        <h1 className="text-black text-center text-5xl m-5 font-bold">Hunting Coder</h1>
        <p className="text-black text-center text-1xl">Lorem ipsum dolor sit amet.</p>

        <div className="popular_blog flex flex-col items-center justify-center mt-12">
          <h2 className="text-2xl text-black font-bold mb-5">Popular Blog</h2>

          {
            posts.length > 0 ?  posts.map(({url, title, des},index) => {
              return <Post url={url} title={title} des={des} key={index} />
            }) : <h1>Not Post found</h1>
          }

        </div>
      </section>
    </>
  )
}


