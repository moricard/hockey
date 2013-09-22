(function($, _) {

    function show ( list, headers ) {
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

}).call(this, this.$, this._);
