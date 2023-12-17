import * as Yup from 'yup'

export const signUpSchema=Yup.object({
    name:Yup.string().required("Emter Model Name"),
    price:Yup.number().required("Enter Price")
})