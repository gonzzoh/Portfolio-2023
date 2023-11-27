import cssLogo from "../logos/cssLogo.png";
import htmlLogo from "../logos/htmlLogo.png";
import bootstrapLogo from "../logos/bootstrap-original-wordmark.png";
import expressLogo from "../logos/express-original-wordmark.png";
import gitLogo from "../logos/git-original-wordmark.png";
import githubLogo from "../logos/github-original-wordmark.png";
import jsLogo from "../logos/javascript-original.png";
import mongodbLogo from "../logos/mongodb-original-wordmark.png";
import nodeLogo from "../logos/nodejs-original-wordmark.png";
import postgresLogo from "../logos/postgresql-original-wordmark.png";
import pythonLogo from "../logos/python-original-wordmark.png";
import reactLogo from "../logos/react-original-wordmark.png";
import figmaLogo from "../logos/figma-original.png";
import awsLogo from "../logos/amazonwebservices-original-wordmark.png";

const logos = [jsLogo, cssLogo, htmlLogo, pythonLogo, bootstrapLogo, expressLogo, gitLogo, githubLogo, mongodbLogo, nodeLogo, postgresLogo, reactLogo, figmaLogo, awsLogo];


export default function Skills() {

    const listLogos = logos.map(logo =>
        <li class="individualLogo">
            <img src={logo}></img>
        </li>
    );

    return (
        <div id="skillsContainer">
            <h1 id="skillsTitle">What I can do!</h1>
            <ul id="skillLogoContainer">{listLogos}</ul>
        </div>
    );
}

