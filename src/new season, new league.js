/*
The new football league season is coming and the Football Association need some help resetting the league standings. Normally the initial league standing is done in alphabetical order (from A to Z) but this year the FA have decided to freshen it up.

It has been decided that team who finished first last season will begin the next season in first place. Regardless of what letter their club begins with. e.g. if Manchester City were in first place last year, they will begin the season in position one. All other teams should be in alphabetical order.

The teams will be fed in as an object ({}). The key will be will be their position from last season and the value is the club's name e.g. Arsenal.

The output should be an object ({}) with the key as the club's starting position for the new season and the value should be club's name e.g. Arsenal.

For example. If in the previous season the standings were:

1:'Leeds United' 2:'Liverpool' 3:'Manchester City' 4:'Coventry' 5:'Arsenal'

Then the new season standings should

1:'Leeds United' (first last season) 2:'Arsenal' (alphabetical) 3:'Coventry' (alphabetical) 4:'Liverpool' (alphabetical) 5:'Manchester City' (alphabetical)
*/

function premierLeagueStandings(teamStandings) {
  // Insert Code here 
  let arr = Object.values(teamStandings);
  const [first, ...rest] = arr
  const newArr = [first].concat(rest.sort())
  let retObj = {}
  newArr.forEach((_, i) => retObj[i + 1] = newArr[i])
  return retObj
}
module.exports = premierLeagueStandings
/* const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(premierLeagueStandings({ 1: 'Arsenal' }), { 1: 'Arsenal' }, 'Should return Arsenal as position 1')
    Test.assertSimilar(premierLeagueStandings({ 2: 'Arsenal', 3: 'Accrington Stanley', 1: 'Leeds United' }), { 3: 'Arsenal', 2: 'Accrington Stanley', 1: 'Leeds United' }, 'Should return team in position 1 last season as #1 and all other teams in alphabetical order!')
    Test.assertSimilar(premierLeagueStandings({ 1: 'Leeds United', 2: 'Liverpool', 3: 'Manchester City', 4: 'Coventry', 5: 'Arsenal' }), { 1: 'Leeds United', 2: 'Arsenal', 3: 'Coventry', 4: 'Liverpool', 5: 'Manchester City' }, 'Should return team in position 1 last season as #1 and all other teams in alphabetical order!')
  });
}); */