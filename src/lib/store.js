import { writable } from 'svelte/store';

export const turnoPlayer = writable('player1');
export const takeCell = writable(0);
export const cellACtive = writable(0);
export const pieceActive = writable({
    value: 0,
    row: 0,
    col: 0
  });


export const piecePlayers = writable(
{
    player1: {
        active: false,
        typePiece: 0,
        pieces: [
            {
                value: 1,
                row: 0,
                col: 0,
                finish: false,
                InInitialPosition: true
            },
            {
                value: 2,
                row: 0,
                col: 0,
                InInitialPosition: true
            },
            {
                value: 3,
                row: 0,
                col: 0,
                InInitialPosition: true
            },
            {
                value: 4,
                row: 0,
                col: 0,
                InInitialPosition: true
            }
        ]
    },
    player2: {
        active: false,
        typePiece: 1,
        pieces: [
            {
                value: 1,
                row: 0,
                col: 0,
                InInitialPosition: true
            },
            {
                value: 2,
                row: 0,
                col: 0,
                InInitialPosition: true
            },
            {
                value: 3,
                row: 0,
                col: 0,
                InInitialPosition: true
            },
            {
                value: 4,
                row: 0,
                col: 0,
                InInitialPosition: true
            }
        ]
    },
    player3: {
        active: false,
        typePiece: 2,
        pieces: [
            {
                value: 1,
                row: 0,
                col: 0,
                InInitialPosition: true
            },
            {
                value: 2,
                row: 0,
                col: 0
            },
            {
                value: 3,
                row: 0,
                col: 0,
                InInitialPosition: true
            },
            {
                value: 4,
                row: 0,
                col: 0,
                InInitialPosition: true
            }
        ]
    },
    player4: {
        active: false,
        typePiece: 3,
        pieces: [
            {
                value: 1,
                row: 0,
                col: 0,
                InInitialPosition: true
            },
            {
                value: 2,
                row: 0,
                col: 0,
                InInitialPosition: true
            },
            {
                value: 3,
                row: 0,
                col: 0,
                InInitialPosition: true
            },
            {
                value: 4,
                row: 0,
                col: 0,
                InInitialPosition: true
            }
        ]
    }
  });