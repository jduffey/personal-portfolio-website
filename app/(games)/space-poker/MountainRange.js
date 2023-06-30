import React from "react";

const SOLID_TRANSPARENT = "solid transparent";
const TRANSFORM_ORIGIN = "top right";
const TRANSFORM = "skewX(18deg)";
const BRIGHT_SIDE_COLOR = "#444";
const DARK_SIDE_COLOR = "#222";

const Mountain = ({ id, left, borderBottom, borderRight, borderLeft, transformOrigin, transform }) => (
    <div id={`mountain-${id}`} className="mountain absolute bottom-0" style={{ left, borderBottom, borderRight, borderLeft, transformOrigin, transform }} />
);

const Shadow = ({ id, left, borderBottom, borderRight, transformOrigin, transform }) => (
    <div id={`mountain-shadow-${id}`} className="mountain-shadow absolute bottom-0" style={{ left, borderBottom, borderRight, transformOrigin, transform }} />
);

const MountainRange = () => {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const numMountains = 9;
    const mountains = [...Array(numMountains).keys()].map(i => {
        const min = -300 + (i * 200);
        const max = -200 + (i * 200);
        const heightOfPeak = getRandomInt(200, 300);
        return [heightOfPeak, getRandomInt(min, max), 300, 185, 160];
    });

    return mountains.map((mtnParams, i) => {
        const [heightOfPeak, mountainLeft, mountainBorderLeft, mountainBorderRight, shadowBorderRight] = mtnParams;
        const borderBottom = `${heightOfPeak}px solid`;
        const mountainStyle = {
            left: `${mountainLeft}px`,
            borderRight: `${mountainBorderRight}px ${SOLID_TRANSPARENT}`,
            borderBottom: `${borderBottom} ${BRIGHT_SIDE_COLOR}`,
            borderLeft: `${mountainBorderLeft}px ${SOLID_TRANSPARENT}`,
        };
        const shadowStyle = {
            left: `${mountainLeft + mountainBorderLeft}px`,
            borderRight: `${shadowBorderRight}px ${SOLID_TRANSPARENT}`,
            borderBottom: `${borderBottom} ${DARK_SIDE_COLOR}`,
            transformOrigin: TRANSFORM_ORIGIN,
            transform: TRANSFORM,
        };
        return (
            <React.Fragment key={i}>
                <Mountain id={i} {...mountainStyle} />
                <Shadow id={i} {...shadowStyle} />
            </React.Fragment>
        );
    });
};

export default MountainRange;
