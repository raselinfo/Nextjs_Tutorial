import Meta from "../components/Meta"
import Link from "next/link"
export default function Home({ blogs }) {

  return (
    <div className='container mt-5'>
      <Meta title="Home" description="this is home description" keywords="home,blog" />
      <ul>
        {blogs.map(blog => {
          return <Link href="/blog/[id]" as={`/blog/${blog.id}`} key={blog.id}>
            <a >
              <li>
                <h3>{blog.title.substring(0, 10)}</h3>
                <p>{blog.body.substring(0, 50)}</p>
              </li>
            </a>
          </Link>
        })}
      </ul>

    </div>
  )
}

export async function getServerSideProps() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts")
  let blogs = await res.json()
  return {
    props: {
      blogs
    }
  }
}

