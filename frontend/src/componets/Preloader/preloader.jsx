//import Skeleton from "@mui/material/Skeleton"
import { Trefoil } from 'ldrs/react'
import 'ldrs/react/Trefoil.css'

export default function PreLoader() {

  return <div className="preloader__container">
    <Trefoil
      size="80"
      stroke="4"
      strokeLength="0.15"
      bgOpacity="0.1"
      speed="1.4"
      color="black"
    />
  </div>
}


{/*<>
    <Skeleton variant="text" />
    <Skeleton variant="circle" width={40} height={40} />
    <Skeleton variant="rect" width={210} height={118} />
  </>}*/}

