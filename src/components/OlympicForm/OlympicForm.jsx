import { useRef, useState } from 'react';

const INITIAL_FORM_STATE = {
  name: '',
  password: '',
  language: '',
  level: '',
  agree: false,
  comment: '',
  file: undefined,
};

export function OlympicForm() {
  
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const avatarRef = useRef(null);
  
  const onOlympicRegister = (e) => {
    console.log(form);
    e.preventDefault();
  };
  
  const onFieldChange = (e) => {
    const { target } = e;
    
    setForm(prev => ({
      ...prev,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }));
  };
  
  const onAvatarUpload = (e) => {
    const { target } = e;
    
    const file = target.files && target.files[0];
    
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
    
    };
    
    reader.readAsDataURL(file);
  };
  
  const onClear = () => {
    setForm(INITIAL_FORM_STATE);
  };
  
  return (
    <form className="OlympicForm" onSubmit={onOlympicRegister}>
      
      <div className="OlympicForm-Field">
        <img src="" alt="Ваш аватар" ref={avatarRef} />
        <label htmlFor="avatar">Аватар</label>
        <input
          className="OlympicForm-Control"
          type="file"
          id="avatar"
          name="avatar"
          onChange={onAvatarUpload}
        />
      </div>
      
      <div className="OlympicForm-Field">
        <label htmlFor="name">Имя</label>
        <input
          className="OlympicForm-Control"
          id="name"
          name="name"
          value={form.name}
          onChange={onFieldChange}
        />
      </div>
      
      <div className="OlympicForm-Field">
        <label htmlFor="password">Пароль</label>
        <input
          className="OlympicForm-Control"
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={onFieldChange}
        />
      </div>
      
      <div className="OlympicForm-Field">
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
      
      <div className="OlympicForm-Field">
        <label>Уровень</label>
        <label htmlFor="level-senior">Senior</label>
        <input
          className="OlympicForm-Control"
          type="radio"
          id="level-senior"
          name="level"
          value="senior"
          checked={form.level === 'senior'}
          onChange={onFieldChange}
        />
        <label>Уровень</label>
        <label htmlFor="level-senior">Middle</label>
        <input
          className="OlympicForm-Control"
          type="radio"
          id="level-middle"
          name="level"
          value="middle"
          checked={form.level === 'middle'}
          onChange={onFieldChange}
        />
        <label>Уровень</label>
        <label htmlFor="level-senior">Junior</label>
        <input
          className="OlympicForm-Control"
          type="radio"
          id="level-junior"
          name="level"
          value="junior"
          checked={form.level === 'junior'}
          onChange={onFieldChange}
        />
      </div>
      
      <div className="OlympicForm-Field">
        <label htmlFor="agree">Согласие на обработку</label>
        <input
          className="OlympicForm-Control"
          type="checkbox"
          id="agree"
          name="agree"
          checked={form.agree}
          onChange={onFieldChange}
        />
      </div>
      
      <div className="OlympicForm-Field">
        <label htmlFor="comment">Комментарий</label>
        <textarea
          className="OlympicForm-Control"
          id="comment"
          name="comment"
          onChange={onFieldChange}
          value={form.comment}
        />
      </div>
      
      <button className="OlympicForm-Button OlympicForm-Submit">Отправить</button>
      <button className="OlympicForm-Button OlympicForm-Clear" onClick={onClear}>Очистить</button>
    </form>
  );
}
