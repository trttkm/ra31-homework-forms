import { useState } from 'react';
import { nanoid } from 'nanoid';

import { WalkListForm } from './Form/WalkList-Form';
import { WalkListHead } from './Head/WalkList-Head';
import { WalkListTable } from './Table/WalkList-Table';

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
      <WalkListForm form={form} onFieldChange={onFieldChange} onSubmit={saveData} />
      <WalkListHead />
      <WalkListTable table={table} onDelete={deleteRecord} onEdit={editRecord} />
    </div>
  );
}
