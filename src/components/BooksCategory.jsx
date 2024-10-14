import React from "react";
import { Link } from "react-router-dom";

const BooksCategory = ({
  Action_Adventure,
  Arts_Film_Photography,
  Biographies_Diaries_Accounts,
  Children_Book,
}) => {
  console.log(Action_Adventure);
  console.log(Arts_Film_Photography);
  console.log(Biographies_Diaries_Accounts);

  const categories =
    Action_Adventure ||
    Arts_Film_Photography ||
    Biographies_Diaries_Accounts ||
    Children_Book;

  return (
    <>
      <div className="transition-all duration-300 mt-2">
        <ul className="bg-white sw-full rounded-lg z-50">
          {/* Render Action Adventure Categories */}
          {categories.map((category, index) => (
            <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
              <Link to={category.path}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BooksCategory;
