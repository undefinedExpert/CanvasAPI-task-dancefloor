import { useQuery } from "@tanstack/react-query";
import { delay } from "../../common/utils";

export type Options = {
    user: {
        name: string
    }
}

const getOptions = async(): Promise<Options> => {
    await delay(2000);
    return {
        user: {
            name: "some user",
        }
    }
}

export const useOptionsQuery = () => {
    return useQuery({ queryKey: ['options'], queryFn: getOptions })
}