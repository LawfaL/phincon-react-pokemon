import { axiosInterceptorInstance } from "@app/utils/axiosInterceptor";
import { TPlayerServicePost, TPlayerServicePut } from "./PlayerService.type";

export class PlayerServices {
    static List() {
        console.log(import.meta.env);
        return axiosInterceptorInstance.get(`${import.meta.env.VITE_BASE_URL}/api/v1/pokemon`) 
    }

    static find(id: string | number) {
        return axiosInterceptorInstance.get(`${import.meta.env.VITE_BASE_URL}/api/v1/pokemon/${id}`) 
    }

    static Create(payload: TPlayerServicePost) {
        return axiosInterceptorInstance.post(`${import.meta.env.VITE_BASE_URL}/api/v1/pokemon`, payload) 
    }

    static Update(payload: TPlayerServicePut) {
        return axiosInterceptorInstance.put(`${import.meta.env.VITE_BASE_URL}/api/v1/pokemon/${payload.id}`, payload) 
    }

    static Delete(id: string | number) {
        return axiosInterceptorInstance.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/pokemon/${id}`) 
    }
}