import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "./Page/HomePage/HomePage";
import { AddUsersPage } from "./Page/AddUsersPage/AddUsersPage";

export const App = () => {
    return (
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="add" element={<AddUsersPage />} />
        </Route>
      </Routes>
    );
}