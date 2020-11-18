import { Box, Flex, Text, Link as A } from "rebass";
import { useColorMode } from "theme-ui";
import Link from "next/link";
import Icon from "./icon";
import Avatar from "./avatar";

const DiscordButton = ({ sx, ...props }) => {
  return (
    <A href="discord.com" target="_blank">
      <Box
        as="button"
        {...props}
        title="Discord"
        sx={{
          display: "inline-block",
          appearance: "none",
          bg: "transparent",
          color: "inherit",
          fill: "#7289DA",
          width: "45px",
          p: 1,
          m: 0,
          border: 0,
          lineHeight: 0,
          ":hover, :focus": {
            color: "primary",
            boxShadow: "10px",
            outline: "none",
          },
          ...sx,
        }}
      >
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 245 240"
        >
          <path
            class="st0"
            d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
          />
          <path
            class="st0"
            d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
          />
        </svg>
      </Box>
    </A>
  );
};

const ColorButton = ({ mode, sx, ...props }) => (
  <Box
    as="button"
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: "inline-block",
      appearance: "none",
      bg: "transparent",
      color: "inherit",
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      lineHeight: 0,
      ":hover, :focus": {
        color: "primary",
        boxShadow: "0 0 0 3px",
        outline: "none",
      },
      ...sx,
    }}
  >
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor">
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
    </svg>
  </Box>
);

export default (props) => {
  const [mode, setMode] = useColorMode();

  return (
    <>
      <Flex
        as="header"
        variant="container"
        sx={{
          color: "primary",
          alignItems: "center",
          px: 3,
          py: 3,
        }}
      >
        <Link href="/">
          <Avatar light size={60} sx={{ mr: 1 }} />
        </Link>
        <Link href="/">
          <A
            variant="styles.navitem"
            sx={{ display: ["none", "block"], fontWeight: "mediumbold" }}
          >
            Sigmoid Hacks
          </A>
        </Link>
        <Box sx={{ mx: "auto" }} />
        <Link href="/about">
          <A variant="styles.navitem">About</A>
        </Link>
        <Link href="/schedule">
          <A variant="styles.navitem">Schedule</A>
        </Link>
        <Link href="/register">
          <A variant="styles.navitem">Register</A>
        </Link>

        <ColorButton
          sx={{ ml: [2, 3] }}
          onClick={(e) => {
            const next = mode === "dark" ? "light" : "dark";
            setMode(next);
          }}
        />
        <DiscordButton />
      </Flex>
      <Box
        as="main"
        sx={{
          width: "100%",
          mx: "auto",
          flex: "1 1 auto",
        }}
      >
        {props.children}
      </Box>
      <Box
        as="footer"
        variant="container"
        sx={{
          px: 3,
          py: 5,
          width: "100%",
          maxWidth: "wide",
          mx: "auto",
        }}
      >
        <Box
          variant="container"
          sx={{
            fontSize: 0,
            py: 3,
          }}
        >
          <Flex sx={{ justifyContent: "center" }}>
            <A
              href="https://twitter.com/https://twitter.com/HacksSigmoid"
              title="Twitter"
              sx={{ mx: 2 }}
            >
              <Icon glyph="twitter" size={36} />
            </A>
            <A
              href="https://github.com/sigmoidhacks/site"
              title="GitHub"
              sx={{ mx: 2 }}
            >
              <Icon glyph="github" size={36} />
            </A>
            <A href="mailto:main@nnsg.ml" title="Email" sx={{ mx: 2 }}>
              <Icon glyph="email" size={36} />
            </A>
          </Flex>
          <Box
            sx={{
              mt: [3, 4],
              textAlign: "center",
              a: { fontSize: 1 },
            }}
          >
            <Text sx={{ fontFamily: "heading", fontSize: 0, color: "inherit" }}>
              Sigmoid Hacks, event run by members of Hack Club
            </Text>
            <Text
              sx={{
                color: "muted",
                fontSize: 0,
                mt: 1,
                mb: 0,
              }}
            >
              Fiscally sponsored by The Hack Foundation.
              <br />
              Nonprofit EIN: 81-2908499.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
