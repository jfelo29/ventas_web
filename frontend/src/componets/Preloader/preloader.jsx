import Skeleton from "@mui/material/Skeleton"

export default function PreLoader() {
  return (<>
    <Skeleton variant="text" />
    <Skeleton variant="circle" width={40} height={40} />
    <Skeleton variant="rect" width={210} height={118} />
  </>
  );
}


