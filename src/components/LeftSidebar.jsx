import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BooksCategory from "./BooksCategory";

const LeftSidebar = () => {
  const [dropdownStates, setDropdownStates] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    // Add more dropdowns if necessary
  });

  console.log(dropdownStates);

  // Function to toggle a particular dropdown
  const toggleDropdown = (dropdownId) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdownId]: !prevState[dropdownId],
    }));
  };

  const Action_Adventure = [
    { name: "Fantasy", path: "/categories/action-adventure/fantasy" },
    { name: "Sci-Fi", path: "/categories/action-adventure/scifi" },
    { name: "Mystery", path: "/categories/action-adventure/mystery" },
    { name: "Thriller", path: "/categories/action-adventure/thriller" },
  ];

  const Arts_Film_Photography = [
    { name: "one", path: "#" },
    { name: "Two", path: "#" },
    { name: "Three", path: "#" },
    { name: "Four", path: "#" },
  ];

  const Biographies_Diaries_Accounts = [
    { name: "Account", path: "#" },
    { name: "Bio", path: "#" },
    { name: "Diary", path: "#" },
    { name: "Four", path: "#" },
  ];
  const Children_Book = [
    { name: "Book 1", path: "#" },
    { name: "Book 2", path: "#" },
    { name: "Book 3", path: "#" },
    { name: "Book 4", path: "#" },
  ];

  return (
    <>
      <div className=" lg:flex flex-col hidden col-span-2  pl-2  border-r border-solid h-full  ">
        <div className="p-4">
          <h2 className=" font-semibold mb-1">New Arrival</h2>
          <ul className="list-none text-[15px]">
            <li className="block">
              <a href="#" className="text-black  hover:text-red-500">
                Last 30 Days
              </a>
            </li>
            <li className="block">
              <a href="#" className="text-black  hover:text-red-500">
                Last 60 Days
              </a>
            </li>
            <li className="block">
              <a href="#" className="text-black  hover:text-red-500">
                Next 90 Days
              </a>
            </li>
          </ul>
        </div>

        <div className="p-2">
          <h2 className="font-semibold mb-1">Indian Languages</h2>
          <ul className="list-none text-[15px]">
            <li className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 text-red-500 border-gray-300 rounded"
              />
              <a href="#" className="text-black hover:text-red-500">
                English
              </a>
            </li>
            <li className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 text-red-500 border-gray-300 rounded"
              />
              <a href="#" className="text-black hover:text-red-500">
                Hindi
              </a>
            </li>
            <li className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 text-red-500 border-gray-300 rounded"
              />
              <a href="#" className="text-black hover:text-red-500">
                Marathi
              </a>
            </li>
            <li className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 text-red-500 border-gray-300 rounded"
              />
              <a href="#" className="text-black hover:text-red-500">
                Tamil
              </a>
            </li>
            <li className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 text-red-500 border-gray-300 rounded"
              />
              <a href="#" className="text-black hover:text-red-500">
                Telugu
              </a>
            </li>
          </ul>
        </div>

        <div className=" pl-3 text-balance font-normal">
          <ul>
            <li>
              <div className="flex flex-col pt-5">
                {/* Checkbox container */}
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="book-checkbox"
                    className="text-md font-semibold text-black cursor-pointer"
                  >
                    Books
                  </label>
                </div>

                {/* Dropdown menu */}

                <div className="mt-2 bg-white">
                  <h3 className="text-sm pl-2 pt-1 font-semibold text-gray-800 mb-2">
                    Categories
                  </h3>
                  <ul className="pl-2 pt-2 space-y-1 text-[15px]">
                    <div className="relative">
                      {/* Main list item with click event */}
                      <li
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => toggleDropdown("dropdown1")}
                      >
                        <div className="flex items-center justify-between">
                          <Link to="/categories/action-adventure">
                            Action & Adventure
                          </Link>
                          <span className="ml-2 ">
                            {dropdownStates.dropdown1 ? (
                              <span style={{ fontSize: "12px" }}>▲</span>
                            ) : (
                              <spam style={{ fontSize: "12px" }}>▼</spam>
                            )}
                          </span>{" "}
                          {/* Downward arrow icon */}
                        </div>
                      </li>

                      {/* Space for subcategory, ensuring it doesn't overlap */}
                      {dropdownStates.dropdown1 && (
                        <BooksCategory Action_Adventure={Action_Adventure} />
                      )}
                    </div>
                    <div className="relative">
                      {/* Main list item with click event */}
                      <li
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => toggleDropdown("dropdown2")}
                      >
                        <div className="flex items-center justify-between">
                          <Link to="/categories/Arts-Film&-Photography">
                            Arts, Film & Photography
                          </Link>
                          {dropdownStates.dropdown2 ? (
                            <span style={{ fontSize: "12px" }}>▲</span>
                          ) : (
                            <spam style={{ fontSize: "12px" }}>▼</spam>
                          )}
                          {/* Downward arrow icon */}
                        </div>
                      </li>

                      {/* Space for subcategory, ensuring it doesn't overlap */}
                      {dropdownStates.dropdown2 && (
                        <BooksCategory
                          Arts_Film_Photography={Arts_Film_Photography}
                        />
                      )}
                    </div>

                    <div className="relative">
                      {/* Main list item with click event */}
                      <li
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => toggleDropdown("dropdown3")}
                      >
                        <div className="flex items-center justify-between">
                          <Link to="/categories/Arts-Film&-Photography">
                            Biographies, Diaries & True Accounts
                          </Link>
                          {dropdownStates.dropdown3 ? (
                            <span style={{ fontSize: "12px" }}>▲</span>
                          ) : (
                            <spam style={{ fontSize: "12px" }}>▼</spam>
                          )}
                        </div>
                      </li>

                      {/* Space for subcategory, ensuring it doesn't overlap */}
                      {dropdownStates.dropdown3 && (
                        <BooksCategory
                          Biographies_Diaries_Accounts={
                            Biographies_Diaries_Accounts
                          }
                        />
                      )}
                    </div>

                    <div className="relative">
                      {/* Main list item with click event */}
                      <li
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => toggleDropdown("dropdown4")}
                      >
                        <div className="flex items-center justify-between">
                          <Link to="/categories/Arts-Film&-Photography">
                            Children's Books
                          </Link>
                          {dropdownStates.dropdown4 ? (
                            <span style={{ fontSize: "12px" }}>▲</span>
                          ) : (
                            <spam style={{ fontSize: "12px" }}>▼</spam>
                          )}
                        </div>
                      </li>

                      {/* Space for subcategory, ensuring it doesn't overlap */}
                      {dropdownStates.dropdown4 && (
                        <BooksCategory Children_Book={Children_Book} />
                      )}
                    </div>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/computers-internet">
                        Computers & Internet
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/crafts-hobbies-home">
                        Crafts, Hobbies & Home
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/crime-thriller-mystery">
                        Crime, Thriller & Mystery
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/engineering">Engineering</Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/exam-preparation">
                        Exam Preparation
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/science-fiction-fantasy">
                        Science Fiction & Fantasy
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/health-fitness-nutrition">
                        Health, Fitness & Nutrition
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/health-family-personal-development">
                        Health, Family & Personal Development
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/historical-fiction">
                        Historical Fiction
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/history">History</Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/humour">Humour</Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/language-linguistics-writing">
                        Language, Linguistics & Writing
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/law">Law</Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/literature-fiction">
                        Literature & Fiction
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/maps-atlases">Maps & Atlases</Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/medicine-health-sciences">
                        Medicine & Health Sciences Textbooks
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/politics">Politics</Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/reference">Reference</Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/religion-spirituality">
                        Religion & Spirituality
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/romance">Romance</Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/school-books">School Books</Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/science-mathematics-textbooks">
                        Science & Mathematics Textbooks
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/sciences-technology-medicine">
                        Sciences, Technology & Medicine
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/society-social-sciences">
                        Society & Social Sciences
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/sports">Sports</Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/higher-education-textbooks">
                        Higher Education Textbooks
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/teen-young-adult">
                        Teen & Young Adult
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/textbooks-study-guides">
                        Textbooks & Study Guides
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/travel-tourism">
                        Travel & Tourism
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
