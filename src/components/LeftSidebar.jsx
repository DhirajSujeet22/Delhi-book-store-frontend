import React from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <>
      <div className=" lg:flex flex-col hidden col-span-2  pl-2  border-r border-solid h-full  ">
        <div className=" pl-3 text-balance font-normal">
          <ul>
            <li>
              <div className="flex flex-col pt-5">
                {/* Checkbox container */}
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="book-checkbox"
                    className="text-md font-medium text-gray-700 cursor-pointer"
                  >
                    Books
                  </label>
                </div>

                {/* Dropdown menu */}

                <div className="mt-2 bg-white">
                  <h3 className="text-sm pl-4 pt-1 font-semibold text-gray-800 mb-2">
                    Categories
                  </h3>
                  <ul className="pl-7 pt-2 space-y-2 text-[0.8rem]">
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/action-adventure">
                        Action & Adventure
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/arts-film-photography">
                        Arts, Film & Photography
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/biographies-diaries-true-accounts">
                        Biographies, Diaries & True Accounts
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/business-economics">
                        Business & Economics
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/childrens-books">
                        Children's Books
                      </Link>
                    </li>
                    <li className="p-[0rem] hover:bg-gray-100 cursor-pointer">
                      <Link to="/categories/comics-mangas">
                        Comics & Mangas
                      </Link>
                    </li>
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
