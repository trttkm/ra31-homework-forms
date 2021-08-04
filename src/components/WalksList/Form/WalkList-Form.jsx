export function WalkListForm({ form, onFieldChange, onSubmit }) {
  return (
    <form className="walk-list__form" onSubmit={onSubmit}>
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
  );
}
