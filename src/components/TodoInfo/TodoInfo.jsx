import './TodoInfo.scss';
import clsx from 'clsx';

export const TodoInfo = ({ todo }) => (
  <article
    className={clsx('TodoInfo', todo.completed && 'TodoInfo--completed')}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <a className="UserInfo" href={todo.user.email}>
      {todo.user.name}
    </a>
  </article>
);
