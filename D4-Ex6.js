

const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976}
]

const newMarketValue = value => {
    value.marketValue = value.marketValue + value.marketValue / 10
    return value
}

const newListCompanies = fundation => (fundation.foundedOn < 2000)

let sumMarketValue = (acc, value) => acc + value.marketValue

const result = companies
.map(newMarketValue)
.filter(newListCompanies)
.reduce(sumMarketValue,0)

console.log(result)

