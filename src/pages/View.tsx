import { useParams } from "react-router"
import { decode } from "../utils/compress"
import Display from "../components/Display"

const View = () => {
  const param = useParams().data as string
  const data = decode(param)

  return (
    <div className="flex h-screen w-screen md:items-center md:justify-between">
      <Display data={data} />
    </div>
  )
}

export default View
