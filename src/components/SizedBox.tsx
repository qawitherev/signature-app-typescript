export enum Size {
  Small,
  Medium,
  Large,
}

interface SizedBoxProps {
  size: Size;
  isHorz: boolean;
}

/**
 *
 * @param param0 if can define a common height for sized box
 * @returns
 */
export function SizedBox({ size, isHorz }: SizedBoxProps) {
  let className = "";
  switch (size) {
    case Size.Small:
      if (isHorz) {
        className = "pr-1";
      } else {
        className = "pb-1";
      }
      break;
    case Size.Medium:
        if (isHorz) {
            className = "pr-2";
          } else {
            className = "pb-2";
          }
          break;
    case Size.Large:
        if (isHorz) {
            className = "pr-3";
          } else {
            className = "pb-3";
          }
          break;
    default:
        if (isHorz) {
            className = "pr-0";
          } else {
            className = "pb-0";
          }
          break;
  }

  return <div className={className} />;
}
