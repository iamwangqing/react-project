import { CSSProperties, FC, ReactNode, useRef } from "react";

interface MyLazyLoadProps {
  className?: string;
  style?: CSSProperties;
  placeholder?: ReactNode;
  offset?: string | number;
  width?: string | number;
  height?: string | number;
  onContentVisible?: () => void;
  children?: ReactNode;
}

const MyLazyLoad: FC<MyLazyLoadProps> = (props) => {
  const {
    className = "",
    style,
    offset = 0,
    width,
    onContentVisible,
    placeholder,
    height,
    children,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const styles = { height, width, ...style };

  return (
    <div ref={containerRef} className={className} style={styles}>
      {children}
    </div>
  );
};
