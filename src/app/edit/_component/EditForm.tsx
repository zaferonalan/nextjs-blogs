"use client"
import Formpost from '@/components/Formpost/Formpost'
import { FormInputPost } from '@/types';
import React from 'react'
import { SubmitHandler } from 'react-hook-form';

const EditForm = () => {
    const handleEditPost:SubmitHandler<FormInputPost> = (data) => {
        console.log(data);
    }
  return (
    <div>
        <Formpost submit={handleEditPost} isEditing/>
    </div>
  )
}

export default EditForm