import React from "react";
import "./menu.css";

import Bubble from "./menu-components/bubbles/bubble";
import Counter from "./menu-components/counter/counter";
import SpatulaSelector from "./menu-components/spatula-selector/spatula-selector";
import InfoText from "./menu-components/info-text/info-text";

export default class Menu extends React.Component {

  render() {
    const contributors = [
      {
        name: "pslehisl",
        profileImg: "https://github.com/identicons/pslehisl.png",
        profileUrl: "https://github.com/pslehisl",
      },
      {
        name: "mattbruv",
        profileImg:
          "https://avatars0.githubusercontent.com/u/5638426?s=460&u=1c4a9f676e848e4edc7da2832c35d3d99bedc780&v=4",
        profileUrl: "https://github.com/mattbruv",
      },
      {
        name: "stravant",
        profileImg:
          "https://avatars2.githubusercontent.com/u/2074518?s=460&u=997bb336a3890e3b0e33b61913e4cd17d7bd55a5&v=4",
        profileUrl: "https://github.com/stravant",
      },
      {
        name: "DarkRTA",
        profileImg:
          "https://avatars2.githubusercontent.com/u/15368682?s=460&u=b0cc63f5bf5bc25b5637c32c7cbc2dbf8f95af08&v=4",
        profileUrl: "https://github.com/DarkRTA",
      },
      {
        name: "Gota7",
        profileImg:
          "https://avatars0.githubusercontent.com/u/22335998?s=460&u=f5cf38fa26e2a66eb662b111f554a4b9d2624dc0&v=4",
        profileUrl: "https://github.com/Gota7",
      },
    ];

    // const spatulaCount = this.props.spatulaCount;
    // const shinyCount = this.props.shinyCount;
    // const sockCount = this.props.sockCount;
    // const collectableCount = this.props.collectableCount;
    // const collectableTotal = this.props.collectableTotal;

    // const commitCount = this.props.commitCount;
    // const contributorCount = this.props.contributorCount;
    // const pullRequestCount = this.props.pullRequestCount;

    const spatulaCount = 5;
    const shinyCount = 20274;
    const sockCount = 2;
    const collectableCount = 25;
    const collectableTotal = 121;
    const commitCount = 174;
    const contributorCount = 8;
    const pullRequestCount = 1;

    return (
      <div className="container">
        <div className="menu">
          <div className="caustics"></div>
          <div className="inner-content">
            <div className="top-row">
              <div className="bubbles">
                {contributors.map((contributor, index) => (
                  <Bubble
                    profileImg={contributor.profileImg}
                    alt={contributor.name}
                    profileUrl={contributor.profileUrl}
                    key={index}
                  ></Bubble>
                ))}
              </div>
              <div className="spatula-count">
                <Counter type="spatula" count={spatulaCount}></Counter>
              </div>
              <div className="shiny-count">
                <Counter type="shiny" count={shinyCount}></Counter>
              </div>
            </div>
            <div className="menu-body">
              <SpatulaSelector></SpatulaSelector>
            </div>
            <div className="bottom-row">
              <div className="collectable-count">
                <Counter type="collectable" count={collectableCount} total={collectableTotal}></Counter>
              </div>
              <div className="sock-count">
                <Counter type="sock" count={sockCount}></Counter>
              </div>
            </div>
            <div className="info-texts">
              <div id="commits">
                <InfoText amount={commitCount} color="#ba2c2f">
                  total commits
                </InfoText>
              </div>
              <div id="contribs">
                <InfoText amount={contributorCount} color="#118ed2">
                  total contributors
                </InfoText>
              </div>
              <div id="pullreqs">
                <InfoText amount={pullRequestCount} color="#1c911f">
                  active pull requests
                </InfoText>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
