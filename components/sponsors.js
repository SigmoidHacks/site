import React from "react";
import styled from "@emotion/styled";
import { Box } from "rebass";
import { Container } from "./blocks";
import { useColorMode } from "theme-ui";
import theme from "./theme";

const data = {
  sponsors: [
    {
      name: "AI Community",
      link: "https://discord.gg/DNxuhtV",
      image: "../static/sponsors/aicommunity.png",
    },
    {
      name: "balsamiq",
      link: "https://balsamiq.com/",
      image: "../static/sponsors/balsamiq.png",
    },
    {
      name: "Hack Club",
      link: "https://hackclub.com/",
      image: "../static/sponsors/hackclub.png",
    },
    {
      name: "Hack Club Bank",
      link: "https://hackclub.com/bank/",
      image: "../static/sponsors/hackclubbank.png",
    },
    {
      name: "Jet Brains",
      link: "https://www.jetbrains.com/",
      image: "../static/sponsors/jetbrains.png",
    },
    {
      name: "Memorize.ai",
      link: "https://memorize.ai/",
      image: "../static/sponsors/memorizeai.jpg",
    },
    {
      name: "nnsg",
      link: "https://discord.gg/fam6efTHP7",
      image: "../static/sponsors/nnsg.png",
    },
    {
      name: "Learn AI Community",
      link: "https://discord.gg/GuWARYeUJf",
      image: "../static/sponsors/aidisc.png",
    },
    {
      name: "Sticker Mule",
      link: "https://stickermule.com",
      image: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/017/649/highres/download.png",
    },
  ],
};

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => (props.section === "sponsors" ? 256 : 192)}px, 1fr)
  );
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${(props) => (props.section === "sponsors" ? 6 : 4)}rem;
    ${(props) =>
      props.colorMode === "dark" && `filter: invert() hue-rotate(180deg);`}
  }
`;

const Sponsors = ({ section = "sponsors", ...props }) => {
  const [colorMode] = useColorMode();
  return (
    <Base colorMode={colorMode} section={section} {...props}>
      {data[section].map((sponsor) => (
        <a href={sponsor.link} target="_blank" key={sponsor.name}>
          <img alt={sponsor.name} src={sponsor.image} />
        </a>
      ))}
    </Base>
  );
};

export default Sponsors;
