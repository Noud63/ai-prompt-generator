import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="orange_gradient">
          {name} Profile
        </span>
      </h1>
      <p className="desc text-left dark:text-gray-400">{desc}</p>
      <div className="mt-6 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
}

export default Profile
