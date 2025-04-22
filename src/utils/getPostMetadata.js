import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function getPostMetadata(basePath) {
  const folder = path.join(process.cwd(), basePath);
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(
      path.join(process.cwd(), basePath, filename),
      "utf8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      slug: filename.replace(".md", ""),
      description: matterResult.data.description,
      image: matterResult.data.image,
      time: matterResult.data.time,
    };
  });

  return posts;
}

export function getPostContent(slug) {
  const folder = "blog";
  const file = path.join(process.cwd(), folder, `${slug}.md`);
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("blog");

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? " . " + params?.slug : "";
  return {
    title: `Blog ${id.replaceAll("_", " ")}`,
    description: "Blog page",
    openGraph: {
      title: "Blog" + id,
      description: "Blog page",
      url: "https://example.com/blog" + id,
      images: [
        {
          url: "https://example.com/image.jpg",
          width: 800,
          height: 600,
        },
      ],
    },
  };
}
