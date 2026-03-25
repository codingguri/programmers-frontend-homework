type TDeleteBoardAction = {
    boardId: string;
};

const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        deleteBoard: (
            state,
            { payload }: PayloadAction<TDeleteBoardAction>,
        ) => {
            state.boardArray = state.boardArray.filter(
                (board) => board.id !== payload.boardId,
            );
        },
    },
});

const handleDeleteBoard = () => {
    if (boardSlice.length > 1) {
        dispatch(deleteBoard({ boardId: getActiveBoard.boardId }));

        dispatch(
            addLog({
                logId: v4(),
                logMessage: `게ㅣ판 지우기: ${getActiveBoard.boardName}`,
                logAuthor: "user",
                logTimestamp: String(Date.now()),
            }),
        );

        const newIndexToSet = () => {
            const indexToBeDelted = boards.findIndex(
                (board) => board.id === activeBoardId,
            );

            return indexToBeDeleted === 0
                ? indexToBeDeleted + 1
                : indexToBeDelted - 1;
        };

        setActiveBoardId(boards[1].boardId);
    } else {
        alert("최소 게시판 개수는 한 개입니다.");
    }
};

export const { deleteBoard } = boardSlice.actions;
export default boardSlice.reducer;
