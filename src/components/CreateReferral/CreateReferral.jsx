import React from "react";

const options = [
  { value: "formale", label: "Для Мужчин", id: 1 },
  { value: "forfemale", label: "Для Женщин", id: 2 },
  { value: "weightloss", label: "Для Похудения", id: 3 },
];

const options2 = [
  { value: "uropro", label: "Uro Pro", id: 1 },
  { value: "slimfit", label: "Slimfit", id: 2 },
  { value: "doactive", label: "Do Active", id: 3 },
];

export const CreateReferral = (props) => {
  return (
    <div
      className={
        props.isOpenCreateRef
          ? "refferenceCreateContainer"
          : "refferenceCreateContainer hidden"
      }
      onClick={() => props.setIsOpenCreateRef(false)}
    >
      <div
        className="createReferenceWrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="closeIcon"
          onClick={() => props.setIsOpenCreateRef(false)}
        ></div>
        <div className="createReferenceHeading">
          <h2>Создание новой реферальной ссылки</h2>
        </div>
        <div className="createReferenceForm">
          <div className="formItem">
            <label htmlFor="refName">Выбор категории</label>
            <select name="category" id="categorySelect">
            <option hidden>Выберите Категорию</option>
              {options.map((option) => (
                <option key={option.value} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="formItem">
            <label htmlFor="refUrl">Выбор товара</label>
            <select
              name="refProduct"
              id="refProductSelect"
              onChange={(e) =>
                props.setNewRef({
                  ...props.newRef,
                  product_id: +e.target.value,
                })
              }
            >
              <option hidden>Выберите Товар</option>
              {options2.map((option) => (
                <option key={option.value} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="formItem">
            <label htmlFor="refCategory">Название ссылки</label>
            <input
              type="text"
              id="refCategory"
              placeholder="Название"
              value={props.newRef.title}
              onChange={(e) =>
                props.setNewRef({ ...props.newRef, title: e.target.value })
              }
            />
          </div>
          <div className="newRefButtonWrapper">
            <button onClick={props.createRefWithData}>Создать</button>
          </div>
        </div>
      </div>
    </div>
  );
};
