import { describe, it, expect } from 'vitest'
import { countChildren } from './countChildren';

describe('countData', () => {
    it('appends counts to country and people names', () => {
        const testData = [{
            name: 'TestCountry',
            people: [{
                name: 'TestPerson',
                animals: [{ name: 'Dog' }, { name: 'Cat' }]
            }]
        }];

        const result = countChildren(testData);
        expect(result[0].name).toBe('TestCountry [1]');
        expect(result[0].people[0].name).toBe('TestPerson [2]');
    });
});
