import { TypeAnimation } from "react-type-animation";
import { Header, HomeContainer, Paragraph } from "./styled";

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <Header>Welcome to my website!</Header>
        <Paragraph>
          <TypeAnimation
            sequence={["I'm a Frontend Developer.", 1000, "I'm creative.", 1000, "Cooperation win-win.", 1000, ]}
            speed={50}
            repeat={Infinity}
          />
        </Paragraph>
        <Paragraph> Let's do it!</Paragraph>
      </HomeContainer>
    </>
  );
};
