export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf9566e444907299c1ec440',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wuphjay8',
                  apiId: '41a2ca1f-f0a9-480e-87b0-1825029eabc4'
                },
                {
                  buildHookId: '5cf9566ee3737b1affa51347',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-armfijw4',
                  apiId: 'a2873699-1fb7-48d2-8f25-a6caab1c78aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/globaljeff/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-armfijw4.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
