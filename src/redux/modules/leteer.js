// 액션 밸류
const ADD_FEED = "ADD_FEED";
const DELETE_FEED = "DELETE_FEED";
const EDIT_FEED = "EDIT_FEED";

// 액션 크리에이터
export const addFeed = (payload) => {
  return { type: ADD_FEED, payload };
};

export const deleteFeed = (payload) => {
  return { type: DELETE_FEED, payload };
};

export const editFeed = (payload) => {
  return { type: EDIT_FEED, payload };
};
//초기 상태값
const initialState = [
  {
    createdAt: "2023-11-03T02:07:09.423Z",
    nickname: "Dr. Clint Christiansen",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
    content:
      "카리나1 Vitae recusandae tenetur debitis impedit ut dolorem atque reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex. Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum hic.",
    writedTo: "카리나",
    id: "1",
  },
  {
    createdAt: "2023-11-02T23:13:18.491Z",
    nickname: "Chad Graham",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg",
    content:
      "지젤1 Ipsam aspernatur nostrum eos unde velit molestiae dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum commodi ipsa quaerat aspernatur quod dignissimos quae quidem sapiente.",
    writedTo: "지젤",
    id: "2",
  },
  // 윈터부분 데이터 없애려고
  // {
  //   createdAt: "2023-11-02T11:25:37.026Z",
  //   nickname: "Tommy Abshire",
  //   avatar:
  //     "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/646.jpg",
  //   content:
  //     "윈터1 Itaque nihil quae neque itaque. Non a officiis ducimus nemo consectetur. Ducimus libero voluptatum consequuntur.",
  //   writedTo: "윈터",
  //   id: "3",
  // },
  {
    createdAt: "2023-11-02T16:06:34.150Z",
    nickname: "Max Mayert",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg",
    content:
      "닝닝1 Sint qui eligendi repudiandae placeat maiores repudiandae assumenda repudiandae. Distinctio commodi iste. Qui architecto iusto.",
    writedTo: "닝닝",
    id: "4",
  },
  {
    createdAt: "2023-11-03T05:40:17.575Z",
    nickname: "Olga Christiansen",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg",
    content:
      "카리나2 Molestiae saepe reiciendis saepe natus quo occaecati. Vel vero illum quo. Ducimus maiores porro optio illum officia nam. Cum possimus aut consequatur eaque libero ad nihil pariatur officiis.",
    writedTo: "카리나",
    id: "5",
  },
];

//리듀서

// TODO: (2)
// action.type
// action.payload
const reducerPrac = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEED:
      return [...state, action.payload];
    case DELETE_FEED:
      return [...state.filter((item) => item.id !== action.payload)];
    case EDIT_FEED:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducerPrac;