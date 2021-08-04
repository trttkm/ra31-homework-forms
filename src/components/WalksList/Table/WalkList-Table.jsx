import { FaPencilAlt, FaTimes } from 'react-icons/fa';

export function WalkListTable({ table, onDelete, onEdit }) {
  return (
    <div className="walk-list__table-body">
      {table.length ? table.map(item => (
        <div className="walk-list__table-body-item" key={item.id}>
          <div>{item.date.replaceAll('-', '.')}</div>
          <div>{item.distance}</div>
          <div>
            <FaTimes className="icon-class" onClick={() => onDelete(item.id)} />
            <FaPencilAlt className="icon-class" onClick={() => onEdit(item.id)} />
          </div>
        </div>
      )) : 'Записей нет'}
    </div>
  );
}
