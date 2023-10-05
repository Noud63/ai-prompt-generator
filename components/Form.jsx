import Link from "next/link"

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="orange_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-Wwmd dark:text-gray-500">
        {type} and share amazing prompts with the world and let your imagination
        run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-sxl flex flex-col gap-7 border border-gray-300 p-6 rounded-lg shadow-md 
        dark:bg-transparent dark:border dark:border-orange-700 dark:shadow-[0px_0px_12px_rgba(255,98,0,0.5)]"
      >
        <label>
          <span className="font-satoshi font-bold text-base text-gray-700  dark:text-gray-400">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here"
            required
            className="form_textarea border border-gray-300 dark:bg-transparent dark:border dark:border-orange-700 dark:shadow-[0px_0px_12px_rgba(255,98,0,0.5)]"
          />
        </label>

        <label>
          <span className="font-satoshi font-bold text-base text-gray-700  dark:text-orange-800">
            Tag{` `}
            <span className="font-normal dark:text-gray-400">
              (#product, #webdevelopment, #idea)
            </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input border border-gray-300 dark:bg-transparent dark:border dark:border-orange-700 dark:shadow-[0px_0px_12px_rgba(255,98,0,0.5)]"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form
