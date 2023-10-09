"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {

  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="prompt_card flex flex-col shadow-lg dark:bg-transparent dark:border dark:border-orange-700 dark:shadow-[0px_0px_12px_rgba(255,98,0,0.5)]">
      <div className="flex justify-between w-full">
        <div className="flex justify-start items-center gap-3">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
        </div>

        <div
          className="flex flex-col cursor-pointer"
          onClick={handleProfileClick}
        >
          <h3 className="font-satoshi font-semibold dark:text-orange-500">
            {post.creator.username}
          </h3>
          <p className="font-inter text-sm text-gray-500  dark:text-orange-600">
            {post.creator.email}
          </p>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width={15}
            height={15}
          />
        </div>
      </div>

      <div className="flex h-full mt-3 items-start font-satoshi text-sm text-gray-700 dark:text-gray-400">
        {post.prompt}
      </div>

      <div
        className={`font-inter text-sm blue_gradient cursor-pointer dark:text-orange-600 
        ${pathName !== '/profile' && 'border-t border-orange-600 pt-3'}`}
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        tag: #{post.tag}
      </div>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-2 flex-start gap-4 border-t border-orange-600 pt-3 w-full">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm text-orange-600 cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
