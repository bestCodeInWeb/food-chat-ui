import React, { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

const languageNames = [
  { id: "1", name: "Українська", value: "ua" },
  { id: "2", name: "Русский", value: "ru" },
  { id: "3", name: "English", value: "en" },
];

export interface ILanguageMenu {
  state: boolean;
  setIsMenuOpen(state: boolean): void;
  setIsLanguageMenuOpen(state: boolean): void;
}

const LanguageMenu: React.FC<ILanguageMenu> = ({
  state,
  setIsMenuOpen,
  setIsLanguageMenuOpen,
}) => {
  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    () => localStorage.getItem("selectedLanguage") || i18n.language
  );

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng.toLocaleLowerCase());
    setSelectedLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <>
      {state && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-20">
          <div className="absolute bg-white rounded-xl p-4 overflow-hidden shadow-soft w-72 border border-grey-3">
            <h3 className="flex items-center gap-3 mb-4 text-lg font-semibold">
              <ArrowLeftIcon
                className="size-5 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(true);
                  setIsLanguageMenuOpen(false);
                }}
              />
              {t("languageMenu.title")}
            </h3>

            {languageNames.map(({ id, name, value }) => (
              <label
                className={[
                  "flex px-[20px] py-[15px]",
                  "cursor-pointer hover:bg-grey-4 active:bg-grey-3 transition duration-300",
                ].join(" ")}
                key={id}
              >
                <input
                  type="radio"
                  id={id}
                  name="language-settings"
                  value={value}
                  onChange={(e) => changeLanguage(e.target.value)}
                  checked={selectedLanguage === value}
                  className="mr-2"
                />
                <span>{name}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LanguageMenu;
