import client from "@sanity/client";

export default client({
  projectId: "7ohjaqen",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
});
