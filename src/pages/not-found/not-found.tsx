import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {NotFoundTitle} from "./styled";

const NotFound: FC = () => {
  return (
    <NotFoundTitle variant="h4">
      Страница не найдена. Вернуться на <NavLink to="/">главную</NavLink>
    </NotFoundTitle>
  );
};

export default NotFound;