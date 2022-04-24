import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Meta from "../components/Meta"

export default function Home() {
  return (
    <div className='container mt-5'>
      <Meta title="Home" description="this is home description" keywords="home,blog" />
      <h1>Index Page</h1>
    </div>
  )
}
