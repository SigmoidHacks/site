import Link from "next/link";
import { Image, Link as A } from "rebass";

export default ({ light = false, ...props }) => (
  <Link href="https://angelhacks.org">
    <A sx={{ cursor: "pointer", lineHeight: 0 }}>
      <Image
        {...props}
        src="/static/logo.png"
        alt="AngelHacks avatar"
        width="90px"
        // height={size}
        sx={{
          // borderRadius: "circle",
          overflow: "hidden",
          ...props.sx,
        }}
      />
    </A>
  </Link>
);
