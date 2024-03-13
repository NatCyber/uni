import { baseapi } from "./api";

export const CommonApi = baseapi.injectEndpoints({
    endpoints:(builder)=>({
       fileUpload: builder.mutation({
            query:(file)=>({
                url:'api/students/upload',
                method:'POST',
                body:file
            })
        })
    })
})

export const {useFileUploadMutation} = CommonApi;