"use client";

import { useActionState } from "react";
import { redirect } from "next/navigation";

import { storePost } from "@/lib/posts";

import FormSubmit from "@/components/FormSubmit/FormSubmit";

const NewPostPage = () => {
  const createPost = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const image = formData.get("image") as string;
    const content = formData.get("content") as string;

    let errors = [];

    if (!title || title.trim().length === 0) {
      errors.push("Title is required");
    }

    if (!content || content.trim().length === 0) {
      errors.push("Content is required");
    }

    if (!image) {
      errors.push("Image is required");
    }

    if (errors.length > 0) {
      return { errors };
    }

    await storePost({
      imageUrl: "",
      title: title,
      content: content,
      userId: 1,
    });

    redirect("/feed");
  };

  const [state, formAction] = useActionState(createPost, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={5} />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
      </form>
    </>
  );
};

export default NewPostPage;
