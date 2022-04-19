import Image from "next/image"
import image from "../public/images/happy.svg"
import { useRef, forwardRef } from "react"


// eslint-disable-next-line react/display-name
const Container = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ overflowX: 'scroll', width: '500px' }}>
      {props.children}
    </div>
  )
})

export default function Home() {

  const lazyroot = useRef(null)
  console.log(lazyroot)
  return (
    <div style={{ width: "100vw", height: "100vh", background: "yellow" }}>
      <Container ref={lazyroot}>
        <Image

          src={image} width={200} height={200} objectFit="cover"
          style={{ display: "inline-block" }}
          lazyRoot={lazyroot}
          // placeholder="blur"
        ></Image>
      </Container>
      {/* <Image src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg" width={500} height={500}></Image> */}
    </div >
  )
}


