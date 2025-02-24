export function countChildren(data) {
    return data.map((country) => {
        const peopleCount = country.people.length;
        const countedPeopleChildren = country.people.map((person) => {
            const animalsCount = person.animals.length;
            return {
                ...person,
                name: `${person.name} [${animalsCount}]`,
            };
        });
        return {
            ...country,
            name: `${country.name} [${peopleCount}]`,
            people: countedPeopleChildren,
        };
    });
}
