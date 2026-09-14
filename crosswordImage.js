// crosswordImage.js
// Draws PuzzlePilot crossword grids as proper PNG images.

const sharp = require('sharp');


// ─────────────────────────────────────────────
// ESCAPE TEXT FOR SVG
// ─────────────────────────────────────────────

function escapeXml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}


// ─────────────────────────────────────────────
// CLUE NUMBERS
// ─────────────────────────────────────────────

function getCellNumbers(puzzle) {
    const numbers = {};

    const clues = [
        ...puzzle.across,
        ...puzzle.down
    ];

    for (const clue of clues) {
        const key =
            `${clue.row}_${clue.col}`;

        if (!numbers[key]) {
            numbers[key] = clue.number;
        }
    }

    return numbers;
}


// ─────────────────────────────────────────────
// DRAW CROSSWORD
// ─────────────────────────────────────────────

async function createCrosswordImage(session) {
    const puzzle = session.puzzle;
    const grid = session.grid;

    const cellSize = 90;
    const padding = 12;

    const gridWidth =
        puzzle.size * cellSize;

    const gridHeight =
        puzzle.size * cellSize;

    const imageWidth =
        gridWidth + padding * 2;

    const imageHeight =
        gridHeight + padding * 2;

    const numbers =
        getCellNumbers(puzzle);

    let cellsSvg = '';

    for (
        let row = 0;
        row < puzzle.size;
        row++
    ) {
        for (
            let col = 0;
            col < puzzle.size;
            col++
        ) {
            const x =
                padding +
                col * cellSize;

            const y =
                padding +
                row * cellSize;

            const solutionCell =
                puzzle.solution[row][col];

            const isBlock =
                solutionCell === null ||
                solutionCell === '#' ||
                solutionCell === '█';

            if (isBlock) {
                cellsSvg += `
                    <rect
                        x="${x}"
                        y="${y}"
                        width="${cellSize}"
                        height="${cellSize}"
                        fill="#161616"
                        stroke="#161616"
                        stroke-width="3"
                    />
                `;

                continue;
            }

            cellsSvg += `
                <rect
                    x="${x}"
                    y="${y}"
                    width="${cellSize}"
                    height="${cellSize}"
                    fill="#ffffff"
                    stroke="#202020"
                    stroke-width="3"
                />
            `;

            const key =
                `${row}_${col}`;

            const number =
                numbers[key];

            if (number) {
                cellsSvg += `
                    <text
                        x="${x + 8}"
                        y="${y + 21}"
                        font-family="Arial, sans-serif"
                        font-size="18"
                        font-weight="600"
                        fill="#202020"
                    >
                        ${escapeXml(number)}
                    </text>
                `;
            }

            const letter =
                grid[row][col];

            if (letter) {
                cellsSvg += `
                    <text
                        x="${x + cellSize / 2}"
                        y="${y + 62}"
                        text-anchor="middle"
                        font-family="Arial, sans-serif"
                        font-size="46"
                        font-weight="700"
                        fill="#202020"
                    >
                        ${escapeXml(letter)}
                    </text>
                `;
            }
        }
    }

    const svg = `
        <svg
            width="${imageWidth}"
            height="${imageHeight}"
            viewBox="0 0 ${imageWidth} ${imageHeight}"
            xmlns="http://www.w3.org/2000/svg"
        >

            <rect
                width="100%"
                height="100%"
                fill="#ffffff"
            />

            ${cellsSvg}

        </svg>
    `;

    return await sharp(
        Buffer.from(svg)
    )
        .png()
        .toBuffer();
}


// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────

module.exports = {
    createCrosswordImage
};
