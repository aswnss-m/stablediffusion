import React from 'react'
import "./Background.css"
function Background() {
  const colors = {
    c1 : "#f0f0f0",
    c2 : "#f0f0f0",
    c3 : "#f0f0f0",
    c4 : "#f0f0f0"
  }
  const svgInstances = [];

  for (let i = 0; i < 59; i++) {
    svgInstances.push(
      <svg
        key={i}
        className="shape"
        viewBox="0 0 100 115"
        preserveAspectRatio="xMidYMin slice"
      >
        <polygon
          points=""
          fill="none"
          stroke={colors.c1}
          strokeWidth="5"
        >
          <animate
            attributeName="points"
            repeatCount="indefinite"
            dur="4s"
            begin="0s"
            from="50 57.5, 50 57.5, 50 57.5"
            to="50 -75, 175 126, -75 126"
          ></animate>
        </polygon>
        <polygon
          points=""
          fill="none"
          stroke={colors.c2}
          strokeWidth="5"
        >
          <animate
            attributeName="points"
            repeatCount="indefinite"
            dur="4s"
            begin="1s"
            from="50 57.5, 50 57.5, 50 57.5"
            to="50 -75, 175 126, -75 126"
          ></animate>
        </polygon>
        <polygon
          points=""
          fill="none"
          stroke={colors.c3}
          strokeWidth="5"
        >
          <animate
            attributeName="points"
            repeatCount="indefinite"
            dur="4s"
            begin="2s"
            from="50 57.5, 50 57.5, 50 57.5"
            to="50 -75, 175 126, -75 126"
          ></animate>
        </polygon>
        <polygon
          points=""
          fill="none"
          stroke={colors.c4}
          strokeWidth="5"
        >
          <animate
            attributeName="points"
            repeatCount="indefinite"
            dur="4s"
            begin="3s"
            from="50 57.5, 50 57.5, 50 57.5"
            to="50 -75, 175 126, -75 126"
          ></animate>
        </polygon>
      </svg>
    );
  }

  return (
    <div className="container">
      {svgInstances}
    </div>
    )
}

export default Background
