import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export default function PreLoader() {
  return (
    <div className="preloader">
      <SkeletonTheme color="#202020" highlightColor="#444">
        <p>
          <Skeleton count={3} />
        </p>
      </SkeletonTheme>;
    </div>
  );
}










