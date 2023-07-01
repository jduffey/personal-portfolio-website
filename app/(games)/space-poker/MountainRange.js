import React from 'react';

const SOLID_TRANSPARENT = 'solid transparent';
const TRANSFORM_ORIGIN = 'top right';
const TRANSFORM = 'skewX(18deg)';
const BRIGHT_SIDE_COLOR = '#444';
const DARK_SIDE_COLOR = '#222';
const NUM_MOUNTAINS = 12;

const Mountain = ({ id, style }) => (
    <div id={`mountain-${id}`} className="mountain absolute -bottom-20" style={style} />
);

const MountainRange = () => {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const generateMountainData = () =>
        [...Array(NUM_MOUNTAINS).keys()].map(i => {
            const heightOfPeak = getRandomInt(200, 300);
            const leftMin = -300 + i * 200;
            const leftMax = -200 + i * 200;
            const mountainLeft = getRandomInt(leftMin, leftMax);
            return [heightOfPeak, mountainLeft, 300, 185, 160];
        });

    const mountains = generateMountainData();

    const createMountainStyle = (heightOfPeak, mountainLeft, mountainBorderLeft, mountainBorderRight) => {
        const borderBottom = `${heightOfPeak}px solid`;
        return {
            left: `${mountainLeft}px`,
            borderRight: `${mountainBorderRight}px ${SOLID_TRANSPARENT}`,
            borderBottom: `${borderBottom} ${BRIGHT_SIDE_COLOR}`,
            borderLeft: `${mountainBorderLeft}px ${SOLID_TRANSPARENT}`,
        };
    };

    const createShadowStyle = (heightOfPeak, mountainLeft, mountainBorderLeft, shadowBorderRight) => {
        const borderBottom = `${heightOfPeak}px solid`;
        return {
            left: `${mountainLeft + mountainBorderLeft}px`,
            borderRight: `${shadowBorderRight}px ${SOLID_TRANSPARENT}`,
            borderBottom: `${borderBottom} ${DARK_SIDE_COLOR}`,
            transformOrigin: TRANSFORM_ORIGIN,
            transform: TRANSFORM,
        };
    };

    return mountains.map((mtnParams, i) => {
        const [heightOfPeak, mountainLeft, mountainBorderLeft, mountainBorderRight, shadowBorderRight] = mtnParams;
        const mountainStyle = createMountainStyle(heightOfPeak, mountainLeft, mountainBorderLeft, mountainBorderRight, shadowBorderRight);
        const shadowStyle = createShadowStyle(heightOfPeak, mountainLeft, mountainBorderLeft, shadowBorderRight);
        return (
            <React.Fragment key={i}>
                <Mountain id={i} style={mountainStyle} />
                <Mountain id={`shadow-${i}`} style={shadowStyle} />
            </React.Fragment>
        );
    });
};

export default MountainRange;
