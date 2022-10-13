import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Experience } from "../typings";

const query = groq`
*[_type == "experience"]{
  ...,
  technologies[]->
}
`;

export const fetchExperience = async () => {
  const res = await sanityClient.fetch(query);

  // const data = await res.json();
  const experiences: Experience[] = res;

  // console.log("fetching", experience);
  return experiences;
};
