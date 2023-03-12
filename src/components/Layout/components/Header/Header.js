import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { Wrapper as PopperWrapper } from "./Popper";
import React, { useEffect, useState } from "react";

import {
  faMagnifyingGlass,
  faXmark,
  faSpinner,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button";

const cx = classNames.bind(styles);

const Header = () => {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearch([1, 2]);
    }, 1000);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <a href="/" className={cx("logo")}>
          <img src={images.logo.default} alt="tiktok" />
        </a>

        <div className={cx("searchDiv")}>
          <Tippy
            className={styles.tippy1}
            interactive={true}
            visible={search.length > 0}
            render={(attrs) => (
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper>Kết quả</PopperWrapper>
              </div>
            )}
          >
            <input
              className={cx("searchInput")}
              placeholder="Search acounts and videos ..."
              spellCheck={false}
            />
          </Tippy>

          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
          <button className={cx("loading")}>
            <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
          </button>
          <Tippy content="Tìm kiếm">
            <button className={cx("search")}>
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>
          </Tippy>
        </div>

        <div className={cx("header-right")}>
          <div className={cx("button-down")}>
            <Button primary to="/download">
              Tải lên
            </Button>
            <Button to="/">Login</Button>

            <Tippy
              placement="bottom-end"
              // interactive
              render={(attrs) => (
                <div className={cx("more-result")} tabIndex="-1" {...attrs}>
                  <PopperWrapper>Kết quả</PopperWrapper>
                </div>
              )}
            >
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
              </button>
            </Tippy>
          </div>
          <div className={cx("home-mess-note-avt")}>
            <div className={cx("home")}>
              <a href="/">
                <img src={images.home.default} alt="homeIcon" />
              </a>
            </div>
            <div className={cx("mess")}>
              <img src={images.mess.default} alt="messIcon" />
            </div>
            <div className={cx("note")}>
              <img src={images.note.default} alt="noteIcon" />
            </div>
            <div className={cx("avatar")}>
              <img src={images.avatar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
