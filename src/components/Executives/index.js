import React from "react";
import Person1 from "../../images/daniel_patton.jpg";
import Person2 from "../../images/kenny_su.jpg";
import Person3 from "../../images/cullen_hemsouvanh.jpg";
import all from "../../images/all.jpg";
import { ExecutivesH1, ExecutivesH2, ExecutivesCard, ExecutivesContainer, ExecutivesIcon, ExecutivesP, ExecutivesWrapper } from "./ExecElements";

const Executives = () => {
  return (
    <ExecutivesContainer id="executives">
      <ExecutivesH1>Our Executive Board</ExecutivesH1>
      <ExecutivesWrapper>
        <ExecutivesCard>
          <ExecutivesIcon src={Person1}></ExecutivesIcon>
          <ExecutivesH2>Chapter President</ExecutivesH2>
          <ExecutivesP>Daniel Patton</ExecutivesP>
          <ExecutivesP>"Samurai Lack"</ExecutivesP>
          <ExecutivesP>Spring 20</ExecutivesP>
        </ExecutivesCard>
        <ExecutivesCard>
          <ExecutivesIcon src={Person2}></ExecutivesIcon>
          <ExecutivesH2>Vice-President Internal</ExecutivesH2>
          <ExecutivesP>Kenny Su</ExecutivesP>
          <ExecutivesP>"Des++Cito"</ExecutivesP>
          <ExecutivesP>Spring 22</ExecutivesP>
        </ExecutivesCard>
        <ExecutivesCard>
          <ExecutivesIcon src={Person3}></ExecutivesIcon>
          <ExecutivesH2>Vice-President External</ExecutivesH2>
          <ExecutivesP>Cullen Hemsouvanh</ExecutivesP>
          <ExecutivesP>"WAPpad"</ExecutivesP>
          <ExecutivesP>Spring 21</ExecutivesP>
        </ExecutivesCard>
        <ExecutivesCard>
          <ExecutivesIcon src={all}></ExecutivesIcon>
          <ExecutivesH2>Treasurer</ExecutivesH2>
          <ExecutivesP>Carl Zimmerman</ExecutivesP>
          <ExecutivesP>"Kung FOOd Hustle"</ExecutivesP>
          <ExecutivesP>Fall 21</ExecutivesP>
        </ExecutivesCard>
        <ExecutivesCard>
          <ExecutivesIcon src={all}></ExecutivesIcon>
          <ExecutivesH2>Secretary</ExecutivesH2>
          <ExecutivesP>Andy Tran</ExecutivesP>
          <ExecutivesP>"SharkCUTIE"</ExecutivesP>
          <ExecutivesP>Spring 22</ExecutivesP>
        </ExecutivesCard>
        <ExecutivesCard>
          <ExecutivesIcon src={all}></ExecutivesIcon>
          <ExecutivesH2>Social Media Chair</ExecutivesH2>
          <ExecutivesP>Chandler Pham</ExecutivesP>
          <ExecutivesP>"Pu Pu Hakusho"</ExecutivesP>
          <ExecutivesP>Fall 21</ExecutivesP>
        </ExecutivesCard>
      </ExecutivesWrapper>
    </ExecutivesContainer>
  );
};

export default Executives;
