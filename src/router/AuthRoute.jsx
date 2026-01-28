import { Navigate } from "react-router-dom";

// children 代表被这个守卫包裹的那个“私密组件”
function AuthRoute({ children }) {
  // 1. 去检查有没有 Token (准入证)
  const token = localStorage.getItem("token_key");

  // 2. 如果 token 存在，说明登录了
  if (token) {
    // 返回 children，也就是允许访问私密内容
    return <>{children}</>;
  } else {
    // 3. 如果没有 token，利用 Navigate 组件强行跳到登录页
    // replace 属性很重要：它会替换掉当前历史记录，防止用户点击“后退”又回到私密页
    return <Navigate to="/login" replace />;
  }
}

export default AuthRoute;
