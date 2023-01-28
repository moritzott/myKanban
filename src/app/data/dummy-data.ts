import { MyKanban } from '../interfaces/my-kanban';

// dummy data to test components
export const myKbn1: MyKanban = {
  id: '23dJHojnjdfe9',
  boards: [
    {
      id: 'sdljndj',
      name: 'myBoard',
      columns: [
        {
          id: '0984isfd',
          name: 'Backlog',
          tickets: [
            {
              id: '239cnu4od',
              title: 'Bug with Header font',
              text: '',
              label: {
                id: '20indvj3DG',
                name: 'Client',
                highlightColor: 'primary',
              },
            },
            {
              id: 'sdfkn34piiorvnr',
              title: 'Fix stepper',
              text: '',
              label: {
                id: '309udlnjlEF',
                name: 'UI',
                highlightColor: 'danger-light',
              },
            },
            {
                id: 'sdfknpiiorvnr',
                title: 'Angular Performance',
                text: '',
                label: {
                  id: '309udlndfjlEF',
                  name: 'Performance',
                  highlightColor: 'success-light',
                },
              },
          ],
        },
        {
          id: 'sdgnj303u',
          name: 'Active',
          tickets: [
            {
                id: '239cndfljk3u4od',
                title: 'Extend documentation',
                text: '',
                label: {
                  id: '20indvdfköj3DG',
                  name: 'Docs',
                  highlightColor: 'warning-light',
                },
              },
          ],
        },
        {
          id: 'nvbdjr8JGH',
          name: 'Closed',
          tickets: [
            {
                id: '239cdfjklj3bkf4od',
                title: 'Apply new pipeline',
                text: '',
                label: {
                  id: '20indvsdfkjj3DG',
                  name: 'Pipeline',
                  highlightColor: 'danger',
                },
              },
              {
                id: '239csdfkln3nu4od',
                title: 'Responsive columns',
                text: '',
                label: {
                  id: '20indvj3kjIODG',
                  name: 'UI',
                  highlightColor: 'primary',
                },
              },
          ],
        },
      ],
    },
  ],
};
