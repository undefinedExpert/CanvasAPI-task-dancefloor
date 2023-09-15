import { useQuery } from "@tanstack/react-query";
import { delay } from "../../common/utils";

export type CanvasSettings = {
    rows: number,
    columns: number,
}

const getCanvasSettings = async(): Promise<CanvasSettings> => {
    await delay(150);
    return {
        rows: 2,
        columns: 4,
    }
}

export const useCanvasSettingsQuery = () => {
    return useQuery({ queryKey: ['canvasSettings'], queryFn: getCanvasSettings })
}