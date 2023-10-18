const Test = require('@codewars/test-compat');
const premierLeagueStandings = require('../src/new season, new league')

describe("Tests", () => {
    it("test", () => {
        Test.assertSimilar(premierLeagueStandings({ 1: 'Arsenal' }), { 1: 'Arsenal' }, 'Should return Arsenal as position 1')
        Test.assertSimilar(premierLeagueStandings({ 2: 'Arsenal', 3: 'Accrington Stanley', 1: 'Leeds United' }), { 3: 'Arsenal', 2: 'Accrington Stanley', 1: 'Leeds United' }, 'Should return team in position 1 last season as #1 and all other teams in alphabetical order!')
        Test.assertSimilar(premierLeagueStandings({ 1: 'Leeds United', 2: 'Liverpool', 3: 'Manchester City', 4: 'Coventry', 5: 'Arsenal' }), { 1: 'Leeds United', 2: 'Arsenal', 3: 'Coventry', 4: 'Liverpool', 5: 'Manchester City' }, 'Should return team in position 1 last season as #1 and all other teams in alphabetical order!')
    });
}); 