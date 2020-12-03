import Link from "next/link";
import { Image, Link as A } from "rebass";

export default ({ light = false, ...props }) => (
  <Link href="https://sigmoidhacks.ml/">
    <A sx={{ cursor: "pointer", lineHeight: 0 }}>
      <Image
        {...props}
        src="/static/logo.png"
        alt="Sigmoid Hacks Logo"
        sx={{
          overflow: "hidden",
          ...props.sx,
        }}
      />
    </A>
  </Link>
);
