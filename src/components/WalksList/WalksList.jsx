import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FaTimes, FaPencilAlt } from 'react-icons/fa';

import './WalksList.scss';

const INITIAL_FORM_STATE = {
  date: '',
  distance: '',
};

export function WalksList() {
  
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [table, setTable] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  
  const onFieldChange = (e) => {
    const { target } = e;
    
    setForm(prev => ({ ...prev, [target.name]: target.value }));
  };
  
  const saveData = (e) => {
    e.preventDefault();
    if (form.date !== '' && form.distance !== '') {
      
      const record = table.find(item => item.date === form.date);
      
      if (typeof record === 'undefined') {
        form.id = nanoid();
        setTable(prev => ([...prev, form].sort((a, b) => {
          if (a.date < b.date) return 1;
          else if (a.date > b.date) return -1;
          return 0;
        })));
      } else if (isEdit) {
        record.distance = form.distance;
        setIsEdit(false);
      } else {
        record.distance = +record.distance + +form.distance;
      }
      setForm(INITIAL_FORM_STATE);
    }
  };
  
  const deleteRecord = (id) => {
    setTable(table.filter(item => item.id !== id));
  };
  
  const editRecord = (id) => {
    const record = table.find(item => item.id === id);
    setIsEdit(true);
    setForm({ date: record.date, distance: record.distance });
  };
  
  return (
    <div className="walk-list__container">
      <form className="walk-list__form" onSubmit={saveData}>
        <div className="walk-list__input-field">
          <label htmlFor="date">Дата (ДД.MM.ГГ)</label>
          <input
            className="walk-list__input-field-control"
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={onFieldChange}
          />
        </div>
        <div className="walk-list__input-field">
          <label htmlFor="distance">Пройдено км</label>
          <input
            className="walk-list__input-field-control"
            id="distance"
            name="distance"
            type="number"
            value={form.distance}
            onChange={onFieldChange}
          />
        </div>
        <button className="walk-list__submit-button">OK</button>
      </form>
      <div className="walk-list__table-header">
        <div>Дата (ДД.MM.ГГ)</div>
        <div>Пройдено км</div>
        <div>Действия</div>
      </div>
      <div className="walk-list__table-body">
        {table.length ? table.map(item => (
          <div className="walk-list__table-body-item" key={item.id}>
            <div>{item.date.replaceAll('-', '.')}</div>
            <div>{item.distance}</div>
            <div>
              <FaTimes className="icon-class" onClick={() => deleteRecord(item.id)} />
              <FaPencilAlt className="icon-class" onClick={() => editRecord(item.id)} />
            </div>
          </div>
        )) : 'Записей нет'}
      </div>
    </div>
  );
}
