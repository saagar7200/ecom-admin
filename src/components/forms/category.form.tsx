
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../ui/input';
import { ICategoryInput } from '@/interface/category.interface';
import categoryInputSchema from '@/schemas/category.schema';


const CategoryForm = () =>{
    const methods = useForm<ICategoryInput>({
        resolver: yupResolver(categoryInputSchema),
      });
    
      const onSubmit = (data: ICategoryInput) => {
        console.log(data);
      };
    return (
        <FormProvider {...methods}> {/* Provide the methods to child components */}
        <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4">
       
        <div className='flex flex-col gap-4'>
        <Input name={'name'} label={'Category Name'} placeholder={'Electronics'}/>
        <Input
          name="description"
          label="Description"
          placeholder="Enter description (optional)"
          multiline={true} // Render as a textarea
        />

        <button
          type="submit"
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
        </div>
        </form>
        </FormProvider>
    )
}

export default CategoryForm