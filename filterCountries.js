export function filterCountries(data, pattern) {
    return data
        .map((country) => {
            const filteredPeople = country.people
                .map((person) => {
                    const filteredAnimals = person.animals.filter((animal) =>
                        animal.name.includes(pattern)
                    );
                    return filteredAnimals.length ? { ...person, animals: filteredAnimals } : null;
                })
                .filter(Boolean);
            return filteredPeople.length ? { ...country, people: filteredPeople } : null;
        })
        .filter(Boolean);
}
