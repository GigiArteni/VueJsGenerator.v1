export default function () {
  return {
    components: [
      {
        quasar:[

        ],
        vuex:[

        ],
        bootstrap: [

        ],
      }
    ],
    generator: {
      project:[ // the code to be generated for multiple projects
        {
          name: '',
          domain:'',
          section: '',
          container:''
        }
      ],
      api:{
        store:[
          {
            store:{},
            mutations:[
              {

              }
            ],
            getters:[
              {

              }
            ],
            actions:[
              {
                method: '',
                payload:'',
                commit:'',
                dispatch: '',
                component:{
                  name: '',
                  type: '',
                  fields:[
                    {
                      name:'',
                      type:'',
                    }
                  ]
                }
              },

            ],
          }
        ]
      }
    },

  }
}
