import { Header } from './components/Header.jsx'
import { Post } from './components/Post.jsx'
import { Sidebar } from './components/Sidebar.jsx'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'CTO @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
        url: 'https://jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2024-03-31T20:13:30'),
    comments: [
      {
        id: 100,
        content: 'Muito bom, parabéns! 👏🏼',
      },
    ],
  },
  {
    id: 2,
    author: {
      name: 'Mayk Brito',
      avatarUrl: 'https://github.com/maykbrito.png',
      role: 'Educator @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
        url: 'https://jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2024-04-01T14:32:00'),
    comments: [],
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  )
}
