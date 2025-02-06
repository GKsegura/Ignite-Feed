import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(content); // O ideal seria passar o ID do comentário, mas por simplicidade, passamos o conteúdo
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/GKsegura.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>José Segura</strong>
                            <time title='2 de fevereiro às 08:15' dateTime='2025-02-02 08:15:00'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div >
    )
}