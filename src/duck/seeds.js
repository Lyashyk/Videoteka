const state = {
  movies: [
    {
      id: 0,
      title: 'Blazing Saddles',
      releaseYear: '1974',
      format: 'VHS',
      stars:
        'Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn'
    },

    {
      id: 1,
      title: 'Casablanca',
      releaseYear: '1942',
      format: 'DVD',
      stars: 'Humphrey Bogart, Ingrid Bergman, Claude Rains, Peter Lorre'
    },

    {
      id: 2,
      title: 'Charade',
      releaseYear: '1953',
      format: 'DVD',
      stars:
        'Audrey Hepburn, Cary Grant, Walter Matthau, James Coburn, George Kennedy'
    },

    {
      id: 3,
      title: 'Cool Hand Luke',
      releaseYear: '1967',
      format: 'VHS',
      stars: 'Paul Newman, George Kennedy, Strother Martin'
    },

    {
      id: 4,
      title: 'Butch Cassidy and the Sundance Kid',
      releaseYear: '1969',
      format: 'VHS',
      stars: 'Paul Newman, Robert Redford, Katherine Ross'
    },

    {
      id: 5,
      title: 'The Sting',
      releaseYear: '1973',
      format: 'DVD',
      stars: 'Robert Redford, Paul Newman, Robert Shaw, Charles Durning'
    },

    {
      id: 6,
      title: 'The Muppet Movie',
      releaseYear: '1979',
      format: 'DVD',
      stars:
        'Jim Henson, Frank Oz, Dave Geolz, Mel Brooks, James Coburn, Charles Durning, Austin Pendleton'
    },

    {
      id: 7,
      title: 'Get Shorty',
      releaseYear: '1995',
      format: 'DVD',
      stars:
        'John Travolta, Danny DeVito, Renne Russo, Gene Hackman, Dennis Farina'
    }
  ],
  filterMovies: [
    {
      id: 0,
      title: 'Blazing Saddles',
      releaseYear: '1974',
      format: 'VHS',
      stars:
        'Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn'
    },

    {
      id: 1,
      title: 'Casablanca',
      releaseYear: '1942',
      format: 'DVD',
      stars: 'Humphrey Bogart, Ingrid Bergman, Claude Rains, Peter Lorre'
    },

    {
      id: 2,
      title: 'Charade',
      releaseYear: '1953',
      format: 'DVD',
      stars:
        'Audrey Hepburn, Cary Grant, Walter Matthau, James Coburn, George Kennedy'
    },

    {
      id: 3,
      title: 'Cool Hand Luke',
      releaseYear: '1967',
      format: 'VHS',
      stars: 'Paul Newman, George Kennedy, Strother Martin'
    },

    {
      id: 4,
      title: 'Butch Cassidy and the Sundance Kid',
      releaseYear: '1969',
      format: 'VHS',
      stars: 'Paul Newman, Robert Redford, Katherine Ross'
    },

    {
      id: 5,
      title: 'The Sting',
      releaseYear: '1973',
      format: 'DVD',
      stars: 'Robert Redford, Paul Newman, Robert Shaw, Charles Durning'
    },

    {
      id: 6,
      title: 'The Muppet Movie',
      releaseYear: '1979',
      format: 'DVD',
      stars:
        'Jim Henson, Frank Oz, Dave Geolz, Mel Brooks, James Coburn, Charles Durning, Austin Pendleton'
    },

    {
      id: 7,
      title: 'Get Shorty',
      releaseYear: '1995',
      format: 'DVD',
      stars:
        'John Travolta, Danny DeVito, Renne Russo, Gene Hackman, Dennis Farina'
    }
  ],
  term: '',
  isOpen: false,
  newElementTitle: '',
  newElementReleaseYear: '',
  newElementFormat: 'DVD',
  newElementStars: ''
};

export default state;
