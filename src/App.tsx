import { Header } from "./Components/Header/Header";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./Components/Sidebar/Siderbar";
import { Post } from "./Components/Post/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/whoisfreire.png',
      name: 'Leonardo Freire',
      role: 'Chatbot Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-10 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/whoisfreire.png',
      name: 'Leonardo Freire',
      role: 'Chatbot Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-10 20:00:00')
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}
