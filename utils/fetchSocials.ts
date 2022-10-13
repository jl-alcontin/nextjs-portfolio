import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Social } from "../typings";

const query = groq`
*[_type == "social"]
`;

export const fetchSocial = async () => {
  const res = await sanityClient.fetch(query);

  // const data = await res.json();
  const socials: Social[] = res;

  // console.log("fetching", socials);
  return socials;
};
