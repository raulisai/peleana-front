import { writable } from 'svelte/store';

export const turnoPlayer = writable('player1');
export const takeCell = writable(0);
export const cellACtive = writable(0);
export const pieceActive = writable({
    fromPlayer: '',
    numbPiece: 0,
    typePiece: 0,
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
                row: 6,
                col: 1,
                InInitialPosition: true
            },
            {
                value: 2,
                row: 7,
                col: 1,
                InInitialPosition: true
            },
            {
                value: 3,
                row: 8,
                col: 1,
                InInitialPosition: true
            },
            {
                value: 4,
                row: 9,
                col: 1,
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
                row: 14,
                col: 6,
                InInitialPosition: true
            },
            {
                value: 2,
                row: 14,
                col: 7,
                InInitialPosition: true
            },
            {
                value: 3,
                row: 14,
                col: 8,
                InInitialPosition: true
            },
            {
                value: 4,
                row: 14,
                col: 9,
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
                row: 6,
                col: 14,
                InInitialPosition: true
            },
            {
                value: 2,
                row: 7,
                col: 14,
                InInitialPosition: true
            },
            {
                value: 3,
                row: 8,
                col: 14,
                InInitialPosition: true
            },
            {
                value: 4,
                row: 9,
                col: 14,
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
                row: 1,
                col: 6,
                InInitialPosition: true
            },
            {
                value: 2,
                row: 1,
                col: 7,
                InInitialPosition: true
            },
            {
                value: 3,
                row: 1,
                col: 8,
                InInitialPosition: true
            },
            {
                value: 4,
                row: 1,
                col: 9,
                InInitialPosition: true
            }
        ]
    }
  });