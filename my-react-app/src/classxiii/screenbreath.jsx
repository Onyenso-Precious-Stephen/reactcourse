import react, {useState, useEffect} from "react"

function Resizevalue(){

  const [width, setWidth] = useState(window.innerWidth)
  const [hight, setHight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener ("resize", handleResize);
    console.log('added an eventlistener')

    return() => {
      window.removeEventListener("resize", handleResize)
      console.log('remove eventlister')
  }
  }, [])

  useEffect(() => {
    document.title = `screen size ${width} x ${hight}`
  })

  function handleResize(){
    setWidth(window.innerWidth);
    setHight(window.innerHeight);
  }
  return(
    <>
    <p>width of computer: {width}px</p>
    <p>hight of coputer : {hight}px </p>
    </>
  )
}

export default Resizevalue;