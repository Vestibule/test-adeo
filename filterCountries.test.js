import { describe, it, expect } from 'vitest'
import { filterCountries } from './filterCountries';

const testingData = [
    {
        name: 'Dillauti',
        people:
            [{
                name: 'Winifred Graham',
                animals:
                    [{ name: 'Anoa' },
                    { name: 'Duck' },
                    { name: 'Crow' }]
            },
            {
                name: 'Blanche Viciani',
                animals:
                    [{ name: 'Barbet' },
                    { name: 'Rhedua' },
                    { name: 'Deer Mouse' }]
            },
            {
                name: 'Philip Murray',
                animals:
                    [{ name: 'Sand Dollar' },
                    { name: 'Buzzard' },
                    { name: 'Dinosaur' }]
            },
            {
                name: 'Bobby Ristori',
                animals:
                    [{ name: 'Kowari' },
                    { name: 'Caecilian' },
                    { name: 'Sand Cat' },
                    { name: 'Linne\'s Two-toed Sloth' }]
            },
            {
                name: 'Louise Pinzauti',
                animals:
                    [{ name: 'Manta Ray' },
                    { name: 'Duck' },
                    { name: 'Mice' }]
            }]
    },
    {
        name: 'Tohabdal',
        people:
            [{
                name: 'Effie Houghton',
                animals:
                    [{ name: 'Zebura' },
                    { name: 'Ring-tailed Lemur' },
                    { name: 'Numbat' }]
            },
            {
                name: 'Essie Bennett',
                animals:
                    [{ name: 'Aldabra Tortoise' },
                    { name: 'Quahog' },
                    { name: 'Collared Lemur' },
                    { name: 'Aldabra Tortoise' }]
            },
            {
                name: 'Owen Bongini',
                animals:
                    [{ name: 'Zebrashark' },
                    { name: 'Dogs' },
                    { name: 'Numbat' },
                    { name: 'African Wild Dog' }]
            },
            {
                name: 'Alexander Fleury',
                animals:
                    [{ name: 'Gelada' },
                    { name: 'Rattlesnake' },
                    { name: 'Courser' },
                    { name: 'Woodpecker' }]
            },
            {
                name: 'Curtis Fuchs',
                animals:
                    [{ name: 'Squirrel' },
                    { name: 'Camel' },
                    { name: 'Broadclub Cuttlefish' }]
            },
            {
                name: 'Maud Lorenzo',
                animals:
                    [{ name: 'Bush Dog' },
                    { name: 'Sea Urchin' },
                    { name: 'Lion' },
                    { name: 'Gecko' }]
            },
            {
                name: 'Linnie Lamb',
                animals:
                    [{ name: 'Burro' },
                    { name: 'African Wild Dog' },
                    { name: 'Slender Snipe Eel' },
                    { name: 'Rabbits' }]
            },
            {
                name: 'Randall Benoît',
                animals:
                    [{ name: 'Chameleons' },
                    { name: 'Giant Isopod' },
                    { name: 'Sand Cat' }]
            }]
    },
    {
        name: 'Uzuzozne',
        people:
            [{
                name: 'Harold Patton',
                animals:
                    [{ name: 'Bearded Dragon' },
                    { name: 'Chicken' },
                    { name: 'Sand Cat' },
                    { name: 'Hedgenog' },
                    { name: 'Shortfin Mako Shark' }]
            },
            {
                name: 'Millie Lapini',
                animals:
                    [{ name: 'Bearded Dragon' },
                    { name: 'Rock Hyrax' },
                    { name: 'Gerbils' },
                    { name: 'Brown Bear' }]
            },
            {
                name: 'Lillian Calamandrei',
                animals:
                    [{ name: 'Rats' },
                    { name: 'Macaw' },
                    { name: 'Gazelle' },
                    { name: 'Stickleback' }]
            },
            {
                name: 'Lina Allen',
                animals:
                    [{ name: 'Rabbit' },
                    { name: 'Oyster' },
                    { name: 'Agouti' }]
            },
            {
                name: 'Georgia Hooper',
                animals:
                    [{ name: 'Grasshopper' },
                    { name: 'Polar Bear' },
                    { name: 'Rabbit' },
                    { name: 'Zebu' }]
            },
            {
                name: 'Lillie Abbott',
                animals:
                    [{ name: 'John Dory' },
                    { name: 'Hyrax' },
                    { name: 'Henkel\'s Leaf-tailed Gecko' }]
            },
            {
                name: 'Philip Davis',
                animals:
                    [{ name: 'Mini Donkey' },
                    { name: 'Flatback Turtle' },
                    { name: 'Bat' },
                    { name: 'Caterpillar' }]
            }]
    },
]

describe('filterData', () => {
    it('filters animals containing the pattern', () => {
        const result = filterCountries(testingData, 'no');

        expect(result).toHaveLength(2);
        expect(result[0].name).toBe('Dillauti');
        expect(result[0].people[0].name).toBe('Winifred Graham');
        expect(result[0].people[0].animals).toEqual([{ name: 'Anoa' }]);

        expect(result[1].name).toBe('Uzuzozne');
        expect(result[1].people[0].name).toBe('Harold Patton');
        expect(result[1].people[0].animals).toEqual([{ name: 'Hedgenog' }]);
    });

    it('returns empty array when no animals match the pattern', () => {
        const result = filterCountries(testingData, 'xyz');
        expect(result).toEqual([]);
    });
});
