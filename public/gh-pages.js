var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'release',
        repo: 'https://github.com/piabocanegra/afterlife.git', 
        user: {
            name: 'Pia Bocanegra and Lesley Huang', 
            email: '' 
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)