import React from "react";

export type PositionType = {
  x: number;
  y: number;
};

const connectMousePos = (TargetComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const [position, setPosition] = React.useState<PositionType>({
      x: 0,
      y: 0,
    });

    React.useEffect(() => {
      const onMove = (e: MouseEvent) => setPosition({ x: e.pageX, y: e.pageY });
      window.addEventListener("mouseover", onMove);

      return () => {
        window.removeEventListener("mousemove", onMove);
      };
    }, []);
    return <TargetComponent {...props} position={position} />;
  };
};

export default connectMousePos;
