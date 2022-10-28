export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '635c28f3a158b826d980a356',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ar1yuevp',
                  apiId: 'e6d7afa3-ee8c-44e2-98d6-d33326569adc'
                },
                {
                  buildHookId: '635c28f31f7216273b3f1465',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kb4nkcyi',
                  apiId: 'a1038ef8-9e09-439d-8a7a-fb74c59b3cf1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bcarpizo1130/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kb4nkcyi.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
