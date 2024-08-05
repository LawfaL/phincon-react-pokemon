import { axiosInterceptorInstance } from "@app/utils/axiosInterceptor";
import { TPlayerServicePost, TPlayerServicePut } from "./PlayerService.type";

export class PlayerServices {
    static List() {
        return axiosInterceptorInstance.get(`http://localhost:8080/api/v1/pokemon`) 
    }

    static find(id: string | number) {
        return axiosInterceptorInstance.get(`http://localhost:8080/api/v1/pokemon/${id}`) 
    }

    static Create(payload: TPlayerServicePost) {
        return axiosInterceptorInstance.post(`http://localhost:8080/api/v1/pokemon`, payload) 
    }

    static Update(payload: TPlayerServicePut) {
        return axiosInterceptorInstance.put(`http://localhost:8080/api/v1/pokemon/${payload.id}`, payload) 
    }

    static Delete(id: string | number) {
        return axiosInterceptorInstance.delete(`http://localhost:8080/api/v1/pokemon/${id}`) 
    }
}