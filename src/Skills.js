import React from "react";
import "./skills.css";
export default function Skills() {
  return (
    <div className="initdiv">
      <h1>Skills</h1>
      <div className="gendiv">
        <div className="skillsdiv">
          <h2 className="skillsh2">Technical Skills</h2>
          <ul>
            <li className="skillsli">HTML</li>
            <li className="skillsli">CSS</li>
            <li className="skillsli">JavaScript</li>
            <li className="skillsli">React.js</li>
            <li className="skillsli">API Integration</li>
            <li className="skillsli">Bootsrap</li>
          </ul>
        </div>
        <div className="tooldiv">
          <h3 className="skillh3">Tools </h3>
          <ul>
            <li className="skillsli2">
              <strong>Version control: </strong> Proficient in Git for version
              control and collaboration.{" "}
            </li>
            <li className="skillsli2">
              <strong>Package Managers</strong> Familiar with npm and yarn for
              managing dependencies.
            </li>
          </ul>
          <h4 className="skillh4">Software</h4>
          <ul>
            <li className="skillsli2">
              <strong>Design Implementation:</strong> Skilled in interpreting
              and implementing designs from Figma into FrontEnd code
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
