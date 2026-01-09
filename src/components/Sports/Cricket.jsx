"use client";
import React from "react";

/**
 * This component renders a single-elimination bracket:
 *
 *   Left Side (8 teams)  ---> 1 left champion
 *                             Final (1 match)
 *   Right Side (8 teams) ---> 1 right champion
 *
 * The bracket goes 8 -> 4 -> 2 -> 1 on each side,
 * then one final match in the center between the left champion and right champion.
 */

// ----- Configuration -----
const boxWidth = 150; // Width of each team "box"
const boxHeight = 50; // Height of each team "box"
const roundWidth = 220; // Horizontal space between rounds
const verticalSpacing = 25; // Vertical space between boxes in the same round
const bracketHeight = 600; // Total height for each side of the bracket
const controlPointOffset = 30; // Curve offset for the connecting paths

// ----- The bracket data for each side -----
/**
 * Each side has 3 rounds:
 *   Round 1: 4 matches (8 teams)
 *   Round 2: 2 matches (4 winners)
 *   Round 3: 1 match (2 winners) => yields champion on that side
 */
const leftRounds = [
  // Round 1 (Quarterfinals: 8 teams)
  ["Team A", "Team B"],
  ["Team C", "Team D"],
  ["Team E", "Team F"],
  ["Team G", "Team H"],

  // Round 2 (Semifinals: 4 teams)
  ["Winner A/B", "Winner C/D"],
  ["Winner E/F", "Winner G/H"],

  // Round 3 (Left Final: 2 teams => 1 winner on left side)
  ["Left SF1", "Left SF2"],
];

const rightRounds = [
  // Round 1 (Quarterfinals: 8 teams)
  ["Team I", "Team J"],
  ["Team K", "Team L"],
  ["Team M", "Team N"],
  ["Team O", "Team P"],

  // Round 2 (Semifinals: 4 teams)
  ["Winner I/J", "Winner K/L"],
  ["Winner M/N", "Winner O/P"],

  // Round 3 (Right Final: 2 teams => 1 winner on right side)
  ["Right SF1", "Right SF2"],
];

// ----- Helper to compute top offset for each round so it's vertically centered -----
function getRoundTopOffset(numBoxes) {
  const totalHeight = numBoxes * boxHeight + (numBoxes - 1) * verticalSpacing;
  return (bracketHeight - totalHeight) / 2;
}

// ----- Compute (x, y) for each bracket box in a given side -----
function calculatePositions(rounds, isRight = false) {
  return rounds.map((round, roundIndex) => {
    const topOffset = getRoundTopOffset(round.length);
    return round.map((_, boxIndex) => ({
      x: isRight ? boxWidth : roundIndex * roundWidth,
      y: topOffset + boxIndex * (boxHeight + verticalSpacing),
    }));
  });
}

// ----- Build SVG paths to connect boxes between consecutive rounds -----
function generateConnectorPaths(rounds, positions, isRight = false) {
  const paths = [];
  for (let r = 0; r < rounds.length - 1; r++) {
    rounds[r].forEach((_, boxIndex) => {
      const start = {
        x: positions[r][boxIndex].x + (isRight ? 0 : boxWidth),
        y: positions[r][boxIndex].y + boxHeight / 2,
      };
      const nextIndex = Math.floor(boxIndex / 2);
      // Safeguard
      if (!positions[r + 1][nextIndex]) return;

      const end = {
        x: positions[r + 1][nextIndex].x + (isRight ? boxWidth : 0),
        y: positions[r + 1][nextIndex].y + boxHeight / 2,
      };

      // Cubic Bezier for a smooth bracket line
      const pathData = `
        M ${start.x},${start.y}
        C ${start.x + (isRight ? -controlPointOffset : controlPointOffset)},${start.y}
          ${end.x + (isRight ? controlPointOffset : -controlPointOffset)},${end.y}
          ${end.x},${end.y}
      `;

      paths.push(
        <path
          key={`${isRight ? "R" : "L"}-path-${r}-${boxIndex}`}
          d={pathData}
          fill="none"
          stroke="#ccc"
          strokeWidth="2"
          strokeLinecap="round"
        />,
      );
    });
  }
  return paths;
}

// ----- BracketSide component -----
function BracketSide({ rounds, isRight = false }) {
  // Positions for each (round, box)
  const positions = calculatePositions(rounds, isRight);
  // Total bracket width for that side
  const sideWidth = rounds.length * roundWidth;
  // Build lines
  const paths = generateConnectorPaths(rounds, positions, isRight);

  return (
    <div
      className="relative"
      style={{
        width: isRight ? sideWidth : sideWidth,
        height: bracketHeight,
      }}
    >
      {/* Connector Lines */}
      <svg
        style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
        width={sideWidth}
        height={bracketHeight}
      >
        {paths}
      </svg>

      {/* Rounds + Boxes */}
      {rounds.map((round, roundIndex) => {
        const roundTop = getRoundTopOffset(round.length);
        return (
          <div
            key={`${isRight ? "right" : "left"}-round-${roundIndex}`}
            className="absolute"
            style={{
              left: isRight
                ? sideWidth - (roundIndex + 1) * roundWidth
                : roundIndex * roundWidth,
              top: roundTop,
              width: boxWidth,
            }}
          >
            {round.map((teamName, boxIndex) => (
              <div
                key={`box-${roundIndex}-${boxIndex}`}
                className="mb-2 last:mb-0 
                  bg-blue-600 text-white 
                  rounded-md px-2 flex items-center justify-center 
                  text-sm font-medium text-center
                  hover:bg-blue-500 hover:scale-105 
                  transition-all shadow"
                style={{ height: boxHeight }}
              >
                {teamName}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

// ----- FinalMatch component in center -----
/**
 * Shows one "Final" box in the center (Champion)
 * plus two lines connecting from left champion + right champion.
 */
function FinalMatch() {
  const finalBoxWidth = 160;
  const finalBoxHeight = 60;

  // We'll pick a container height (same as each bracket side)
  // so we can align the final match in the vertical center.
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: finalBoxWidth, height: bracketHeight }}
    >
      {/* The two lines from left champion and right champion to center box */}
      <svg
        className="absolute"
        width={finalBoxWidth}
        height={bracketHeight}
        style={{ top: 0, left: 0, pointerEvents: "none" }}
      >
        {/* Left champion line -> Final Box */}
        <line
          x1={0}
          y1={bracketHeight / 2}
          x2={finalBoxWidth / 2}
          y2={bracketHeight / 2}
          stroke="#ccc"
          strokeWidth="2"
        />
        {/* Right champion line -> Final Box */}
        <line
          x1={finalBoxWidth}
          y1={bracketHeight / 2}
          x2={finalBoxWidth / 2}
          y2={bracketHeight / 2}
          stroke="#ccc"
          strokeWidth="2"
        />
      </svg>

      {/* The Final (Champion) Box */}
      <div
        className="bg-blue-700 text-white font-semibold
                   px-4 py-2 rounded-md text-center
                   flex items-center justify-center shadow
                   hover:bg-blue-600 transition-all"
        style={{
          width: finalBoxWidth / 1.2,
          height: finalBoxHeight,
        }}
      >
        Champion
      </div>
    </div>
  );
}

// ----- Main Component -----
const Bracket = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #14002b, #1c003d)",
        padding: "1rem",
      }}
    >
      {/* Left Bracket */}
      <BracketSide rounds={leftRounds} />

      {/* Final in the middle */}
      <FinalMatch />

      {/* Right Bracket */}
      <BracketSide rounds={rightRounds} isRight />
    </div>
  );
};

export default Bracket;
