import React from "react";
import LeftSidebar from "../components/LeftSidebar";

const CategoryPage = () => {
  const highlyRatedBooks = [
    {
      id: 1,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      image:
        "https://m.media-amazon.com/images/I/61jBLw5Bq9L._AC._SR360,460.jpg",
      rating: "4.5",
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      image:
        "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC._SR360,460.jpg",
      rating: "4.7",
    },
    {
      id: 3,
      title: "The Clean Coder",
      author: "Robert C. Martin",
      image:
        "https://m.media-amazon.com/images/I/710e2r4iKML._UX300_PJku-sticker-v8,TopRight,0,-50._AC._SR360,460_.jpg",
      rating: "4.8",
    },
    {
      id: 4,
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      image:
        "https://m.media-amazon.com/images/I/81iss3ldpLL._AC._SR360,460.jpg",
      rating: "4.6",
    },
  ];

  const mostWishedForBooks = [
    {
      id: 5,
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      image: "https://fakestoreapi.com/img/81oEglvFZAL._AC_SY741_.jpg",
      rating: "4.9",
    },
    {
      id: 6,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      image: "https://fakestoreapi.com/img/61UJjzLO5UL._AC_SY879_.jpg",
      rating: "4.4",
    },
    {
      id: 7,
      title: "Refactoring",
      author: "Martin Fowler",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SY879_.jpg",
      rating: "4.6",
    },
    {
      id: 8,
      title: "Design Patterns",
      author: "Erich Gamma",
      image: "https://fakestoreapi.com/img/71lvRzZj1SL._AC_UX679_.jpg",
      rating: "4.7",
    },
  ];

  return (
    <>
      <div className="p-4 md:flex md:space-x-6">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/6">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          {/* Highly Rated Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Highly Rated</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlyRatedBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-40 w-32 object-cover mb-3"
                  />
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-gray-500">by {book.author}</p>
                  <p className="text-yellow-500 font-bold mt-1">
                    ⭐ {book.rating}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Most Wished For Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Most Wished For</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {mostWishedForBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-40 w-32 object-cover mb-3"
                  />
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-gray-500">by {book.author}</p>
                  <p className="text-yellow-500 font-bold mt-1">
                    ⭐ {book.rating}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
