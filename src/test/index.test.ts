// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {harmonique} from '../index';

describe('La fonction harmonique de', () => {
    test('1 vaut 1', () => {
        expect(harmonique(1)).toEqual(1);
    });

    test('2 vaut 1.5', () => {
        expect(harmonique(2)).toBeCloseTo(1.5, 2);
    });

    test('3 vaut 1.83', () => {
        expect(harmonique(3)).toBeCloseTo(1.83, 2);
    });

    test('4 vaut 2.08', () => {
        expect(harmonique(4)).toBeCloseTo(2.08, 2);
    });

    test('5 vaut 2.28', () => {
        expect(harmonique(5)).toBeCloseTo(2.28, 2);
    });
});