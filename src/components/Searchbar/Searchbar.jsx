import React from "react";
import { useForm } from "react-hook-form";

import css from './Searchbar.module.css'


export default function SearchBar({submitForm}) {
    const { register, handleSubmit, } = useForm()
    

    return (
        <header className={css.header}>
        <form onSubmit={handleSubmit(submitForm)}>
            <input type="submit"/>

            <input {...register("query",{required:true})}
                />
            </form>
            </header>
    )
}


