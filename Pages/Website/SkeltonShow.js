import Skeleton from "react-loading-skeleton";

export default function SkeltonShow(props) {
  const SkeltonCount = Array.from({ length: props.length }).map((_, index) => (
    <div className={props.classes}>
      <div className="mx-1">
        <Skeleton height={props.height} baseColor={props.basecolor} width={props.width} />
      </div>
    </div>
  ));
  return SkeltonCount;
}
