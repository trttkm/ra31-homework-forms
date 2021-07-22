import { useState } from 'react';

const LECTIONS = ['Events, State', 'Forms'];

const INITIAL_FORM_STATE = {
  name: '',
  lection: '',
};

export function TeacherDashboard() {
  const [homeworks, setHomeworks] = useState([]);
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  
  const onFieldChange = (e) => {
    const { target } = e;
    
    setForm(prev => ({
      ...prev,
      [e.target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }))
    ;
  };
  
  return (
    <div className="TeacherDashboard">
      <form className="TeacherDashboard-Form">
        
        <div className="TeacherDashboard-Field">
          <label htmlFor="name">Имя</label>
          <input
            className="OlympicForm-Control"
            id="name"
            name="name"
            value={form.name}
            onChange={onFieldChange}
          />
        </div>
        
        <div className="TeacherDashboard-Field">
          <label htmlFor="language">Язык программирования</label>
          <select
            className="OlympicForm-Control"
            id="language"
            name="language"
            value={form.language}
            onChange={onFieldChange}
          >
            <option value="">Выберите...</option>
            <option value="javascript">javascript</option>
            <option value="typescript">typescript</option>
            <option value="coffeescript">coffeescript</option>
          </select>
        </div>

      </form>
    </div>
  );
}
