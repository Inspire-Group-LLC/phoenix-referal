import React, { useEffect, useState } from "react";
import axios from "axios";
import { APP_ROUTES } from "../../router/Route";

export const CreateReferral = (props) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategories = async () => {
    try {
      const response = await axios.get(`${APP_ROUTES.URL}/category`);
      setCategories(response.data);
      console.log(response.data, "categories");
    } catch (error) {
      console.error("Не получилось загрузить категории!");
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(`${APP_ROUTES.URL}/products`);
      setProducts(response.data);
      console.log(response.data, "products");
    } catch (error) {
      console.error("Не получилось загрузить продукты!");
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

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
            <select
              name="category"
              id="categorySelect"
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
            >
              <option hidden>Выберите Категорию</option>
              {categories.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.title}
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
              {products
                .filter((option) => +option.category_id === +selectedCategory)
                .map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.title}
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
