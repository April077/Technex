"use client";

type prop = {
  title: string;
  description: string;
  linkUrl: string;
};

const LinkCard = ({ title, description, linkUrl }: prop) => {
  const handleClick = () => {
    window.open(linkUrl, "_blank");
  };

  return (
    <div className="card m-2" onClick={handleClick} style={{ cursor: "pointer" }}>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </a>
    </div>
  );
};

export default LinkCard;
