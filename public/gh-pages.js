var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
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