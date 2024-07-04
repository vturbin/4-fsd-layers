import { createStrictContext } from "@/shared/lib/react";

type UpdateTasksDeps = {
  canViewBoard: (boardId: string) => boolean|undefined;
};

export const updateTaskDepsContext = createStrictContext<UpdateTasksDeps>();
