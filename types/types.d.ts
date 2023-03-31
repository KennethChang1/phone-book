export type contact = {
  __typename?: "contact" | undefined;
  first_name: string;
  id: number;
  created_at: any;
  last_name: string;
  phones: { number: string; __typename?: "phone" | undefined }[];
};
