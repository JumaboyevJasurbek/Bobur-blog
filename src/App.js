import { Route, Routes } from "react-router-dom";
import PostsProvider from "./contexts/posts";
import DesignPages from "./pages/design-page/design";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import SinglePosts from "./pages/single-posts/single-posts";
import TypographPages from "./pages/typography-pages/typography";
import UiPages from "./pages/ui-pages/ui-pages";
import UxPages from "./pages/ux-pages/ux-pages";

function App() {
  return (
    <PostsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<SinglePosts />} />
        <Route path="/design/" element={<DesignPages />} />
        <Route path="/ux/" element={<UxPages />} />
        <Route path="/ui/" element={<UiPages />} />
        <Route path="/typography/" element={<TypographPages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PostsProvider>
  );
}

export default App;
