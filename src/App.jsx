import { Header } from './components/header';
import { Post } from './Post';

import styles from './App.module.css';

import { Sidebar } from './components/Sidebar';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
    <div className={styles.wrapper}>
    <Sidebar />
      <main>
        <Post
          author="José Segura"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, sunt debitis facilis id non molestias magnam magni nam incidunt ex odio animi amet aliquid velit eveniet cumque iure dolore qui."
        />
        <Post
          author="Juan Pé"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, sunt debitis facilis id non molestias magnam magni nam incidunt ex odio animi amet aliquid velit eveniet cumque iure dolore qui."
        />
      </main>
    </div>
    </div>
  )
}

