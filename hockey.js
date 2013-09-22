(function($, _, players, teams) {

    // Extract data from table rows of http://stats.hockeyanalysis.com/
    function extract () {
        return _.filter( _.map($('tr'), function(el, i) {
            var cols = $(el).find('td');
            return cols.length ? _.map( cols, function(col,j) {
                var cell = $(col).text().trim();
                return j < 4 ? cell : +(cell);
            }) : [];
        }), function( player ) { return player.length; });
    }

    // Show the list of stats as a table in the dom.
    function show ( headers, list ) {
        $('body').html( $('<table id="stats">') );
        $('#stats').append( $('<tr>').html( _.map(headers, function(label) {
            return $('<th>').html( label );
        })));
        $('#stats').append( _.map( list, function( el ) {
            return $('<tr>').html( _.map( el, function( stat ) {
                return $('<td>').html( stat );
            }));
        }));
    }

    var showPlayers = _.partial( show, players.labels ),
        showTeams   = _.partial( show, teams.labels );

    // sortBy :: [b] -> b -> ([a] -> [a])
    function sortBy ( labels, label) {
        var indexOfLabel = _.indexOf(labels, label);
        return function( toSort ) {
            return _.sortBy( toSort, function(stat) {
                return -stat[indexOfLabel];
            });
        };
    }

    var sortPlayers = _.partial( sortBy, players.labels ),
        sortTeams   = _.partial( sortBy, teams.labels );

    var sortForwardsBy = {
          points : _.partial(sortPlayers('Points'), players.forwards),
          fenwick : _.partial(sortPlayers('iFenwick'), players.forwards),
          points60 : _.partial(sortPlayers('Points/60'), players.forwards)
        },
        sortDefenseBy = {
          points : _.partial(sortPlayers('Points'), players.defensemen),
          fenwick : _.partial(sortPlayers('iFenwick'), players.defensemen),
          points60 : _.partial(sortPlayers('Points/60'), players.defensemen)
        },
        sortTeamsBy = {
            goals : _.partial(sortTeams('GF'), teams.teams),
            fenwick : _.partial(sortTeams('FF'), teams.teams)
        };

    var sortPlayersByTeam = function( players, teams ) {
        var teamNames = _.map(teams, function(team) { return team[1]; });
        return _.sortBy(players, function(scorer) {
            return _.indexOf( teamNames, scorer[2]);
        });
    };
    


}).call(this, this.$, this._, this.players, this.teams);
