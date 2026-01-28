import { createSlice } from "@reduxjs/toolkit";

const commentStore = createSlice({
  name: "comment",
  // 初始状态
  initialState: {
    list: [{ id: 1, name: "张三", dsc: "Redux 里的数据" }],
  },
  // 修改状态的方法
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
    addComment(state, action) {
      state.list.push(action.payload);
    },
    removeComment(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

// 导出 action 函数，供组件调用
export const { setList, addComment, removeComment } = commentStore.actions;
// 导出 reducer，供创建 store 使用
export default commentStore.reducer;
